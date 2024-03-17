const mongoose = require('mongoose');

const schema = mongoose.Schema;

const orderSchema = new schema({
  products: [
    {
      product: { type: Object, required: true },
      quantity: { type: Number, required: true },
    }
  ],
  user: {
    name: {
      type: String,
      required: true
    },
    userId: {
      type: schema.Types.ObjectId,
      required: true
    }
  },
  totalQuantity: {
    type: schema.Types.Number,
    required: true
  },
  totalPrice: {
    type: schema.Types.Number,
    required: true
  }
});

module.exports = mongoose.model('Order', orderSchema);