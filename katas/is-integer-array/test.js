const { getLoopTestTitle } = require("../../utils/test");
const isIntArray = require("./index");

describe("Basic tests", () => {
  const tests = [
    { input: [], output: true },
    { input: [1, 2, 3, 4], output: true },
    { input: [-11, -12, -13, -14], output: true },
    { input: [1.0, 2.0, 3.0], output: true },
    { input: [1, 2, NaN], output: false },
    { input: null, output: false },
    { input: undefined, output: false },
    { input: NaN, output: false },
    { input: "", output: false },
    { input: [null], output: false },
    { input: [undefined], output: false },
    { input: [NaN], output: false },
    { input: [1.0, 2.0, 3.0001], output: false },
    { input: ["-1"], output: false },
    { input: [1.23e-7, 2], output: false },
    { input: [1.2, 1.8, 3], output: false },
  ];

  tests.forEach(({ input, output }, index) => {
    const testTitle = getLoopTestTitle(index + 1, input, output);

    it(testTitle, () => {
      expect(isIntArray(input)).toEqual(output);
    });
  });
});
