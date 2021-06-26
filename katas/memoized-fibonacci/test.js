const { getLoopTestTitle } = require("../../utils/test");
const { generateRandomNumber } = require("../../utils/random");
const fibonacci = require("./index");

describe("Static tests", () => {
  const tests = [
    { input: 70, output: 190392490709135 },
    { input: 60, output: 1548008755920 },
    { input: 50, output: 12586269025 },
  ];

  tests.forEach(({ input, output }, index) => {
    const testTitle = getLoopTestTitle(index + 1, input, output);

    it(testTitle, () => {
      expect(fibonacci(input)).toEqual(output);
    });
  });
});

const fibonacciCheck = (() => {
  const memoize = (key, formula) => {
    return memoize[key] || (memoize[key] = formula());
  };

  return (number) => {
    if (number === 0 || number === 1) {
      return number;
    }

    return memoize(number, () => {
      return fibonacci(number - 1) + fibonacci(number - 2);
    });
  };
})();

describe("Random tests", () => {
  for (let i = 0; i < 100; i++) {
    const input = generateRandomNumber(0, 70);
    const output = fibonacciCheck(input);
    const testTitle = getLoopTestTitle(i + 1, input, output);

    it(testTitle, () => {
      expect(fibonacci(input)).toEqual(output);
    });
  }
});
