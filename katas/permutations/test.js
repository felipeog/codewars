const { getLoopTestTitle } = require("../../utils/test");
const permutations = require("./index");

describe("Static tests", () => {
  const aPermutations = ["a"];
  const aaPermutations = ["aa"];
  const abPermutations = ["ab", "ba"];
  const abcPermutations = ["abc", "acb", "bac", "bca", "cab", "cba"];
  const aabbPermutations = ["aabb", "abab", "abba", "baab", "baba", "bbaa"];
  const abcdPermutations = [
    "abcd",
    "abdc",
    "acbd",
    "acdb",
    "adbc",
    "adcb",
    "bacd",
    "badc",
    "bcad",
    "bcda",
    "bdac",
    "bdca",
    "cabd",
    "cadb",
    "cbad",
    "cbda",
    "cdab",
    "cdba",
    "dabc",
    "dacb",
    "dbac",
    "dbca",
    "dcab",
    "dcba",
  ];
  const aaaabPermutations = ["aaaab", "aaaba", "aabaa", "abaaa", "baaaa"];
  const tests = [
    { input: "a", output: aPermutations },
    { input: "ab", output: abPermutations },
    { input: "abc", output: abcPermutations },
    { input: "abcd", output: abcdPermutations },
    { input: "bcad", output: abcdPermutations },
    { input: "dcba", output: abcdPermutations },
    { input: "aa", output: aaPermutations },
    { input: "aabb", output: aabbPermutations },
    { input: "aaaab", output: aaaabPermutations },
  ];

  tests.forEach(({ input, output }, index) => {
    const testTitle = getLoopTestTitle(index + 1, input, output);

    it(testTitle, () => {
      const result = permutations(input);
      const sortedResult = [...result].sort();

      expect(sortedResult).toEqual(output);
    });
  });
});
