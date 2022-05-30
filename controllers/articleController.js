const ArticleModel = require("../models/Article");
const UserModel = require("../models/User");

module.exports = {
  createArticle: (req, res) => {
    const { title, description, author } = req.body;
    const Article = new ArticleModel({ title, description, author });

    Article.save((err, Article) => {
      if (err) {
        res.redirect(`/users/user/${author}/error`);
      } else {
        res.redirect(`/users/user/${author}/success`);
      }
    });
  },
  getArticle: (req, res) => {
    const id = req.params.id;
    ArticleModel.findById(id, (err, article) => {
      if (err) {
        article = err;
      }
      res.render("article", {
        title: "Article",
        err: err,
        Article: article,
      });
    });
  },
  createSuccess: (req, res) => {
    const id = req.params.id;
    UserModel.findById(id, (err, user) => {
      if (err) {
        user = err;
      }
      ArticleModel.find({ author: id }, (erro, article) => {
        if (erro) {
          article = erro;
        }
        res.render("user", {
          title: "User",
          user: user,
          err: err,
          Articles: article,
          success: "yes",
        });
      });
    });
  },
  createError: (req, res) => {
    const id = req.params.id;
    UserModel.findById(id, (err, user) => {
      if (err) {
        user = err;
      }
      ArticleModel.find({ author: id }, (erro, article) => {
        if (erro) {
          article = erro;
        }
        res.render("user", {
          title: "User",
          user: user,
          err: err,
          Articles: article,
          fail: "yes",
        });
      });
    });
  },
};
