const { getLoopTestTitle } = require("../../utils/test");
const incrementString = require("./index");

describe("Static tests", () => {
  const tests = [
    { input: "foobar000", output: "foobar001" },
    { input: "foobar999", output: "foobar1000" },
    { input: "foobar00999", output: "foobar01000" },
    { input: "foo", output: "foo1" },
    { input: "foobar001", output: "foobar002" },
    { input: "foobar1", output: "foobar2" },
    { input: "1", output: "2" },
    { input: "009", output: "010" },
  ];

  tests.forEach(({ input, output }, index) => {
    const testTitle = getLoopTestTitle(index + 1, input, output);

    it(testTitle, () => {
      expect(incrementString(input)).toEqual(output);
    });
  });
});
