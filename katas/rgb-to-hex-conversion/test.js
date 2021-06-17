const { getLoopTestTitle } = require("../../utils/test");
const { generateRandomNumber } = require("../../utils/random");
const rgb = require("./index");

describe("Static tests", () => {
  const tests = [
    { input: [0, 0, 0], output: "000000" },
    { input: [0, 0, -20], output: "000000" },
    { input: [173, 255, 47], output: "ADFF2F" },
    { input: [300, 255, 255], output: "FFFFFF" },
  ];

  tests.forEach(({ input, output }, index) => {
    const testTitle = getLoopTestTitle(index + 1, input, output);

    it(testTitle, () => {
      expect(rgb(...input)).toEqual(output);
    });
  });
});

describe("Random tests", () => {
  const hex = (number) => {
    if (isNaN(parseInt(number, 10))) {
      return "00";
    }

    const chars = "0123456789ABCDEF";
    const clamped = Math.max(0, Math.min(number, 255));

    return (
      chars.charAt((clamped - (clamped % 16)) / 16) + chars.charAt(clamped % 16)
    );
  };

  const rgbCheck = (r, g, b) => {
    return hex(r) + hex(g) + hex(b);
  };

  const generateRgb = () => {
    const r = generateRandomNumber(-5, 300);
    const g = generateRandomNumber(-5, 300);
    const b = generateRandomNumber(-5, 300);

    return [r, g, b];
  };

  for (let i = 0; i < 100; i++) {
    const randomRgb = generateRgb();
    const input = randomRgb;
    const output = rgbCheck(...randomRgb);
    const testTitle = getLoopTestTitle(i + 1, input, output);

    it(testTitle, () => {
      expect(rgb(...input)).toEqual(output);
    });
  }
});
