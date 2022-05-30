const ArticleModel = require("../models/Article");
const UserModel = require("../models/User");
module.exports = {
  getHome: (req, res) => {
    ArticleModel.find((err, article) => {
      if (err) {
        article = err;
      }
      UserModel.find((err, user) => {
        if (err) {
        }
        res.render("home", {
          title: "Home",
          Articles: article,
          err: err,
          users: user,
        });
      });
    });
  },
};
