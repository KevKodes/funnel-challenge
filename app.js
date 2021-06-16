const express = require("express");
const app = express();
const indexRouter = require("./routes/index");
const satelliteRouter = require("./routes/satellite");
const { getData } = require("./utils/data");

app.use("/", indexRouter);
app.get("/api/satellite/stats", satelliteRouter.stats);
app.get("/api/satellite/health", satelliteRouter.health);

setInterval(getData, 10000);

module.exports = app;
