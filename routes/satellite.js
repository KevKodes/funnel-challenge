const { data } = require("../utils/data");

exports.health = function (req, res) {
  res.send({ health: data });
};

exports.stats = function (req, res) {
  const altStats = {};
  res.send("here's the stats");
};
