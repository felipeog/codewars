const { getLoopTestTitle } = require("../../utils/test");
const formatDuration = require("./index");

describe("Static tests", () => {
  const tests = [
    { input: 0, output: "now" },
    { input: 1, output: "1 second" },
    { input: 62, output: "1 minute and 2 seconds" },
    { input: 120, output: "2 minutes" },
    { input: 3_600, output: "1 hour" },
    { input: 3_662, output: "1 hour, 1 minute and 2 seconds" },
    {
      input: 15_731_080,
      output: "182 days, 1 hour, 44 minutes and 40 seconds",
    },
    {
      input: 33_243_586,
      output: "1 year, 19 days, 18 hours, 19 minutes and 46 seconds",
    },
    {
      input: 101_956_166,
      output: "3 years, 85 days, 1 hour, 9 minutes and 26 seconds",
    },
    { input: 132_030_240, output: "4 years, 68 days, 3 hours and 4 minutes" },
    {
      input: 205_851_834,
      output: "6 years, 192 days, 13 hours, 3 minutes and 54 seconds",
    },
    {
      input: 242_062_374,
      output: "7 years, 246 days, 15 hours, 32 minutes and 54 seconds",
    },
    {
      input: 253_374_061,
      output: "8 years, 12 days, 13 hours, 41 minutes and 1 second",
    },
  ];

  tests.forEach(({ input, output }, index) => {
    const testTitle = getLoopTestTitle(index + 1, input, output);

    it(testTitle, () => {
      expect(formatDuration(input)).toEqual(output);
    });
  });
});

describe("Random tests", () => {
  const formatComponents = (components) => {
    const firsts = components.slice(0, -1).join(", ");

    return (firsts && firsts + " and ") + components[components.length - 1];
  };

  const solution = (seconds) => {
    if (seconds === 0) {
      return "now";
    }

    let auxSeconds = seconds;
    const components = ["year", "day", "hour", "minute", "second"];
    const times = [31536000, 86400, 3600, 60, 1];
    const rawComponents = times
      .map((secondsByUnit, i) => {
        const value = (auxSeconds / secondsByUnit) | 0;

        auxSeconds %= secondsByUnit;

        return value === 0
          ? ""
          : `${value} ${components[i]}${value > 1 ? "s" : ""}`;
      })
      .filter(Boolean);

    return formatComponents(rawComponents);
  };

  for (let i = 0; i < 100; i++) {
    const randomSeconds = Math.floor(Math.random() * 10_000_000);
    const input = randomSeconds;
    const output = solution(randomSeconds);
    const testTitle = getLoopTestTitle(i + 1, input, output);

    it(testTitle, () => {
      expect(formatDuration(input)).toEqual(output);
    });
  }
});
