const incrementString = (string) => {
  const [number] = string.match(/\d*$/);
  const numberLength = number.length;

  if (!numberLength) {
    return `${string}1`;
  }

  const sliceIndex = string.length - numberLength;
  const stringSlice = string.slice(0, sliceIndex);
  const incremented = +number + 1;
  const padded = `${incremented}`.padStart(numberLength, "0");
  const result = `${stringSlice}${padded}`;

  return result;
};

module.exports = incrementString;
