const { getLoopTestTitle } = require("../../utils/test");
const { generateRandomNumber } = require("../../utils/random");
const quarterOf = require("./index");

describe("Static tests", () => {
  const tests = [
    { input: 3, output: 1 },
    { input: 8, output: 3 },
    { input: 11, output: 4 },
  ];

  tests.forEach(({ input, output }, index) => {
    const testTitle = getLoopTestTitle(index + 1, input, output);

    it(testTitle, () => {
      expect(quarterOf(input)).toEqual(output);
    });
  });
});

describe("Random tests", () => {
  const quarterOfCheck = (month) => {
    return Math.ceil(month / 3);
  };

  for (let i = 0; i < 100; i++) {
    const randomMonth = generateRandomNumber(1, 12);
    const input = randomMonth;
    const output = quarterOfCheck(randomMonth);
    const testTitle = getLoopTestTitle(i + 1, input, output);

    it(testTitle, () => {
      expect(quarterOf(input)).toEqual(output);
    });
  }
});
