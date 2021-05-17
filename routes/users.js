const express = require('express');

const app = express.Router();
const repository = require('../respositories/UserRepository');
const TokenGenerator = require('uuid-token-generator');
// get all users in the db
app.get('/', (req, res) => {
  repository.findAll().then((todos) => {
    res.json(todos);
  }).catch((error) => console.log(error));
});

// add  user
app.post('/', (req, res) => {
  req.body.completed=false;
  repository.create(req.body).then((todo) => {
    res.json(todo);
  }).catch((error) => console.log(error));
});

// delete a user
app.delete('/:id', (req, res) => {
  const { id } = req.params;
  repository.deleteById(id).then((ok) => {
    console.log(ok);
    console.log(`Deleted record with id: ${id}`);
    res.status(200).json([]);
  }).catch((error) => console.log(error));
});

// update a user
app.put('/:id', (req, res) => {
  const { id } = req.params;
  const todo = { name: req.body.name};
  repository.updateById(id, todo)
    .then(res.status(200).json([]))
    .catch((error) => console.log(error));
});



app.post('/login', (req, res) => {
  repository.find(req.body).then((user) => {

if(user.length>0){
    const tokgen = new TokenGenerator();
  user[0].token=tokgen.generate();
  user[0].save()
    res.json({token:user[0].token});
  }
  else {
    res.json({message:"wrong username or password"})
  }


  }).catch((error) => console.log(error));
});


module.exports = app;
