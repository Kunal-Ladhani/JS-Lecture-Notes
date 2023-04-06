const http = require('http');
const bodyParser = require('body-parser');

const express = require('express');

const app = express();

/*
app.use((req, res, next) => {
    console.log("Im in middleware");
    next(); // allow the request to continue to next middleware in sequence
});

app.use((req, res, next) => {
    console.log("Im inside another middleware");
    next(); // allow the request to continue to next middleware in sequence
});

*/


app.use('/add-user', (req, res, next) => {
    console.log("Im inside user middleware", req.originalUrl);
    res.send(`<h1>hello from add user path.</h1>`);
    // next();
});

app.use('/add-friend', (req, res, next) => {
    console.log("Im inside friend middleware", req.originalUrl);
    // next();
    res.send(`<h1>hello from add friend path.</h1>`);
});

app.use('/', (req, res, next) => {
    console.log("I am root path middleware, I always run.", req.originalUrl);
    res.send(`<h1>hello from root path.</h1>`);
    // next();
});

// const server = http.createServer(app);
// server.listen(3000);

app.listen(4000);
// will do both the above tasks for me.