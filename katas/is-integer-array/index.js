const isIntArray = (arr) => {
  if (!arr) {
    return false;
  }

  if (!arr.length) {
    return true;
  }

  return arr.every((item) => Number.isInteger(item));
};

module.exports = isIntArray;
