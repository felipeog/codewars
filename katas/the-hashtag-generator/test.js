const { getLoopTestTitle } = require("../../utils/test");
const generateHashtag = require("./index");

describe("Static tests", () => {
  const tests = [
    { input: "", output: false },
    { input: " ".repeat(200), output: false },
    { input: "Do We have A Hashtag", output: "#DoWeHaveAHashtag" },
    { input: "Codewars", output: "#Codewars" },
    { input: "Codewars Is Nice", output: "#CodewarsIsNice" },
    { input: "Codewars is nice", output: "#CodewarsIsNice" },
    { input: "code" + " ".repeat(140) + "wars", output: "#CodeWars" },
    {
      input:
        "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat",
      output: false,
    },
    { input: "a".repeat(139), output: "#A" + "a".repeat(138) },
    { input: "a".repeat(140), output: false },
  ];

  tests.forEach(({ input, output }, index) => {
    const testTitle = getLoopTestTitle(index + 1, input, output);

    it(testTitle, () => {
      expect(generateHashtag(input)).toEqual(output);
    });
  });
});
