const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/my_databases'); // localhost/ -> the url we're trying to connect to, and if it doesn't exist then create it

mongoose.connection
  .once('open', (err, client) => {})
  .on('error', function(error) {});
