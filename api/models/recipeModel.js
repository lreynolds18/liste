/*
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

*/
// RecipeSchema is to keep track of recipes in mongodb
// Example:
//   RecipeSchema{
//     name: 'Pizza',
//     Created_data: 2/23/18,
//     origin: 'american'
//     meal: 'lunch, dinner',
//     ingredients: ['1 package active dry yeast (1/4 ounce)', '1 tsp salt', ...],
//     instructions: ['Dissolve yeast and sugar in water', ...],
//     pictures: ['https://www.cicis.com/media/1138/pizza_trad_pepperoni.png'],
//     online_rating: '4.5/5',
//     my_rating: '*/5'
//   }

/*
var RecipeSchema = new Schema({
  name: {
    type: String,
    required: 'Enter the recipe name'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  origin: {
    type: String,
  },
  meal: {
    type: String,
    required: 'Enter the meal category (breakfast, lunch, dinner, snack, dessert, etc)'
  },
  ingredients: {
    type: {type: String},
    value: String,
    required: 'Enter the ingredients that are required to make the meal (format: \"numeric_amount unit ingredient_name\")'
  },
  instructions: {
    type: {type: String},
    value: String,
    required: 'Enter the steps required to make meal'
  },
  pictures: {
    type: {type: String},
    value: String
  },
});


module.exports = mongoose.model('Recipes', RecipeSchema);
*/
