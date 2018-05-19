// External Library Imports
var express = require('express');
var bodyParser = require('body-parser');

// Project Imports
var routes = require('./api/routes/listeRoutes'); 

// define app and define port to be 3000
var app = express();
var port = process.env.PORT || 3000;

// use complex parsing and json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// register the route
routes(app); 

// start app
app.listen(port);

console.log('RESTful API server started on: ' + port);
