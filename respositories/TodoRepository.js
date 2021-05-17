const Todo = require('../models/Todo');
const User = require('../models/User');

class TodoRepository {
  /**
   * @param {*} model
   */
  constructor(model) {
    this.model = model;
  }

  /**
   * @param {String} name
   */
  create(name) {
    const newTodo = { name, done: false };
    // eslint-disable-next-line new-cap
    const todo = new this.model(newTodo);

    return todo.save();
  }

  findAll() {
    return this.model.find();
  }

  /**
   * @param {Integer} id
   */
  findById(id) {
    return this.model.findById(id);
  }

  /**
   * @param {integer} id
   */
  deleteById(id) {
    return this.model.findByIdAndDelete(id);
  }

  /**
   *
   * @param {integer} id
   * @param {*} object
   */
  updateById(id, object) {
    const query = { _id: id };
    return this.model.findOneAndUpdate(query, { $set: object });
  }



  /**
   *
   * @param {integer} id
   * @param {*} object
   */
  shareTodo(id, object) {
    const query = { _id: id };
    return this.model.findOneAndUpdate(query, { $set: { owner: object } }).then(
      function(res){
        User.findOne({_id:res.owner}).then(user=>{
          user.todos.push(res._id);
          user.save()

        })

      }
    );
  }
}

module.exports = new TodoRepository(Todo);
