var express = require("express");
var router = express.Router();
const pj1 = require("../controllers/homeController");
const art = require("../controllers/articleController");

router.route("/").get(pj1.getHome);

router.route("/article/:id").get(art.getArticle);

module.exports = router;
