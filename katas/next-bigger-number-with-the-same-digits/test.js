const nextBigger = require("./index");

describe("Basic tests", () => {
  test("Small numbers", () => {
    expect(nextBigger(12)).toEqual(21);
    expect(nextBigger(513)).toEqual(531);
    expect(nextBigger(2017)).toEqual(2071);
    expect(nextBigger(414)).toEqual(441);
    expect(nextBigger(144)).toEqual(414);
  });

  test("Bigger numbers", () => {
    expect(nextBigger(123456789)).toEqual(123456798);
    expect(nextBigger(1234567890)).toEqual(1234567908);
    expect(nextBigger(9876543210)).toEqual(-1);
    expect(nextBigger(9999999999)).toEqual(-1);
    expect(nextBigger(59884848459853)).toEqual(59884848483559);
  });
});

describe("Random tests", () => {
  function randint(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a);
  }
  function nextSol(n) {
    n = n.toString().split("");
    let temp = [],
      i = n.length - 1;
    while (i && n[i - 1] >= n[i]) {
      temp.push(n[i--]);
    }
    temp.push(n[i--]);
    if (i == -1) return i;
    let top = n[i],
      j = +top + 1;
    while (temp.indexOf("" + j) == -1) j++;
    j = "" + j;
    temp.splice(temp.indexOf(j), 1);
    temp.push(top);
    temp.sort();
    temp.unshift(j);
    return +n.slice(0, i).concat(temp).join("");
  }
  for (let _ = 0; _ < 140; _++) {
    let n = randint(1, Math.pow(10, randint(1, 15)));
    if (randint(1, 100) < 10)
      n = +n.toString().split("").sort().reverse().join("").slice(-15);

    test("Testing for " + n, () => {
      expect(nextBigger(n)).toEqual(nextSol(n));
    });
  }
});
