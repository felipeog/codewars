const findShort = (s) => {
  const words = s.split(" ");
  const shortestLength = words.reduce((acc, { length }) => {
    if (length < acc) {
      return length;
    }

    return acc;
  }, Number.POSITIVE_INFINITY);

  return shortestLength;
};

module.exports = findShort;
