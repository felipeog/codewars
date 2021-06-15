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

describe("Static example calculations", () => {
  test("Test", () => {
    expect(seven(times(five()))).toEqual(35);
    expect(four(plus(nine()))).toEqual(13);
    expect(eight(minus(three()))).toEqual(5);
    expect(six(dividedBy(two()))).toEqual(3);
    expect(zero(plus(one()))).toEqual(1);
  });
});

describe("Random calculations", () => {
  let numbers = [
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

  test("Add", () => {
    for (let i = 0; i < 50; i++) {
      let num1 = numbers[generateRandomArrayIndex(numbers.length)];
      let num2 = numbers[generateRandomArrayIndex(numbers.length)];
      expect(eval(num1 + "(plus(" + num2 + "()))")).toEqual(
        numbers.indexOf(num1) + numbers.indexOf(num2)
      );
    }
  });

  test("Subtract", () => {
    for (let i = 0; i < 50; i++) {
      let num1 = numbers[generateRandomArrayIndex(numbers.length)];
      let num2 = numbers[generateRandomArrayIndex(numbers.length)];
      expect(eval(num1 + "(minus(" + num2 + "()))")).toEqual(
        numbers.indexOf(num1) - numbers.indexOf(num2)
      );
    }
  });

  test("Multiply", () => {
    for (let i = 0; i < 50; i++) {
      let num1 = numbers[generateRandomArrayIndex(numbers.length)];
      let num2 = numbers[generateRandomArrayIndex(numbers.length)];
      expect(eval(num1 + "(times(" + num2 + "()))")).toEqual(
        numbers.indexOf(num1) * numbers.indexOf(num2)
      );
    }
  });

  test("Divide", () => {
    for (let i = 0; i < 50; i++) {
      let num1 = numbers[generateRandomArrayIndex(numbers.length)];
      let num2 = numbers.slice(1)[generateRandomArrayIndex(numbers.length - 1)];
      expect(eval(num1 + "(dividedBy(" + num2 + "()))")).toEqual(
        Math.floor(numbers.indexOf(num1) / numbers.indexOf(num2))
      );
    }
  });
});
