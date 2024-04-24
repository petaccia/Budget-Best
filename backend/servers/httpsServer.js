// Configuration et démarrage du serveur HTTPS 
const https = require('https');
const fs = require('fs');
const { connectDatabase } = require('../src/database/connect');
const app = require('../src/app');

const options = {
  key: fs.readFileSync('C:/Users/User/Desktop/projet_Perso/Budget Best Complet/Budget Best/backend/.ssl/private.key'),
  cert: fs.readFileSync('C:/Users/User/Desktop/projet_Perso/Budget Best Complet/Budget Best/backend/.ssl/certificate.crt'),
};

const PORTHTTPS = process.env.PORTHTTPS || 3443;

async function startHttpsServer() {
  try {
    await connectDatabase();
    console.log('Connected to database');
  } catch (err) {
    console.error('Failed to connect to database', err);
    process.exit(1);
  }

https.createServer(options, app).listen(PORTHTTPS, () => {
  console.log(`HTTPS Server running on https://localhost:${PORTHTTPS}`);
  console.log(`Access the HTTPS server at: https://localhost:${PORTHTTPS}`);
});

}

startHttpsServer();