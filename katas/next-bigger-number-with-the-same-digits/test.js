const { getLoopTestTitle } = require("../../utils/test");
const { generateRandomNumber } = require("../../utils/random");
const nextBigger = require("./index");

describe("Static tests", () => {
  const tests = [
    { input: 12, output: 21 },
    { input: 144, output: 414 },
    { input: 414, output: 441 },
    { input: 513, output: 531 },
    { input: 2_017, output: 2_071 },
    { input: 123_456_789, output: 123_456_798 },
    { input: 1_234_567_890, output: 1_234_567_908 },
    { input: 9_876_543_210, output: -1 },
    { input: 9_999_999_999, output: -1 },
    { input: 59_884_848_459_853, output: 59_884_848_483_559 },
  ];

  tests.forEach(({ input, output }, index) => {
    const testTitle = getLoopTestTitle(index + 1, input, output);

    it(testTitle, () => {
      expect(nextBigger(input)).toEqual(output);
    });
  });
});

describe("Random tests", () => {
  const nextSol = (number) => {
    const numberDigits = [...number.toString()];
    let temp = [];
    let i = numberDigits.length - 1;

    while (i && numberDigits[i - 1] >= numberDigits[i]) {
      temp.push(numberDigits[i--]);
    }

    temp.push(numberDigits[i--]);

    if (i === -1) {
      return i;
    }

    const top = numberDigits[i];
    let j = +top + 1;

    while (temp.indexOf("" + j) === -1) {
      j++;
    }

    j = "" + j;

    temp.splice(temp.indexOf(j), 1);
    temp.push(top);
    temp.sort();
    temp.unshift(j);

    return +numberDigits.slice(0, i).concat(temp).join("");
  };

  for (let i = 0; i < 140; i++) {
    const randomMax = 10 ** generateRandomNumber(1, 15);
    let randomNumber = generateRandomNumber(1, randomMax);

    if (Math.random() < 0.1) {
      randomNumber = +randomNumber
        .toString()
        .split("")
        .sort()
        .reverse()
        .join("")
        .slice(-15);
    }

    const input = randomNumber;
    const output = nextSol(randomNumber);
    const testTitle = getLoopTestTitle(i + 1, input, output);

    it(testTitle, () => {
      expect(nextBigger(input)).toEqual(output);
    });
  }
});
