const permutations = require("./index");

describe("Permutations", () => {
  test("Unique letters", () => {
    expect(permutations("a")).toEqual(["a"]);
    expect(permutations("ab").sort()).toEqual(["ab", "ba"].sort());
    expect(permutations("abc").sort()).toEqual(
      ["abc", "acb", "bac", "bca", "cab", "cba"].sort()
    );

    var abcd = [
      "abcd",
      "abdc",
      "acbd",
      "acdb",
      "adbc",
      "adcb",
      "bacd",
      "badc",
      "bcad",
      "bcda",
      "bdac",
      "bdca",
      "cabd",
      "cadb",
      "cbad",
      "cbda",
      "cdab",
      "cdba",
      "dabc",
      "dacb",
      "dbac",
      "dbca",
      "dcab",
      "dcba",
    ];
    expect(permutations("abcd").sort()).toEqual(abcd.sort());
    expect(permutations("bcad").sort()).toEqual(abcd.sort());
    expect(permutations("dcba").sort()).toEqual(abcd.sort());
  });

  test("Duplicate letters", () => {
    expect(permutations("aa").sort()).toEqual(["aa"].sort());
    expect(permutations("aabb").sort()).toEqual(
      ["aabb", "abab", "abba", "baab", "baba", "bbaa"].sort()
    );
    expect(permutations("aaaab").sort()).toEqual(
      ["aaaab", "aaaba", "aabaa", "abaaa", "baaaa"].sort()
    );
  });
});
