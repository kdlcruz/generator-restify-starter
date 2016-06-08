'use strict';

// Models
const Books = require('../models/book');

exports.index = (req, res) => {
	Books.find({}, (err, books) => {
    return res.json(books);
  });
};

exports.getBook = (req, res) => {
  Books.findOne({isbn: req.params.isbn}, (err, book) => {
    return res.json(book);
  });
};

exports.addBook = (req, res) => {
  var book = new Books({
    name: req.body.name,
    isbn: req.body.isbn
  });

  book.save(err => {

    if (err) {
      return res.json(err);
    }

    return res.json(book);
    
  });
};

exports.deleteBook = (req, res) => {
  Books.findOneAndRemove({isbn: req.body.isbn}, err => {
    if (err) {
      return res.json(err);
    }

    return res.json({'status': 'success'});
  });
};

exports.updateBook = (req, res) => {
  Books.findOneAndUpdate({
    isbn: req.params.isbn
  }, {
    name: req.body.name
  }, {
    new: true
  }, (err, book) => {
    if (err) {
      return res.json(err);
    }

    return res.json(book);
  });
};


