/* Modules */

// Nodejs has some builtin modules (extra APIs provided)
// fs - to work with files
// http - make http requests
// os- to work with os
// http
// stream
// etc...
// which vanilla in-browser JS does not have.

// no need to remember all modules names functionality etc.
// read the documentation and do it.

// CJS - Common JS
// way of managing import export of dependencies
// we can bundle common functionality together under one name.

const sum = require("./sum");
// module.exports = sum
console.log(sum(4, 5));

const os = require('os');

console.log(os.homedir());
console.log(os.type());
console.log(os.arch());
console.log(os.cpus().length);
console.log(os.userInfo());


const fileSystem = require('fs');

const fileContent = fileSystem.readFileSync(`./hello.txt`);
// assumes all files as a buffer, and reads it like that.
// Buffer : reads it as a array of bytes
console.log(fileContent.toLocaleString());

fileSystem.writeFileSync(`hello.txt`, `Hello World! \nwrote this file using Node.js \nMy name is kunal Ladhani`);

const hello = fileSystem.readFileSync(`./hello.txt`, { encoding: "utf-8" });
console.log(hello);
// all functions have a xxxSync() - synchronous option available
// it executes the functionality synchronously => BAD IDEA!
// sync has BLOCKING I/O so its not usually used.


//ESM - ES Modules
// new way of managing import export of dependencies
// introduced in ES6
// like react
// => import sum from "./sum";
// => export { sum }

// but you will have to change cofig inside package.json
// to generate it we need to create new node project
// npm init
// will ask basics and you can now have package.json config file.

// IMPORTANT: you are a backend dev, should always have a habit of reading documentation.
