const findOdd = (A) => {
  const uniqueNumbers = [...new Set(A)];
  const occurrences = uniqueNumbers.map((number) => {
    const count = A.reduce((acc, arrayNumber) => {
      if (arrayNumber === number) {
        return acc + 1;
      }

      return acc;
    }, 0);

    return {
      number,
      count,
    };
  });
  const oddOccurrence = occurrences.find(({ count }) => {
    return count % 2 !== 0;
  });

  return oddOccurrence.number;
};

module.exports = findOdd;
