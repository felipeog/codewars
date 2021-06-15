const moveZeros = require("./index");

describe("Tests", () => {
  test("Test", () => {
    expect(JSON.stringify(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]))).toEqual(
      JSON.stringify([1, 2, 1, 1, 3, 1, 0, 0, 0, 0])
    );

    expect(
      JSON.stringify(
        moveZeros([
          9, 0.0, 0, 9, 1, 2, 0, 1, 0, 1, 0.0, 3, 0, 1, 9, 0, 0, 0, 0, 9,
        ])
      )
    ).toEqual(
      JSON.stringify([
        9, 9, 1, 2, 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ])
    );

    expect(
      JSON.stringify(
        moveZeros([
          "a",
          0,
          0,
          "b",
          "c",
          "d",
          0,
          1,
          0,
          1,
          0,
          3,
          0,
          1,
          9,
          0,
          0,
          0,
          0,
          9,
        ])
      )
    ).toEqual(
      JSON.stringify([
        "a",
        "b",
        "c",
        "d",
        1,
        1,
        3,
        1,
        9,
        9,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
      ])
    );

    expect(
      JSON.stringify(
        moveZeros([
          "a",
          0,
          0,
          "b",
          null,
          "c",
          "d",
          0,
          1,
          false,
          0,
          1,
          0,
          3,
          [],
          0,
          1,
          9,
          0,
          0,
          {},
          0,
          0,
          9,
        ])
      )
    ).toEqual(
      JSON.stringify([
        "a",
        "b",
        null,
        "c",
        "d",
        1,
        false,
        1,
        3,
        [],
        1,
        9,
        {},
        9,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
      ])
    );

    expect(JSON.stringify(moveZeros([0, 1, null, 2, false, 1, 0]))).toEqual(
      JSON.stringify([1, null, 2, false, 1, 0, 0])
    );
  });
});
