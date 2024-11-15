const path = require('path');
// core nodejs module

const express = require('express');
const router = express.Router();

const rootDir = require('../helper/path');

router.get('/add-user', (req, res, next) => {
    console.log(req.method);    // bedefault - GET
    console.log("Im inside user middleware", req.originalUrl);
    res.send(`<h1>hello from add user path.</h1>`);
    // next();
});

router.get('/add-product', (req, res, next) => {

    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    // res.send(`<form action="/admin/add-product" method="post">
    //     <input type="text" name="title">
    //     <button type="submit">ADD PRODUCT</button>
    // </form>`);
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body);

    // localStorage.setItem('item', req.body);
    /*
        When you're rendering on the server, you do not have a browser 
        and thus you do not have access to all the APIs that the browser provides,
        including localStorage.
    */

    res.redirect("/user/shop");
});

module.exports = router; 