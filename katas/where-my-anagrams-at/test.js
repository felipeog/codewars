const { getLoopTestTitle } = require("../../utils/test");
const anagrams = require("./index");

describe("Static tests", () => {
  const tests = [
    {
      input: ["abba", ["aabb", "abcd", "bbaa", "dada"]],
      output: ["aabb", "bbaa"],
    },
    {
      input: ["racer", ["crazer", "carer", "racar", "caers", "racer"]],
      output: ["carer", "racer"],
    },
    { input: ["laser", ["lazing", "lazy", "lacer"]], output: [] },
  ];

  tests.forEach(({ input, output }, index) => {
    const testTitle = getLoopTestTitle(index + 1, input, output);

    it(testTitle, () => {
      expect(anagrams(...input)).toEqual(output);
    });
  });
});
