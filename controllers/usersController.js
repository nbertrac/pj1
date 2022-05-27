const UserModel = require("../models/User");

module.exports = {
  createUser: (req, res) => {
    const User = new UserModel({
      username: req.body.username,
      email: req.body.email,
      age: req.body.age,
    });

    User.save((err, user) => {
      if (err) {
        res.status(500).json({
          message: err,
        });
      } else {
        res.status(201).json({
          status: 201,
          message: "succes",
          user: user,
        });
      }
    });
  },
  getUsers: (req, res) => {
    UserModel.find((err, user) => {
      if (err) {
        users = err;
      } else {
        users = user;
      }
      res.render("users", {
        title: "Users",
        users: users,
        err: err,
      });
    });
  },
};
