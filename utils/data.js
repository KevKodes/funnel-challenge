const fetch = require("node-fetch");

let data = {};

// format the data and save it to the data object
const saveData = (rawData) => {
  const time = rawData.last_updated.split("T")[1];
  data[time] = rawData.altitude;
};

// fetch the data from the nestio url
async function getData() {
  try {
    const reqURL = "http://nestio.space/api/satellite/data";
    const returned = await fetch(reqURL);
    const newData = await returned.json();
    console.log("new data: ", newData);
    saveData(newData);
    console.log("updated total data: ", data);
    return newData;
  } catch (error) {
    console.error(error);
    return error;
  }
}

module.exports = getData;
