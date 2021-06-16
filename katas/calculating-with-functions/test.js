const { getLoopTestTitle } = require("../../utils/test");
const { generateRandomArrayIndex } = require("../../utils/random");
const {
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  plus,
  minus,
  times,
  dividedBy,
} = require("./index");

describe("Static tests", () => {
  const tests = [
    { input: "seven(times(five()))", output: 35 },
    { input: "four(plus(nine()))", output: 13 },
    { input: "eight(minus(three()))", output: 5 },
    { input: "six(dividedBy(two()))", output: 3 },
    { input: "zero(plus(one()))", output: 1 },
  ];

  tests.forEach(({ input, output }, index) => {
    const testTitle = getLoopTestTitle(index + 1, input, output);

    it(testTitle, () => {
      expect(eval(input)).toEqual(output);
    });
  });
});

describe("Random tests", () => {
  const numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  describe("Add tests", () => {
    for (let i = 0; i < 50; i++) {
      const num1 = numbers[generateRandomArrayIndex(numbers.length)];
      const num2 = numbers[generateRandomArrayIndex(numbers.length)];
      const input = `${num1}(plus(${num2}()))`;
      const output = numbers.indexOf(num1) + numbers.indexOf(num2);
      const testTitle = getLoopTestTitle(i + 1, input, output);

      it(testTitle, () => {
        expect(eval(input)).toEqual(output);
      });
    }
  });

  describe("Subtract tests", () => {
    for (let i = 0; i < 50; i++) {
      const num1 = numbers[generateRandomArrayIndex(numbers.length)];
      const num2 = numbers[generateRandomArrayIndex(numbers.length)];
      const input = `${num1}(minus(${num2}()))`;
      const output = numbers.indexOf(num1) - numbers.indexOf(num2);
      const testTitle = getLoopTestTitle(i + 1, input, output);

      it(testTitle, () => {
        expect(eval(input)).toEqual(output);
      });
    }
  });

  describe("Multiply tests", () => {
    for (let i = 0; i < 50; i++) {
      const num1 = numbers[generateRandomArrayIndex(numbers.length)];
      const num2 = numbers[generateRandomArrayIndex(numbers.length)];
      const input = `${num1}(times(${num2}()))`;
      const output = numbers.indexOf(num1) * numbers.indexOf(num2);
      const testTitle = getLoopTestTitle(i + 1, input, output);

      it(testTitle, () => {
        expect(eval(input)).toEqual(output);
      });
    }
  });

  describe("Divide tests", () => {
    for (let i = 0; i < 50; i++) {
      const num1 = numbers[generateRandomArrayIndex(numbers.length)];
      const num2 =
        numbers.slice(1)[generateRandomArrayIndex(numbers.length - 1)]; // remove "zero" to prevent division by zero
      const input = `${num1}(dividedBy(${num2}()))`;
      const output = Math.floor(numbers.indexOf(num1) / numbers.indexOf(num2));
      const testTitle = getLoopTestTitle(i + 1, input, output);

      it(testTitle, () => {
        expect(eval(input)).toEqual(output);
      });
    }
  });
});
