const fetch = require("node-fetch");

let data = [];

// format the data and save it to the data object
const saveData = (rawData) => {
  data.push(rawData.altitude);
  // only save the last 5 mintues
  if (data.length > 30) {
    data = data.slice(-30);
  }
};

// fetch the data from the nestio url
async function getData() {
  try {
    const reqURL = "http://nestio.space/api/satellite/data";
    const returned = await fetch(reqURL);
    const newData = await returned.json();
    saveData(newData);
    return newData;
  } catch (error) {
    console.error(error);
    return error;
  }
}

module.exports = { getData, data };
