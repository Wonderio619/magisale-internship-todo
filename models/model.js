import mongoose from 'mongoose';

var Schema = mongoose.Schema({
  titleText: String,
  todoText: String
});

export default mongoose.model('Todo', Schema);