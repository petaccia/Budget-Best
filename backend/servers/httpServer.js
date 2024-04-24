const http = require('http');
const { connectDatabase } = require('../src/database/connect');
const app = require('../src/app');

const PORT = process.env.PORT || 3000;

const server = http.createServer( app);

async function startHttpServer() {

  await connectDatabase();
  
  server.listen(PORT, () => {
    console.log(`HTTP Server running on http://localhost:${PORT}`);
    console.log(`Access the HTTP server at: http://localhost:${PORT}`);
  
  });
}

startHttpServer();