const { getLoopTestTitle } = require("../../utils/test");
const { generateRandomNumber } = require("../../utils/random");
const orderWeight = require("./index");

describe("Static tests", () => {
  const tests = [
    { input: "103 123 4444 99 2000", output: "2000 103 123 4444 99" },
    {
      input: "2000 10003 1234000 44444444 9999 11 11 22 123",
      output: "11 11 2000 10003 22 123 1234000 44444444 9999",
    },
    { input: "", output: "" },
    {
      input: "10003 1234000 44444444 9999 2000 123456789",
      output: "2000 10003 1234000 44444444 9999 123456789",
    },
    {
      input:
        "3 16 9 38 95 1131268 49455 347464 59544965313 496636983114762 85246814996697",
      output:
        "3 16 9 38 95 1131268 49455 347464 59544965313 496636983114762 85246814996697",
    },
    {
      input:
        "71899703 200 6 91 425 4 67407 7 96488 6 4 2 7 31064 9 7920 1 34608557 27 72 18 81",
      output:
        "1 2 200 4 4 6 6 7 7 18 27 72 81 9 91 425 31064 7920 67407 96488 34608557 71899703",
    },
    {
      input:
        "387087 176 351832 100 430372 8 58052 54 175432 120 269974 147 309754 91 404858 67 271476 164 295747 111 40",
      output:
        "100 111 120 40 8 54 91 164 147 67 176 430372 58052 175432 351832 271476 309754 404858 387087 295747 269974",
    },
  ];

  tests.forEach(({ input, output }, index) => {
    const testTitle = getLoopTestTitle(index + 1, input, output);

    it(testTitle, () => {
      expect(orderWeight(input)).toEqual(output);
    });
  });
});

describe("Random tests", () => {
  const weightStrNumber = (number) => {
    const a = number.split("");
    let sum = 0;

    for (let i = 0; i < a.length; i++) {
      sum += +a[i];
    }

    return sum;
  };

  const compare = (a, b) => {
    const weightSubtraction = weightStrNumber(a) - weightStrNumber(b);
    let result;

    if (weightSubtraction === 0) {
      if (a < b) {
        result = -1;
      } else {
        result = 1;
      }
    } else {
      result = weightSubtraction;
    }

    return result;
  };

  const orderWeightCheck = (string) => {
    return string.split(" ").sort(compare).join(" ");
  };

  const generateString = () => {
    let result = "";

    for (let i = 0; i < 20; i++) {
      const n =
        i % 2 == 0
          ? generateRandomNumber(1, 500_000)
          : generateRandomNumber(1, 200);

      result += +n + " ";
    }

    return result + generateRandomNumber(1, 100);
  };

  for (let i = 0; i < 50; i++) {
    const randomString = generateString();
    const input = randomString;
    const output = orderWeightCheck(randomString);
    const testTitle = getLoopTestTitle(i + 1, input, output);

    it(testTitle, () => {
      expect(orderWeight(input)).toEqual(output);
    });
  }
});
