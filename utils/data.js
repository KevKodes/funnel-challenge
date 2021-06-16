// const axios = require("axios");
const fetch = require("node-fetch");

let data = {};

// format the data
const saveData = (rawData) => {};

// fetch the data from the nestio url
async function getData() {
  try {
    const reqURL = "http://nestio.space/api/satellite/data";
    // const newData = await axios.get(reqURL);
    const returned = await fetch(reqURL);
    const newData = await returned.json();
    console.log("new data: ", newData);
    saveData(newData);
    return newData;
  } catch (error) {
    console.error(error);
    return error;
  }
}

module.exports = getData;
