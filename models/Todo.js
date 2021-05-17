const mongoose = require('mongoose');

const { Schema } = mongoose;

// Define schema for todo items
const todoSchema = new Schema({
  name: {
    type: String,
  },
  done: {
    type: Boolean,
  },
  comment: {
    type: String,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref:"User",

  },
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
