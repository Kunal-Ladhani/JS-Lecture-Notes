const mongodb = require('mongodb');

const mongoose = require('mongoose');

const ObjectId = mongodb.ObjectId;

const schema = mongoose.Schema;

const userSchema = new schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  cart: {
    // items is an array of embedded documents.
    items: [
      {
        productId: {
          type: schema.Types.ObjectId,
          ref: 'Product',
          required: true
        },
        quantity: { type: Number, required: true }
      }
    ]
  }
});

userSchema.methods.dummyFunction = function () {
  // console.log("---------------------------------------");
  // console.log("this here is ->");
  // console.log(this);
  // console.log("---------------------------------------");

  // if we write function using function keyword (ES5 way)
  // this keyword will refer to the object calling the function.
  // means the user object that wanted to getCart().

  // if we write function using arrow function (ES6 way)
  // this keyword will refer to the object calling the function.
  // which is NOT NECESSARILY the user object that wanted to getCart().
  // might be refering to its parent.
};

userSchema.methods.addToCart = function (product) {
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
      productId: new ObjectId(product._id),
      quantity: newQuantity
    });
  }

  this.cart = { items: updatedCartItems };

  return this.save();
};

userSchema.methods.deleteProductFromCart = function (productId) {
  const updatedCartItems = this.cart.items.filter(item => {
    return item.productId.toString() !== productId.toString();
  });

  this.cart.items = updatedCartItems;

  return this.save();
};

userSchema.methods.clearCart = function () {
  this.cart = { items: [] };
  return this.save();
}

module.exports = mongoose.model('User', userSchema);