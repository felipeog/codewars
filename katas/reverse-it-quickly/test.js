const { getLoopTestTitle } = require("../../utils/test");
const {
  generateRandomString,
  generateRandomNumber,
  generateRandomNumbers,
  shuffleArray,
} = require("../../utils/random");
const functionString = require("./index");

// Override to match Kata's behavior
Array.prototype.sort = function (compareFunction) {
  function mergeSort(arr) {
    if (arr.length < 2) {
      return arr;
    }

    const middle = parseInt(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle, arr.length);

    return merge(mergeSort(left), mergeSort(right));
  }

  function merge(left, right) {
    const result = [];

    while (left.length && right.length) {
      const compareResult = compareFunction(left[0], right[0]);

      if (compareResult <= 0) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }

    while (left.length) {
      result.push(left.shift());
    }

    while (right.length) {
      result.push(right.shift());
    }

    return result;
  }

  return mergeSort(this);
};

// Using a string for the function so its length is calculated correctly
eval(functionString);

describe("Static tests", () => {
  it('Function\'s name must be "weirdReverse"', () => {
    const isValid = typeof weirdReverse === "function";

    expect(isValid).toEqual(true);
  });

  it("Function's length must be less than or equal 28", () => {
    const limit = 28;
    const length = functionString.length;

    expect(length).toBeLessThanOrEqual(limit);
  });

  const tests = [
    { input: [1, 2, 3, 4, 5], output: [5, 4, 3, 2, 1] },

    {
      input: ["!", "coming", "are", "zombies"],
      output: ["zombies", "are", "coming", "!"],
    },

    {
      input: [1, true, "Z", [], false, 9, "w"],
      output: ["w", 9, false, [], "Z", true, 1],
    },
  ];

  tests.forEach(({ input, output }, index) => {
    const testTitle = getLoopTestTitle(index + 1, input, output);

    it(testTitle, () => {
      expect(weirdReverse(input)).toEqual(output);
    });
  });
});

describe("Random tests", () => {
  const generateArray = () => {
    const length = generateRandomNumber(5, 10);
    const string = generateRandomString(length);
    const number = generateRandomNumber(0, 100);
    const boolean = Math.random() > 0.5;
    const numbersArray = generateRandomNumbers(length, 5, length);
    const emptyArray = [];

    return shuffleArray([string, number, boolean, numbersArray, emptyArray]);
  };

  for (let i = 0; i < 50; i++) {
    const array = generateArray();
    const input = array;
    const output = array.slice().reverse();
    const testTitle = getLoopTestTitle(i + 1, input, output);

    it(testTitle, () => {
      expect(weirdReverse(input)).toEqual(output);
    });
  }
});
