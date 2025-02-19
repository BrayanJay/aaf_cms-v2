import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool({
        host: process.env.DB_HOST || "localhost",
        user: process.env.DB_USER || "root",
        password: process.env.DB_PASSWORD || "",
        database: process.env.DB_NAME || "aaf_cms",
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
