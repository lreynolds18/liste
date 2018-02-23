var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var ShoppingList = require('./api/models/shoppinglistModel'); 
var Ingredients = require('./api/models/ingredientModel'); 
var Recipes = require('./api/models/recipeModel'); 

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Liste');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// import route
var routes = require('./api/routes/listeRoutes'); 
// register the route
routes(app); 

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
