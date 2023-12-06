// const Sequelize = require('sequelize');

// const sequelize = require('../util/database');

// const Product = sequelize.define('product', {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     allowNull: false,
//     primaryKey: true
//   },
//   title: Sequelize.STRING,
//   price: {
//     type: Sequelize.DOUBLE,
//     allowNull: false
//   },
//   imageUrl: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   description: {
//     type: Sequelize.STRING,
//     allowNull: false
//   }
// });

// module.exports = Product;

const mongodb = require('mongodb');
const mongoConnect = require('../util/database');
// if we use this way we will have to establish connection to MongoDB again and again
// this is not feasible, we also do not disconnect after doing our operation.
const getDB = require('../util/database').getDB;

class Product {

  constructor(title, price, desc, imgUrl, prodId, userId) {
    this.title = title;
    this.price = price;
    this.description = desc;
    this.imageUrl = imgUrl;
    this._id = prodId ? new mongodb.ObjectId(prodId) : null;
    this.userId = userId;
  }

  save() {
    const db = getDB();
    let dbOp;

    if (this._id) {
      // update the exisiting product
      dbOp = db.collection('products')
        .updateOne({ _id: this._id }, { $set: this });
    } else {
      dbOp = db.collection('products')
        .insertOne(this);
    }

    return dbOp
      .then((result) => {
        console.log(result);
      }).catch((err) => {
        console.error(err);
      });
  }

  static fetchAll() {
    const db = getDB();

    return db.collection('products').find().toArray()
      .then(products => {
        console.log(products);

        return products;
      })
      .catch(err => console.error(err));
    // will return a cursor so that we can point to different documents and move around,
    // we can also implement pagination which we will do later.

    // .toArray() will convert all the documents to array
  }

  static findById(productId) {
    const db = getDB();

    return db
      .collection('products')
      .find({ _id: new mongodb.ObjectId(productId) })
      .next()
      .then(product => {
        // console.log(product);
        return product;
      })
      .catch(err => console.error(err));
  }

  static deleteById(productId) {
    const db = getDB();
    const objectId = new mongodb.ObjectId(productId);

    return db.collection('products')
      .deleteOne({ _id: objectId })
      .then(result => {
        console.log("DELETED THE ELEMENT...");
        console.log(result);
      })
      .catch(err => console.error(err));
  }
}

module.exports = Product;