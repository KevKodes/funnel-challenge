const { data } = require("../utils/data");

exports.health = function (req, res) {
  res.send({ health: data });
};

exports.stats = function (req, res) {
  const altStats = {};
  altStats.minimum = Math.min(...data);
  altStats.maximum = Math.max(...data);
  altStats.average = data.reduce((acc, cv) => acc + cv) / data.length;
  res.send(altStats);
};
