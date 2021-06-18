const sumStringNumbers = (string) => {
  const numbers = [...string];
  const result = numbers.reduce((acc, number) => {
    return acc + Number(number);
  }, 0);

  return result;
};

const orderWeight = (string) => {
  const fragments = string.split(" ");
  const sortedNumbers = fragments.sort((a, b) => {
    const aSum = sumStringNumbers(a);
    const bSum = sumStringNumbers(b);
    const result = aSum - bSum;

    if (result === 0) {
      return a.localeCompare(b);
    }

    return result;
  });
  const result = sortedNumbers.join(" ");

  return result;
};

module.exports = orderWeight;
