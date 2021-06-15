const findShort = require("./index");

describe("Basic tests", () => {
  test("Tests", () => {
    expect(
      findShort("bitcoin take over the world maybe who knows perhaps")
    ).toEqual(3);
    expect(
      findShort(
        "turns out random test cases are easier than writing out basic ones"
      )
    ).toEqual(3);
    expect(findShort("lets talk about javascript the best language")).toEqual(
      3
    );
    expect(
      findShort("i want to travel the world writing code one day")
    ).toEqual(1);
    expect(findShort("Lets all go on holiday somewhere very cold")).toEqual(2);
    expect(findShort("Test where final word shortest see")).toEqual(3);
    expect(findShort("Let's travel abroad shall we")).toEqual(2);
  });
});

describe("Random tests", () => {
  const randint = (a, b) => ~~(Math.random() * (b - a + 1)) + a;
  const sol = (s) =>
    Math.min.apply(
      this,
      s.split(" ").map((a) => a.length)
    );
  let names = [
    "Bitcoin",
    "LiteCoin",
    "Ripple",
    "Dash",
    "Lisk",
    "DarkCoin",
    "Monero",
    "Ethereum",
    "Classic",
    "Mine",
    "ProofOfWork",
    "ProofOfStake",
    "21inc",
    "Steem",
    "Dogecoin",
    "Waves",
    "Factom",
    "MadeSafeCoin",
    "BTC",
  ];

  for (let i = 0; i < 40; i++) {
    let s = [],
      len = randint(1, 20);
    for (let k = 0; k < len; k++) s.push(names[randint(0, names.length - 1)]);
    s = s.join(" ");

    test(`Testing for ${s}`, () => {
      expect(findShort(s)).toEqual(sol(s));
    });
  }
});
