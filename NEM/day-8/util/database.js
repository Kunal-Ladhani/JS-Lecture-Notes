// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('node-complete', 'root', 'nodecomplete', {
//   dialect: 'mysql',
//   host: 'localhost'
// });

// module.exports = sequelize;

/** 
 * we will now use mongodb here, A no-sql database.
 * so we can have db with no schema
 * schema ==> rigid structure
 * 
 * relations are made in 2 ways - 
 * embed one document inside the parent document
 * or embed just the reference of child document inside the parent document.
 * 
 * we will use mongoDB driver to manage connections and queries here
 * later we will use mongoose.
 */
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callbackFunction => {
  MongoClient.connect(process.env.MONGO_URI, { useUnifiedTopology: true })
    .then(client => {
      console.log(`Connected to MongoDB...`);
      _db = client.db();
      callbackFunction();
    })
    .catch(err => {
      console.error(err);
      throw err;
    });
}

const getDB = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;