const solution = require("./index");

function doTest(n, expected) {
  let actual = solution(n);

  test(`Expected ${expected}, got ${actual}`, () => {
    expect(actual).toEqual(expected);
  });
}

describe("Basic tests", () => {
  doTest(10, 23);
  doTest(20, 78);
  doTest(200, 9168);
});

describe("Smallest cases", () => {
  doTest(-1, 0);
  doTest(0, 0);
  doTest(1, 0);
  doTest(2, 0);
  doTest(3, 0);
  doTest(4, 3);
  doTest(5, 3);
  doTest(6, 8);
});

describe("Random cases", () => {
  function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function _solution(number) {
    let sum = 0;

    for (let i = 1; i < number; i++) {
      if (i % 3 == 0 || i % 5 == 0) {
        sum += i;
      }
    }
    return sum;
  }

  for (let i = 0; i < 100; i++) {
    let rand = randint(0, 10 ** randint(1, 5));
    doTest(rand, _solution(rand));
  }
});
