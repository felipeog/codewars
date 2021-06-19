const { getLoopTestTitle } = require("../../utils/test");
const solution = require("./index");

describe("Static tests", () => {
  const tests = [
    {
      input: [
        "apples, pears # and bananas\ngrapes\nbananas !apples",
        ["#", "!"],
      ],
      output: "apples, pears\ngrapes\nbananas",
    },
    { input: ["a #b\nc\nd $e f g", ["#", "$"]], output: "a\nc\nd" },
  ];

  tests.forEach(({ input, output }, index) => {
    const testTitle = getLoopTestTitle(index + 1, input, output);

    it(testTitle, () => {
      expect(solution(...input)).toEqual(output);
    });
  });
});
