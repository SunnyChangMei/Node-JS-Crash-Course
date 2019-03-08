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
  if (req.url === '/') {
    res.end('<h1>Homepage</h1>');
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
