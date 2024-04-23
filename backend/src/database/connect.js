// backend/src/database/connect.js 

const mysql = require('mysql2/promise');
const dbConfig = require('./config');

let dbConnection;

const connectDatabase = async () => {
  try {
    dbConnection = await mysql.createConnection(dbConfig);
  } catch (err) {
    throw err;
  }
};

module.exports = { connectDatabase };
