var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/docs", (req, res) => {
  return res.render("documentation");
});
// router.get('/forms', function (req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
