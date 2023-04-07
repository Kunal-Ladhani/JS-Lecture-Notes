const path = require('path');   // core nodejs module

const express = require('express');
const router = express.Router();

const rootDir = require('../helper/path');

router.use('/', (req, res, next) => {
    console.log("I am general path middleware.", req.originalUrl);
    res.status(404);
    res.sendFile(path.join(rootDir, 'views', '404.html'));

    // res.send(`<h1>Error 404 page!</h1>`);
    // next();
});

module.exports = router;
