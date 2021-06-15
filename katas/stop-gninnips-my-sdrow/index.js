const reverseString = (string) => {
  return string.split("").reverse().join("");
};

const spinWords = (string) => {
  const words = string.split(" ");
  const result = words.reduce((acc, word, index) => {
    const toConcat = word.length >= 5 ? reverseString(word) : word;

    return index === 0 ? toConcat : `${acc} ${toConcat}`;
  }, "");

  return result;
};

module.exports = spinWords;
