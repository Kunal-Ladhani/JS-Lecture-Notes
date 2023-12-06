const path = require('path');   // core nodejs module

const express = require('express');
const router = express.Router();

const rootDir = require('../helper/path');

router.get('/shop', (req, res, next) => {
    console.log("Im inside shop middleware", req.originalUrl);
    // res.send(`<h1>hello from shop path.</h1>`);
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    // next();
});

module.exports = router;