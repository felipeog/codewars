const digital_root = require("./index");

describe("Basic tests", () => {
  test("Should pass basic tests", () => {
    expect(digital_root(16)).toEqual(7);
    expect(digital_root(195)).toEqual(6);
    expect(digital_root(992)).toEqual(2);
    expect(digital_root(999999999999)).toEqual(9);
    expect(digital_root(167346)).toEqual(9);
    expect(digital_root(10)).toEqual(1);
    expect(digital_root(0)).toEqual(0);
  });
});

describe("Random tests", () => {
  test("Should pass random tests", () => {
    const digital_root_sol = (n) => {
      return n > 0 ? 1 + ((parseInt(n) - 1) % 9) : 0;
    };

    for (let i = 0; i < 100; i++) {
      let n = Math.floor(Math.random() * 1000000);
      expect(digital_root(n)).toEqual(digital_root_sol(n));
    }
  });
});
