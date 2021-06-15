const {
  generateRandomArrayIndex,
  generateRandomNames,
  shuffleArray,
} = require("../../utils/random");
const likes = require("./index");

describe("Static tests", () => {
  test("Should return correct text", () => {
    expect(likes([])).toEqual("no one likes this");
    expect(likes(["Peter"])).toEqual("Peter likes this");
    expect(likes(["Jacob", "Alex"])).toEqual("Jacob and Alex like this");
    expect(likes(["Max", "John", "Mark"])).toEqual(
      "Max, John and Mark like this"
    );
    expect(likes(["Alex", "Jacob", "Mark", "Max"])).toEqual(
      "Alex, Jacob and 2 others like this"
    );
  });
});

describe("Random tests", () => {
  const names = generateRandomNames(100);
  let sample;

  test("Should return correct text for 1 name", () => {
    sample = shuffleArray(names).slice(0, 1);
    expect(likes(sample.slice())).toEqual(sample[0] + " likes this");
  });

  test("Should return correct text for 2 names", () => {
    sample = shuffleArray(names).slice(0, 2);
    expect(likes(sample.slice())).toEqual(
      sample[0] + " and " + sample[1] + " like this"
    );
  });

  test("Should return correct text for 3 names", () => {
    sample = shuffleArray(names).slice(0, 3);
    expect(likes(sample.slice())).toEqual(
      sample[0] + ", " + sample[1] + " and " + sample[2] + " like this"
    );
  });

  test("Should return correct text for 4 or more names", () => {
    // 4 names
    sample = shuffleArray(names).slice(0, 4);
    expect(likes(sample.slice())).toEqual(
      sample[0] + ", " + sample[1] + " and 2 others like this"
    );

    // random number of names
    sample = shuffleArray(names).slice(
      0,
      Math.max(5, generateRandomArrayIndex(names.length))
    );
    expect(likes(sample.slice())).toEqual(
      sample[0] +
        ", " +
        sample[1] +
        " and " +
        (sample.length - 2) +
        " others like this"
    );

    // 100 names
    sample = shuffleArray(names);
    expect(likes(sample.slice())).toEqual(
      sample[0] + ", " + sample[1] + " and 98 others like this"
    );
  });
});
