const { getLoopTestTitle } = require("../../utils/test");
const { generateRandomNumber } = require("../../utils/random");
const snail = require("./index");

describe("Static tests", () => {
  const tests = [
    { input: [[]], output: [] },
    { input: [[1]], output: [1] },
    {
      input: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      output: [1, 2, 3, 6, 9, 8, 7, 4, 5],
    },
    {
      input: [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25],
      ],
      output: [
        1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14,
        19, 18, 17, 12, 13,
      ],
    },
    {
      input: [
        [1, 2, 3, 4, 5, 6],
        [20, 21, 22, 23, 24, 7],
        [19, 32, 33, 34, 25, 8],
        [18, 31, 36, 35, 26, 9],
        [17, 30, 29, 28, 27, 10],
        [16, 15, 14, 13, 12, 11],
      ],
      output: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
      ],
    },
  ];

  tests.forEach(({ input, output }, index) => {
    const testTitle = getLoopTestTitle(index + 1, input, output);

    it(testTitle, () => {
      expect(snail(input)).toEqual(output);
    });
  });
});

const snailCheck = (inputArray) => {
  const array = inputArray.map((item) => {
    return [...item];
  });
  let elem;
  let result = [];
  let step = 0;

  while (array.length > 0) {
    if (step > 3) {
      step = 0;
    }

    result = (() => {
      switch (step) {
        case 0:
          return result.concat(array.shift());

        case 1:
          return result.concat(
            (() => {
              const results = [];

              for (let i = 0; i < array.length; i++) {
                elem = array[i];
                results.push(elem.pop());
              }

              return results;
            })()
          );

        case 2:
          return result.concat(array.pop().reverse());

        case 3:
          return result.concat(
            (function () {
              const results = [];

              for (let i = 0; i < array.length; i++) {
                elem = array[i];
                results.push(elem.shift());
              }

              return results;
            })().reverse()
          );
      }
    })();

    step++;
  }

  return result;
};

describe("Random tests", () => {
  for (let i = 0; i < 100; i++) {
    const randomLength = generateRandomNumber(1, 20);
    const randomArray = Array.from({ length: randomLength }, () => {
      return Array.from({ length: randomLength }, () => {
        return generateRandomNumber(1, 1000);
      });
    });
    const input = randomArray;
    const output = snailCheck(randomArray);
    const testTitle = getLoopTestTitle(i + 1, input, output);

    it(testTitle, () => {
      expect(snail(input)).toEqual(output);
    });
  }
});
