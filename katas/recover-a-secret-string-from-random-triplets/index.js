const getUniqueLetters = (triplets) => {
  const letters = triplets.reduce((acc, triplet) => {
    return [...acc, ...triplet];
  }, []);
  const uniqueLetters = [...new Set(letters)];

  return uniqueLetters;
};

const getLettersPosition = (letters, triplets) => {
  const lettersPosition = letters.map((letter) => {
    const isAfter = triplets.reduce((acc, triplet) => {
      if (!triplet.includes(letter)) {
        return acc;
      }

      const letterIndex = triplet.indexOf(letter);
      const isAfter = triplet.slice(0, letterIndex);
      const newIsAfter = [...acc, ...isAfter];

      return [...new Set(newIsAfter)];
    }, []);

    return {
      letter,
      isAfter,
    };
  });

  return lettersPosition;
};

const removeLetter = (letterToRemove, array) => {
  const removedFromArray = array.filter(({ letter }) => {
    return letter !== letterToRemove;
  });
  const removedFromIsAfter = removedFromArray.map(({ letter, isAfter }) => {
    const newIsAfter = isAfter.filter((letter) => {
      return letter !== letterToRemove;
    });

    const result = {
      letter,
      isAfter: newIsAfter,
    };

    return result;
  });

  return removedFromIsAfter;
};

const recoverSecret = (triplets) => {
  const uniqueLetters = getUniqueLetters(triplets);
  const lettersPosition = getLettersPosition(uniqueLetters, triplets);
  let aux = [...lettersPosition];
  let result = "";

  while (aux.length) {
    const nextLetterIndex = aux.findIndex(({ isAfter }) => {
      return !isAfter.length;
    });
    const nextLetter = aux[nextLetterIndex].letter;

    result += nextLetter;
    aux = removeLetter(nextLetter, aux);
  }

  return result;
};

module.exports = recoverSecret;
