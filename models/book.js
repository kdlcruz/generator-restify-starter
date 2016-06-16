
/*
 * Module dependencies
 */

const mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Book schema
 */

const BookSchema = new Schema({
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

let Book = mongoose.model('Book', BookSchema);

module.exports = Book
