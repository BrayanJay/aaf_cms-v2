import express from 'express'
import { connectToDatabase } from '../lib/db.js'
import bcrypt from 'bcrypt'
import crypto from 'crypto'
import 'dotenv/config'
import verifySessionToken from '../middleware/authToken.js'
import { authLogger, dbLogger } from '../middleware/loggingMiddleware.js'

const router = express.Router()

// LOGIN
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        await authLogger.loginFailed(req, username || 'unknown', 'Missing username or password')
        return res.status(400).json({ message: 'Username and password are required' })
    }

    let db;
    try {
        db = await connectToDatabase()
        const [rows] = await db.query('SELECT * FROM users WHERE username = ?', [username])
        if (rows.length === 0) {
            await authLogger.loginFailed(req, username, 'User not found')
            return res.status(404).json({ message: 'User not found' })
        }

        const user = rows[0]
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            await authLogger.loginFailed(req, username, 'Incorrect password')
            return res.status(401).json({ message: 'Incorrect password' })
        }

        const sessionToken = crypto.randomBytes(64).toString('hex')

        req.session.userId = user.id
        req.session.username = user.username
        req.session.userRole = user.role
        req.session.token = sessionToken

        await db.query('UPDATE users SET token = ?, last_login = NOW() WHERE id = ?', [sessionToken, user.id])

        await authLogger.loginSuccess(req, user.id, user.username)
        await dbLogger.success('UPDATE', 'users', user.id, user.username, { action: 'session_token_update' })

        return res.status(200).json({
            message: 'Login successful',
            user: { id: user.id, username: user.username, role: user.role }
        })
    } catch (err) {
        console.error('Login error:', err)
        await authLogger.loginFailed(req, username, `Server error: ${err.message}`)
        return res.status(500).json({ message: 'Internal Server Error' })
    } finally {
        if (db) db.release()
    }
})

// LOGOUT
router.post('/logout', async (req, res) => {
    const userId = req.session?.userId
    const username = req.session?.username

    req.session.destroy(async (err) => {
        if (err) {
            await authLogger.loginFailed(req, username || 'unknown', `Logout failed: ${err.message}`)
            return res.status(500).json({ message: 'Logout failed' })
        }

        await authLogger.logout(req, userId, username)
        res.clearCookie('aaf.cms.sid')
        return res.status(200).json({ message: 'Logged out successfully' })
    })
})

// GET CURRENT USER
router.get('/me', verifySessionToken, async (req, res) => {
    let db;
    try {
        db = await connectToDatabase()
        const [rows] = await db.query(
            'SELECT id, username, role, created_at, last_login FROM users WHERE id = ?',
            [req.session.userId]
        )
        if (rows.length === 0) {
            return res.status(404).json({ message: 'User not found' })
        }
        return res.status(200).json(rows[0])
    } catch (err) {
        return res.status(500).json({ message: 'Internal Server Error' })
    } finally {
        if (db) db.release()
    }
})

export default router
