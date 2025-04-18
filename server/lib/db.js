import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        waitForConnections: true,
        connectionLimit: 5, // Adjust based on your needs
        queueLimit: 0,
      });


  export const connectToDatabase = async () => {
    try {
      return await pool.getConnection();
    } catch (err) {
      console.error("Database connection error:", err);
      throw err;
    }
};
