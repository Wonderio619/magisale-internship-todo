var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoSchema = new Schema({
  title: String,
  todo: String
});

module.exports = mongoose.model('Todo', todoSchema);