const findShort = (s) => {
  const shortest = s.split(" ").reduce((acc, { length }) => {
    if (length < acc) {
      return length;
    }

    return acc;
  }, Number.POSITIVE_INFINITY);

  return shortest;
};

module.exports = findShort;
