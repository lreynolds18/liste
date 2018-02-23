'use strict';

module.exports = function(app) {
  var shoppinglist = require('../controllers/shoppinglistController');
  var ingredients = require('../controllers/ingredientController');
  var recipes = require('../controllers/recipeController');

  // shopping list routes
  app.route('/shopping_list')
    .get(shoppinglist.list_all)
    .post(shoppinglist.create)

  app.route('.shopping_list/:shoppinglistID')
    .get(shoppinglist.read)
    .put(shoppinglist.update)
    .delete(shoppinglist.delete)

  // ingredients routes
  app.route('/ingredients')
    .get(ingredients.list_all)
    .post(ingredients.create)

  app.route('.ingredients/:ingredientID')
    .get(ingredients.read)
    .put(ingredients.update)
    .delete(ingredients.delete)

  // recipes routes
  app.route('/recipes')
    .get(recipes.list_all)
    .post(recipes.create)

  app.route('.recipes/:ingredientID')
    .get(recipes.read)
    .put(recipes.update)
    .delete(recipes.delete)

}
