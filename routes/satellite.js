const { data, avgAlt } = require("../utils/data");
const healthCalcs = require("../utils/health");

exports.health = function (req, res) {
  const output = healthCalcs(avgAlt);
  res.send(JSON.stringify(output));
};

exports.stats = function (req, res) {
  const altStats = {};
  altStats.minimum = Math.min(...data.slice(-30));
  altStats.maximum = Math.max(...data.slice(-30));
  altStats.average = avgAlt[avgAlt.length - 1];
  res.send(altStats);
};
