const UserModel = require("../models/User");
const ArticleModel = require("../models/Article");
module.exports = {
  getUser: (req, res) => {
    const id = req.params.id;
    UserModel.findById(id, (err, user) => {
      if (err) {
        user = err;
      }
      ArticleModel.find({ author: id }, (erro, article) => {
        if (erro) {
        }
        res.render("user", {
          title: "User",
          user: user,
          err: err,
          Articles: article,
        });
      });
    });
  },
};
