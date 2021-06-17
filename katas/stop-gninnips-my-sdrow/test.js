const { getLoopTestTitle } = require("../../utils/test");
const {
  generateRandomString,
  generateRandomNumber,
} = require("../../utils/random");
const spinWords = require("./index");

describe("Static tests", () => {
  const tests = [
    { input: "Welcome", output: "emocleW" },
    { input: "Hey fellow warriors", output: "Hey wollef sroirraw" },
    { input: "This is a test", output: "This is a test" },
    { input: "This is another test", output: "This is rehtona test" },
    {
      input: "This sentence is a sentence",
      output: "This ecnetnes is a ecnetnes",
    },
    {
      input: "You are almost to the last test",
      output: "You are tsomla to the last test",
    },
    {
      input: "Just kidding there is still one more",
      output: "Just gniddik ereht is llits one more",
    },
    {
      input: "Seriously this is the last one",
      output: "ylsuoireS this is the last one",
    },
  ];

  tests.forEach(({ input, output }, index) => {
    const testTitle = getLoopTestTitle(index + 1, input, output);

    it(testTitle, () => {
      expect(spinWords(input)).toEqual(output);
    });
  });
});

describe("Random tests", () => {
  const spinWordsCheck = (string) => {
    return string
      .split(" ")
      .map((s) => (s.length >= 5 ? s.split("").reverse().join("") : s))
      .join(" ");
  };

  for (let i = 0; i < 50; i++) {
    const arrayLength = generateRandomNumber(0, 10);
    const strings = Array.from({ length: arrayLength }, () => {
      const stringLength = generateRandomNumber(0, 10);

      return generateRandomString(stringLength);
    });
    const sentence = strings.join(" ");
    const input = sentence;
    const output = spinWordsCheck(input);
    const testTitle = getLoopTestTitle(i + 1, input, output);

    it(testTitle, () => {
      expect(spinWords(input)).toEqual(output);
    });
  }
});
