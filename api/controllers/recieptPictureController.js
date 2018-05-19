'use strict';

// Project Imports
var db = require('../db/index');

// Reciept Picture DB access

// get all
exports.list_all = function(request, response, next) {
  db.query('SELECT ID, image, date FROM reciept_picture', [], (err, res) => {
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
          message: 'Retrieved all Reciept Pictures'
        });
    }
  });
};

// create new item
exports.create = function(request, response, next) {
  db.query('INSERT INTO reciept_picture(image, date) values($1, $2)', [request.body['image'], Date()], (err, res) => {
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
          message: 'Inserted one Reciept Pictures'
        });
    }
  });
};

// get one item 
exports.read = function(request, response, next) {
  db.query('SELECT ID, image, date FROM reciept_picture WHERE ID = $1', [request.params.ID], (err, res) => {
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
          message: 'Retrieved one Reciept Picture'
        });
    }
  });
};

// update one item
exports.update = function(request, response, next) {
  db.query('UPDATE reciept_picture SET image=$1, date=$2 WHERE id=$3', [req.body.image, Date(), request.params.ID], 
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
          message: 'Updated one Reciept Picture'
        });
    }
  });
};

// delete one item
exports.delete = function(request, response, next) {
  db.query('DELETE reciept_picture WHERE ID=$1', [request.params.ID], (err, res) => {
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
          message: 'Deleted one Reciept Picture'
        });
    }
  });
};
