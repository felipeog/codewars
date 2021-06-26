const { getLoopTestTitle } = require("../../utils/test");
const { generateRandomNumber } = require("../../utils/random");
const solution = require("./index");

describe("Static tests", () => {
  const tests = [
    {
      input: [
        -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20,
      ],
      output: "-6,-3-1,3-5,7-11,14,15,17-20",
    },
    {
      input: [-3, -2, -1, 2, 10, 15, 16, 18, 19, 20],
      output: "-3--1,2,10,15,16,18-20",
    },
  ];

  tests.forEach(({ input, output }, index) => {
    const testTitle = getLoopTestTitle(index + 1, input, output);

    it(testTitle, () => {
      expect(solution(input)).toEqual(output);
    });
  });
});

describe("Random tests", () => {
  const solutionCheck = (list) => {
    const length = list.length;
    const output = [];

    for (let i = 0, j; i < length; i = j + 1) {
      output.push(list[i]);

      for (j = i + 1; j < length && list[j] === list[j - 1] + 1; j++);
      j--;

      if (i === j) {
        output.push(",");
      } else if (i + 1 === j) {
        output.push(",", list[j], ",");
      } else {
        output.push("-", list[j], ",");
      }
    }

    output.pop();

    return output.join("");
  };

  const getArray = () => {
    let value = generateRandomNumber(-100, -50);
    let result = [value];
    let length = generateRandomNumber(10, 30);

    for (let j = 0; j < length; j++) {
      value += generateRandomNumber(1, 3);
      result.push(value);
    }

    return result;
  };

  for (let i = 0; i < 20; i++) {
    const input = getArray();
    const output = solutionCheck([...input]);
    const testTitle = getLoopTestTitle(i + 1, input, output);

    it(testTitle, () => {
      expect(solution(input)).toEqual(output);
    });
  }
});
