var express = require("express");
var router = express.Router();
const pj1 = require("../controllers/homeController");

router.route("/").get(pj1.getHome);

module.exports = router;
