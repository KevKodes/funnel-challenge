const express = require("express");
const router = express.Router();

router.get("/api/satellite/stats", (req, res) => {
  res.send("check the stats");
});

module.exports = router;
