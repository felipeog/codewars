const { getLoopTestTitle } = require("../../utils/test");
const removeZeros = require("./index");

describe("Should not use any Array or Object methods", () => {
  const functionCode = removeZeros
    .toString()
    .replace(
      /(?:[^'"\/]\/\*(?:[\s\S]*?)\*\/[^'"\/])|(?:[^'"\/]\/\/(?:.*)[^'"\/]$)/gm,
      ""
    );
  const blackList = [
    "pop",
    "push",
    "reverse",
    "shift",
    "sort",
    "splice",
    "unshift",
    "concat",
    "join",
    "slice",
    "toSource",
    "toString",
    "toLocaleString",
    "indexOf",
    "lastIndexOf",
    "forEach",
    "entries",
    "every",
    "some",
    "filter",
    "find",
    "findIndex",
    "keys",
    "map",
    "reduce",
    "reduceRight",
    "stringify",
    "replace",
  ];

  blackList.forEach((method, index) => {
    it(`Test ${index + 1}: Should not use ${method}`, () => {
      const regex = new RegExp("\\." + method + "\\(.*\\)", "g");

      expect(regex.test(functionCode)).toBeFalsy();
    });
  });
});

describe("Static tests", () => {
  const tests = [
    {
      input: [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14],
      output: [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0],
    },
    { input: [1, 0, 2, 0, 3, 0], output: [1, 2, 3, 0, 0, 0] },
    { input: [0, 0, 0, 1, 2, 3], output: [1, 2, 3, 0, 0, 0] },
    { input: [0, 0, 0, 0, 0, 1], output: [1, 0, 0, 0, 0, 0] },
    {
      input: [0, 9, 0, 0, 0, 0, 0, 0, 9, 0],
      output: [9, 9, 0, 0, 0, 0, 0, 0, 0, 0],
    },
    {
      input: [4.5, 9.6, 0, 0.2, 1.5, 4e3, 0, 5],
      output: [4.5, 9.6, 0.2, 1.5, 4000, 5, 0, 0],
    },
    {
      input: [1, null, "5", "0", "2", 0, 8, 6, null, false],
      output: [1, null, "5", "2", 8, 6, null, false, "0", 0],
    },
    {
      input: [1, "0", 2, 0, 52, "0", 7, 0, "3", 1],
      output: [1, 2, 52, 7, "3", 1, "0", 0, "0", 0],
    },
    { input: ["0", "0", "0", 0, 1], output: [1, "0", "0", "0", 0] },
    {
      input: [{ a: ["code"] }, 0, { b: ["wars"] }, 1],
      output: [{ a: ["code"] }, { b: ["wars"] }, 1, 0],
    },
    { input: ["0"], output: ["0"] },
    { input: [5], output: [5] },
    { input: [0], output: [0] },
    { input: [{ code: "wars" }], output: [{ code: "wars" }] },
    { input: [], output: [] },
  ];

  tests.forEach(({ input, output }, index) => {
    const testTitle = getLoopTestTitle(index + 1, input, output);

    it(testTitle, () => {
      expect(removeZeros(input)).toEqual(output);
    });
  });
});
