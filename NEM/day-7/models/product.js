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
// const mongoConnect = require('../util/database');
// if we use this way we will have to establish connection to MongoDB again and again
// this is not feasible, we also do not disconnect after doing our operation.


const getDB = require('../util/database').getDB;
class Product {
    constructor(title, price, desc, imgUrl) {
        this.title = title;
        this.price = price;
        this.description = desc;
        this.imgUrl = imgUrl;
    }

    save() {
        const db = getDB();
        db.collection('products').insertOne(this).then((result) => {
            console.log(result);
        }).catch((err) => {
            console.error(err);
        });;
    }
}