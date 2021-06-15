const isIntArray = (arr) => {
  if (!arr) {
    return false;
  }

  if (!arr.length) {
    return true;
  }

  return arr.every((item) => {
    return Number.isInteger(item);
  });
};

module.exports = isIntArray;
