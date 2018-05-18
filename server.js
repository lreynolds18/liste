var express = require('express');
var bodyParser = require('body-parser');

// var ShoppingList = require('./api/models/shoppinglistModel'); 
// var Ingredients = require('./api/models/ingredientModel'); 
// var Recipes = require('./api/models/recipeModel'); 

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// import route
// var routes = require('./api/routes/listeRoutes'); 
// register the route
// routes(app); 

var db = require('./api/db/index');
db.query('SELECT * FROM fake', [], (err, res) => {
    console.log("err", err);
    if (err) {
      return err;
    }
    console.log("res", res);
    return res.rows[0];
});

app.listen(port);

console.log('RESTful API server started on: ' + port);
