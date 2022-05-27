const UserModel = require("../models/User");
let users = [];
module.exports = {
  getHome: (req, res) => {
    res.render("home", {
      title: "Home",
    });
  },
};
