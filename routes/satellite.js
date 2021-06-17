const { data, avgAlt } = require("../utils/data");
const healthCalcs = require("../utils/health");

exports.health = function (req, res) {
  const output = healthCalcs(avgAlt);
  console.log("running average altitude: ", avgAlt);
  console.log("stored data: ", data);
  res.send(JSON.stringify(output));
};

exports.stats = function (req, res) {
  const altStats = {};
  altStats.minimum = Math.min(...data.slice(-30));
  altStats.maximum = Math.max(...data.slice(-30));
  // altStats.average = data.reduce((acc, cv) => acc + cv) / data.length;
  altStats.average = avgAlt[avgAlt.length - 1];
  res.send(altStats);
};
