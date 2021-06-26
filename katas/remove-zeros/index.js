const countZeros = (array) => {
  let zeroCount = 0;

  for (let i = 0; i < array.length; i++) {
    const current = array[i];

    if (current === 0 || current === "0") {
      zeroCount++;
    }
  }

  return zeroCount;
};

const removeZeros = (array) => {
  const zeroCount = countZeros(array);
  const range = array.length - zeroCount;
  let i = 0;

  while (i < range) {
    const current = array[i];

    if (current === 0 || current === "0") {
      for (let j = i; j < array.length - 1; j++) {
        array[j] = array[j + 1];
      }

      array[array.length - 1] = current;

      continue;
    }

    i++;
  }

  return array;
};

module.exports = removeZeros;
