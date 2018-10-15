var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoSchema = new Schema({
  titleText: String,
  todoText: String
});

module.exports = mongoose.model('Todo', todoSchema);