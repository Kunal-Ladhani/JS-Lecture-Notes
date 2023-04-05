const fileSystem = require('fs');
// Nodejs has some builtin modules.
// fs - to work with files
// http - make http requests
// os- to work with os
// etc...
// which vanilla in-browser JS does not have.

// helps us write server side code
// the transpiter had V8 engine embededed in it (written in C++)
// compilers/parses/interprets the JS code to machine code.

fileSystem.writeFileSync(`hello.txt`, `Hello World! \nwrote this file using Node.js \nMy name is kunal Ladhani`);

const fileContent = fileSystem.readFileSync(`./hello.txt`);
console.log(fileContent.toLocaleString());