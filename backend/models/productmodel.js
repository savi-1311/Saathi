const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  userid: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  price:
  {
    type: Number,
    required: true
  },
  img:{
        type: String,
    required: true
  }
});

const product = mongoose.model("product", productSchema);
module.exports = product;