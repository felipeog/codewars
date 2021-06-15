const quarterOf = require("./index");

describe("Basic Tests", () => {
  test("Month 3 = quarter 1", () => {
    expect(quarterOf(3)).toEqual(1);
  });
  test("Month 8 = quarter 3", () => {
    expect(quarterOf(8)).toEqual(3);
  });
  test("Month 11 = quarter 4", () => {
    expect(quarterOf(11)).toEqual(4);
  });
});

describe("Random Tests", () => {
  const quarterOfCheck = (month) => Math.ceil(month / 3);

  test("Testing for 100 random tests", () => {
    for (let i = 0; i < 100; i++) {
      const rnd = Math.floor(Math.random() * 12 + 1);
      expect(quarterOf(rnd)).toEqual(quarterOfCheck(rnd));
    }
  });
});
