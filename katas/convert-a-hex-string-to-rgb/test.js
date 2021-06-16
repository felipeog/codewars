const hexStringToRGB = require("./index");

describe("Tests", () => {
  it("Test", () => {
    expect(hexStringToRGB("#FF9933")).toEqual({ r: 255, g: 153, b: 51 });
    expect(hexStringToRGB("#beaded")).toEqual({ r: 190, g: 173, b: 237 });
    expect(hexStringToRGB("#000000")).toEqual({ r: 0, g: 0, b: 0 });
    expect(hexStringToRGB("#111111")).toEqual({ r: 17, g: 17, b: 17 });
    expect(hexStringToRGB("#Fa3456")).toEqual({ r: 250, g: 52, b: 86 });
  });
});
