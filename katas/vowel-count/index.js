const getCount = (str) => {
  const letters = [...str];
  const count = letters.reduce((acc, letter) => {
    if (letter.match(/[aeiou]/gi)) {
      return acc + 1;
    }

    return acc;
  }, 0);

  return count;
};

module.exports = getCount;
