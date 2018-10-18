const express = require("express");
const router = express.Router();
let Todo = require('../models/model')

// get all todo list with id
router.get('/', function (req, res) {
  Todo.find()
    .then((todos) => res.json(todos))
    .catch((error) => res.send(error))
})

// send todo to database
router.post('/', function (req, res) {
  let todo = new Todo();
  todo.title = req.body.title;
  todo.todo = req.body.todo;

  todo.save(function (err) {
    if (err)
      res.send(err);
    res.send('Todo successfully added!');
  });
})

// get todo with id
router.get('/:todoId', function (req, res) {
  Todo.findById(req.params.todoId)
    .then(foundTodo => res.json(foundTodo))
    .catch(error => res.send(error));
})

// updates todo with id
router.put('/:todoId', function (req, res) {
  const data = {
    title: req.body.title,
    todo: req.body.todo
  }

  Todo.findOneAndUpdate(
    { id: req.params.todoId }, // the query
    { $set: data }, // things to update
    { upsert: true } // upsert option
    ).then((todo) => res.json(todo))
    .catch((error) => res.send(error))
})
  
// deletes todo with id
router.delete('/:todoId', function (req, res) {
  Todo.remove({ id: req.params.todoId })
    .then(() => res.json({ message: 'todo is deleted' }))
    .catch((error) => res.send(error))
})

module.exports = router;