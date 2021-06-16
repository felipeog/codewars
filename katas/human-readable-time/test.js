const humanReadable = require("./index");

describe("Tests", () => {
  test("Should format correctly", () => {
    expect(humanReadable(0)).toEqual("00:00:00");
    expect(humanReadable(59)).toEqual("00:00:59");
    expect(humanReadable(60)).toEqual("00:01:00");
    expect(humanReadable(90)).toEqual("00:01:30");
    expect(humanReadable(3599)).toEqual("00:59:59");
    expect(humanReadable(3600)).toEqual("01:00:00");
    expect(humanReadable(45296)).toEqual("12:34:56");
    expect(humanReadable(86399)).toEqual("23:59:59");
    expect(humanReadable(86400)).toEqual("24:00:00");
    expect(humanReadable(359999)).toEqual("99:59:59");
  });
});
