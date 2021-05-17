const mongoose = require('mongoose');

const { Schema } = mongoose;

// Define schema for todo items
const userSchema = new Schema({
  name: {
    type: String,
  },
  login: {
    type: String,
  },
  password: {
    type: String,
  },
  token: {
    type: String,
  },
  todos: [{
    type: Schema.Types.ObjectId,
    ref:"Todo",
  }],

});

const User = mongoose.model('User', userSchema);

module.exports = User;
