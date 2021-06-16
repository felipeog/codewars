const { shuffleArray } = require("../../utils/random");
const dirReduc = require("./index");

describe("Basic tests", () => {
  test("Tests", () => {
    expect(
      dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
    ).toEqual(["WEST"]);
    expect(
      dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"])
    ).toEqual([]);
    expect(
      dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "NORTH"])
    ).toEqual(["NORTH"]);
    expect(
      dirReduc([
        "EAST",
        "EAST",
        "WEST",
        "NORTH",
        "WEST",
        "EAST",
        "EAST",
        "SOUTH",
        "NORTH",
        "WEST",
      ])
    ).toEqual(["EAST", "NORTH"]);
    expect(
      dirReduc([
        "NORTH",
        "EAST",
        "NORTH",
        "EAST",
        "WEST",
        "WEST",
        "EAST",
        "EAST",
        "WEST",
        "SOUTH",
      ])
    ).toEqual(["NORTH", "EAST"]);
    expect(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])).toEqual([
      "NORTH",
      "WEST",
      "SOUTH",
      "EAST",
    ]);
  });
});

describe("Random tests", () => {
  let rr = [
    ["NORTH", "EAST"],
    ["EAST", "SOUTH"],
    ["SOUTH", "WEST"],
    ["WEST", "NORTH"],
    ["NORTH", "NORTH", "NORTH"],
  ];

  shuffleArray(rr).forEach((res, index) => {
    let aa = ["NORTH", "SOUTH"],
      bb = ["EAST", "WEST"];
    let rnd = function () {
      return ~~(Math.random() * 2);
    };
    let u = res.slice(0);

    for (let x = 0, z = 2 + rnd(); x < z; x++) {
      let a = rnd(),
        b = rnd();
      if (x % 2) {
        u.push(aa[a]);
        u.push(aa[(a + 1) % 2]);
        u.unshift(bb[b]);
        u.unshift(bb[(b + 1) % 2]);
      } else {
        u.push(bb[b]);
        u.push(bb[(b + 1) % 2]);
        u.unshift(aa[a]);
        u.unshift(aa[(a + 1) % 2]);
      }
    }

    test(`Test ${index + 1}`, () => {
      expect(dirReduc(u)).toEqual(res);
    });
  });
});
