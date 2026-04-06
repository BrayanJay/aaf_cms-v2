import express from 'express';
import { connectToDatabase } from '../lib/db.js';
import verifySessionToken from '../middleware/authToken.js';
import { requireAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

// Get active users and session stats
router.get('/', verifySessionToken, async (req, res) => {
  let db;
  try {
    db = await connectToDatabase();

    const [activeUsers] = await db.query(`
      SELECT
        id, username, role, last_login,
        TIMESTAMPDIFF(MINUTE, last_login, NOW()) as minutes_since_login
      FROM users
      WHERE last_login > DATE_SUB(NOW(), INTERVAL 3 HOUR)
      AND token IS NOT NULL
      ORDER BY last_login DESC
    `);

    const [totalUsers] = await db.query('SELECT COUNT(*) as total FROM users');

    const [roleStats] = await db.query(`
      SELECT role, COUNT(*) as count
      FROM users
      GROUP BY role
      ORDER BY count DESC
    `);

    res.json({
      activeUsers: activeUsers.length,
      totalUsers: totalUsers[0].total,
      users: activeUsers,
      roleDistribution: roleStats,
      serverTime: new Date().toISOString()
    });

  } catch (err) {
    console.error('Error fetching active users:', err.message);
    res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    if (db) db.release();
  }
});

// Force logout a user (Admin only)
router.delete('/:userId', verifySessionToken, requireAdmin, async (req, res) => {
  const { userId } = req.params;

  let db;
  try {
    db = await connectToDatabase();

    const [existing] = await db.query('SELECT id FROM users WHERE id = ?', [userId]);
    if (existing.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    await db.query('UPDATE users SET token = NULL WHERE id = ?', [userId]);

    res.json({ message: 'User logged out successfully' });

  } catch (err) {
    console.error('Error forcing logout:', err.message);
    res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    if (db) db.release();
  }
});

export default router;
