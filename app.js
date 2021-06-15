const express = require("express");
const app = express();
const indexRouter = require("./routes/index");
const satelliteRouter = require("./routes/satellite");

app.use("/", indexRouter);
app.get("/api/satellite/stats", satelliteRouter.stats);
app.get("/api/satellite/health", satelliteRouter.health);

module.exports = app;
