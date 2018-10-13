var mongoose = require("mongoose");

// connect to database
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/',{ useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports.Todo = require('./model') 