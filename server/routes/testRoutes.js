import express from "express";
import cors from "cors";
import multer from "multer";
import path from "path";
import verifySessionToken from "../middleware/authToken.js";
import { saveFile } from "../utils/fileHandler.js";


const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/upload", verifySessionToken, upload.single("file"), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const { originalname, mimetype, size, buffer } = req.file;
    const fileDirectory = req.body.file_directory || "media";
    const fileName = req.body.filename || originalname;
    const uploadedAt = new Date();

    const savedPath = saveFile(fileDirectory, fileName, buffer);

    return res.status(200).json({
      message: "File uploaded successfully",
      fileName,
      mimetype,
      size,
      uploadedAt,
      filePath: savedPath,
    });
  } catch (error) {
    console.error("Upload error:", error);
    return res.status(500).json({ error: "File upload failed" });
  }
});

export default router;
