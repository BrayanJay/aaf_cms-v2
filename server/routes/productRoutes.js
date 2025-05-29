import express from "express";
import {connectToDatabase} from '../lib/db.js'
import 'dotenv/config';
import verifyToken from '../middleware/authToken.js';

const router = express.Router();

// List of valid products
const allowedProducts = ['gold_loan', 'fixed_deposits', 'mortgage', 'leasing', 'luckewallet', 'forex'];

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

export default router;