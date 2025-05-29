import express from "express";
import {connectToDatabase} from '../lib/db.js'
import 'dotenv/config';
import verifyToken from '../middleware/authToken.js';

const router = express.Router();

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

export default router;