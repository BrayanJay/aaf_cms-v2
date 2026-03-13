import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import authRouter from './routes/authRoutes.js';
import commonRoutes from './routes/commonRoutes.js';
import branchRoutes from './routes/branchRoutes.js';
import productRoutes from './routes/productRoutes.js';
import profileRoutes from './routes/profileRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import loggerRoutes from './routes/loggerRoutes.js';
import userRoutes from './routes/userRoutes.js';
import sessionRoutes from './routes/sessionRoutes.js';
import newsRoutes from './routes/newsRoutes.js';
import session from 'express-session';
import path from 'path';
import { fileURLToPath } from 'url';
import { requestLogger, errorLogger } from './middleware/loggingMiddleware.js';
import Logger from './utils/logger.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

// Define allowed origins and their allowed methods
const accessControl = {
  'http://localhost:5173': ['GET', 'POST', 'PUT', 'DELETE'], // CMS Frontend
  'https://122.255.12.95': ['GET'], // Public Website
  '*': ['GET'], // Public Website
}; 

// Dynamic CORS handling
app.use((req, res, next) => {
  const origin = req.headers.origin || "*";
  const allowedMethods = accessControl["*"];

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    if (allowedMethods) {
      res.setHeader('Access-Control-Allow-Origin', origin);
      res.setHeader('Access-Control-Allow-Methods', allowedMethods.join(','));
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      res.setHeader('Access-Control-Allow-Credentials', 'true');
      return res.sendStatus(200);
    } else {
      return res.status(403).json({
        error: 'Forbidden',
        message: 'Preflight request from disallowed origin',
      });
    }
  }

  // Check if the origin is in our access list
  if (!allowedMethods) {
    return res.status(403).json({
      error: 'Forbidden',
      message: 'This origin is not allowed to access the API',
    });
  }

  // Check if the method is allowed for this origin
  if (!allowedMethods.includes(req.method)) {
    return res.status(403).json({
      error: 'Forbidden',
      message: `The ${req.method} method is not allowed from your origin`,
      allowedOrigin: origin,
      allowedMethods,
    });
  }

  // Apply correct CORS headers
  res.setHeader('Access-Control-Allow-Origin', origin);
  res.setHeader('Access-Control-Allow-Methods', allowedMethods.join(','));
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  next();
});

/* ======================================================
   Session Management
   ====================================================== */
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    name: 'aaf.cms.sid', // Custom session name to avoid conflicts
    cookie: {
      httpOnly: true,
      secure: false, // set to true in production with HTTPS
      maxAge: 3 * 60 * 60 * 1000, // 3 hours
      sameSite: 'lax',
    },
    rolling: true, // Reset expiry on user activity
    unset: 'destroy',
  })
);

/* ======================================================
   Middleware & Routes
   ====================================================== */
app.use(express.json());
app.use(requestLogger);

app.use('/auth', authRouter);
app.use('/data', commonRoutes);
app.use('/branch', branchRoutes);
app.use('/product', productRoutes);
app.use('/profile', profileRoutes);
app.use('/fileUpload', uploadRoutes);
app.use('/logs', loggerRoutes);
app.use('/users', userRoutes);
app.use('/sessions', sessionRoutes);
app.use('/news', newsRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'AAF CMS API Server is running', status: 'OK' });
});

app.use('/media', express.static(path.join(__dirname, 'media')));

/* ======================================================
   Error Handling & Logging
   ====================================================== */
app.use(errorLogger);

app.listen(3000, async () => {
  console.log('Server is Running on port 3000');

  await Logger.info({
    category: 'SYSTEM',
    action: 'SERVER_START',
    message: 'AAF CMS Server started successfully',
    details: {
      port: 3000,
      environment: process.env.NODE_ENV || 'development',
      timestamp: new Date().toISOString(),
    },
  });

  console.log('Role-based access control system is active');
});
