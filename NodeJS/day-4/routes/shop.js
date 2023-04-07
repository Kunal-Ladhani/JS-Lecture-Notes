const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    console.log("Im inside shop middleware", req.originalUrl);
    res.send(`<h1>hello from shop path.</h1>`);
    // next();
});

module.exports = router;