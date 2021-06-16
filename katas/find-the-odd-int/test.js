const { getLoopTestTitle } = require("../../utils/test");
const { generateRandomNumber } = require("../../utils/random");
const findOdd = require("./index");

describe("Static tests", () => {
  const tests = [
    {
      input: [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5],
      output: 5,
    },
    { input: [1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5], output: -1 },
    { input: [20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5], output: 5 },
    { input: [10], output: 10 },
    { input: [1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1], output: 10 },
    { input: [5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10], output: 1 },
  ];

  tests.forEach(({ input, output }, index) => {
    const testTitle = getLoopTestTitle(index + 1, input, output);

    it(testTitle, () => {
      expect(findOdd(input)).toEqual(output);
    });
  });
});

describe("Random tests", () => {
  for (let i = 0; i < 40; ++i) {
    const input = [];
    const randomLength = generateRandomNumber(50, 500);

    for (let j = 0; j < randomLength; j++) {
      const randomNumber = generateRandomNumber(0, 1000);

      input.push(randomNumber);
      input.push(randomNumber);
    }

    const numberToFind = generateRandomNumber(0, 1000);
    const output = numberToFind;

    input.push(numberToFind);

    const testTitle = getLoopTestTitle(i + 1, input, output);

    it(testTitle, () => {
      expect(findOdd(input)).toEqual(output);
    });
  }
});
