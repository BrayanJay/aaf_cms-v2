import express from 'express';
import { requireAuth, requireAdmin } from '../middleware/authMiddleware.js';
import { connectToDatabase } from '../lib/db.js';

const router = express.Router();

const ALLOWED_ORDER_COLUMNS = ['timestamp', 'level', 'category', 'username', 'action'];

router.use(requireAuth);

// GET /logs — retrieve logs with filtering (Admin only)
router.get('/', requireAdmin, async (req, res) => {
  const {
    level,
    category,
    userId,
    startDate,
    endDate,
    limit = 100,
    offset = 0,
    orderBy = 'timestamp',
    orderDirection = 'DESC'
  } = req.query;

  let connection;
  try {
    connection = await connectToDatabase();

    let query = 'SELECT * FROM logger WHERE 1=1';
    const values = [];

    if (level) { query += ' AND level = ?'; values.push(level); }
    if (category) { query += ' AND category = ?'; values.push(category); }
    if (userId) { query += ' AND user_id = ?'; values.push(parseInt(userId)); }
    if (startDate) { query += ' AND timestamp >= ?'; values.push(startDate); }
    if (endDate) { query += ' AND timestamp <= ?'; values.push(endDate); }

    const safeOrderBy = ALLOWED_ORDER_COLUMNS.includes(orderBy) ? orderBy : 'timestamp';
    const safeDirection = orderDirection.toUpperCase() === 'ASC' ? 'ASC' : 'DESC';
    const safeLimit = Math.min(parseInt(limit) || 100, 500);
    const safeOffset = parseInt(offset) || 0;

    query += ` ORDER BY ${safeOrderBy} ${safeDirection} LIMIT ${safeLimit} OFFSET ${safeOffset}`;

    const [rows] = await connection.execute(query, values);

    const logs = rows.map(row => {
      let details = null;
      if (row.details && row.details !== '[object Object]') {
        try {
          details = typeof row.details === 'string' ? JSON.parse(row.details) : row.details;
        } catch {
          details = null;
        }
      }
      return { ...row, details };
    });

    res.json({ data: logs, count: logs.length });

  } catch (err) {
    console.error('GET /logs error:', err.message);
    res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    if (connection) connection.release();
  }
});

// POST /logs — manually create a log entry (Admin only)
router.post('/', requireAdmin, async (req, res) => {
  const { level, category, action, message, details, userId, username } = req.body;

  if (!level || !category || !action || !message) {
    return res.status(400).json({ message: 'Missing required fields: level, category, action, message' });
  }

  let connection;
  try {
    connection = await connectToDatabase();

    await connection.execute(`
      INSERT INTO logger (
        level, category, action, user_id, username, ip_address,
        user_agent, request_method, endpoint, status_code,
        message, details, session_id
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [
      level,
      category,
      action,
      userId || req.session?.userId,
      username || req.session?.username,
      req.ip,
      req.headers['user-agent'],
      req.method,
      req.originalUrl,
      201,
      message,
      details ? JSON.stringify(details) : null,
      req.sessionID
    ]);

    res.status(201).json({ message: 'Log entry created successfully' });

  } catch (err) {
    console.error('POST /logs error:', err.message);
    res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    if (connection) connection.release();
  }
});

export default router;
