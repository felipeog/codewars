const { getLoopTestTitle } = require("../../utils/test");
const flatten = require("./index");

describe("Static tests", () => {
  const tests = [
    {
      input: [1, [2, 3], 4, 5, [6, [7, [8]]]],
      output: [1, 2, 3, 4, 5, 6, 7, 8],
    },
    {
      input: [[[[[[1]]]]], ["a", [3, ["b"]]], null, 5, "c"],
      output: [1, "a", 3, "b", null, 5, "c"],
    },
  ];

  tests.forEach(({ input, output }, index) => {
    const testTitle = getLoopTestTitle(index + 1, input, output);

    it(testTitle, () => {
      expect(flatten(...input)).toEqual(output);
    });
  });
});
