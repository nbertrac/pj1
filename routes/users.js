var express = require("express");
var router = express.Router();
const usc = require("../controllers/usersController");
const use = require("../controllers/userController");

router.route("/").get(usc.getUsers);

router.route("/create").post(usc.createUser);

router.route("/user/:id").get(use.getUser);

module.exports = router;
