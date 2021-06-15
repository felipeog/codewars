const { test } = require("@jest/globals");
const validParentheses = require("./index");

describe("Basic tests", () => {
  test("Test", () => {
    expect(validParentheses("()()((()")).toEqual(false);
    expect(validParentheses("()")).toEqual(true);
    expect(validParentheses("()()")).toEqual(true);
    expect(validParentheses("(())")).toEqual(true);
    expect(validParentheses(")")).toEqual(false);
    expect(validParentheses("")).toEqual(true);
    expect(validParentheses("())")).toEqual(false);
    expect(validParentheses("((((()))))")).toEqual(true);
    expect(validParentheses("()))")).toEqual(false);
    expect(validParentheses("()()()())")).toEqual(false);
    expect(validParentheses("(()()()())(())")).toEqual(true);
    expect(validParentheses("((((((((")).toEqual(false);
    expect(validParentheses("(())((()((()))))")).toEqual(true);
    expect(validParentheses("())(")).toEqual(false);
    expect(validParentheses(")()()()(")).toEqual(false);
    expect(validParentheses("(()()))(")).toEqual(false);
    expect(validParentheses(")()(")).toEqual(false);
    expect(validParentheses("())(()")).toEqual(false);
    expect(validParentheses("())(()")).toEqual(false);
  });
});

function validParenthesesReference(string) {
  var tokenizer = /[()]/g, // ignores characters in between; parentheses are
    count = 0, // pretty useless if they're not grouping *something*
    token;
  while (((token = tokenizer.exec(string)), token !== null)) {
    if (token == "(") {
      count++;
    } else if (token == ")") {
      count--;
      if (count < 0) {
        return false;
      }
    }
  }
  return count == 0;
}

function generator() {
  const len = randInt(1, 20) * 2;
  let brackets = "";
  let rb = 0;
  for (let i = 0; i < len; i++)
    if (randInt(0, rb) == 0) {
      brackets += "(";
      rb += 5;
    } else {
      brackets += ")";
      rb -= 5;
    }
  return [brackets];
}

function randInt(a, b) {
  return (Math.random() * (b - a + 1) + a) | 0;
}

function randomAssertSimilar(
  generator,
  userSolution,
  referenceSolution,
  tests
) {
  tests = tests || 100;
  var user, reference, values;
  while (tests-- > 0) {
    values = generator();
    reference = referenceSolution.apply(this, values);
    user = userSolution.apply(this, values);

    test("Test", () => {
      expect(user).toEqual(reference);
    });
  }
}

describe("Random tests", () => {
  randomAssertSimilar(generator, validParentheses, validParenthesesReference);
});
