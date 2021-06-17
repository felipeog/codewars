const { getLoopTestTitle } = require("../../utils/test");
const { generateRandomName } = require("../../utils/random");
const firstNonRepeatingLetter = require("./index");

describe("Static Tests", () => {
  const tests = [
    { input: "a", output: "a" },
    { input: "stress", output: "t" },
    { input: "moonmen", output: "e" },
    { input: "", output: "" },
    { input: "abba", output: "" },
    { input: "aa", output: "" },
    { input: "∞§ﬁ›ﬂ∞§", output: "ﬁ" },
    { input: "hello world, eh?", output: "w" },
    { input: "sTreSS", output: "T" },
    { input: "Go hang a salami, I'm a lasagna hog!", output: "," },
  ];

  tests.forEach(({ input, output }, index) => {
    const testTitle = getLoopTestTitle(index + 1, input, output);

    it(testTitle, () => {
      expect(firstNonRepeatingLetter(input)).toEqual(output);
    });
  });
});

describe("Random Tests", () => {
  for (let i = 0; i < 10; i++) {
    const uniqueLetter = generateRandomName()[0];
    const rep = new RegExp(uniqueLetter, "gi");
    let randomString = "";

    while (randomString.length < 100) {
      const randomName = generateRandomName().replace(rep, "");
      randomString += `${
        !randomString.length ? "" : " "
      }${randomName} ${randomName}`;
    }

    const input = randomString + uniqueLetter;
    const output = uniqueLetter;
    const testTitle = getLoopTestTitle(i + 1, input, output);

    it(testTitle, () => {
      expect(firstNonRepeatingLetter(input)).toEqual(output);
    });
  }
});
