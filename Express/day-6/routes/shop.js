const path = require('path');

const express = require('express');

const procductsController = require('../controllers/products');
const router = express.Router();

router.get('/', procductsController.getProduct);

module.exports = router;

// we have all the rendering etc code here
// this is like a controller.

// as no of routes grows, it will get very big.
// so we need to separate the files.
