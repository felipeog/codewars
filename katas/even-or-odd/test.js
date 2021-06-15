const even_or_odd = require("./index");

describe("Basic tests", () => {
  test("Tests", () => {
    expect(even_or_odd(2)).toEqual("Even");
    expect(even_or_odd(1)).toEqual("Odd");
    expect(even_or_odd(-4)).toEqual("Even");
    expect(even_or_odd(-3)).toEqual("Odd");
    expect(even_or_odd(0)).toEqual("Even");
    expect(even_or_odd(1545452)).toEqual("Even");
    expect(even_or_odd(7)).toEqual("Odd");
    expect(even_or_odd(78)).toEqual("Even");
    expect(even_or_odd(17)).toEqual("Odd");
    expect(even_or_odd(74156741)).toEqual("Odd");
    expect(even_or_odd(100000)).toEqual("Even");

    let ernd = function () {
      return (25 + ~~(Math.random() * 25)) * 2;
    };
    let ornd = function () {
      return ernd() + 1;
    };

    console.log("Test some random values");
    for (let r = 0, x; r < 6; r++) {
      if (Math.random() > 0.5) {
        x = ernd();
        expect(even_or_odd(x)).toEqual("Even");
      } else {
        x = ornd();
        expect(even_or_odd(x)).toEqual("Odd");
      }
    }
  });
});
