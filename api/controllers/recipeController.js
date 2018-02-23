'use strict';

var mongoose = require('mongoose');
var Recipes = mongoose.model('Recipes');

exports.list_all = function(req, res) {
  Recipes.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.create = function(req, res) {
  var new_task = new Recipes(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.read = function(req, res) {
  Recipes.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.update = function(req, res) {
  Recipes.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.delete = function(req, res) {
  Recipes.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Recipe successfully deleted' });
  });
};

