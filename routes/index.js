const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(
    `<p>Satellite stats endpoint: /api/satellite/stats</p><p>Satellite health endpoint: /api/satellite/health</p>`
  );
});

module.exports = router;
