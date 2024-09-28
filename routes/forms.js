var express = require("express");
const { addForm } = require("../handlers/forms");
var router = express.Router();
const multer = require("multer");
const { storage } = require("../configs/storage");

const upload = multer({ storage });

router.all("/add-form", async (req, res) => {
  // console.log(process.env.CLOUD_NAME);
  if (req.method == "POST") {
    console.log(req.headers["content-type"]);
    console.log(req);
    return;
  }
  return res.render("add_forms");
});

// router.get("/forms", function (req, res, next) {
//   res.render("index", { title: "Express" });
// });

module.exports = router;
