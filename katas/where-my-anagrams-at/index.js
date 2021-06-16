const sortString = (string) => {
  return [...string].sort().join("");
};

const anagrams = (word, words) => {
  const sortedReference = sortString(word);
  const result = words.filter((word) => {
    const sortedWord = sortString(word);

    return sortedWord === sortedReference;
  });

  return result;
};

module.exports = anagrams;
