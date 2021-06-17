const fetch = require("node-fetch");

let data = [];
let avgAlt = [];

// format the data and save it to the data object
// const saveData = (rawData) => {
//   data.push(rawData.altitude);
//   data = data.slice(-30);
//   console.log("updated: ", data);

//   // calculate the average altitude
//   const currentAvg = data.reduce((acc, cv) => acc + cv) / data.length;
//   avgAlt.push(currentAvg);
//   avgAlt = avgAlt.slice(-12);
// };

// fetch the data from the nestio url
async function getData() {
  try {
    const reqURL = "http://nestio.space/api/satellite/data";
    const returned = await fetch(reqURL);
    const newData = await returned.json();
    // saveData(newData);
    data.push(newData.altitude);
    // data = data.slice(-30);
    console.log("updated: ", data);
    const currentAvg = data.reduce((acc, cv) => acc + cv) / data.length;
    avgAlt.push(currentAvg);
    // avgAlt = avgAlt.slice(-12);
    return newData;
  } catch (error) {
    console.error(error);
    return error;
  }
}

module.exports = { getData, data, avgAlt };
