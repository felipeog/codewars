const { getLoopTestTitle } = require("../../utils/test");
const {
  generateRandomNumber,
  generateRandomNames,
} = require("../../utils/random");
const findShort = require("./index");

describe("Static tests", () => {
  const tests = [
    { input: "bitcoin take over the world maybe who knows perhaps", output: 3 },
    {
      input:
        "turns out random test cases are easier than writing out basic ones",
      output: 3,
    },
    { input: "lets talk about javascript the best language", output: 3 },
    { input: "i want to travel the world writing code one day", output: 1 },
    { input: "Lets all go on holiday somewhere very cold", output: 2 },
    { input: "Test where final word shortest see", output: 3 },
    { input: "Let's travel abroad shall we", output: 2 },
  ];

  tests.forEach(({ input, output }, index) => {
    const testTitle = getLoopTestTitle(index + 1, input, output);

    it(testTitle, () => {
      expect(findShort(input)).toEqual(output);
    });
  });
});

describe("Random tests", () => {
  const findShortCheck = (string) => {
    const words = string.split(" ");
    const wordsLength = words.map((char) => {
      return char.length;
    });

    return Math.min(...wordsLength);
  };

  for (let i = 0; i < 40; i++) {
    const randomLength = generateRandomNumber(5, 15);
    const randomNames = generateRandomNames(randomLength);
    const randomString = randomNames.join(" ");
    const input = randomString;
    const output = findShortCheck(randomString);
    const testTitle = getLoopTestTitle(i + 1, input, output);

    it(testTitle, () => {
      expect(findShort(input)).toEqual(output);
    });
  }
});
