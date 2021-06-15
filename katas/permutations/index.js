const permutations = (inputString) => {
  if (inputString.length === 0) {
    return [];
  }

  if (inputString.length === 1) {
    return [inputString];
  }

  const permutationsArray = [];

  for (let i = 0; i < inputString.length; i++) {
    const currentChar = inputString[i];
    const restOfChars = [
      ...inputString.slice(0, i),
      ...inputString.slice(i + 1),
    ];
    const restOfCharsPermutations = permutations(restOfChars);

    for (let j = 0; j < restOfCharsPermutations.length; j++) {
      const charPermutations = [currentChar, ...restOfCharsPermutations[j]];

      permutationsArray.push(charPermutations);
    }
  }

  const formattedPermutations = permutationsArray.map((permutation) =>
    permutation.join("")
  );
  const result = [...new Set(formattedPermutations)];

  return result;
};

module.exports = permutations;
