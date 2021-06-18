const { getLoopTestTitle } = require("../../utils/test");
const { generateRandomNumber } = require("../../utils/random");
const { countOnes, maxPn, anOverAverage } = require("./index");

describe("Static tests", () => {
  describe("countOnes", () => {
    const tests = [
      { input: 1, output: 1 },
      { input: 10, output: 8 },
      { input: 100, output: 90 },
      { input: 200, output: 184 },
      { input: 1_000, output: 975 },
      { input: 10_000, output: 9_968 },
      { input: 100_000, output: 99_955 },
    ];

    tests.forEach(({ input, output }, index) => {
      const testTitle = getLoopTestTitle(index + 1, input, output);

      it(testTitle, () => {
        expect(countOnes(input)).toEqual(output);
      });
    });
  });

  describe("maxPn", () => {
    const tests = [
      { input: 1, output: 5 },
      { input: 5, output: 47 },
      { input: 7, output: 101 },
      { input: 9, output: 233 },
      { input: 15, output: 15_131 },
      { input: 17, output: 30_323 },
      { input: 18, output: 60_647 },
    ];

    tests.forEach(({ input, output }, index) => {
      const testTitle = getLoopTestTitle(index + 1, input, output);

      it(testTitle, () => {
        expect(maxPn(input)).toEqual(output);
      });
    });
  });

  describe("anOverAverage", () => {
    const tests = [
      { input: 1, output: 3 },
      { input: 5, output: 3 },
      { input: 7, output: 3 },
      { input: 9, output: 3 },
      { input: 50, output: 3 },
    ];

    tests.forEach(({ input, output }, index) => {
      const testTitle = getLoopTestTitle(index + 1, input, output);

      it(testTitle, () => {
        expect(anOverAverage(input)).toEqual(output);
      });
    });
  });
});

describe("Random tests", () => {
  describe("maxPn", () => {
    const gcd = (a, b) => {
      if (!b) {
        return a;
      }

      return gcd(b, a % b);
    };

    const pn = (n) => {
      const res = [];
      let prev = 7;
      let i = 2;
      let cnt = 0;

      while (cnt < n) {
        const nou = prev + gcd(prev, i);
        const d = nou - prev;

        if (d !== 1 && res.indexOf(d) === -1) {
          res.push(d);
          cnt++;
        }

        prev = nou;
        i++;
      }

      return res;
    };

    const maxPnCheck = (n) => {
      return Math.max(...pn(n));
    };

    for (let i = 0; i < 10; i++) {
      const randomNumber = generateRandomNumber(2, 30);
      const input = randomNumber;
      const output = maxPnCheck(randomNumber);
      const testTitle = getLoopTestTitle(i + 1, input, output);

      it(testTitle, () => {
        expect(maxPn(input)).toEqual(output);
      });
    }
  });
});
