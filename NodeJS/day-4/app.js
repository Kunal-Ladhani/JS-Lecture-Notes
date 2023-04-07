const http = require('http');
const path = require('path');

const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/shop');
const landingRoutes = require('./routes/landing');
const generalRoutes = require('./routes/general');

const rootDir = require('./helper/path');

const express = require('express');

const app = express();

// NOTE: THIS IS THE BODY PARSER, we can add for others too like file, json etc.

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(rootDir, 'public')));
// builtin middleware function, used to serve static files by giving read only access.

// NOTE: BELOW ARE ALL THE ROUTING MIDDLEWARE
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

// app.get('/user', (req, res, next) => {
//     console.log("a GET request was made at ->" + req.originalUrl);
// });

// app.post('/user', (req, res, next) => {
//     console.log("a POST request was made at ->" + req.originalUrl);
// });

// app.put('/user', (req, res, next) => {
//     console.log("a PUT request was made at ->" + req.originalUrl);
// });

// app.patch('/user', (req, res, next) => {
//     console.log("a PATCH request was made at ->" + req.originalUrl);
// });

// app.delete('/user', (req, res, next) => {
//     console.log("a DELETE request was made at ->" + req.originalUrl);
// });

app.use('/user', userRoutes);
app.use('/admin', adminRoutes);  // take common part of routes, and add that as a filter here.
app.use(landingRoutes);
app.use(generalRoutes);

// const server = http.createServer(app);
// server.listen(3000);

app.listen(4000);
// will do both the above tasks for me.

/* IMPORTANT: 

    Express.js is a Node.js framework 
    - a unopiniated (has no rigid architechtural style)
    - minimalistic framework

    - its a package that adds a bunch of extra utility functions and tools to Node.js
    - clearly specifies a set of rules on how the server side app should be built (middleware)
    - it all about middleware and understanding the flow of code through all those layers of middleware functions.

    - highly extensible and other packages can be plugged into it easily!
    - eg- we plugged in body-parser etc easily!
    - these packages expose such middleware functions 
    - we can easily add them thus the request gets funneled through them.
*/