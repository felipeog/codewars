const { getLoopTestTitle } = require("../../utils/test");
const { generateRandomNumber } = require("../../utils/random");
const cutLog = require("./index");

describe("Static tests", () => {
  const prices = [
    0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30, 32, 35, 39, 43, 43, 45, 49, 50, 54,
    57, 60, 65, 68, 70, 74, 80, 81, 84, 85, 87, 91, 95, 99, 101, 104, 107, 112,
    115, 116, 119, 121, 125, 129, 131, 134, 135, 140, 143, 145, 151,
  ];
  const tests = [
    { input: [prices, 0], output: 0 },
    { input: [prices, 1], output: 1 },
    { input: [prices, 5], output: 13 },
    { input: [prices, 8], output: 22 },
    { input: [prices, 10], output: 30 },
    { input: [prices, 22], output: 65 },
    { input: [prices, 23], output: 69 },
    { input: [prices, 37], output: 112 },
    { input: [prices, 41], output: 125 },
    { input: [prices, 50], output: 153 },
  ];

  tests.forEach(({ input, output }, index) => {
    const testTitle = getLoopTestTitle(index + 1, input, output);

    it(testTitle, () => {
      expect(cutLog(...input)).toEqual(output);
    });
  });
});

describe("Random tests", () => {
  const cutLogCheck = (prices, length) => {
    let result = [0];

    for (j = 1; j <= length; j++) {
      let q = -1;

      for (i = 1; i <= j; i++) {
        q = Math.max(q, prices[i] + result[j - i]);
        result[j] = q;
      }
    }

    return result[length];
  };
  const generatePrices = (length) => {
    let result = Array(length).fill(0);

    for (let i = 1; i < length; i++) {
      result[i] = result[i - 1] + generateRandomNumber(1, 10);
    }

    return result;
  };

  for (let i = 0; i < 20; i++) {
    const prices = generatePrices(generateRandomNumber(50, 100));
    const length = generateRandomNumber(0, prices.length);
    const input = [prices, length];
    const output = cutLogCheck(...input);
    const testTitle = getLoopTestTitle(i + 1, input, output);

    it(testTitle, () => {
      expect(cutLog(...input)).toEqual(output);
    });
  }
});
