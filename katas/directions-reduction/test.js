const { getLoopTestTitle } = require("../../utils/test");
const { shuffleArray, generateRandomNumber } = require("../../utils/random");
const dirReduc = require("./index");

describe("Static tests", () => {
  const tests = [
    {
      input: ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"],
      output: ["WEST"],
    },
    { input: ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"], output: [] },
    {
      input: ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "NORTH"],
      output: ["NORTH"],
    },
    {
      input: [
        "EAST",
        "EAST",
        "WEST",
        "NORTH",
        "WEST",
        "EAST",
        "EAST",
        "SOUTH",
        "NORTH",
        "WEST",
      ],
      output: ["EAST", "NORTH"],
    },
    {
      input: [
        "NORTH",
        "EAST",
        "NORTH",
        "EAST",
        "WEST",
        "WEST",
        "EAST",
        "EAST",
        "WEST",
        "SOUTH",
      ],
      output: ["NORTH", "EAST"],
    },
    {
      input: ["NORTH", "WEST", "SOUTH", "EAST"],
      output: ["NORTH", "WEST", "SOUTH", "EAST"],
    },
  ];

  tests.forEach(({ input, output }, index) => {
    const testTitle = getLoopTestTitle(index + 1, input, output);

    it(testTitle, () => {
      expect(dirReduc(input)).toEqual(output);
    });
  });
});

describe("Random tests", () => {
  const directions = [
    ["NORTH", "EAST"],
    ["EAST", "SOUTH"],
    ["SOUTH", "WEST"],
    ["WEST", "NORTH"],
    ["NORTH", "NORTH", "NORTH"],
  ];

  shuffleArray(directions).forEach((direction, index) => {
    const aa = ["NORTH", "SOUTH"];
    const bb = ["EAST", "WEST"];
    const input = [...direction];
    const output = [...direction];

    for (let x = 0, z = 2 + generateRandomNumber(0, 1); x < z; x++) {
      const a = generateRandomNumber(0, 1);
      const b = generateRandomNumber(0, 1);

      if (x % 2) {
        input.push(aa[a]);
        input.push(aa[(a + 1) % 2]);
        input.unshift(bb[b]);
        input.unshift(bb[(b + 1) % 2]);
      } else {
        input.push(bb[b]);
        input.push(bb[(b + 1) % 2]);
        input.unshift(aa[a]);
        input.unshift(aa[(a + 1) % 2]);
      }
    }

    const testTitle = getLoopTestTitle(index + 1, input, output);

    it(testTitle, () => {
      expect(dirReduc(input)).toEqual(output);
    });
  });
});
