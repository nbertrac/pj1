const UserModel = require("../models/User");
module.exports = {
  getUser: (req, res) => {
    const id = req.params.id;
    UserModel.findById(id, (err, user) => {
      if (err) {
        user = err;
      } else {
        user = user;
      }
      res.render("user", {
        title: "User",
        user: user,
        err: err,
      });
    });
  },
};
