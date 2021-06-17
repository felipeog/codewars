const { getLoopTestTitle } = require("../../utils/test");
const { generateRandomNumber } = require("../../utils/random");
const digital_root = require("./index");

describe("Static tests", () => {
  const tests = [
    { input: 0, output: 0 },
    { input: 10, output: 1 },
    { input: 16, output: 7 },
    { input: 195, output: 6 },
    { input: 992, output: 2 },
    { input: 167_346, output: 9 },
    { input: 999_999_999_999, output: 9 },
  ];

  tests.forEach(({ input, output }, index) => {
    const testTitle = getLoopTestTitle(index + 1, input, output);

    it(testTitle, () => {
      expect(digital_root(input)).toEqual(output);
    });
  });
});

describe("Random tests", () => {
  const digital_rootCheck = (n) => {
    return n > 0 ? 1 + ((parseInt(n) - 1) % 9) : 0;
  };

  for (let i = 0; i < 100; i++) {
    const randomNumber = generateRandomNumber(0, 1_000_000);
    const input = randomNumber;
    const output = digital_rootCheck(randomNumber);
    const testTitle = getLoopTestTitle(i + 1, input, output);

    it(testTitle, () => {
      expect(digital_root(input)).toEqual(output);
    });
  }
});
