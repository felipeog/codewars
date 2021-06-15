const digital_root = (n) => {
  const numberString = n.toString();

  if (numberString.length < 2) {
    return n;
  }

  const sum = numberString.split("").reduce((acc, digitString) => {
    return acc + Number(digitString);
  }, 0);

  return digital_root(sum);
};

module.exports = digital_root;
