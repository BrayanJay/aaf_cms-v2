import express from "express";
import {connectToDatabase} from '../lib/db.js'
import 'dotenv/config';
import verifyToken from '../middleware/authToken.js';

const router = express.Router();

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

export default router;