const add = (a, b) => {
  const [larger, smaller] =
    a.toString().length > b.toString().length ? [a, b] : [b, a];
  const offset = larger.length - smaller.length;
  let carry = 0;
  let result = "";

  for (let i = larger.length - 1; i >= 0; i--) {
    const a = +larger[i];
    const b = +smaller[i - offset] || 0;
    const sum = a + b + carry;
    const lastDigit = sum.toString().slice(-1);

    result = lastDigit + result;
    carry = Math.floor(sum / 10);
  }

  return carry ? "1" + result : result;
};

module.exports = add;
