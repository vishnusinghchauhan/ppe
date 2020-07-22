const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new mongoose.Schema({
  company_id:{
    type: Schema.Types.ObjectId,
    required: true,
    ref:'Company',
    _id:false
  },
  category: {
    type: String,
    required: false
  },
  sub_category: {
    type: String,
    required: false
  },
  title: {
    type: String,
    required: false
  },
  brand: {
    type: String,
    required: false
  },
  quantity: {
    type: String,
    required: false
  },
  price: {
    type: String,
    required: false
  },
  condition: {
    type: String,
    required: false
  },
  model: {
    type: String,
    required: false
  },
  currency: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
   create_date: {
    type: Date,
    default: Date.now,
    index: true
  },
  is_deleted: {
    type: Boolean,
    default: false
  },
  is_approved: {
    type: Boolean,
    default: false
  },
  product_img: {
    type: String,
    required: false
  }
});

const Product = mongoose.model('product', ProductSchema);

module.exports = Product;
