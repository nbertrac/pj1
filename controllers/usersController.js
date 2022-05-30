const UserModel = require("../models/User");

module.exports = {
  createUser: (req, res) => {
    const User = new UserModel({
      username: req.body.username,
      email: req.body.email,
      age: req.body.age,
    });

    User.save((err, user) => {
      UserModel.find((erro, user) => {
        if (erro) {
          users = erro;
        } else {
          users = user;
        }
        if (err) {
          res.render("users", {
            title: "Users",
            users: users,
            err: erro,
            fail: "ok",
          });
        } else {
          res.render("users", {
            title: "Users",
            users: users,
            err: erro,
            success: "ok",
          });
        }
      });
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
