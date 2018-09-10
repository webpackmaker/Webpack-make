const express = require('express');
const bodyParser = require('body-parser'); // Does stream concatenation in Node to not worry about read & write streams
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();

// Global Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'public'))); // if we don't have any files, we can run this
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// Routers
app.use('/auth', require('./auth'));
app.use('/api', require('./api'));

app.post('*', (req, res) => {
  res.send();
});

// Default Route
app.get('*', (_, res) => {
  // Routes all requests to Express from React
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;
