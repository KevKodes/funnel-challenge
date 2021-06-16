const { data } = require("../utils/data");

exports.health = function (req, res) {
  res.send({ health: data });
};

exports.stats = function (req, res) {
  res.send("here's the stats");
};
