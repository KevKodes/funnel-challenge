const { data, avgAlt } = require("../utils/data");
const healthCalcs = require("../utils/health");

exports.health = function (req, res) {
  const output = healthCalcs(avgAlt);
  console.log("running average altitude: ", avgAlt);
  res.send(JSON.stringify(output));
};

exports.stats = function (req, res) {
  const altStats = {};
  altStats.minimum = Math.min(...data);
  altStats.maximum = Math.max(...data);
  altStats.average = data.reduce((acc, cv) => acc + cv) / data.length;
  res.send(altStats);
};
