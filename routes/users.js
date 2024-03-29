var express = require("express");
var router = express.Router();
const usc = require("../controllers/usersController");
const use = require("../controllers/userController");
const art = require("../controllers/articleController");

router.route("/").get(usc.getUsers);

router.route("/create").post(usc.createUser);

router.route("/user/createArticle").post(art.createArticle);

router.route("/user/:id").get(use.getUser);

router.route("/user/:id/success").get(art.createSuccess);

router.route("/user/:id/error").get(art.createError);

module.exports = router;
