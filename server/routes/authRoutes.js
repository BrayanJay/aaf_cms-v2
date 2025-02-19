import express from 'express'
import {connectToDatabase} from '../lib/db.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import 'dotenv/config';

const router = express.Router()

router.post('/register', async (req, res) => {
    const {username, password} = req.body;

    let db;
    try {
        db = await connectToDatabase()
        const [rows] = await db.query('SELECT * FROM users WHERE username = ?', [username])
        if(rows.length > 0) {
            return res.status(409).json({message : "user already existed"})
        }
        const hashPassword = await bcrypt.hash(password, 10)
        await db.query("INSERT INTO users (username, password) VALUES (?, ?)", 
            [username, hashPassword])
        
        return res.status(201).json({message: "user created successfully"})
    } catch(err) {
        return res.status(500).json(err.message)

    } finally {
        if (db) db.release(); // ✅ Always release the connection
      }
})

router.post('/login', async (req, res) => {
    const {username, password} = req.body;

    let db;
    try {
        db = await connectToDatabase()
        const [rows] = await db.query('SELECT * FROM users WHERE username = ?', [username])
        if(rows.length === 0) {
            return res.status(404).json({message : "user not existed"})
        }
        const isMatch = await bcrypt.compare(password, rows[0].password)
        if(!isMatch) {
            return res.status(401).json({message : "wrong password"})
        }
        const token = jwt.sign({id: rows[0].id}, process.env.JWT_KEY, {expiresIn: '3h'})
        
        return res.status(201).json({token: token})
    } catch(err) {
        return res.status(500).json(err.message)

    } finally {
        if (db) db.release(); // ✅ Always release the connection
      }
})



// This function is used to verify the token (user)

const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers['authorization'].split(' ')[1];
        if(!token) {
            return res.status(403).json({message: "No Token Provided"})
        }
        const decoded = jwt.verify(token, process.env.JWT_KEY)
        req.userId = decoded.id;
        next()
    }  catch(err) {
        return res.status(500).json({message: "server error"})
    }
}

// Protected routes ---- Start ---------------------------------------------------------------- //

const getUserData = async (req, res, page) => {

    let db;
    try {
        db = await connectToDatabase();
        const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [req.userId]);
        if (rows.length === 0) {
            return res.status(404).json({ message: "user not existed" });
        }
        return res.status(201).json({ page, user: rows[0] });
    } catch (err) {
        return res.status(500).json({ message: "server error" });

    } finally {
        if (db) db.release(); // ✅ Always release the connection
      }
};

router.get('/home', verifyToken, (req, res) => getUserData(req, res, 'home'));
router.get('/uploadspage', verifyToken, (req, res) => getUserData(req, res, 'uploadspage'));
router.get('/landingpagecontents', verifyToken, (req, res) => getUserData(req, res, 'landingpagecontents'));
router.get('/aboutpagecontents', verifyToken, (req, res) => getUserData(req, res, 'aboutpagecontents'));
router.get('/productspagecontents', verifyToken, (req, res) => getUserData(req, res, 'productspagecontents'));
router.get('/investorrelationspagecontents', verifyToken, (req, res) => getUserData(req, res, 'investorrelationspagecontents'));
router.get('/careerspagecontents', verifyToken, (req, res) => getUserData(req, res, 'careerspagecontents'));
router.get('/contactpagecontents', verifyToken, (req, res) => getUserData(req, res, 'contactpagecontents'));

router.get('/goldloanpagecontents', verifyToken, (req, res) => getUserData(req, res, 'goldloanpagecontents'));
router.get('/fixeddepositspagecontents', verifyToken, (req, res) => getUserData(req, res, 'fixeddepositspagecontents'));
router.get('/leasingpagecontents', verifyToken, (req, res) => getUserData(req, res, 'leasingpagecontents'));
router.get('/mortgagepagecontents', verifyToken, (req, res) => getUserData(req, res, 'mortgagepagecontents'));
router.get('/forexpagecontents', verifyToken, (req, res) => getUserData(req, res, 'forexpagecontents'));
router.get('/luckewalletpagecontents', verifyToken, (req, res) => getUserData(req, res, 'luckewalletpagecontents'));


// Protected routes ---- End ---------------------------------------------------------------- //


export default router;