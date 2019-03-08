const fs = require('fs');
const path = require('path');

// Create folder name 'test' in directory
fs.mkdir(path.join(__dirname, '/test'), {}, function (err) {
  if (err) throw err;
  console.log('Folder created...');
});

// Create hello.txt and write to file 'Hello World'
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', err => {
  if (err) throw err;
  console.log('File written to...');
});

// use writeFile to overwrite contents
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'I love Node.js', err => {
  if (err) throw err;
  console.log('File overwrite to...');
});

// File append
fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'I love Node.js', err => {
  if (err) throw err;
  console.log('File append to...');
});

// Read file MUST add utf8 for characters
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Folder created...' + data);
});

// Rename file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'hello.txt'),
  (err) => {
    if (err) throw err;
    console.log('File rename...');
  });
