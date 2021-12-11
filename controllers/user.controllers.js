const Users = require("../models/user");

module.exports = {
  getAllUser: (req, res) => {
    res.json(Users);
  },

  getUserByID: (req, res) => {
    const { id } = req.params;

    let user = Users.find((item) => item.id == id);
    if (user) {
      res.json(user);
    } else {
      res.json("user not found");
    }
  },

  addUser: (req, res) => {
    let user = req.body;

    if (Users.find((item) => item.id === user.id)) {
      res.json("user already exist");
    } else if (user) {
      Users.push(user);
      res.json(user);
    }
  },

  //delete user by-id
  deleteUser: (req, res) => {
    const { id } = req.params;

    let user = Users.find((item) => item.id == id);
    if (user) {
      Users.splice(Users.indexOf(user), 1);
      res.json("user has been deleted");
    } else {
      res.json("user not found");
    }
  },

  //edit user by-id
  editUser: (req, res) => {
    const { id } = req.params;
    let user = Users.find((item) => item.id == id);
    if (user) {
      let update = {
        id: user.id,
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      };
      Users.splice(Users.indexOf(user), 1, update);
      res.json("user has been updated");
    }
  },
};