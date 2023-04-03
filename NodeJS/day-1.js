const fileSystem = require('fs');
// has some builtin modules to work with files
// make http requests
// etc
// which vanilla JS (in-browser JS) does not have.


// helps us write server side code
// the transpiter had V8 engine embededed in it (written in C++)
// compilers/parses/interprets the JS code to machine code.
// for more see udemy video
fileSystem.writeFileSync(`hello.txt`, `Hello World! \nwrote this file using Node.js \nMy name is kunal Ladhani`);

const fileContent = fileSystem.readFileSync(`./hello.txt`);
console.log(fileContent.toLocaleString());