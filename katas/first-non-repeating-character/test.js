const { generateRandomName } = require("../../utils/random");
const firstNonRepeatingLetter = require("./index");

describe("Simple Tests", () => {
  test("Should handle simple tests", () => {
    expect(firstNonRepeatingLetter("a")).toEqual("a");
    expect(firstNonRepeatingLetter("stress")).toEqual("t");
    expect(firstNonRepeatingLetter("moonmen")).toEqual("e");
  });
  test("Should handle empty strings", () => {
    expect(firstNonRepeatingLetter("")).toEqual("");
  });
});

describe("Harder Tests", () => {
  test("Should handle all repeating strings", () => {
    expect(firstNonRepeatingLetter("abba")).toEqual("");
    expect(firstNonRepeatingLetter("aa")).toEqual("");
  });
  test("Should handle odd characters", () => {
    expect(firstNonRepeatingLetter("∞§ﬁ›ﬂ∞§")).toEqual("ﬁ");
    expect(firstNonRepeatingLetter("hello world, eh?")).toEqual("w");
  });
  test("Should handle letter cases", () => {
    expect(firstNonRepeatingLetter("sTreSS")).toEqual("T");
    expect(
      firstNonRepeatingLetter("Go hang a salami, I'm a lasagna hog!")
    ).toEqual(",");
  });
});

describe("Random Tests", () => {
  var unique = generateRandomName()[0],
    rep = new RegExp(unique, "gi"),
    s = "",
    temp;
  while (s.length < 100) {
    temp = generateRandomName().replace(rep, "");
    s += temp + temp;
  }
  s += unique;

  test("Should handle random input", () => {
    expect(firstNonRepeatingLetter(s)).toEqual(unique);
  });
});
