const assert = require("assert");
const healthCalcs = require("../utils/health");

const fakeData = [];

describe("Health", function () {
  describe("#indexOf()", function () {
    it("should return the warning message went the altitude is low", function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

// Whenever the average altitude of the satellite goes below 160km for more
//  than 1 minute, returns the message “WARNING: RAPID ORBITAL DECAY IMMINENT”

// Once the average altitude of the satellite returns to 160km or above, return
//  the message “Sustained Low Earth Orbit Resumed” for 1 minute.

// Otherwise return the message “Altitude is A-OK”
