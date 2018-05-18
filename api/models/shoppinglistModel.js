/*
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ShoppinglistSchema = new Schema({
  name: {
    type: String,
    required: 'Enter the name of the ingredient'
  },
  amount: {
    type: String,
    required: 'Enter the amount of the ingredient (format \"numeric_amount unit\")'
  },
  date: {
    type: Date,
    default: Date.now
  },
  price: {
    type: Number,
    required: 'Enter the price of the ingredient'
  }
});

module.exports = mongoose.model('Shopping_List', ShoppinglistSchema);
*/
