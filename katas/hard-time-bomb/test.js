const { getLoopTestTitle } = require("../../utils/test");
const findWire = require("./index");

class Bomb {
  constructor(wireCode) {
    this.wireCode = wireCode;
  }

  cutTheWire(wireCode) {
    if (this.wireCode === wireCode) {
      return "Success";
    }

    return "Exploded";
  }
}

class BombFactory {
  constructor(global) {
    this.global = global;
  }

  create() {
    const key = "boom" + Math.floor(Math.random() * 10);
    const value = Math.random();
    const bomb = new Bomb(value);

    bomb.toString = function () {
      return BombFactory.toString();
    };

    this.global[key] = value;

    Object.freeze(bomb);
    Object.freeze(Bomb);
    Object.freeze(BombFactory);

    return bomb;
  }
}

describe("Static tests", () => {
  const builder = new BombFactory(global);
  const bomb = builder.create();
  const input = bomb;
  const output = "Success";
  const testTitle = getLoopTestTitle(1, input, output);

  it(testTitle, () => {
    expect(findWire(input)).toEqual(output);
  });
});
