'use strict';

// Modules
const restify = require('restify'),
	http_log = require('restify-http-log'),
	config = require('config'),
	mongoose = require('mongoose');

// Config
const serverConfig = config.get('server'),
	mongoDbConfig = config.get('mongodb');

// Controllers
const booksController = require('./controllers/book');

// Create Server
const server = restify.createServer({
	name: serverConfig.name
});
server.pre(http_log());
server.use(restify.bodyParser({ mapParams: false }));

// MongoDb Connection
let options = { server: { socketOptions: { keepAlive: 1 } } },
	connection = `mongodb://${mongoDbConfig.host}:${mongoDbConfig.port}/${mongoDbConfig.database}`;

if (mongoDbConfig.username && mongoDbConfig.password) {	
	connection = `mongodb://${mongoDbConfig.username}:${mongoDbConfig.password}@${mongoDbConfig.host}:${mongoDbConfig.port}/${mongoDbConfig.database}`;
} 
mongoose.connect(connection, options)

// Routes
server.get('/books', booksController.index);
server.get('/books/:isbn', booksController.getBook);
server.post('/books', booksController.addBook);
server.del('/books', booksController.deleteBook);
server.put('/books/:isbn', booksController.updateBook);

server.listen(serverConfig.port, () => {
  console.log('%s listening at %s', serverConfig.name, serverConfig.port);
});
