import express from "express";
import multer from "multer";
import fs from "fs";
import path from "path";
import {connectToDatabase} from '../lib/db.js'
import jwt from "jsonwebtoken";
import 'dotenv/config';

const router = express.Router();

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

// Upload API
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

// Delete API
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

// Fetch product details by product_name and language
router.get("/product/:product_name/:lang", async (req, res) => {
  const { product_name, lang } = req.params;

  try {
    const db = await connectToDatabase();

      const [rows] = await db.query(
          "SELECT * FROM products_page_contents WHERE product_name = ? AND lang = ?",
          [product_name, lang]
      );

      if (rows.length === 0) {
          return res.status(404).json({ message: "Product not found" });
      }

      res.json(rows[0]);
  } catch (error) {
      console.error("Error fetching product:", error);
      res.status(500).json({ message: "Internal Server Error" });

  } finally {
    if (db) db.release(); // ✅ Always release the connection
  }
});


export default router;