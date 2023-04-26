const mongoose = require('mongoose');

const schema = mongoose.Schema();

const productSchema = new schema({
  title: String,
  price: {
    type: Number,
    required: true
  },
  description: String,
  imageUrl: String,
  userId:
});

module.exports = mongoose.model('Product', productSchema);