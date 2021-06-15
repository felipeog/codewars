const accum = (s) => {
  const letters = s.split("");
  const fragments = letters.map((letter, index) => {
    const lowercaseLetter = letter.toLowerCase();
    const length = index + 1;
    const [firstLetter, ...restOfLetters] = Array(length).fill(lowercaseLetter);
    const fragment = `${firstLetter.toUpperCase()}${restOfLetters.join("")}`;

    return fragment;
  });
  const result = fragments.join("-");

  return result;
};

module.exports = accum;
