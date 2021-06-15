const { countOnes, maxPn, anOverAverage } = require("./index");

describe("countOnes", () => {
  test("Basic tests", () => {
    expect(countOnes(1)).toEqual(1);
    expect(countOnes(10)).toEqual(8);
    expect(countOnes(100)).toEqual(90);
    expect(countOnes(200)).toEqual(184);
    expect(countOnes(1000)).toEqual(975);
    expect(countOnes(10000)).toEqual(9968);
    expect(countOnes(100000)).toEqual(99955);
  });
});

describe("maxPn", () => {
  test("Basic tests", () => {
    expect(maxPn(1)).toEqual(5);
    expect(maxPn(5)).toEqual(47);
    expect(maxPn(7)).toEqual(101);
    expect(maxPn(9)).toEqual(233);
    expect(maxPn(15)).toEqual(15131);
    expect(maxPn(17)).toEqual(30323);
    expect(maxPn(18)).toEqual(60647);
  });
});

describe("anOverAverage", () => {
  test("Basic tests", () => {
    expect(anOverAverage(1)).toEqual(3);
    expect(anOverAverage(5)).toEqual(3);
    expect(anOverAverage(7)).toEqual(3);
    expect(anOverAverage(9)).toEqual(3);
    expect(anOverAverage(50)).toEqual(3);
  });
});

describe("Random tests", () => {
  function randint(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a);
  }

  function gcdSol(a, b) {
    if (!b) return a;
    return gcdSol(b, a % b);
  }

  function pnSol(n) {
    let prev = 7;
    let i = 2;
    let res = [];
    let cnt = 0;
    while (cnt < n) {
      let nou = prev + gcdSol(prev, i);
      let d = nou - prev;
      if (d !== 1 && res.indexOf(d) === -1) {
        res.push(d);
        cnt++;
      }
      prev = nou;
      i++;
    }
    return res;
  }

  function maxPnSol(n) {
    return Math.max(...pnSol(n));
  }

  for (let i = 0; i < 10; i++) {
    let n = randint(2, 30);

    test("Testing maxPn: ", () => {
      expect(maxPn(n)).toEqual(maxPnSol(n));
    });
  }
});
