/*
'use strict';

var mongoose = require('mongoose');
var ShoppingList = mongoose.model('Shopping_List');

exports.list_all = function(req, res) {
  ShoppingList.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.create = function(req, res) {
  var new_task = new ShoppingList(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.read = function(req, res) {
  ShoppingList.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.update = function(req, res) {
  ShoppingList.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.delete = function(req, res) {
  ShoppingList.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Shopping List successfully deleted' });
  });
};
*/
