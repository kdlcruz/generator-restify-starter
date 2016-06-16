# Generator Restify Starter

A boilerplate setup for building Node.js RESTful API using Restify

## Installation

There are several ways you can use this boilerplate.


##### 1. Download
**(a)** Yoeman (ongoing)

**OR**

**(b)** Download the repo ([link](https://github.com/kdlcruz/restify-starter/archive/master.zip)) then unzip to desired project location.

##### 2. Build
````
$> cd /path/to/project
$> npm install
````

##### 3. Run

````
$> gulp
````

## Initial Routes

```
// Routes
server.get('/books', booksController.index);
server.get('/books/:isbn', booksController.getBook);
server.post('/books', booksController.addBook);
server.del('/books', booksController.deleteBook);
server.put('/books/:isbn', booksController.updateBook);
```

## Tests
**(a)** to run test located at **/project/tests/**

````
$> gulp test
````

**(b)** to run JsHint

````
$> gulp lint
````

## License


MIT

## TODO

- Create a tutorial on how to add routes, models and controllers
- Implement in Yoeman
