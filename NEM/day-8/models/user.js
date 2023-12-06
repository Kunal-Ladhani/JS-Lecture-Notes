// const Sequelize = require('sequelize');

// const sequelize = require('../util/database');

// const User = sequelize.define('user', {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     allowNull: false,
//     primaryKey: true
//   },
//   name: Sequelize.STRING,
//   email: Sequelize.STRING
// });

const mongodb = require('mongodb');
const { get } = require('../routes/admin');
const getDB = require('../util/database').getDB;

const ObjectId = mongodb.ObjectId;

class User {
  constructor(name, email, userId, cart) {
    this.name = name;
    this.email = email;
    this._id = userId ? new ObjectId(userId) : null;
    this.cart = cart;
  }

  save() {
    const db = getDB();
    let dbOps;

    if (this._id) {
      // update existing user
      dbOps = db.collection('users')
        .updateOne({ _id: this._id }, { $set: this });
    } else {
      // create new user in db
      dbOps = db.collection('users')
        .insertOne(this);
    }
    return dbOps.then((result) => {
      console.log(result);
    }).catch((err) => {
      console.error(err);
    });
  }

  static fetchAll() {
    const db = getDB();

    return db.collection('users')
      .find()
      .toArray()
      .then(result => console.log(result))
      .catch(err => console.error(err));
  }

  static findById(userId) {
    const db = getDB();
    const objectId = new ObjectId(userId);

    return db.collection('users')
      .findOne({ _id: objectId })
      .then(user => {
        console.log(user);
        return user;
      })
      .catch(err => console.error(err));
  }

  static deleteById(userId) {
    const db = getDB();
    const objectId = new ObjectId(userId);

    return db.collection('users')
      .deleteOne({ _id: objectId })
      .then(result => {
        console.log("DELETED THE USER");
        console.log(result);
      })
      .catch(err => console.error(err));
  }

  addToCart(product) {
    const db = getDB();

    // -1 if does prod does not exist in cart
    // else index of that product in cart items array
    const cartProductIdx = this.cart.items.findIndex(cartProd => {
      return cartProd.productId.toString() === product._id.toString();
    });

    const updatedCartItems = [...this.cart.items];
    let newQuantity = 1;

    if (cartProductIdx >= 0) {
      // product exists in cart
      newQuantity = this.cart.items[cartProductIdx].quantity + 1;
      updatedCartItems[cartProductIdx].quantity = newQuantity;
    } else {
      updatedCartItems.push({
        productId: ObjectId(product._id),
        quantity: newQuantity
      });
    }

    const updatedCart = {
      items: updatedCartItems
      // items: [{
      //   productId: product._id,
      //   quantity: 1
      // }]
    };

    return db.collection('users')
      .updateOne(
        { _id: new ObjectId(this._id) },
        { $set: { cart: updatedCart } }
      );
  }

  getCart() {
    // return this.cart;
    const db = getDB();

    const prodIds = this.cart.items.map(prod => {
      return prod.productId;
    });

    return db.collection('products')
      .find({ _id: { $in: prodIds } })
      .toArray()
      .then(products => {
        return products.map(prod => {
          return {
            ...prod,
            quantity: this.cart.items.find(item => {
              return item.productId.toString() === prod._id.toString();
            }).quantity
          };
        });
      });
  }

  deleteProductFromCart(productId) {
    const updatedCartItems = this.cart.items.filter(item => {
      return item.productId.toString() !== productId.toString();
    });

    const db = getDB();

    return db.collection('users')
      .updateOne(
        { _id: ObjectId(this._id) },
        { $set: { cart: { items: updatedCartItems } } }
      );
  }

  addOrder() {
    const db = getDB();

    return this.getCart()
      .then(products => {
        let totalAmount = 0;
        let totalQuantity = 0;

        products.forEach(product => {
          totalAmount += parseInt(product.price);
          totalQuantity += parseInt(product.quantity);
        });

        return db.collection('orders').insertOne({
          userId: ObjectId(this._id),
          products: products,
          quantity: totalQuantity,
          price: totalAmount
        });
      })
      .then(result => {
        this.cart = { items: [] };
        return db
          .collection('users')
          .updateOne(
            { _id: new ObjectId(this._id) },
            { $set: { cart: { items: [] } } }
          );
      })
      .catch(err => console.error(err));
  }

  getOrders() {
    const db = getDB();

    return db
      .collection('orders')
      .find({ userId: new ObjectId(this._id) })
      .toArray();
  }
}

module.exports = User;
