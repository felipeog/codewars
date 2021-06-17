const { getLoopTestTitle } = require("../../utils/test");
const { generateRandomNumber } = require("../../utils/random");
const solution = require("./index");

describe("Static tests", () => {
  const tests = [
    { input: -1, output: 0 },
    { input: 0, output: 0 },
    { input: 1, output: 0 },
    { input: 2, output: 0 },
    { input: 3, output: 0 },
    { input: 4, output: 3 },
    { input: 5, output: 3 },
    { input: 6, output: 8 },
    { input: 10, output: 23 },
    { input: 20, output: 78 },
    { input: 200, output: 9168 },
  ];

  tests.forEach(({ input, output }, index) => {
    const testTitle = getLoopTestTitle(index + 1, input, output);

    it(testTitle, () => {
      expect(solution(input)).toEqual(output);
    });
  });
});

describe("Random tests", () => {
  const _solution = (number) => {
    let sum = 0;

    for (let i = 1; i < number; i++) {
      if (i % 3 == 0 || i % 5 == 0) {
        sum += i;
      }
    }

    return sum;
  };

  for (let i = 0; i < 100; i++) {
    const randomMax = 10 ** generateRandomNumber(1, 5);
    const randomNumber = generateRandomNumber(0, randomMax);
    const input = randomNumber;
    const output = _solution(randomNumber);
    const testTitle = getLoopTestTitle(i + 1, input, output);

    it(testTitle, () => {
      expect(solution(input)).toEqual(output);
    });
  }
});
