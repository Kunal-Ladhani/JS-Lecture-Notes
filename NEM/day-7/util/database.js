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
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
    MongoClient.connect('mongodb+srv://admin:admin123@omegacluster.u8d7bop.mongodb.net/?retryWrites=true&w=majority')
        .then((client) => {
            console.log("Connected...");
            _db = client.db();
            callback(client);
        }).catch((err) => {
            console.error(err);
            throw err;
        });
};

const getDB = () => {
    if (_db) {
        return _db;
    }
    throw 'NO DB FOUND';
}

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;