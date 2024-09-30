var express = require("express");
const { addForm } = require("../handlers/forms");
var router = express.Router();
const multer = require("multer");
const { cloudStorage, localStorage } = require("../configs/storage");
const { LoginFormRepository } = require("../repository/forms");
const { cleanHtml } = require("../utils/utils");

const login_form_repo = new LoginFormRepository();

const upload = localStorage;

router.get("/add-form", async (req, res) => {
  return res.render("add_forms");
});

router.post("/add-form", upload.single("preview_image"), async (req, res) => {
  // console.log(process.env.CLOUD_NAME);
  const { title, description, file_content } = req.body;
  const file = req.file.path;

  console.log(file_content);
  const form = login_form_repo.addForm(title, description, file, file_content);
  return res
    .status(200)
    .json({
      status: "success",
      data: null,
      message: "Form added successfully",
    });
});

// router.get("/forms", function (req, res, next) {
//   res.render("index", { title: "Express" });
// });

module.exports = router;
