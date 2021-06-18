const { getLoopTestTitle } = require("../../utils/test");
const { generateRandomNumber } = require("../../utils/random");
const validParentheses = require("./index");

describe("Static tests", () => {
  const tests = [
    { input: "()()((()", output: false },
    { input: "()", output: true },
    { input: "()()", output: true },
    { input: "(())", output: true },
    { input: ")", output: false },
    { input: "", output: true },
    { input: "())", output: false },
    { input: "((((()))))", output: true },
    { input: "()))", output: false },
    { input: "()()()())", output: false },
    { input: "(()()()())(())", output: true },
    { input: "((((((((", output: false },
    { input: "(())((()((()))))", output: true },
    { input: "())(", output: false },
    { input: ")()()()(", output: false },
    { input: "(()()))(", output: false },
    { input: ")()(", output: false },
    { input: "())(()", output: false },
    { input: "())(()", output: false },
  ];

  tests.forEach(({ input, output }, index) => {
    const testTitle = getLoopTestTitle(index + 1, input, output);

    it(testTitle, () => {
      expect(validParentheses(input)).toEqual(output);
    });
  });
});

describe("Random tests", () => {
  const validParenthesesCheck = (string) => {
    const tokenizer = /[()]/g;
    let depth = 0;
    let token;

    while (token !== null) {
      token = tokenizer.exec(string);

      if (token == "(") {
        depth++;
      }

      if (token == ")") {
        depth--;

        if (depth < 0) {
          return false;
        }
      }
    }

    return depth === 0;
  };

  const generateParentheses = () => {
    const randomLength = generateRandomNumber(1, 20) * 2;
    let brackets = "";

    for (let i = 0; i < randomLength; i++) {
      brackets += Math.random() > 0.5 ? "(" : ")";
    }

    return brackets;
  };

  for (let i = 0; i < 100; i++) {
    const randomParentheses = generateParentheses();
    const input = randomParentheses;
    const output = validParenthesesCheck(randomParentheses);
    const testTitle = getLoopTestTitle(i + 1, input, output);

    it(testTitle, () => {
      expect(validParentheses(input)).toEqual(output);
    });
  }
});
