import express from 'express'
import { connectToDatabase } from '../lib/db.js'
import bcrypt from 'bcrypt'
import crypto from 'crypto'
import 'dotenv/config'
import verifySessionToken from '../middleware/authToken.js'

const router = express.Router()

// REGISTER route
router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    let db;
    try {
        db = await connectToDatabase()
        const [rows] = await db.query('SELECT * FROM users WHERE username = ?', [username])
        if (rows.length > 0) {
            return res.status(409).json({ message: "User already exists" })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        await db.query("INSERT INTO users (username, password) VALUES (?, ?)", [username, hashedPassword])
        return res.status(201).json({ message: "User registered successfully" })
    } catch (err) {
        return res.status(500).json({ message: err.message })
    } finally {
        if (db) db.release()
    }
})

// LOGIN route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" })
    }

    let db;
    try {
        db = await connectToDatabase()
        const [rows] = await db.query('SELECT * FROM users WHERE username = ?', [username])
        if (rows.length === 0) {
            return res.status(404).json({ message: "User not found" })
        }

        const user = rows[0]
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(401).json({ message: "Incorrect password" })
        }

        const sessionToken = crypto.randomBytes(64).toString('hex')

        // Save token in session and database
        req.session.userId = user.id
        req.session.token = sessionToken
        await db.query('UPDATE users SET token = ? WHERE id = ?', [sessionToken, user.id])

        return res.status(200).json({ message: "Login successful" })
    } catch (err) {
        console.error("Login eroor: ", err)
        return res.status(500).json({ message: err.message })
    } finally {
        if (db) db.release()
    }
})

//Logout Route
router.post('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).json({ message: 'Logout failed' });
        }
        res.clearCookie('connect.sid'); // Default session cookie name
        return res.status(200).json({ message: 'Logged out successfully' });
    });
});

// Helper to fetch user info
const getUserData = async (req, res, page) => {
    let db;
    try {
        db = await connectToDatabase()
        const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [req.session.userId])
        if (rows.length === 0) {
            return res.status(404).json({ message: "User not found" })
        }
        return res.status(200).json({ page, user: rows[0] })
    } catch (err) {
        return res.status(500).json({ message: "Server error" })
    } finally {
        if (db) db.release()
    }
}

// PROTECTED ROUTES
router.get('/home', verifySessionToken, (req, res) => getUserData(req, res, 'home'))
router.get('/uploadspage', verifySessionToken, (req, res) => getUserData(req, res, 'uploadspage'))
router.get('/landingpagecontents', verifySessionToken, (req, res) => getUserData(req, res, 'landingpagecontents'))
router.get('/aboutpagecontents', verifySessionToken, (req, res) => getUserData(req, res, 'aboutpagecontents'))
router.get('/productspagecontents', verifySessionToken, (req, res) => getUserData(req, res, 'productspagecontents'))
router.get('/investorrelationspagecontents', verifySessionToken, (req, res) => getUserData(req, res, 'investorrelationspagecontents'))
router.get('/careerspagecontents', verifySessionToken, (req, res) => getUserData(req, res, 'careerspagecontents'))
router.get('/contactpagecontents', verifySessionToken, (req, res) => getUserData(req, res, 'contactpagecontents'))
router.get('/goldloanpagecontents', verifySessionToken, (req, res) => getUserData(req, res, 'goldloanpagecontents'))
router.get('/fixeddepositspagecontents', verifySessionToken, (req, res) => getUserData(req, res, 'fixeddepositspagecontents'))
router.get('/leasingpagecontents', verifySessionToken, (req, res) => getUserData(req, res, 'leasingpagecontents'))
router.get('/mortgagepagecontents', verifySessionToken, (req, res) => getUserData(req, res, 'mortgagepagecontents'))
router.get('/forexpagecontents', verifySessionToken, (req, res) => getUserData(req, res, 'forexpagecontents'))
router.get('/luckewalletpagecontents', verifySessionToken, (req, res) => getUserData(req, res, 'luckewalletpagecontents'))
router.get('/branchdetails', verifySessionToken, (req, res) => getUserData(req, res, 'branchdetails'))
router.get('/documents', verifySessionToken, (req, res) => getUserData(req, res, 'documents'))

export default router
