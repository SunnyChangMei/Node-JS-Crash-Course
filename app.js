/* eslint-disable default-case */
// const Person = require('./person'); //current file
// // import Person from './person';//! can't run this yet

// const person1 = new Person('John', 25);

// person1.greeting();

// const Logger = require('./logger');

// const logger = new Logger();

// logger.on('message', (data) => console.log(`Called Listener: ${data}`));

// logger.log('hello world');
// logger.log('hello');
// logger.log('world');

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // if (req.url === '/') {
  //   fs.readFile(
  //     path.join(__dirname, 'public', 'index.html'), //!can change to about.html
  //     (err, content) => {
  //       if (err) throw err;
  //       res.writeHead(200, {
  //         'Content-Type': 'text/html'
  //       });
  //       res.end(content);
  //     }
  //   );
  // }

  // if (req.url === '/api/users') {
  //   const users = [
  //   { name: 'Bob Smith', age: 40 },
  //   { name: 'John Doe', age: 30 }
  //   ];
  //   res.writeHead(200, { 'Content-Type': 'application/json' });
  //   res.end(JSON.stringify(users));
  // }

  //! Build file path dynamic
  let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
  //! Extension of file
  let extname = path.extname(filePath);

  // Initial content type
  let contentType = 'text/html';

  //check ext and set content type
  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'img/png';
      break;
    case '.jpg':
      contentType = 'img/jpg';
      break;
  }
  // Read file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        //page not found
        fs.readFile(path.join(__dirname, 'public', '404.html'), (_err, content) => {
          res.writeHead(200, {
            'Content-Type': 'text/html'
          });
          res.end(content, 'utf8');
        });
      } else {
        // Some server error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // Success
      res.writeHead(200, {
        'Content-Type': contentType
      });
      res.end(content, 'utf8');
    }
  });
});


const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
