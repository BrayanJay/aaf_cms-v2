import express from 'express';
import RoleManager, { USER_ROLES } from '../utils/roleManager.js';
import { requireAuth, requireAdmin } from '../middleware/authMiddleware.js';
import Logger from '../utils/logger.js';
import { connectToDatabase } from '../lib/db.js';
import bcrypt from 'bcrypt';

const router = express.Router();

router.use(requireAuth);

// Extract common log context from request
const logCtx = (req, statusCode) => ({
  userId: req.session?.userId,
  username: req.session?.username,
  ipAddress: req.ip,
  userAgent: req.headers['user-agent'],
  requestMethod: req.method,
  endpoint: req.originalUrl,
  statusCode,
  sessionId: req.sessionID
});

// GET /users — get all users (Admin only)
router.get('/', requireAdmin, async (req, res) => {
  try {
    const users = await RoleManager.getAllUsersWithRoles(
      req.session.userId,
      req.session.username
    );

    res.json({ data: users, count: users.length });

  } catch (err) {
    await Logger.error({ ...logCtx(req, 500), category: 'USER_MANAGEMENT', action: 'GET_ALL_USERS_ERROR', message: 'Failed to retrieve users', details: { error: err.message } });
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// POST /users — create new user (Admin only)
router.post('/', requireAdmin, async (req, res) => {
  const { username, password, role = USER_ROLES.VIEWER } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  if (!RoleManager.isValidRole(role)) {
    return res.status(400).json({ message: 'Invalid role specified', validRoles: Object.values(USER_ROLES) });
  }

  let connection;
  try {
    connection = await connectToDatabase();

    const [existing] = await connection.execute('SELECT id FROM users WHERE username = ?', [username]);
    if (existing.length > 0) {
      return res.status(409).json({ message: 'Username already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const [result] = await connection.execute(
      'INSERT INTO users (username, password, role, created_at) VALUES (?, ?, ?, NOW())',
      [username, hashedPassword, role]
    );

    await Logger.info({ ...logCtx(req, 201), category: 'USER_MANAGEMENT', action: 'CREATE_USER', message: `Created user: ${username}`, details: { newUserId: result.insertId, newUsername: username, newUserRole: role } });

    res.status(201).json({ message: 'User created successfully', user: { id: result.insertId, username, role } });

  } catch (err) {
    await Logger.error({ ...logCtx(req, 500), category: 'USER_MANAGEMENT', action: 'CREATE_USER_ERROR', message: 'Failed to create user', details: { error: err.message } });
    res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    if (connection) connection.release();
  }
});

// PUT /users/:id/role — update user role (Admin only)
router.put('/:id/role', requireAdmin, async (req, res) => {
  const targetUserId = parseInt(req.params.id);
  const { role } = req.body;

  if (!role || !RoleManager.isValidRole(role)) {
    return res.status(400).json({ message: 'Invalid role specified', validRoles: Object.values(USER_ROLES) });
  }

  if (targetUserId === req.session.userId) {
    await Logger.warn({ ...logCtx(req, 400), category: 'USER_MANAGEMENT', action: 'SELF_ROLE_CHANGE_ATTEMPT', message: 'User attempted to change their own role' });
    return res.status(400).json({ message: 'You cannot change your own role' });
  }

  try {
    const result = await RoleManager.updateUserRole(
      req.session.userId,
      targetUserId,
      role,
      req.session.username
    );

    res.json({ message: `Role updated from ${result.oldRole} to ${result.newRole}`, data: result });

  } catch (err) {
    await Logger.error({ ...logCtx(req, 500), category: 'USER_MANAGEMENT', action: 'UPDATE_USER_ROLE_ERROR', message: 'Failed to update user role', details: { error: err.message, targetUserId, requestedRole: role } });
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// DELETE /users/:id — delete user (Admin only)
router.delete('/:id', requireAdmin, async (req, res) => {
  const targetUserId = parseInt(req.params.id);

  if (targetUserId === req.session.userId) {
    return res.status(400).json({ message: 'You cannot delete your own account' });
  }

  let connection;
  try {
    connection = await connectToDatabase();

    const [userRows] = await connection.execute('SELECT username, role FROM users WHERE id = ?', [targetUserId]);
    if (userRows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    const deletedUser = userRows[0];
    await connection.execute('DELETE FROM users WHERE id = ?', [targetUserId]);

    await Logger.security({ ...logCtx(req, 200), category: 'USER_MANAGEMENT', action: 'DELETE_USER', message: `Deleted user: ${deletedUser.username}`, details: { deletedUserId: targetUserId, deletedUsername: deletedUser.username, deletedUserRole: deletedUser.role } });

    res.json({ message: `User ${deletedUser.username} deleted successfully` });

  } catch (err) {
    await Logger.error({ ...logCtx(req, 500), category: 'USER_MANAGEMENT', action: 'DELETE_USER_ERROR', message: 'Failed to delete user', details: { error: err.message, targetUserId } });
    res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    if (connection) connection.release();
  }
});

export default router;
