'use strict';

/*
var shoppinglist = require('../controllers/shoppinglistController');
var ingredients = require('../controllers/ingredientController');
var recipes = require('../controllers/recipeController');
*/

var groceryitem = require('../controllers/groceryitemController');
var reciept = require('../controllers/recieptController');

module.exports = function(app) {

  // grocery picture
  app.route('/grocery_item')
    .get(groceryitem.list_all)
    .post(groceryitem.create)
  
  app.route('.grocery_item/:groceryitemID')
    .get(groceryitem.read)
    .put(groceryitem.update)
    .delete(groceryitem.delete)

  // reciept picture
  app.route('/reciept')
    .get(reciept.list_all)
    .post(reciept.create)
  
  app.route('.reciept/:recieptID')
    .get(reciept.read)
    .put(reciept.update)
    .delete(reciept.delete)

  // shopping list routes
/*
  app.route('/shopping_list')
    .get(shoppinglist.list_all)
    .post(shoppinglist.create)

  app.route('.shopping_list/:shoppinglistID')
    .get(shoppinglist.read)
    .put(shoppinglist.update)
    .delete(shoppinglist.delete)
*/

  // ingredients routes
/*
  app.route('/ingredients')
    .get(ingredients.list_all)
    .post(ingredients.create)

  app.route('.ingredients/:ingredientID')
    .get(ingredients.read)
    .put(ingredients.update)
    .delete(ingredients.delete)
*/

  // recipes routes
/*
  app.route('/recipes')
    .get(recipes.list_all)
    .post(recipes.create)

  app.route('.recipes/:ingredientID')
    .get(recipes.read)
    .put(recipes.update)
    .delete(recipes.delete)
*/
}
