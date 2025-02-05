const mysql = require("mysql2/promise");
require("dotenv").config();

let connection; // Store the single database connection instance

// Function to initialize DB connection at app start
async function initDB() {
    try {
        connection = await mysql.createConnection({
            host: process.env.DB_HOST || "localhost",
            user: process.env.DB_USER || "root",
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME || "inventory_management",
        });

        console.log("✅ Connected to MySQL database.");
    } catch (error) {
        console.error("❌ MySQL Connection Error:", error);
        process.exit(1); // Exit process if DB connection fails
    }
}

// Function to get the existing connection instance
function getDB() {
    if (!connection) {
        throw new Error("❌ Database not initialized. Call initDB() first.");
    }
    return connection;
}

// Function to execute queries with parameters
async function query(sql, params = []) {
    try {
        const db = getDB();
        const [rows] = await db.execute(sql, params);
        return rows;
    } catch (error) {
        console.error("❌ Database Query Error:", error);
        throw error;
    }
}

module.exports = { initDB, getDB, query };
