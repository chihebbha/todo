const express = require('express');

const app = express.Router();
const repository = require('../respositories/TodoRepository');
const path = require('path');
const appRootPath = require('app-root-path');

app.get('/doc', function(req, res) {
    res.sendFile(path.join(appRootPath + '/docs/doc.html'));
  });


// get all todo items in the db
app.get('/all', (req, res) => {
  repository.findAll().populate('owner').then((todos) => {
    res.json(todos);
  }).catch((error) => console.log(error));
});

// add a todo item
app.post('/', (req, res) => {
  req.body.completed=false;
  const { name } = req.body;
  repository.create(name).then((todo) => {
    res.json(todo);
  }).catch((error) => console.log(error));
});

// delete a todo item
app.delete('/:id', (req, res) => {
  const { id } = req.params;

  repository.findById(id).then((todo) => {
    console.log(req.account);
    if(req.account.todos.includes(todo._id)) {
      todo.remove();
      res.status(200).json({message:"todo removed"});
    }
  else {
    res.status(401).json({message:"you can only remove your own items"});

  }
  }).catch((error) => console.log(error));
});

// update a todo item
app.put('/:id', (req, res) => {
  const { id } = req.params;
  const todo = { name: req.body.name};
  repository.updateById(id, todo)
    .then(res.status(200).json([]))
    .catch((error) => console.log(error));
});



// mark a todo item as completed
app.put('/done/:id', (req, res) => {
  const { id } = req.params;
  const todo = { done: true };
  repository.updateById(id, todo)
    .then(res.status(200).json([]))
    .catch((error) => console.log(error));
});



// share a todo item and affect it to a specific user
app.put('/share/:id', (req, res) => {
  const { id } = req.params;
  const user =  req.body ;
  repository.shareTodo(id, user)
    .then(res.status(200).json([]))
    .catch((error) => console.log(error));
});
module.exports = app;
