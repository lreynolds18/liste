'use strict';

// Project Imports
var db = require('../db/index');

// Grocery Picture DB access

// get all
exports.list_all = function(request, response, next) {
  db.query('SELECT ID, name, image, date FROM grocery_picture', [], (err, res) => {
    if (err) {
      response.status(500)
        .json({
          status: 'fail',
          error: err
        });
      next();
    } else {
      response.status(200)
        .json({
          status: 'success',
          data: res.rows,
          message: 'Retrieved all Grocery Pictures'
        });
    }
  });
};

// create new item
exports.create = function(request, response, next) {
  db.query('INSERT INTO grocery_picture(name, image, date) values($1, $2, $3)', [request.body['name'], request.body['image'], Date()], (err, res) => {
    if (err) {
      response.status(500)
        .json({
          status: 'fail',
          error: err
        });
      next();
    } else {
      response.status(200)
        .json({
          status: 'success',
          message: 'Inserted one Grocery Pictures'
        });
    }
  });
};

// get one item 
exports.read = function(request, response, next) {
  db.query('SELECT ID, name, image, date FROM grocery_picture WHERE ID = $1', [request.params.ID], (err, res) => {
    if (err) {
      response.status(500)
        .json({
          status: 'fail',
          error: err
        });
      next();
    } else {
      response.status(200)
        .json({
          status: 'success',
          data: res.rows,
          message: 'Retrieved one Grocery Picture'
        });
    }
  });
};

// update one item
exports.update = function(request, response, next) {
  db.query('UPDATE grocery_picture SET name=$1, image=$2, date=$3 WHERE id=$4', [req.body.name, req.body.image, Date(), request.params.ID], 
    (err, res) => {

    if (err) {
      response.status(500)
        .json({
          status: 'fail',
          error: err
        });
      next();
    } else {
      response.status(200)
        .json({
          status: 'success',
          message: 'Updated one Grocery Picture'
        });
    }
  });
};

// delete one item
exports.delete = function(request, response, next) {
  db.query('DELETE grocery_picture WHERE ID=$1', [request.params.ID], (err, res) => {
    if (err) {
      response.status(500)
        .json({
          status: 'fail',
          error: err
        });
      next();
    } else {
      response.status(200)
        .json({
          status: 'success',
          message: 'Deleted one Grocery Picture'
        });
    }
  });
};
