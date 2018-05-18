/*
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var IngredientSchema = new Schema({
  name: {
    type: String,
    required: 'Enter the name of the ingredient'
  },
  amount: {
    type: String,
    required: 'Enter the amount of the ingredient (format \"numeric_amount unit\")'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  expiration_date: {
    type: Date,
  }
});

module.exports = mongoose.model('Ingredients', IngredientSchema);
*/
