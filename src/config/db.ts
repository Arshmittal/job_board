import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();
require('dotenv').config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
db.getConnection()
  .then(() => {
    console.log('Connected to MySQL');
  })
  .catch((err) => {
    console.error('MySQL connection error:', err);
  });


export default db;
