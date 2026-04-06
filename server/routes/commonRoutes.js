import express from "express";
import multer from "multer";
import fs from "fs";
import path from "path";
import { connectToDatabase } from '../lib/db.js'
import 'dotenv/config';
import verifySessionToken from '../middleware/authToken.js';

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 } // 10 MB
});

// --------------------------------- FILE ROUTES --------------------------------- //

// Upload file
router.post("/files", verifySessionToken, upload.single("file"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  let db;
  try {
    const { originalname, mimetype, size, buffer } = req.file;
    const fileDirectory = req.body.file_directory || "media";
    const fileName = req.body.filename || originalname;
    const filePath = path.join(fileDirectory, fileName);
    const uploadedAt = new Date();

    if (!fileDirectory.startsWith("media/")) {
      return res.status(400).json({ message: "Invalid directory path" });
    }

    if (!fs.existsSync(fileDirectory)) {
      fs.mkdirSync(fileDirectory, { recursive: true });
    }

    fs.writeFileSync(filePath, buffer);

    db = await connectToDatabase();

    const [userRows] = await db.query("SELECT username FROM users WHERE id = ?", [req.userId]);
    if (userRows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    const uploadedBy = userRows[0].username;

    await db.query(`
      INSERT INTO file_uploads (old_file_name, new_file_name, file_type, file_size, file_directory, uploaded_timedate, uploaded_by)
      VALUES (?, ?, ?, ?, ?, ?, ?)
      ON DUPLICATE KEY UPDATE uploaded_timedate = ?, file_size = ?
    `, [originalname, fileName, mimetype, size, fileDirectory, uploadedAt, uploadedBy, uploadedAt, size]);

    return res.status(201).json({ message: "File uploaded successfully", file: { fileName, fileDirectory } });
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" });
  } finally {
    if (db) db.release();
  }
});

// List files in a directory
router.get("/files", async (req, res) => {
  const folder = req.query.folder || "media/attachments";
  try {
    const absolutePath = path.resolve(folder);

    if (!fs.existsSync(absolutePath)) {
      return res.status(404).json({ message: "Directory not found" });
    }

    const files = fs.readdirSync(absolutePath).map(file => {
      const filePath = path.join(absolutePath, file);
      const stats = fs.statSync(filePath);
      return {
        fileName: file,
        path: `${folder}/${file}`,
        updatedAt: stats.mtime
      };
    });

    res.json(files);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Delete file from filesystem only
router.delete("/files", verifySessionToken, async (req, res) => {
  const filePath = req.body.path;
  try {
    if (!filePath || !fs.existsSync(filePath)) {
      return res.status(404).json({ message: "File not found" });
    }

    fs.unlinkSync(filePath);
    return res.status(200).json({ message: "File deleted successfully" });
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// --------------------------------- POPUP ROUTES --------------------------------- //

// Get popup status
router.get("/popup/status", async (req, res) => {
  let db;
  try {
    db = await connectToDatabase();

    const [rows] = await db.query(
      "SELECT id, status, updated_at, updated_by, created_at FROM popup_status WHERE id = 1"
    );

    if (rows.length === 0) {
      await db.query(
        "INSERT INTO popup_status (id, status, updated_by) VALUES (1, ?, ?)",
        ['disabled', 'system']
      );
      const [newRows] = await db.query(
        "SELECT id, status, updated_at, updated_by, created_at FROM popup_status WHERE id = 1"
      );
      return res.json(newRows[0]);
    }

    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    if (db) db.release();
  }
});

// Update popup status
router.put("/popup/status", verifySessionToken, async (req, res) => {
  const { status } = req.body;

  if (!status || !['enabled', 'disabled'].includes(status)) {
    return res.status(400).json({ message: 'Invalid status. Use "enabled" or "disabled".' });
  }

  let db;
  try {
    db = await connectToDatabase();

    const [result] = await db.query(
      "UPDATE popup_status SET status = ?, updated_by = ?, updated_at = CURRENT_TIMESTAMP WHERE id = 1",
      [status, req.userId || 'unknown']
    );

    if (result.affectedRows === 0) {
      await db.query(
        "INSERT INTO popup_status (id, status, updated_by) VALUES (1, ?, ?)",
        [status, req.userId || 'unknown']
      );
    }

    const [updatedRows] = await db.query(
      "SELECT id, status, updated_at, updated_by, created_at FROM popup_status WHERE id = 1"
    );

    res.json({ message: `Popup ${status} successfully`, data: updatedRows[0] });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    if (db) db.release();
  }
});

export default router;
