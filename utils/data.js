const fetch = require("node-fetch");

let data = [];
let avgAlt = [];

async function getData() {
  try {
    // fetch the real time data
    const reqURL = "http://nestio.space/api/satellite/data";
    const returned = await fetch(reqURL);
    const newData = await returned.json();
    // update the saved altitude history and running average
    data.push(newData.altitude);
    const currentAvg =
      data.slice(-30).reduce((acc, cv) => acc + cv) / Math.min(30, data.length);
    avgAlt.push(currentAvg);
    return newData;
  } catch (error) {
    console.error(error);
    return error;
  }
}

module.exports = { getData, data, avgAlt };
