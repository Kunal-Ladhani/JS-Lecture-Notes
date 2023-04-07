const express = require('express');
const router = express.Router();

app.use('/', (req, res, next) => {
    console.log("I am root path middleware, I always run.", req.originalUrl);
    res.send(`<h1>hello from root path.</h1>`);
    // next();
});

module.exports = router;