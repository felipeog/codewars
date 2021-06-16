const { getLoopTestTitle } = require("../../utils/test");
const even_or_odd = require("./index");

describe("Static tests", () => {
  const tests = [
    { input: -4, output: "Even" },
    { input: -3, output: "Odd" },
    { input: 0, output: "Even" },
    { input: 1, output: "Odd" },
    { input: 2, output: "Even" },
    { input: 7, output: "Odd" },
    { input: 17, output: "Odd" },
    { input: 78, output: "Even" },
    { input: 100_000, output: "Even" },
    { input: 1_545_452, output: "Even" },
    { input: 74_156_741, output: "Odd" },
  ];

  tests.forEach(({ input, output }, index) => {
    const testTitle = getLoopTestTitle(index + 1, input, output);

    it(testTitle, () => {
      expect(even_or_odd(input)).toEqual(output);
    });
  });
});

describe("Random tests", () => {
  const randomEvenNumber = () => {
    return (25 + ~~(Math.random() * 25)) * 2;
  };

  const randomOddNumber = () => {
    return randomEvenNumber() + 1;
  };

  for (let i = 0; i < 6; i++) {
    let input;
    let output;

    if (Math.random() > 0.5) {
      input = randomEvenNumber();
      output = "Even";
    } else {
      input = randomOddNumber();
      output = "Odd";
    }

    const testTitle = getLoopTestTitle(i + 1, input, output);

    it(testTitle, () => {
      expect(even_or_odd(input)).toEqual(output);
    });
  }
});
