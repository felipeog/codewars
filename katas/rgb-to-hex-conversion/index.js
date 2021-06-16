const getHex = (input) => {
  if (input < 0) {
    return "00";
  }

  if (input > 255) {
    return "FF";
  }

  const hex = input.toString(16).toUpperCase();
  const paddedHex = hex.padStart(2, "0");

  return paddedHex;
};

const rgb = (r, g, b) => {
  return `${getHex(r)}${getHex(g)}${getHex(b)}`;
};

module.exports = rgb;
