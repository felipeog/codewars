const { getLoopTestTitle } = require("../../utils/test");
const hexStringToRGB = require("./index");

describe("Static tests", () => {
  const tests = [
    { input: "#FF9933", output: { r: 255, g: 153, b: 51 } },
    { input: "#beaded", output: { r: 190, g: 173, b: 237 } },
    { input: "#000000", output: { r: 0, g: 0, b: 0 } },
    { input: "#111111", output: { r: 17, g: 17, b: 17 } },
    { input: "#Fa3456", output: { r: 250, g: 52, b: 86 } },
  ];

  tests.forEach(({ input, output }, index) => {
    const testTitle = getLoopTestTitle(index + 1, input, output);

    it(testTitle, () => {
      expect(hexStringToRGB(input)).toEqual(output);
    });
  });
});
