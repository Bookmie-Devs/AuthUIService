var express = require("express");
const { addForm } = require("../handlers/forms");
var router = express.Router();
const multer = require("multer");
const { localStorage, memoryUpload } = require("../configs/storage");
const { LoginFormRepository } = require("../repository/forms");
const { cleanHtml } = require("../utils/utils");
const { writeFormIntoLoginScript } = require("../engine/utils/utils");

const login_form_repo = new LoginFormRepository();

const upload = memoryUpload;

router.get("/add-form", async (req, res) => {
  return res.render("add_forms");
});

router.post("/add-form", upload.single("preview_image"), async (req, res) => {
  // console.log(process.env.CLOUD_NAME);
  const { title, description, file_content } = req.body;
  const file = req.file.path;

  console.log(file);
  const { uniqueName, filePath } = await writeFormIntoLoginScript(file_content);
  const form = login_form_repo.addForm(title, description, file, filePath);
  return res.status(200).json({
    status: "success",
    data: null,
    message: "Form added successfully",
  });
});

// router.get("/forms", function (req, res, next) {
//   res.render("index", { title: "Express" });
// });

module.exports = router;
