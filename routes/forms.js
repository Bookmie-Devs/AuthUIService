var express = require("express");
const { addForm } = require("../handlers/forms");
var router = express.Router();
const multer = require("multer");

const upload = multer({ dest: "./forms/" });

router.all("/add-form", upload.single("preview_image"), async (req, res) => {
  if (req.method == "POST") {
    console.log(req.headers["content-type"]);
    console.log(req.file);
    return;
  }
  return res.render("add_forms");
});

// router.get("/forms", function (req, res, next) {
//   res.render("index", { title: "Express" });
// });

module.exports = router;
