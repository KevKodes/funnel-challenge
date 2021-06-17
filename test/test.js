const assert = require("assert");
const healthCalcs = require("../utils/health");

describe("Basic Health Checks", function () {
  it("should return the warning message when the altitude is low", function () {
    const fakeAvgAlt = [146, 134, 125, 120, 120, 125, 134, 138];
    const fakeAvgAlt2 = [
      170, 175, 172, 173, 170, 175, 172, 173, 120, 125, 134, 138, 137, 136,
    ];
    const expected = "WARNING: RAPID ORBITAL DECAY IMMINENT";
    const actual = healthCalcs(fakeAvgAlt);
    const actual2 = healthCalcs(fakeAvgAlt2);
    assert.equal(actual, expected);
    assert.equal(actual2, expected);
  });

  it("should return the resumed message when the altitude is back above 160", function () {
    const expected = "Sustained Low Earth Orbit Resumed";
    const fakeAvgAlt = [170, 175, 172, 173, 120, 125, 134, 138, 137, 136, 160];
    const fakeAvgAlt2 = [
      134, 138, 137, 136, 145, 150, 155, 160, 161, 165, 170, 177,
    ];
    const actual = healthCalcs(fakeAvgAlt);
    const actual2 = healthCalcs(fakeAvgAlt2);
    assert.equal(actual, expected);
    assert.equal(actual2, expected);
  });

  it("should return the okay message otherwise", function () {
    const expected = "Altitude is A-OK";
    const fakeAvgAlt = [
      138, 137, 136, 145, 150, 155, 160, 161, 165, 170, 177, 175,
    ];
    const actual = healthCalcs(fakeAvgAlt);
    assert.equal(actual, expected);
  });
});

describe("Edge Case Health Checks", function () {
  it("should return the warning message when no data is found", function () {
    const fakeAvgAlt = [];
    const expected = "WARNING: RAPID ORBITAL DECAY IMMINENT";
    const actual = healthCalcs(fakeAvgAlt);
    assert.equal(actual, expected);
  });
});
