const findOdd = require("./index");

describe("Example tests", () => {
  const exampleTests = [
    {
      data: [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5],
      expected: 5,
    },
    { data: [1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5], expected: -1 },
    { data: [20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5], expected: 5 },
    { data: [10], expected: 10 },
    { data: [1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1], expected: 10 },
    { data: [5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10], expected: 1 },
  ];

  exampleTests.forEach(({ data, expected }, index) => {
    test(`Example test ${index + 1}`, () => {
      expect(findOdd(data)).toEqual(expected);
    });
  });
});

describe("Random tests", () => {
  var i, sz, a, j, n;
  for (i = 0; i < 40; ++i) {
    sz = Math.round(Math.random() * 1000 + 50);
    if (!sz % 2) {
      ++sz;
    }
    a = [];
    for (j = 0; j < sz - 1; j += 2) {
      n = Math.round(Math.random() * 1000);
      a.push(n);
      a.push(n);
    }
    n = Math.round(Math.random() * 1000);
    a.push(n);

    test(`Random test ${i + 1}`, () => {
      expect(findOdd(a)).toEqual(n);
    });
  }
});
