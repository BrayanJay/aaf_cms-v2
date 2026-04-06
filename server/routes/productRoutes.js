import express from "express";
import { connectToDatabase } from '../lib/db.js'
import 'dotenv/config';
import verifyToken from '../middleware/authToken.js';

const router = express.Router();

const ALLOWED_PRODUCTS = ['gold_loan', 'fixed_deposits', 'mortgage', 'leasing', 'luckewallet', 'forex'];
const VALID_LANGS = ['en', 'si', 'ta'];

// Get product page content
router.get('/:product_name', async (req, res) => {
  const { product_name } = req.params;

  if (!ALLOWED_PRODUCTS.includes(product_name)) {
    return res.status(400).json({ message: "Invalid product name" });
  }

  let db;
  try {
    db = await connectToDatabase();

    const [rows] = await db.query("SELECT * FROM ??", [product_name]);

    if (rows.length === 0) {
      return res.status(404).json({ message: "No content found" });
    }

    res.json(rows);
  } catch (err) {
    console.error("Error fetching product content:", err.message);
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    if (db) db.release();
  }
});

// Update product page content
router.put('/:product_name', verifyToken, async (req, res) => {
  const { product_name } = req.params;
  const { description, lang } = req.body;

  if (!ALLOWED_PRODUCTS.includes(product_name)) {
    return res.status(400).json({ message: "Invalid product name" });
  }

  if (!lang || !VALID_LANGS.includes(lang)) {
    return res.status(400).json({ message: "Invalid language. Use 'en', 'si', or 'ta'." });
  }

  if (!description || !description.trim()) {
    return res.status(400).json({ message: "Description is required" });
  }

  let db;
  try {
    db = await connectToDatabase();

    const [userRows] = await db.query("SELECT username FROM users WHERE id = ?", [req.userId]);
    if (userRows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    await db.query(
      "UPDATE ?? SET `description` = ?, `uploaded_by` = ?, `uploaded_at` = ? WHERE lang = ?",
      [product_name, description, userRows[0].username, new Date(), lang]
    );

    return res.status(200).json({ message: "Content updated successfully" });
  } catch (err) {
    console.error("Error updating product content:", err.message);
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    if (db) db.release();
  }
});

export default router;
