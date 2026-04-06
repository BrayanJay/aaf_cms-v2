import express from "express";
import {connectToDatabase} from '../lib/db.js'
import verifySessionToken from '../middleware/authToken.js';
import 'dotenv/config';

const router = express.Router();

const VALID_LANGS = ['en', 'si', 'ta'];

// Get branches — supports ?lang=en|si|ta and/or ?region_id=1
router.get("/branches", async (req, res) => {
  const { lang, region_id } = req.query;

  if (lang && !VALID_LANGS.includes(lang)) {
    return res.status(400).json({ message: "Invalid language. Use 'en', 'si', or 'ta'." });
  }

  let db;
  try {
    db = await connectToDatabase();

    const conditions = [];
    const params = [];

    if (region_id) {
      conditions.push("region_id = ?");
      params.push(region_id);
    }

    const where = conditions.length ? `WHERE ${conditions.join(" AND ")}` : "";

    const selectFields = lang
      ? `id, region_id, branch_name_en,
         branch_name_${lang} as branch_name,
         branch_address_${lang} as branch_address,
         region_name_${lang} as region_name,
         contact_number, email,
         coordinates_longitude, coordinates_latitude,
         last_updated_time, last_updated_by`
      : "*";

    const [branches] = await db.query(
      `SELECT ${selectFields} FROM branch_data ${where} ORDER BY id ASC`,
      params
    );

    if (branches.length === 0) {
      return res.status(404).json({ message: "No branches found." });
    }

    res.json(branches);

  } catch (e) {
    console.error("Error fetching branches:", e.message);
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    if (db) await db.release();
  }
});

// Get region statistics
router.get("/branches/stats", async (req, res) => {
  let db;
  try {
    db = await connectToDatabase();

    const [stats] = await db.query(`
      SELECT
        region_id,
        region_name_en,
        COUNT(*) as branch_count
      FROM branch_data
      GROUP BY region_id, region_name_en
      ORDER BY region_id ASC
    `);

    res.json(stats);

  } catch (e) {
    console.error("Error fetching region statistics:", e.message);
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    if (db) await db.release();
  }
});

// Get single branch by ID
router.get("/branches/:id", async (req, res) => {
  const { id } = req.params;

  let db;
  try {
    db = await connectToDatabase();

    const [branch] = await db.query("SELECT * FROM branch_data WHERE id = ?", [id]);

    if (branch.length === 0) {
      return res.status(404).json({ message: "Branch not found." });
    }

    res.json(branch[0]);

  } catch (e) {
    console.error("Error fetching branch details:", e.message);
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    if (db) await db.release();
  }
});

// Add new branch (Protected route)
router.post("/branches/add", verifySessionToken, async (req, res) => {
  const { 
    region_id,
    branch_name_en,
    branch_name_si,
    branch_name_ta,
    branch_address_en,
    branch_address_si,
    branch_address_ta,
    region_name_en,
    region_name_si,
    region_name_ta,
    contact_number,
    email,
    coordinates_longitude,
    coordinates_latitude
  } = req.body;

  // Validation
  if (!region_id || !branch_name_en || !branch_name_si || !branch_name_ta || 
      !branch_address_en || !branch_address_si || !branch_address_ta ||
      !region_name_en || !region_name_si || !region_name_ta ||
      !contact_number || !email || !coordinates_longitude || !coordinates_latitude) {
    return res.status(400).json({ message: "All fields are required" });
  }

  let db;
  try {
    db = await connectToDatabase();

    const last_updated_by = req.user?.username || req.user?.email || 'System';

    const [result] = await db.query(`
      INSERT INTO branch_data (
        region_id, branch_name_en, branch_name_si, branch_name_ta,
        branch_address_en, branch_address_si, branch_address_ta,
        region_name_en, region_name_si, region_name_ta,
        contact_number, email, coordinates_longitude, coordinates_latitude,
        last_updated_by
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [
      region_id, branch_name_en, branch_name_si, branch_name_ta,
      branch_address_en, branch_address_si, branch_address_ta,
      region_name_en, region_name_si, region_name_ta,
      contact_number, email, coordinates_longitude, coordinates_latitude,
      last_updated_by
    ]);

    res.status(201).json({ 
      message: "Branch added successfully", 
      id: result.insertId 
    });

  } catch (e) {
    console.error("Error adding new branch:", e.message);
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    if (db) await db.release();
  }
});

// Update branch (Protected route)
router.put("/branches/update/:id", verifySessionToken, async (req, res) => {
  const { id } = req.params;
  const { 
    region_id,
    branch_name_en,
    branch_name_si,
    branch_name_ta,
    branch_address_en,
    branch_address_si,
    branch_address_ta,
    region_name_en,
    region_name_si,
    region_name_ta,
    contact_number,
    email,
    coordinates_longitude,
    coordinates_latitude
  } = req.body;

  if (!id) {
    return res.status(400).json({ message: "Branch ID is required" });
  }

  let db;
  try {
    db = await connectToDatabase();

    const last_updated_by = req.user?.username || req.user?.email || 'System';

    // Check if branch exists
    const [existing] = await db.query("SELECT id FROM branch_data WHERE id = ?", [id]);
    if (existing.length === 0) {
      return res.status(404).json({ message: "Branch not found" });
    }

    const [result] = await db.query(`
      UPDATE branch_data SET 
        region_id = ?, branch_name_en = ?, branch_name_si = ?, branch_name_ta = ?,
        branch_address_en = ?, branch_address_si = ?, branch_address_ta = ?,
        region_name_en = ?, region_name_si = ?, region_name_ta = ?,
        contact_number = ?, email = ?, coordinates_longitude = ?, coordinates_latitude = ?,
        last_updated_by = ?
      WHERE id = ?
    `, [
      region_id, branch_name_en, branch_name_si, branch_name_ta,
      branch_address_en, branch_address_si, branch_address_ta,
      region_name_en, region_name_si, region_name_ta,
      contact_number, email, coordinates_longitude, coordinates_latitude,
      last_updated_by, id
    ]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Branch not found" });
    }

    // Fetch updated branch
    const [updated] = await db.query("SELECT * FROM branch_data WHERE id = ?", [id]);
    res.json(updated[0]);

  } catch (e) {
    console.error("Error updating branch:", e.message);
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    if (db) await db.release();
  }
});

// Delete branch (Protected route)
router.delete("/branches/delete/:id", verifySessionToken, async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "Branch ID is required" });
  }

  let db;
  try {
    db = await connectToDatabase();

    // Check if branch exists
    const [existing] = await db.query("SELECT id, branch_name_en FROM branch_data WHERE id = ?", [id]);
    if (existing.length === 0) {
      return res.status(404).json({ message: "Branch not found" });
    }

    const [result] = await db.query("DELETE FROM branch_data WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Branch not found" });
    }

    res.json({ message: "Branch deleted successfully" });

  } catch (e) {
    console.error("Error deleting branch:", e.message);
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    if (db) await db.release();
  }
});

export default router;