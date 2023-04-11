const express = require('express');
// import all controllers
// import SessionController from './app/controllers/SessionController';
const services = require('../services/render');
const controller = require('../controllers/controller');

const route = express.Router();

// Add routes
// routes.get('/', SessionController.store);
// routes.post('/', SessionController.store);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

/**
 * @description root route
 * @method GET
 */
route.get('/', services.homeRoute);

route.get('/add-user', services.addUser);

route.get('/update-user', services.updateUser);

// CRUD API
route.get('/api/user', controller.findUser);
route.post('/api/user', controller.createUser);
route.put('/api/user:id', controller.updateUser);
route.delete('/api/user:id', controller.deleteUser);


module.exports = route;