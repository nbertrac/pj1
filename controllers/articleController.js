const ArticleModel = require("../models/Article");

module.exports = {
  createArticle: (req, res) => {
    const { title, description, author } = req.body;
    const Article = new ArticleModel({ title, description, author });

    Article.save((err, Article) => {
      if (err) {
        res.status(500).json({
          message: err,
        });
      } else {
        res.status(201).json({
          status: 201,
          message: "succes",
          Article: Article,
        });
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
};
