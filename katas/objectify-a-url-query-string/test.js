const { getLoopTestTitle } = require("../../utils/test");
const {
  generateRandomString,
  generateRandomNumber,
} = require("../../utils/random");
const convertQueryToMap = require("./index");

describe("Static tests", () => {
  const tests = [
    { input: "", output: {} },
    { input: "a=1&b=2", output: { a: "1", b: "2" } },
    { input: "a=1%202", output: { a: "1 2" } },
    { input: "a=a%26b%3Dc%3F", output: { a: "a&b=c?" } },
    {
      input:
        "user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue",
      output: {
        user: {
          name: { firstname: "Bob", lastname: "Smith" },
          favoritecolor: "Light Blue",
        },
      },
    },
    {
      input:
        "user.1.name=Alice&user.2.name=Bob&user.3.name=Charles&user.4.name=Debbie",
      output: {
        user: {
          1: { name: "Alice" },
          2: { name: "Bob" },
          3: { name: "Charles" },
          4: { name: "Debbie" },
        },
      },
    },
  ];

  tests.forEach(({ input, output }, index) => {
    const testTitle = getLoopTestTitle(index + 1, input, output);

    it(testTitle, () => {
      expect(convertQueryToMap(input)).toEqual(output);
    });
  });
});

describe("Random tests", () => {
  const generateInputOutput = (depth, inputFragments = [], path) => {
    const output = {};
    const range = generateRandomNumber(1, 4);

    for (let _ = 0; _ < range; _++) {
      const key = generateRandomString(5);

      if (depth > 0) {
        if (path) {
          output[key] = generateInputOutput(
            depth - 1,
            inputFragments,
            `${path}.${key}`
          )[1];
        } else {
          output[key] = generateInputOutput(depth - 1, inputFragments, key)[1];
        }
      } else {
        const value = generateRandomString(5);

        output[key] = value;
        inputFragments.push(`${path}.${key}=${value}`);
      }
    }

    return [inputFragments, output];
  };

  for (let i = 0; i < 50; i++) {
    const depth = generateRandomNumber(1, 4);
    const [inputFragments, output] = generateInputOutput(depth);
    const input = inputFragments.join("&");
    const testTitle = getLoopTestTitle(i + 1, input, output);

    it(testTitle, () => {
      expect(convertQueryToMap(input)).toEqual(output);
    });
  }
});
