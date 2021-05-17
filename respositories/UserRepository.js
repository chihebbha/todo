const User = require('../models/User');

class UserRepository {
  /**
   * @param {*} model
   */
  constructor(model) {
    this.model = model;
  }

  /**
  * @param {*} object

   */
  create(object) {
    const newUser = { name:object.name,login:object.login,password:object.password };
    // eslint-disable-next-line new-cap
    const todo = new this.model(newUser);

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
   *
   * @param {*} object
   */
  find(object) {
    return this.model.find(object);
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
    return this.model.findOneAndUpdate(query, { $set: { name: object.name } });
  }



}

module.exports = new UserRepository(User);
