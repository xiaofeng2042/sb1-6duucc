console.log('Hello, Node.js!');

// Example of using a core Node.js module
const os = require('os');
console.log(`This script is running on ${os.platform()} with ${os.cpus().length} CPU cores.`);

// Example of a simple HTTP server
const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World from Node.js!');
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});