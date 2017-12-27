// Set up the express app
const express = require('express');

const logger = require('morgan');
const bodyParser = require('body-parser');
const app = require('express')(),
authors = require('./server/controllers/authors');


app.get('/authors', authors.index);


// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.set('port', process.env.PORT || 9999);
app.listen(app.get('port'), function () {
  console.log("Server is running on port", app.get('port'));
});