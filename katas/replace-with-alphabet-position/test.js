const { getLoopTestTitle } = require("../../utils/test");
const {
  generateRandomChars,
  generateRandomNumber,
} = require("../../utils/random");
const alphabetPosition = require("./index");

function alphabetPositionCheck(text) {
  return text
    .toLowerCase()
    .split("")
    .filter((letter) => {
      return /[a-z]/.test(letter);
    })
    .map((letter) => {
      return letter.charCodeAt() - 96;
    })
    .join(" ");
}

describe("Static tests", () => {
  const tests = [{ input: "-.-'", output: "" }];

  for (let i = 65; i <= 122; i++) {
    const letter = String.fromCharCode(i);
    const input = letter;
    const output = alphabetPositionCheck(letter);

    tests.push({
      input,
      output,
    });
  }

  tests.forEach(({ input, output }, index) => {
    const testTitle = getLoopTestTitle(index + 1, input, output);

    it(testTitle, () => {
      expect(alphabetPosition(input)).toEqual(output);
    });
  });
});

describe("Random tests", () => {
  for (let i = 0; i < 50; i++) {
    const randomLength = generateRandomNumber(5, 15);
    const randomChars = generateRandomChars(randomLength);
    const input = randomChars;
    const output = alphabetPositionCheck(randomChars);
    const testTitle = getLoopTestTitle(i + 1, input, output);

    it(testTitle, () => {
      expect(alphabetPosition(input)).toEqual(output);
    });
  }
});
