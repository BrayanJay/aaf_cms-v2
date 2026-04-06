import express from "express";
import { connectToDatabase } from '../lib/db.js'
import 'dotenv/config';
import verifySessionToken from '../middleware/authToken.js';
import { deleteFile } from '../utils/fileHandler.js';

const router = express.Router();

const VALID_TYPES = ['bod', 'coop'];
const VALID_LANGS = ['en', 'si', 'ta'];
const TYPE_TABLE = { bod: 'board_of_directors', coop: 'corporate_management' };
const LANG_COLUMNS = {
  en: { name: 'name_en', designation: 'designation_en', description: 'description_en' },
  si: { name: 'name_si', designation: 'designation_si', description: 'description_si' },
  ta: { name: 'name_ta', designation: 'designation_ta', description: 'description_ta' }
};

const parseDescriptions = (row) => ({
  ...row,
  description_en: parseJson(row.description_en),
  description_si: parseJson(row.description_si),
  description_ta: parseJson(row.description_ta)
});

const parseJson = (value) => {
  if (!value) return [];
  try { return typeof value === 'string' ? JSON.parse(value) : value; }
  catch { return Array.isArray(value) ? value : [value]; }
};

const getUsername = async (db, userId) => {
  if (!userId) return 'System';
  const [rows] = await db.query("SELECT username FROM users WHERE id = ?", [userId]);
  return rows.length > 0 ? rows[0].username : 'System';
};

// Get profiles by type — ?type=bod or ?type=coop
router.get('/', async (req, res) => {
  const { type } = req.query;

  if (!type || !VALID_TYPES.includes(type)) {
    return res.status(400).json({ message: "Invalid type. Use 'bod' or 'coop'." });
  }

  let db;
  try {
    db = await connectToDatabase();

    const [rows] = await db.query("SELECT * FROM ??", [TYPE_TABLE[type]]);

    if (rows.length === 0) {
      return res.status(404).json({ message: "No profiles found" });
    }

    res.json(rows.map(parseDescriptions));
  } catch (err) {
    console.error("Error fetching profiles:", err.message);
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    if (db) db.release();
  }
});

// Get profile content by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  let db;
  try {
    db = await connectToDatabase();

    const [rows] = await db.query("SELECT * FROM profile_content WHERE profile_id = ?", [id]);

    if (rows.length === 0) {
      return res.status(404).json({ message: "Profile not found" });
    }

    const parsed = rows.map(row => ({
      ...row,
      description: parseJson(row.description)
    }));

    res.json(parsed);
  } catch (err) {
    console.error("Error fetching profile:", err.message);
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    if (db) db.release();
  }
});

// Add a new profile
router.post('/', verifySessionToken, async (req, res) => {
  const { type, nameEn, nameSi, nameTa, designationEn, designationSi, designationTa, descriptionEn, descriptionSi, descriptionTa } = req.body;

  if (!type || !VALID_TYPES.includes(type)) {
    return res.status(400).json({ message: "Invalid type. Use 'bod' or 'coop'." });
  }

  if (!nameEn || !nameSi || !nameTa || !designationEn || !designationSi || !designationTa ||
      !descriptionEn?.length || !descriptionSi?.length || !descriptionTa?.length) {
    return res.status(400).json({ message: "All fields in all languages are required" });
  }

  let db;
  try {
    db = await connectToDatabase();

    const uploadedBy = await getUsername(db, req.userId);
    const table = TYPE_TABLE[type];

    const [[{ last_id }]] = await db.query("SELECT MAX(id) AS last_id FROM ??", [table]);
    const newId = (last_id || 0) + 1;

    const [result] = await db.query(
      "INSERT INTO ?? (id, profile_picture, name_en, name_si, name_ta, designation_en, designation_si, designation_ta, description_en, description_si, description_ta, updated_at, uploaded_by) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), ?)",
      [table, newId, newId, nameEn, nameSi, nameTa, designationEn, designationSi, designationTa,
       JSON.stringify(descriptionEn), JSON.stringify(descriptionSi), JSON.stringify(descriptionTa), uploadedBy]
    );

    if (result.affectedRows === 0) {
      return res.status(400).json({ message: "Profile creation failed" });
    }

    res.status(201).json({ message: "Profile added successfully", id: newId });
  } catch (err) {
    console.error("Error adding profile:", err.message);
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    if (db) db.release();
  }
});

// Update a profile
router.put('/:id', verifySessionToken, async (req, res) => {
  const { id } = req.params;
  const { lang, type, name, designation, description } = req.body;

  if (!type || !VALID_TYPES.includes(type)) {
    return res.status(400).json({ message: "Invalid type. Use 'bod' or 'coop'." });
  }

  if (!lang || !VALID_LANGS.includes(lang)) {
    return res.status(400).json({ message: "Invalid language. Use 'en', 'si', or 'ta'." });
  }

  if (!name || !designation || !description?.length) {
    return res.status(400).json({ message: "Name, designation, and description are required" });
  }

  let db;
  try {
    db = await connectToDatabase();

    const uploadedBy = await getUsername(db, req.userId);
    const table = TYPE_TABLE[type];
    const cols = LANG_COLUMNS[lang];

    await db.query(
      `UPDATE ?? SET \`${cols.name}\` = ?, \`${cols.designation}\` = ?, \`${cols.description}\` = ?, profile_picture = ?, updated_at = ?, uploaded_by = ? WHERE id = ?`,
      [table, name, designation, JSON.stringify(description), id, new Date(), uploadedBy, id]
    );

    return res.status(200).json({ message: "Profile updated successfully" });
  } catch (err) {
    console.error("Error updating profile:", err.message);
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    if (db) db.release();
  }
});

// Delete a profile
router.delete('/:id', verifySessionToken, async (req, res) => {
  const { id } = req.params;
  const { type } = req.body;

  if (!type || !VALID_TYPES.includes(type)) {
    return res.status(400).json({ message: "Invalid type. Use 'bod' or 'coop'." });
  }

  let db;
  try {
    db = await connectToDatabase();

    const table = TYPE_TABLE[type];

    const [existing] = await db.query("SELECT id FROM ?? WHERE id = ?", [table, id]);
    if (existing.length === 0) {
      return res.status(404).json({ message: "Profile not found" });
    }

    const [result] = await db.query("DELETE FROM ?? WHERE id = ?", [table, id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Profile not found" });
    }

    const imagePath = `media/aboutPage/${type}/${id}.webp`;
    const imageDeleted = deleteFile(imagePath);

    res.json({ message: "Profile deleted successfully", imageDeleted });
  } catch (err) {
    console.error("Error deleting profile:", err.message);
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    if (db) db.release();
  }
});

export default router;
