const express = require("express");
const app = express();
const indexRouter = require("./routes/index.js");
const statsRouter = require("./routes/stats.js");
const healthRouter = require("./routes/health.js");
const health = require("./health");

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.use("/", indexRouter);
app.use("/api/satellite/stats", statsRouter);
app.use("/api/satellite/health", healthRouter);

app.get("/health", health.data);

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });

module.exports = app;
