const path = require('path');

//Base file name
console.log(__filename);

//Directory name
console.log(__dirname);

// Show file extension
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename));

// Concatenate paths
// ../test/hello.html
console.log(path.join(__filename), 'test', 'hello.html');
