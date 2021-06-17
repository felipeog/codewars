const { getLoopTestTitle } = require("../../utils/test");
const { generateRandomNames } = require("../../utils/random");
const likes = require("./index");

describe("Static tests", () => {
  const tests = [
    { input: [], output: "no one likes this" },
    { input: ["Peter"], output: "Peter likes this" },
    { input: ["Jacob", "Alex"], output: "Jacob and Alex like this" },
    { input: ["Max", "John", "Mark"], output: "Max, John and Mark like this" },
    {
      input: ["Alex", "Jacob", "Mark", "Max"],
      output: "Alex, Jacob and 2 others like this",
    },
  ];

  tests.forEach(({ input, output }, index) => {
    const testTitle = getLoopTestTitle(index + 1, input, output);

    it(testTitle, () => {
      expect(likes(input)).toEqual(output);
    });
  });
});

describe("Random tests", () => {
  for (let i = 0; i < 100; i++) {
    const names = generateRandomNames(i);
    const input = names;
    let output = "";

    if (i === 0) {
      output = "no one likes this";
    }

    if (i === 1) {
      output = `${names[0]} likes this`;
    }

    if (i === 2) {
      output = `${names[0]} and ${names[1]} like this`;
    }

    if (i === 3) {
      output = `${names[0]}, ${names[1]} and ${names[2]} like this`;
    }

    if (i >= 4) {
      const [firstName, secondName, ...restOfNames] = names;
      const restCount = restOfNames.length;

      output = `${firstName}, ${secondName} and ${restCount} others like this`;
    }

    const testTitle = getLoopTestTitle(i + 1, input, output);

    it(testTitle, () => {
      expect(likes(input)).toEqual(output);
    });
  }
});
