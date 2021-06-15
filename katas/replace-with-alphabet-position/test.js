const alphabetPosition = require("./index");

function ap(text) {
  return text
    .toLowerCase()
    .split("")
    .filter(function (l) {
      return /[a-z]/.test(l);
    })
    .map(function (l) {
      return l.charCodeAt() - 96;
    })
    .join(" ");
}

function randomChar() {
  let chars =
      "abcdefghijklmnopqrstuvwxyz1234567890-=!@#$%^&*()_+[];,./{}:|<>? ",
    rand = Math.floor(Math.random() * chars.length);
  return chars[rand];
}

describe("Replace with alphabet position", () => {
  test("Fixed tests:", () => {
    for (let i = 65; i <= 122; i++) {
      let letter = String.fromCharCode(i);

      expect(alphabetPosition(letter)).toEqual(ap(letter));
    }

    expect(alphabetPosition("-.-'")).toEqual("");
  });
});

describe("Randomly generated tests:", () => {
  for (let i = 0; i < 50; i++) {
    let x = "";
    for (let j = 0; j < 8; j++) {
      x += randomChar();
    }

    test(`Testing "${x}"`, () => {
      expect(alphabetPosition(x)).toEqual(ap(x));
    });
  }
});
