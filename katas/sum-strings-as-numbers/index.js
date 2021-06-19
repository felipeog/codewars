const sumStrings = (...numbers) => {
  const sum = numbers.reduce((acc, number) => {
    return `${BigInt(acc) + BigInt(number)}`;
  }, "0");

  return sum;
};

module.exports = sumStrings;
