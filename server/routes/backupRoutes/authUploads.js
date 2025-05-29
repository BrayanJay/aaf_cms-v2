import express from "express";
import multer from "multer";
import fs from "fs";
import path from "path";
import {connectToDatabase} from '../lib/db.js'
import jwt from "jsonwebtoken";
import 'dotenv/config';

const router = express.Router();

// List of valid products
const allowedProducts = ['gold_loan', 'fixed_deposits', 'mortgage', 'leasing', 'luckewallet', 'forex'];

// Middleware to verify JWT Token
const verifyToken = async (req, res, next) => {
    try {
      const token = req.headers['authorization'].split(' ')[1];
      if (!token) {
        return res.status(403).json({ message: "No Token Provided" });
      }
      const decoded = jwt.verify(token, process.env.JWT_KEY);
      req.userId = decoded.id; // Store user ID in the request
      next();
    } catch (err) {
      return res.status(500).json({ message: "Server error" });
    }
  };

// Use memory storage, then move the file manually
const upload = multer({ storage: multer.memoryStorage() });

// Upload Image API
router.post("/upload", verifyToken, upload.single("image"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  let db; // Declare db connection variable
  try {
    const { originalname, mimetype, size, buffer } = req.file;
    const fileDirectory = req.body.file_directory || "media"; // Custom file directory or default: media
    const fileName = req.body.filename || originalname; // Custom filename or defualt: original filename
    const filePath = path.join(fileDirectory, fileName);
    const uploadedAt = new Date();

    //Sanitize file directory
    if (!fileDirectory.startsWith("media/")) {
      return res.status(400).json({ message: "Invalid directory path" });
    }

    // Ensure directory exists
    if (!fs.existsSync(fileDirectory)) {
      fs.mkdirSync(fileDirectory, { recursive: true });
    }

    // Write file manually
    fs.writeFileSync(filePath, buffer);

    // Connect to database
    db = await connectToDatabase();

    // Retrieve admin username
    const [userRows] = await db.query("SELECT username FROM users WHERE id = ?", [req.userId]);
    if (userRows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    const uploadedBy = userRows[0].username;

    // Insert or update record in MySQL
    const query = `
      INSERT INTO file_uploads (old_file_name, new_file_name, file_type, file_size, file_directory, uploaded_timedate, uploaded_by)
      VALUES (?, ?, ?, ?, ?, ?, ?)
      ON DUPLICATE KEY UPDATE uploaded_timedate = ?, file_size = ?;
    `;

    await db.query(query, [
      originalname, fileName, mimetype, size, fileDirectory, uploadedAt, uploadedBy,
      uploadedAt, size
    ]);

    return res.status(201).json({ message: "File uploaded successfully", file: { fileName, fileDirectory } });
  } catch (err) {
    return res.status(500).json({ message: err.message });

  } finally {
    if (db) db.release(); // ✅ Always release the connection
  }
});

// GET all files in a directory
router.get("/getFiles", verifyToken, async (req, res) => {
  try {
    const folder = req.query.folder || "media/attachments";
    const absolutePath = path.resolve(folder);

    if (!fs.existsSync(absolutePath)) {
      return res.status(404).json({ message: "Directory not found" });
    }

    const files = fs.readdirSync(absolutePath);
    const fileDetails = files.map(file => {
      const filePath = path.join(absolutePath, file);
      const stats = fs.statSync(filePath);
      return {
        fileName: file,
        path: `${folder}/${file}`,
        updatedAt: stats.mtime
      };
    });

    res.status(200).json(fileDetails);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete a file
router.delete("/delete-file", verifyToken, async (req, res) => {
  const filePath = req.body.path;
  try {
    if (!filePath || !fs.existsSync(filePath)) {
      return res.status(404).json({ message: "File not found" });
    }

    fs.unlinkSync(filePath);
    return res.status(200).json({ message: "File deleted successfully" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// Delete Image API
router.delete("/delete/:filename", verifyToken, async (req, res) => {
  const { filename } = req.params;
  const fileDirectory = req.body.file_directory || "media";
  const filePath = path.join(fileDirectory, filename);

  let db;
  try {
    db = await connectToDatabase();
  
    // Check if file exists in database
    const [rows] = await db.query("SELECT * FROM file_uploads WHERE new_file_name = ? AND file_directory = ?", [filename, fileDirectory]);
    if (rows.length === 0) {
      return res.status(404).json({ message: "File not found in database" });
    }
  
    // Delete file from system
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    } else {
      return res.status(404).json({ message: "File not found in storage" });
    }
  
    // Remove database record
    await db.query("DELETE FROM file_uploads WHERE new_file_name = ? AND file_directory = ?", [filename, fileDirectory]);
  
    return res.status(200).json({ message: "File deleted successfully" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// ------------------------------- PRODUCTS APIs ------------------------------------------ //

//Fetch Product Pages' Contents to Dashboard
router.get('/read/:table_name', async (req, res) => {
  const { table_name } = req.params;

  if (!allowedProducts.includes(table_name)) {
    return res.status(400).json({ message: "Invalid table name" });
  }

  let db;
  try {
    db = await connectToDatabase();

    const [rows] = await db.query("SELECT * FROM ??", [table_name]);

    if (rows.length === 0) {
      return res.status(404).json({ message: "No data found" });
    }

    res.json(rows); // ✅ Return entire array
  } catch (error) {
    console.error("Error fetching table:", error);
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    if (db) db.release(); // ✅ Always release the connection
  }
});

//Update Product Pages' Contents in Database
router.put('/update/:table_name', verifyToken, async (req, res) => {
  const { table_name } = req.params;
  const { description, lang } = req.body;

  //console.log('Updating table:', table_name); // Debugging log
  //console.log('Description:', description, 'Lang:', lang);

  if (!allowedProducts.includes(table_name)) {
    return res.status(400).json({ message: "Invalid table name" });
  }

  // Validate lang parameter
  const validLanguages = ['en', 'si', 'ta']; // Ensure these are the allowed languages
  if (!validLanguages.includes(lang)) {
    return res.status(400).json({ message: "Invalid language code" });
  }

  let db;
  try {

    // Connect to DB
    db = await connectToDatabase();

    // Capture real time
    const uploadedAt = new Date();

    // Retrieve admin username
    const [userRows] = await db.query("SELECT username FROM users WHERE id = ?", [req.userId]);
    if (userRows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    const uploadedBy = userRows[0].username;

    await db.query("UPDATE ?? SET `description` = ?, `uploaded_by` = ?, `uploaded_at` = ? WHERE lang = ?", [table_name, description, uploadedBy, uploadedAt, lang]);
    
    return res.status(201).json({ message: "Content updated successfully" });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    if (db) db.release(); // Always release the connection
  }
});


// ------------------------------- PROFILE APIs ------------------------------------------ //

// Get All Profiles
router.get('/read/profile/:id', async (req, res) => {
  const { id } = req.params;

  let db;
  try {
    db = await connectToDatabase();

    const [rows] = await db.query("SELECT * FROM profile_content WHERE profile_id = ?", [id]);

    if (rows.length === 0) {
      return res.status(404).json({ message: "No data found" });
    }

    res.json(rows); // ✅ Return entire array
  } catch (error) {
    console.error("Error fetching table:", error);
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    if (db) db.release(); // ✅ Always release the connection
  }
});

// Get Profile by ID & Language
router.get("/profiles/:id/:lang", async (req, res) => {
  const { id, lang } = req.params;

  let db;
  try {
    db = await connectToDatabase();
    const [rows] = await db.query("SELECT * FROM profile_content WHERE profile_id = ? AND lang = ?", [id, lang]);

    if (rows.length === 0) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.json(rows[0]);

  } catch (e) {
    console.error("Error fetching profile data:", e.message);
    res.status(500).json({ message: "Internal Server Error" });

  } finally {
    if (db) db.release();
  }
});

// Add a New Profile
router.post("/profiles", verifyToken, async (req, res) => {
  const { profile_id, lang, profile_name, designation, description } = req.body;
  let db;
  try {
    db = await connectToDatabase();

    // Retrieve admin username
    const [userRows] = await db.query("SELECT username FROM users WHERE id = ?", [req.userId]);
    if (userRows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    const uploadedBy = userRows[0].username;

    const [rows] = await db.query(
      "INSERT INTO profile_content (profile_id, lang, profile_name, designation, description, uploaded_at, uploaded_by) VALUES (?, ?, ?, ?, ?, NOW(), ?)",
      [profile_id, lang, profile_name, designation, JSON.stringify(description), uploadedBy]
    );

    if (rows.affectedRows === 0) {
      return res.status(400).json({ message: "Profile creation failed!" });
    }

    res.json({ message: "Profile added successfully", profile_id: rows.insertId });

  } catch (e) {
    console.error("Error adding new profile data:", e.message);
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    if (db) db.release();
  }
});

// Update Profile
router.put('/update/profile/:id', verifyToken, async (req, res) => {
  const { id } = req.params;
  const { profile_name, designation, description, lang } = req.body;

  // Validate lang parameter
  const validLanguages = ['en', 'si', 'ta']; // Ensure these are the allowed languages
  if (!validLanguages.includes(lang)) {
    return res.status(400).json({ message: "Invalid language code" });
  }

  let db;
  try {

    // Connect to DB
    db = await connectToDatabase();

    // Capture real time
    const uploadedAt = new Date();

    // Retrieve admin username
    const [userRows] = await db.query("SELECT username FROM users WHERE id = ?", [req.userId]);
    if (userRows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    const uploadedBy = userRows[0].username;

    await db.query(`
    UPDATE profile_content 
    SET profile_name = ?, designation = ?, description = ?, updated_at = ?, uploaded_by = ? 
    WHERE profile_id = ? AND lang = ?`, 
    [profile_name, designation, JSON.stringify(description), uploadedAt, uploadedBy, id, lang]
  );
    
    return res.status(201).json({ message: "Content updated successfully" });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    if (db) db.release(); // Always release the connection
  }
});

// Delete a Profile
router.delete("/profiles/:id/:lang", verifyToken, async (req, res) => {
  const { id, lang } = req.params;
  let db;
  try {
    db = await connectToDatabase();
    const [rows] = await db.query("DELETE FROM profile_content WHERE profile_id = ? AND lang = ?", [id, lang]);

    if (rows.affectedRows === 0) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.json({ message: "Profile deleted successfully" });

  } catch (e) {
    console.error("Error deleting profile data:", e.message);
    res.status(500).json({ message: "Internal Server Error" });

  } finally {
    if (db) db.release();
  }
});

// ------------------------------- BRANCH DETAILS APIs ------------------------------------------ //

//Get branch data
router.get("/branches/getBranchDetails/:lang", async (req, res) => {
  const { lang = "en" } = req.params; // Get language from query params, default to 'en'

  let db;
  try {
    db = await connectToDatabase();

    // Fetch all branch details for the given language
    const [branchDetails] = await db.query("SELECT * FROM branch_details WHERE lang = ?", [lang]);

    if (branchDetails.length === 0) {
      return res.status(404).json({ message: "No branches found for the selected language." });
    }

    // Extract all branch_ids from branchDetails
    const branchIds = branchDetails.map(branch => branch.branch_id);

    // Fetch coordinates for all branch_ids
    const [coordinates] = await db.query("SELECT branch_id, latitude, longitude FROM branch_coordinates WHERE branch_id IN (?)", [branchIds]);

    // Fetch contacts for all branch_ids
    const [contacts] = await db.query("SELECT branch_id, contact_number, picture FROM branch_contacts WHERE branch_id IN (?)", [branchIds]);

    // Convert coordinates and contacts into maps for easy lookup
    const coordinatesMap = Object.fromEntries(coordinates.map(coord => [coord.branch_id, coord]));
    const contactsMap = Object.fromEntries(contacts.map(contact => [contact.branch_id, contact]));

    // Merge all data based on branch_id
    const mergedData = branchDetails.map(branch => ({
      ...branch,
      latitude: coordinatesMap[branch.branch_id]?.latitude || null,
      longitude: coordinatesMap[branch.branch_id]?.longitude || null,
      contact_number: contactsMap[branch.branch_id]?.contact_number || null,
      picture: contactsMap[branch.branch_id]?.picture || null
    }));

    res.json(mergedData);  

  } catch (e) {
    console.error("Error fetching branch details:", e.message);
    res.status(500).json({ message: "Internal Server Error" });

  } finally {
    if (db) await db.release(); // Ensure release is awaited
  }
});

//Get Branches by region
router.get("/branches/getBranchDetails/:region_name/:lang", async (req, res) => {
  const { region_name, lang = "en" } = req.params; // Get language from query params, default to 'en'

  let db;
  try {
    db = await connectToDatabase();

    // Fetch all branch details for the given language
    const [branchDetails] = await db.query("SELECT * FROM branch_details WHERE region_name = ? AND lang = ?", [region_name, lang]);

    if (branchDetails.length === 0) {
      return res.status(404).json({ message: "No branches found for the selected language." });
    }

    // Extract all branch_ids from branchDetails
    const branchIds = branchDetails.map(branch => branch.branch_id);

    // Fetch coordinates for all branch_ids
    const [coordinates] = await db.query("SELECT branch_id, latitude, longitude FROM branch_coordinates WHERE branch_id IN (?)", [branchIds]);

    // Fetch contacts for all branch_ids
    const [contacts] = await db.query("SELECT branch_id, contact_number, picture FROM branch_contacts WHERE branch_id IN (?)", [branchIds]);

    // Convert coordinates and contacts into maps for easy lookup
    const coordinatesMap = Object.fromEntries(coordinates.map(coord => [coord.branch_id, coord]));
    const contactsMap = Object.fromEntries(contacts.map(contact => [contact.branch_id, contact]));

    // Merge all data based on branch_id
    const mergedData = branchDetails.map(branch => ({
      ...branch,
      latitude: coordinatesMap[branch.branch_id]?.latitude || null,
      longitude: coordinatesMap[branch.branch_id]?.longitude || null,
      contact_number: contactsMap[branch.branch_id]?.contact_number || null,
      picture: contactsMap[branch.branch_id]?.picture || null
    }));

    res.json(mergedData);  

  } catch (e) {
    console.error("Error fetching branch details:", e.message);
    res.status(500).json({ message: "Internal Server Error" });

  } finally {
    if (db) await db.release(); // Ensure release is awaited
  }
});

//Get All Details by Branch ID
router.get("/branches/getBranchById/:branch_id/:lang", async (req, res) => {
  const { branch_id, lang } = req.params;

  let db;
  try {
    db = await connectToDatabase();

    // Fetch branch details for the given branch_id and language
    const [branchDetails] = await db.query("SELECT * FROM branch_details WHERE branch_id = ? AND lang = ?", [branch_id, lang]);

    if (branchDetails.length === 0) {
      return res.status(404).json({ message: "No branch found for the given ID and language." });
    }

    // Fetch branch coordinates for the given branch_id
    const [coordinates] = await db.query("SELECT latitude, longitude FROM branch_coordinates WHERE branch_id = ?", [branch_id]);

    // Fetch branch contacts for the given branch_id
    const [contacts] = await db.query("SELECT contact_number, picture FROM branch_contacts WHERE branch_id = ?", [branch_id]);

    // Merge the data into a single object
    const mergedData = {
      ...branchDetails[0], // Extracting first element as branch_id is unique
      latitude: coordinates[0]?.latitude || null,   // Extract first latitude
      longitude: coordinates[0]?.longitude || null, // Extract first longitude
      contact_number: contacts[0]?.contact_number || null, // Extract first contact
      picture: contacts[0]?.picture || null
    };

    res.json(mergedData);

  } catch (e) {
    console.error("Error fetching branch details:", e.message);
    res.status(500).json({ message: "Internal Server Error" });

  } finally {
    if (db) await db.release(); // Ensure release is awaited
  }
});

//Update Branch Details
router.put("/updateBranch/:id", async (req, res) => {
  const { id } = req.params; //if id not worked try branch_id
  const { branch_name, region, address, lang, longitude, latitude, contact } = req.body;

  if (!branch_name || !region || !address || !lang || !longitude || !latitude || !contact) {
    return res.status(400).json({ message: "All fields are required" });
  }

  let db;
  try {
    db = await connectToDatabase();
    const [branchDetails] = await db.query("UPDATE branch_details SET branch_name = ?, region_name = ?, address = ? WHERE branch_id = ? AND lang = ?", [branch_name, region, address, id, lang]);
    const [coordinates] = await db.query("UPDATE branch_coordinates SET longitude = ?, latitude = ? WHERE branch_id = ?", [longitude, latitude, id]);
    const [contacts] = await db.query("UPDATE branch_contacts SET contact_number = ? WHERE branch_id = ?", [contact, id]);
    
    
    if (branchDetails.length === 0) {
      return res.status(404).json({ message: "No branches found for the selected language." });
    }

    // Merge the data into a single object
    const mergedData = {
      ...branchDetails[0], // Extracting first element as branch_id is unique
      latitude: coordinates[0]?.latitude || null,   // Extract first latitude
      longitude: coordinates[0]?.longitude || null, // Extract first longitude
      contact_number: contacts[0]?.contact_number || null, // Extract first contact
    };

    res.json(mergedData);

  } catch (e) {
    console.error("Error fetching branch details:", e.message);
    res.status(500).json({ message: "Internal Server Error" });

  } finally {
    if (db) await db.release(); // Ensure release is awaited
  }
});

//Add New Branch
router.post("/addBranch", async (req, res) => {
  const { branch_details } = req.body; // Array of objects with lang, branch_name, region, address

  if (!Array.isArray(branch_details) || branch_details.length !== 3) {
    return res.status(400).json({ message: "Provide branch details in all three languages (en, si, ta)" });
  }

  let db;
  try {
    db = await connectToDatabase();

    // Get the last branch_id and increment it
    const [lastBranch] = await db.query("SELECT MAX(branch_id) AS last_id FROM branch_details");
    const newBranchId = (lastBranch[0].last_id || 0) + 1;

    // Insert the branch details in 3 languages
    const values = branch_details.map(({ lang, branch_name, region, address }) => [newBranchId, branch_name, region, address, lang]);
    
    await db.query(
      "INSERT INTO branch_details (branch_id, branch_name, region_name, address, lang) VALUES ?", 
      [values]
    );

    res.status(201).json({ message: "Branch added successfully", branch_id: newBranchId });

  } catch (e) {
    console.error("Error adding new branch:", e.message);
    res.status(500).json({ message: "Internal Server Error" });

  } finally {
    if (db) await db.release();
  }
});

// ------------------------------ Popup Feature APIs ---------------------------------- //
let popupEnabled = true; // Default state

// Get the current popup state
router.get("/popup-state", (req, res) => {
    res.json({ popupEnabled });
});

// Update the popup state
router.post("/popup-state", (req, res) => {
    const { enabled } = req.body;
    if (typeof enabled !== "boolean") {
        return res.status(400).json({ error: "Invalid value. Must be a boolean." });
    }
    popupEnabled = enabled;
    res.json({ message: "Popup state updated", popupEnabled });
});


// ------------------------------- TEST APIs ------------------------------------------ //

// GET toggle state
router.get('/getPopup', async (req, res) => {

  let db;
  try {
    db = await connectToDatabase();
    const [result] = await db.query('SELECT status FROM popup_status WHERE id = 1');
    if (result.length > 0) {
      res.json(result[0]);
    } else {
      res.status(404).json({ message: 'Not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// PUT toggle state
router.put('/updatePopup', verifyToken, async (req, res) => {
  const { status } = req.body;
  console.log("Received PUT request with:", { status });
  
  if (typeof status !== 'boolean') {
  return res.status(400).json({ error: 'Invalid input' });
  }

  let db;
  try {
    db = await connectToDatabase();

    const [userRows] = await db.query("SELECT username FROM users WHERE id = ?", [req.userId]);
    if (userRows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    const updated_by = userRows[0].username;
    
    await db.query(
      'UPDATE popup_status SET status = ?, updated_by = ? WHERE id = 1',
      [status, updated_by]
    );
    
    res.json({ message: 'Updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Update failed' });
  }
});


// ------------------------------- WEBSITE APIs ------------------------------------------ //

// Fetch Product Pages' Contents to the Website

router.get("/product/:product_name/:lang", async (req, res) => {
  const { product_name, lang } = req.params;

  if (!allowedProducts.includes(product_name)) {
    return res.status(400).json({ message: "Invalid product name" });
  }

  let db;
  try {
    db = await connectToDatabase();

    const [rows] = await db.query(
        "SELECT * FROM ?? WHERE lang = ?",
        [product_name, lang]
    );

    if (rows.length === 0) {
        return res.status(404).json({ message: "Product not found" });
    }

    res.json(rows);
  } catch (error) {
    console.error("Error fetching product:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    if (db) db.release(); // ✅ Always release the connection
  }
});

//Fetch Personal Profiles' Contents to Website
router.get('/read/profile/:lang', async (req, res) => {
  const { lang } = req.params;

  let db;
  try {
    db = await connectToDatabase();

    // Query 1: Get all profiles
    const [profiles] = await db.query(`SELECT id, profile_picture FROM personal_profile`);

    if (!profiles.length) {
      return res.status(404).json({ message: "No profiles found" });
    }

    // Query 2: Get all profile content matching the language
    const [profileContents] = await db.query(
      `SELECT profile_id, profile_name, designation, description, lang 
       FROM profile_content 
       WHERE lang = ?`, 
      [lang]
    );

    if (!profileContents.length) {
      return res.status(404).json({ message: "No profile content found for the specified language" });
    }

    // Merge profiles with their content
    const finalProfiles = profiles.map(profile => {
      const content = profileContents.find(p => p.profile_id === profile.id);
      return content ? { ...profile, ...content } : null;
    }).filter(profile => profile !== null);

    res.json(finalProfiles);

  } catch (e) {
    console.error("Error fetching profile data:", e.message);
    res.status(500).json({ message: "Internal Server Error" });

  } finally {
    if (db) db.release(); // ✅ Ensure connection is released
  }
});

router.post('/read/profiles', async (req, res) => {
  const { ids, lang } = req.body;

  if (!Array.isArray(ids) || ids.length === 0) {
    return res.status(400).json({ message: "Invalid profile IDs" });
  }

  let db;
  try {
    db = await connectToDatabase();

    // Query 1: Get profile pictures
    const [profiles] = await db.query(
      `SELECT id, profile_picture FROM personal_profile WHERE id IN (?)`, 
      [ids]
    );

    if (profiles.length === 0) {
      return res.status(404).json({ message: "Profiles not found" });
    }

    // Query 2: Get profile content
    const [profileContents] = await db.query(
      `SELECT profile_id, profile_name, designation, description, lang 
       FROM profile_content 
       WHERE profile_id IN (?) AND lang = ?`, 
      [ids, lang]
    );

    // Merge the results
    const finalProfiles = profiles.map(profile => {
      const content = profileContents.find(p => p.profile_id === profile.id);
      return content ? { ...profile, ...content } : null;
    }).filter(profile => profile !== null);

    res.json(finalProfiles);

  } catch (error) {
    console.error("Error fetching profiles:", error.message);
    res.status(500).json({ message: "Internal Server Error" });

  } finally {
    if (db) db.release();
  }
});

router.get('/read/profile/:id/:lang', async (req, res) => {
  const { id, lang } = req.params;

  let db;
  try {
    db = await connectToDatabase();

    // Query 1: Get profile picture from personal_profile
    const [profile] = await db.query(
      `SELECT id, profile_picture FROM personal_profile WHERE id = ?`, 
      [id]
    );

    if (!profile.length) {
      return res.status(404).json({ message: "Profile not found" });
    }

    // Query 2: Get profile content from profile_content
    const [profileContent] = await db.query(
      `SELECT profile_name, designation, description, lang 
       FROM profile_content 
       WHERE profile_id = ? AND lang = ?`, 
      [id, lang]
    );

    if (!profileContent.length) {
      return res.status(404).json({ message: "Profile content not found for the specified language" });
    }

    // Combine results
    const finalProfile = {
      id: profile[0].id,
      profile_picture: profile[0].profile_picture,
      profile_name: profileContent[0].profile_name,
      designation: profileContent[0].designation,
      description: profileContent[0].description,
      lang: profileContent[0].lang
    };

    res.json(finalProfile);

  } catch (error) {
    console.error("Error fetching profile data:", error.message);
    res.status(500).json({ message: "Internal Server Error" });

  } finally {
    if (db) db.release(); // ✅ Ensure connection is released
  }
});



export default router;