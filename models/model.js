let mongoose = require('mongoose');

let todoSchema = new mongoose.Schema({
  titleText: String,
  todoText: String
});

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo; 
