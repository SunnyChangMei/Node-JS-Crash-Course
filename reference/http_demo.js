const http = require('http');

// Create server object
http.createServer((req, res) => {
  // write response
  res.write('server running hello world');
  res.end();
}).listen(5000, () => console.log('Server running'));
