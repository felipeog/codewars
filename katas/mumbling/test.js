const { getLoopTestTitle } = require("../../utils/test");
const {
  generateRandomNumber,
  generateRandomString,
} = require("../../utils/random");
const accum = require("./index");

describe("Static tests", () => {
  const tests = [
    {
      input: "ZpglnRxqenU",
      output:
        "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu",
    },
    {
      input: "NyffsGeyylB",
      output:
        "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb",
    },
    {
      input: "MjtkuBovqrU",
      output:
        "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu",
    },
    {
      input: "EvidjUnokmM",
      output:
        "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm",
    },
    {
      input: "HbideVbxncC",
      output:
        "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc",
    },
    {
      input: "VwhvtHtrxfE",
      output:
        "V-Ww-Hhh-Vvvv-Ttttt-Hhhhhh-Ttttttt-Rrrrrrrr-Xxxxxxxxx-Ffffffffff-Eeeeeeeeeee",
    },
    {
      input: "KurgiKmkphY",
      output:
        "K-Uu-Rrr-Gggg-Iiiii-Kkkkkk-Mmmmmmm-Kkkkkkkk-Ppppppppp-Hhhhhhhhhh-Yyyyyyyyyyy",
    },
    {
      input: "NctlfBlnmfH",
      output:
        "N-Cc-Ttt-Llll-Fffff-Bbbbbb-Lllllll-Nnnnnnnn-Mmmmmmmmm-Ffffffffff-Hhhhhhhhhhh",
    },
    {
      input: "WegunHvbdmV",
      output:
        "W-Ee-Ggg-Uuuu-Nnnnn-Hhhhhh-Vvvvvvv-Bbbbbbbb-Ddddddddd-Mmmmmmmmmm-Vvvvvvvvvvv",
    },
    {
      input: "VoywwSpqidE",
      output:
        "V-Oo-Yyy-Wwww-Wwwww-Ssssss-Ppppppp-Qqqqqqqq-Iiiiiiiii-Dddddddddd-Eeeeeeeeeee",
    },
    {
      input: "VbaixFpxdcO",
      output:
        "V-Bb-Aaa-Iiii-Xxxxx-Ffffff-Ppppppp-Xxxxxxxx-Ddddddddd-Cccccccccc-Ooooooooooo",
    },
    {
      input: "OlyqvYwkuzF",
      output:
        "O-Ll-Yyy-Qqqq-Vvvvv-Yyyyyy-Wwwwwww-Kkkkkkkk-Uuuuuuuuu-Zzzzzzzzzz-Fffffffffff",
    },
    {
      input: "JrhfdMtchiH",
      output:
        "J-Rr-Hhh-Ffff-Ddddd-Mmmmmm-Ttttttt-Cccccccc-Hhhhhhhhh-Iiiiiiiiii-Hhhhhhhhhhh",
    },
    {
      input: "JiwpcSwslvW",
      output:
        "J-Ii-Www-Pppp-Ccccc-Ssssss-Wwwwwww-Ssssssss-Lllllllll-Vvvvvvvvvv-Wwwwwwwwwww",
    },
    {
      input: "EagpiEvmabJ",
      output:
        "E-Aa-Ggg-Pppp-Iiiii-Eeeeee-Vvvvvvv-Mmmmmmmm-Aaaaaaaaa-Bbbbbbbbbb-Jjjjjjjjjjj",
    },
    {
      input: "RznlcEmuxxP",
      output:
        "R-Zz-Nnn-Llll-Ccccc-Eeeeee-Mmmmmmm-Uuuuuuuu-Xxxxxxxxx-Xxxxxxxxxx-Ppppppppppp",
    },
    {
      input: "OrggaExarzP",
      output:
        "O-Rr-Ggg-Gggg-Aaaaa-Eeeeee-Xxxxxxx-Aaaaaaaa-Rrrrrrrrr-Zzzzzzzzzz-Ppppppppppp",
    },
    {
      input: "DriraMtedfB",
      output:
        "D-Rr-Iii-Rrrr-Aaaaa-Mmmmmm-Ttttttt-Eeeeeeee-Ddddddddd-Ffffffffff-Bbbbbbbbbbb",
    },
    {
      input: "BjxseRxgtjT",
      output:
        "B-Jj-Xxx-Ssss-Eeeee-Rrrrrr-Xxxxxxx-Gggggggg-Ttttttttt-Jjjjjjjjjj-Ttttttttttt",
    },
    {
      input: "EquhxOswchE",
      output:
        "E-Qq-Uuu-Hhhh-Xxxxx-Oooooo-Sssssss-Wwwwwwww-Ccccccccc-Hhhhhhhhhh-Eeeeeeeeeee",
    },
  ];

  tests.forEach(({ input, output }, index) => {
    const testTitle = getLoopTestTitle(index + 1, input, output);

    it(testTitle, () => {
      expect(accum(input)).toEqual(output);
    });
  });
});

describe("Random tests", () => {
  const capitalize = (string) => {
    return string.toLowerCase().replace(/\b./g, (match) => {
      return match.toUpperCase();
    });
  };

  const accumSol109 = (string) => {
    const stringLetters = [...string];
    let result = "";

    for (let i = 0; i < stringLetters.length; i++) {
      for (let j = 0; j < i + 1; j++) {
        result += stringLetters[i];
      }

      result += "-";
    }

    return capitalize(result.substr(0, result.length - 1));
  };

  for (var i = 0; i < 100; i++) {
    const randomLength = generateRandomNumber(5, 15);
    const randomString = generateRandomString(randomLength);
    const input = randomString;
    const output = accumSol109(randomString);
    const testTitle = getLoopTestTitle(i + 1, input, output);

    it(testTitle, () => {
      expect(accum(input)).toEqual(output);
    });
  }
});
