const { getLoopTestTitle } = require("../../utils/test");
const { generateRandomNumber } = require("../../utils/random");
const sumIntervals = require("./index");

const sumIntervalsCheck = (_intervals) => {
  const intervals = [..._intervals].sort(([xA], [xB]) => {
    return xA - xB;
  });

  for (let i = 1; i < intervals.length; i++) {
    if (
      intervals[i - 1][0] <= intervals[i][0] &&
      intervals[i][0] <= intervals[i - 1][1]
    ) {
      intervals[i - 1][1] = Math.max(intervals[i - 1][1], intervals[i][1]);
      intervals.splice(i--, 1);
    }
  }

  return intervals.reduce((acc, [x, y]) => {
    return acc + (y - x);
  }, 0);
};

describe("Static tests", () => {
  describe("Non overlapping", () => {
    const inputs = [
      [[1, 5]],
      [
        [1, 5],
        [6, 10],
      ],
      [
        [11, 15],
        [6, 10],
        [1, 2],
      ],
    ];

    inputs.forEach((input, index) => {
      const output = sumIntervalsCheck(input);
      const testTitle = getLoopTestTitle(index + 1, input, output);

      it(testTitle, () => {
        expect(sumIntervals(input)).toEqual(output);
      });
    });
  });

  describe("Overlapping intervals", () => {
    const inputs = [
      [
        [1, 5],
        [1, 5],
      ],
      [
        [1, 5],
        [5, 10],
      ],
      [
        [1, 4],
        [3, 6],
        [5, 8],
        [7, 10],
        [9, 12],
      ],
      [
        [1, 4],
        [7, 10],
        [3, 5],
      ],
      [
        [1, 20],
        [2, 19],
        [5, 15],
        [8, 12],
      ],
      [
        [1, 5],
        [10, 20],
        [1, 6],
        [16, 19],
        [5, 11],
      ],
      [
        [2, 3],
        [2, 6],
        [2, 4],
        [2, 9],
        [2, 5],
      ],
    ];

    inputs.forEach((input, index) => {
      const output = sumIntervalsCheck(input);
      const testTitle = getLoopTestTitle(index + 1, input, output);

      it(testTitle, () => {
        expect(sumIntervals(input)).toEqual(output);
      });
    });
  });
});

describe("Random tests", () => {
  for (let i = 0; i < 100; i++) {
    const intervals = [];
    const length = generateRandomNumber(1, 20);

    for (let j = 0; j < length; j++) {
      const x = generateRandomNumber(-500, 499);
      const y = generateRandomNumber(x + 1, 500);

      intervals.push(x < y ? [x, y] : [y, x]);
    }

    const input = intervals;
    const output = sumIntervalsCheck(intervals);
    const testTitle = getLoopTestTitle(i + 1, input, output);

    it(testTitle, () => {
      expect(sumIntervals(input)).toEqual(output);
    });
  }
});
