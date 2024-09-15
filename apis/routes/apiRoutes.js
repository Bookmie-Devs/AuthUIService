const express = require("express");
const router = express.Router();

router.post("/:project_id/signup/", (req, res) => {
  const project_id = req.params.project_id;
  const { email } = req.body;
});

module.exports = router;
