const { getLoopTestTitle } = require("../../utils/test");
const humanReadable = require("./index");

describe("Static tests", () => {
  const tests = [
    { input: 0, output: "00:00:00" },
    { input: 59, output: "00:00:59" },
    { input: 60, output: "00:01:00" },
    { input: 90, output: "00:01:30" },
    { input: 3599, output: "00:59:59" },
    { input: 3600, output: "01:00:00" },
    { input: 45296, output: "12:34:56" },
    { input: 86399, output: "23:59:59" },
    { input: 86400, output: "24:00:00" },
    { input: 359999, output: "99:59:59" },
  ];

  tests.forEach(({ input, output }, index) => {
    const tesTitle = getLoopTestTitle(index + 1, input, output);

    test(tesTitle, () => {
      expect(humanReadable(input)).toEqual(output);
    });
  });
});
