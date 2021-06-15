const digital_root = (n) => {
  const numberAsString = n.toString();

  if (numberAsString.length < 2) {
    return n;
  }

  const numberDigits = numberAsString.split("");
  const sum = numberDigits.reduce((acc, digit) => {
    return acc + Number(digit);
  }, 0);

  return digital_root(sum);
};

module.exports = digital_root;
