// helper function to check if the sustained case is met
function isSustained(arr) {
  for (let i = 0; i < arr.length - 6; i++) {
    if (arr[i] < 160 && Math.max(...arr.slice(i, i + 6)) < 160) {
      return true;
    }
  }
  return false;
}

// function to check the average altitude of the satellite
function healthCalcs(avgAlt) {
  if (Math.max(...avgAlt.slice(-6)) < 160) {
    return "WARNING: RAPID ORBITAL DECAY IMMINENT";
  } else if (isSustained(avgAlt) && !(Math.min(...avgAlt.slice(-6)) >= 160)) {
    return "Sustained Low Earth Orbit Resumed";
  } else {
    return "Altitude is A-OK";
  }
}

module.exports = healthCalcs;
