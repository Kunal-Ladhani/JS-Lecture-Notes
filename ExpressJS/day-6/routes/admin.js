const express = require('express');

const router = express.Router();

const productsController = require('../controllers/products');

// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct);
// just pass a ref to that function
// do not add () at the end of the functions

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProducts);

exports.routes = router;
