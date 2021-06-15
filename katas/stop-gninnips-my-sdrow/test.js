const spinWords = require("./index");

describe("Spinning words", () => {
  test("Fixed tests", () => {
    expect(spinWords("Welcome")).toEqual("emocleW");
    expect(spinWords("Hey fellow warriors")).toEqual("Hey wollef sroirraw");
    expect(spinWords("This is a test")).toEqual("This is a test");
    expect(spinWords("This is another test")).toEqual("This is rehtona test");
    expect(spinWords("This sentence is a sentence")).toEqual(
      "This ecnetnes is a ecnetnes"
    );
    expect(spinWords("You are almost to the last test")).toEqual(
      "You are tsomla to the last test"
    );
    expect(spinWords("Just kidding there is still one more")).toEqual(
      "Just gniddik ereht is llits one more"
    );
    expect(spinWords("Seriously this is the last one")).toEqual(
      "ylsuoireS this is the last one"
    );
  });

  test("Random tests", () => {
    const refSpinWords = (s) =>
      s
        .split(" ")
        .map((s) => (s.length >= 5 ? s.split("").reverse().join("") : s))
        .join(" ");
    const rnd = (n) => Math.floor(Math.random() * n);
    const abc = "abcdefghijklmnopqrstuvwxyz";
    const rndWord = () =>
      Array.from({ length: rnd(12) + 1 }, () => abc[rnd(abc.length)]).join("");
    const rndSentence = (i) =>
      Array.from({ length: rnd(i) }, rndWord).join(" ");
    for (let i = 1; i <= 50; i++) {
      const s = rndSentence(i);
      expect(spinWords(s)).toEqual(refSpinWords(s));
    }
  });
});
