// backend/server.js

const { connectDatabase } = require('../src/database/connect');
const http = require("./httpServer");
const https = require("./httpsServer");

async function startServer() {

  try {
    await connectDatabase();
    console.log('Connected to database');
  } catch (err) {
    console.error('Failed to connect to database', err);
    process.exit(1);
  }

  if (process.env.NODE_ENV === 'https') {
    https;
  } else {
    http;
  }



}

startServer();
