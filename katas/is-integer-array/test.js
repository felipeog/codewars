const isIntArray = require("./index");

describe("Basic tests", () => {
  test("Tests", () => {
    expect(isIntArray([])).toEqual(true);
    expect(isIntArray([1, 2, 3, 4])).toEqual(true);
    expect(isIntArray([-11, -12, -13, -14])).toEqual(true);
    expect(isIntArray([1.0, 2.0, 3.0])).toEqual(true);
    expect(isIntArray([1, 2, NaN])).toEqual(false);
    expect(isIntArray(null)).toEqual(false);
    expect(isIntArray(undefined)).toEqual(false);
    expect(isIntArray(NaN)).toEqual(false);
    expect(isIntArray("")).toEqual(false);
    expect(isIntArray([null])).toEqual(false);
    expect(isIntArray([undefined])).toEqual(false);
    expect(isIntArray([NaN])).toEqual(false);
    expect(isIntArray([1.0, 2.0, 3.0001])).toEqual(false);
    expect(isIntArray(["-1"])).toEqual(false);
    expect(isIntArray([1.23e-7, 2])).toEqual(false);
    expect(isIntArray([1.2, 1.8, 3])).toEqual(false);
  });
});
