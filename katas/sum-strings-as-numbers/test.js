const { getLoopTestTitle } = require("../../utils/test");
const { generateRandomNumber } = require("../../utils/random");
const sumStrings = require("./index");

describe("Static tests", () => {
  const tests = [
    { input: ["123", "456"], output: "579" },
    { input: ["8797", "45"], output: "8842" },
    { input: ["800", "9567"], output: "10367" },
    { input: ["99", "1"], output: "100" },
    { input: ["00103", "08567"], output: "8670" },
    { input: ["", "5"], output: "5" },
    {
      input: ["712569312664357328695151392", "8100824045303269669937"],
      output: "712577413488402631964821329",
    },
    {
      input: ["50095301248058391139327916261", "81055900096023504197206408605"],
      output: "131151201344081895336534324866",
    },
  ];

  tests.forEach(({ input, output }, index) => {
    const testTitle = getLoopTestTitle(index + 1, input, output);

    it(testTitle, () => {
      expect(sumStrings(...input)).toEqual(output);
    });
  });
});

describe("Random tests", () => {
  const generateBigNumber = (length) => {
    const first = generateRandomNumber(1, 9);
    let bigNumber = `${first}`;

    for (let i = 0; i < length - 1; i++) {
      bigNumber += `${generateRandomNumber(0, 9)}`;
    }

    return bigNumber;
  };

  const sumStringsCheck = (a, b) => {
    if (!a) {
      a = "0";
    }

    if (!b) {
      b = "0";
    }

    return (BigInt(a) + BigInt(b)).toString();
    // return new BigNumber(a).plus(new BigNumber(b)).toFixed(0);
  };

  for (let i = 0; i < 50; i++) {
    const input = [
      generateBigNumber(generateRandomNumber(20, 30)),
      generateBigNumber(generateRandomNumber(20, 30)),
    ];
    const output = sumStringsCheck(...input);
    const testTitle = getLoopTestTitle(i + 1, input, output);

    it(testTitle, () => {
      expect(sumStrings(...input)).toEqual(output);
    });
  }
});
