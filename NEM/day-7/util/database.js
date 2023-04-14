// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('node-complete', 'root', 'nodecomplete', {
//   dialect: 'mysql',
//   host: 'localhost'
// });

// module.exports = sequelize;

// we will now use mongodb here, no-sql database so we can have db with no schema
// schema == rigid structure

// relations are made in 2 ways - embed one document inside the parent document
// or embed just the reference of child document inside the parent document.

const mongodb = require('mongodb');
const mongodbClient = mongodb.mongodbClient;

mongodbClient.connect(process.env.MONGO_URI);