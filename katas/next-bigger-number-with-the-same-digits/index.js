const isMax = (numberArray) => {
  return numberArray.every((currentDigit, index, array) => {
    if (index >= array.length - 1) {
      return true;
    }

    const nextDigit = array[index + 1];

    return currentDigit >= nextDigit;
  });
};

const getPermutation = (numberArray) => {
  const length = numberArray.length;
  const permutationArray = [];

  if (length === 0) {
    return [];
  }

  if (length === 1) {
    return [numberArray];
  }

  for (let i = 0; i < numberArray.length; i++) {
    const currentNumber = numberArray[i];
    const restOfNumbers = [
      ...numberArray.slice(0, i),
      ...numberArray.slice(i + 1),
    ];
    const restOfNumbersPermutation = getPermutation(restOfNumbers);

    for (let j = 0; j < restOfNumbersPermutation.length; j++) {
      const numberPermutation = [currentNumber, ...restOfNumbersPermutation[j]];
      permutationArray.push(numberPermutation);
    }
  }

  return permutationArray;
};

const nextBigger = (n) => {
  const numberArray = Array.from(n.toString());

  if (isMax(numberArray)) {
    return -1;
  }

  for (let i = numberArray.length - 2; i >= 0; i--) {
    const leftNumbers = numberArray.slice(0, i);
    const rightNumbers = numberArray.slice(i);
    const rightNumbersPermutations = getPermutation(rightNumbers);
    const permutations = rightNumbersPermutations
      .map((permutation) => Number([...leftNumbers, ...permutation].join("")))
      .filter((permutation) => permutation > n);

    if (permutations.length) {
      return Math.min(...permutations);
    }
  }
};

module.exports = nextBigger;
