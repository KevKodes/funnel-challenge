const express = require("express");
const router = express.Router();

router.get("/api/satellite/health", (req, res) => {
  res.send("check the health");
});

module.exports = router;
