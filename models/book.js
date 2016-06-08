
/*!
 * Module dependencies
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * User schema
 */

var BookSchema = new Schema({
  name: { 
  	type: String, 
  	default: '' 
  },
  isbn: { 
  	type: Number, 
  	required: true,
  	index: true
  }
});

/**
 * Register
 */

var Book = mongoose.model('Book', BookSchema);

module.exports = Book
