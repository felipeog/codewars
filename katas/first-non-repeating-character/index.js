const getLettersCount = (string) => {
  const lowerCaseString = string.toLowerCase();
  const letters = [...lowerCaseString];
  const uniqueLetters = [...new Set(letters)];
  const lettersCount = uniqueLetters.map((uniqueLetter) => {
    const count = letters.reduce((acc, letter) => {
      if (letter === uniqueLetter) {
        return acc + 1;
      }

      return acc;
    }, 0);

    return {
      letter: uniqueLetter,
      count,
    };
  });

  return lettersCount;
};

const firstNonRepeatingLetter = (s) => {
  const lettersCount = getLettersCount(s);
  const isAllRepeating = lettersCount.every(({ count }) => {
    return count > 1;
  });

  if (isAllRepeating) {
    return "";
  }

  const firstNonRepeatingCount = lettersCount.find(({ count }) => {
    return count === 1;
  });
  const stringLetters = [...s];
  const firstNonRepeatingLetter = stringLetters.find((letter) => {
    return letter.toLowerCase() === firstNonRepeatingCount.letter;
  });

  return firstNonRepeatingLetter;
};

module.exports = firstNonRepeatingLetter;
