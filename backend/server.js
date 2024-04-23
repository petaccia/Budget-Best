// backend/server.js

const express = require('express');
const app = express();
const port = 5000;

const { connectDatabase } = require('./src/database/connect');

async function startServer() {

  try {
    await connectDatabase();
    console.log('Connected to database');
  } catch (err) {
    console.error('Failed to connect to database', err);
    process.exit(1);
  }

  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.listen(port, () => {
    console.log(`Backend running on port ${port}`);
  });

}

startServer();
