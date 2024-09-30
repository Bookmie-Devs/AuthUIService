const express = require("express");

const router = express.Router();

router.get("/login/:project_id/", (req, res) => {
  return res.sendFile("../../../scripts/login_script.js");
});

module.exports = router;
