const assert = require("assert");
const healthCalcs = require("../utils/health");

describe("Health", function () {
  it("should return the warning message went the altitude is low", function () {
    // 1 min is 6 values
    const fakeData = [146, 134, 125, 120, 120, 125, 134, 138];
    const fakeData2 = [
      170, 175, 172, 173, 170, 175, 172, 173, 120, 125, 134, 138, 137, 136,
    ];
    const expected = "WARNING: RAPID ORBITAL DECAY IMMINENT";
    const actual = healthCalcs(fakeData);
    const actual2 = healthCalcs(fakeData2);
    assert.equal(expected, actual);
    assert.equal(expected, actual2);
  });

  it("should return the resumed message when the altitude is back above 160", function () {
    const expected = "Sustained Low Earth Orbit Resumed";
    const fakeData = [
      170, 175, 172, 173, 170, 175, 172, 173, 120, 125, 134, 138, 137, 136,
    ];
    const fakeData2 = [
      170, 175, 172, 173, 170, 175, 172, 173, 120, 125, 134, 138, 137, 136, 145,
      150, 155, 160, 161, 165, 170, 177,
    ];
    const actual = healthCalcs(fakeData);
    const actual2 = healthCalcs(fakeData2);
    assert.equal(expected, actual);
    assert.equal(expected, actual2);
  });

  it("should return the okay message otherwise", function () {
    const expected = "Altitude is A-OK";
    const fakeData = [
      170, 175, 172, 173, 170, 175, 172, 173, 120, 125, 134, 138, 137, 136, 145,
      150, 155, 160, 161, 165, 170, 177, 175,
    ];
    const actual = healthCalcs(fakeData);
    assert.equal(expected, actual);
  });
});
