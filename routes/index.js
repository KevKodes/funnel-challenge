const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World! From the index route.");
});

module.exports = router;
