const { getLoopTestTitle } = require("../../utils/test");
const moveZeros = require("./index");

describe("Static Tests", () => {
  const tests = [
    {
      input: [1, 2, 0, 1, 0, 1, 0, 3, 0, 1],
      output: [1, 2, 1, 1, 3, 1, 0, 0, 0, 0],
    },

    {
      input: [9, 0.0, 0, 9, 1, 2, 0, 1, 0, 1, 0.0, 3, 0, 1, 9, 0, 0, 0, 0, 9],
      output: [9, 9, 1, 2, 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },

    {
      input: [
        "a",
        0,
        0,
        "b",
        "c",
        "d",
        0,
        1,
        0,
        1,
        0,
        3,
        0,
        1,
        9,
        0,
        0,
        0,
        0,
        9,
      ],
      output: [
        "a",
        "b",
        "c",
        "d",
        1,
        1,
        3,
        1,
        9,
        9,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
      ],
    },

    {
      input: [
        "a",
        0,
        0,
        "b",
        null,
        "c",
        "d",
        0,
        1,
        false,
        0,
        1,
        0,
        3,
        [],
        0,
        1,
        9,
        0,
        0,
        {},
        0,
        0,
        9,
      ],
      output: [
        "a",
        "b",
        null,
        "c",
        "d",
        1,
        false,
        1,
        3,
        [],
        1,
        9,
        {},
        9,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
      ],
    },

    {
      input: [0, 1, null, 2, false, 1, 0],
      output: [1, null, 2, false, 1, 0, 0],
    },
  ];

  tests.forEach(({ input, output }, index) => {
    const testTitle = getLoopTestTitle(index + 1, input, output);

    it(testTitle, () => {
      expect(moveZeros(input)).toEqual(output);
    });
  });
});
