'use strict';
/*global describe*/
/*global it*/

/**
 * Module Dependencies
 */
const assert = require('chai').assert,
	supertest = require('supertest'),
	config = require('config'),
	serverConfig = config.get('server');

/**
 * Test Uber Class
 */

var server = supertest.agent('http://localhost:' + serverConfig.port);

describe('Routing Test', () => {
	it('Add book', (done) => {

		let payload = {
			name: 'Kevin book of testing',
			isbn: 1
		};

		server
			.post('/books')
			.send(payload)
			.expect("Content-type",/json/)
			.expect(200) // THis is HTTP response
			.end(function(err, res){
				assert.equal(res.body.name, payload.name);
				assert.equal(res.body.isbn, payload.isbn);
				assert.equal(res.status, 200);
				done();
			});
  	});

  	it('View books', (done) => {
		server
			.get('/books')
			.expect("Content-type",/json/)
			.expect(200) // THis is HTTP response
			.end(function(err, res){
				assert.notEqual(res.body, []);
				assert.equal(res.status, 200);
				done();
			});
  	});

  	it('View book', (done) => {
  		let payload = {
			name: 'Kevin book of testing',
			isbn: 1
		};

		server
			.get(`/books/${payload.isbn}`)
			.expect("Content-type",/json/)
			.expect(200) // THis is HTTP response
			.end(function(err, res){
				assert.equal(res.body.name, payload.name);
				assert.equal(res.status, 200);
				done();
			});
  	});

  	it('Update book', (done) => {

		let payload = {
			name: 'Kevin book of testing update',
			isbn: 1
		};

		server
			.put(`/books/${payload.isbn}`)
			.send(payload)
			.expect("Content-type",/json/)
			.expect(200) // THis is HTTP response
			.end(function(err, res){
				assert.equal(res.body.name, payload.name);
				assert.equal(res.status, 200);
				done();
			});
  	});

  	it('Delete book', (done) => {

		let payload = {
			isbn: 1
		};

		server
			.del('/books')
			.send(payload)
			.expect("Content-type",/json/)
			.expect(200) // THis is HTTP response
			.end(function(err, res){
				console.log(res.body);
				assert.equal(res.status, 200);
				done();
			});
  	});
});
