const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
let db = require('../models')

// get all todo list with id
router.get('/', function(req, res){
  db.Todo.find()
    .then((todos) => res.json(todos))
    .catch((error) => res.send(error))
})

// send todo to database
router.post('/', function(req, res){
  db.Todo.create(req.body)
    .then((newTodo) => res.status(201).json(newTodo))
    .catch((error) => res.send(error))
})

// get todo with id
router.get('/:todoId', function(req, res){
  db.Todo.findById(req.params.todoId)
    .then(foundTodo => res.json(foundTodo))
    .catch(error => res.send(error));
})

// updates todo with id
router.put('/:todoId', function(req, res){
  db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
  .then((todo) => res.json(todo))
  .catch((error) => res.send(error))
})

router.delete('/:todoId', function (req, res) {
  db.Todo.remove({_id: req.params.todoId})
  .then(() => res.json({message: 'todo is deleted'}))
  .catch((error) => res.send(error))  
})

module.exports = router; 