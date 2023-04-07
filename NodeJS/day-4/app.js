const http = require('http');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/shop');
const landingRoutes = require('./routes/landing');

const express = require('express');

const app = express();

// NOTE: THIS IS THE BODY PARSER, we can add for others too like file, json etc.

app.use(bodyParser.urlencoded({ extended: true }));

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

app.use(userRoutes);
app.use(adminRoutes);
app.use(landingRoutes);

// const server = http.createServer(app);
// server.listen(3000);

app.listen(4000);
// will do both the above tasks for me.