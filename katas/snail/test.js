const snail = require("./index");

describe("Fixed tests", () => {
  test("Tests", () => {
    expect(snail([[]])).toEqual([]);
    expect(snail([[1]])).toEqual([1]);
    expect(
      snail([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ])
    ).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
    expect(
      snail([
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25],
      ])
    ).toEqual([
      1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19,
      18, 17, 12, 13,
    ]);
    expect(
      snail([
        [1, 2, 3, 4, 5, 6],
        [20, 21, 22, 23, 24, 7],
        [19, 32, 33, 34, 25, 8],
        [18, 31, 36, 35, 26, 9],
        [17, 30, 29, 28, 27, 10],
        [16, 15, 14, 13, 12, 11],
      ])
    ).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    ]);
  });
});

const solution = (array) => {
  var elem, result, step;
  result = [];
  step = 0;
  while (array.length > 0) {
    if (step > 3) {
      step = 0;
    }
    result = (function () {
      switch (step) {
        case 0:
          return result.concat(array.shift());
        case 1:
          return result.concat(
            (function () {
              var _i, _len, _results;
              _results = [];
              for (_i = 0, _len = array.length; _i < _len; _i++) {
                elem = array[_i];
                _results.push(elem.pop());
              }
              return _results;
            })()
          );
        case 2:
          return result.concat(array.pop().reverse());
        case 3:
          return result.concat(
            (function () {
              var _i, _len, _results;
              _results = [];
              for (_i = 0, _len = array.length; _i < _len; _i++) {
                elem = array[_i];
                _results.push(elem.shift());
              }
              return _results;
            })().reverse()
          );
      }
    })();
    step++;
  }
  return result;
};

const randint = (a, b) => a + ~~(Math.random() * (b - a + 1));

describe("Random tests", () => {
  test("Tests", () => {
    for (let i = 0; i < 100; i++) {
      let n = randint(1, 20);
      let a = Array.from({ length: n }, (x) =>
        Array.from({ length: n }, (y) => randint(1, 1000))
      );
      let b = a.map((x) => x.slice());

      expect(snail(a)).toEqual(solution(b));
    }
  });
});
