const { getLoopTestTitle } = require("../../utils/test");
const {
  generateRandomChars,
  generateRandomNumber,
} = require("../../utils/random");
const rot13 = require("./index");

describe("Static tests", () => {
  const tests = [
    { input: "test", output: "grfg" },
    { input: "Test", output: "Grfg" },
    { input: "Codewars", output: "Pbqrjnef" },
    { input: "Ruby is cool!", output: "Ehol vf pbby!" },
    { input: "10+2 is twelve.", output: "10+2 vf gjryir." },
    {
      input: "abcdefghijklmnopqrstuvwxyz",
      output: "nopqrstuvwxyzabcdefghijklm",
    },
  ];

  tests.forEach(({ input, output }, index) => {
    const testTitle = getLoopTestTitle(index + 1, input, output);

    it(testTitle, () => {
      expect(rot13(input)).toEqual(output);
    });
  });
});

describe("Random tests", () => {
  const rot13Check = (message) => {
    let result = "";

    for (i in message) {
      const asciiCode = message[i].charCodeAt(0);

      result +=
        97 <= asciiCode && asciiCode <= 122
          ? String.fromCharCode(((asciiCode - 97 + 13) % 26) + 97)
          : 65 <= asciiCode && asciiCode <= 90
          ? String.fromCharCode(((asciiCode - 65 + 13) % 26) + 65)
          : String.fromCharCode(asciiCode);
    }

    return result;
  };

  for (let i = 0; i < 20; i++) {
    const randomLength = generateRandomNumber(10, 30);
    const randomString = generateRandomChars(randomLength);
    const input = randomString;
    const output = rot13Check(randomString);
    const testTitle = getLoopTestTitle(i + 1, input, output);

    it(testTitle, () => {
      expect(rot13(input)).toEqual(output);
    });
  }
});
