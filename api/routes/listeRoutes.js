'use strict';

// Project Imports
var groceryPicture = require('../controllers/groceryPictureController');
var recieptPicture = require('../controllers/recieptPictureController');

module.exports = function(app) {

  // grocery picture
  app.route('/grocery_picture')
    .get(groceryPicture.list_all)
    .post(groceryPicture.create)
  
  app.route('/grocery_picture/:ID')
    .get(groceryPicture.read)
    .put(groceryPicture.update)
    .delete(groceryPicture.delete)


  // reciept picture
  app.route('/reciept_picture')
    .get(recieptPicture.list_all)
    .post(recieptPicture.create)
  
  app.route('/reciept_picture/:ID')
    .get(recieptPicture.read)
    .put(recieptPicture.update)
    .delete(recieptPicture.delete)
}
