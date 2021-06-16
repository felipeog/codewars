const hexStringToRGB = (hexString) => {
  const red = hexString.slice(1, 3).toLowerCase();
  const green = hexString.slice(3, 5).toLowerCase();
  const blue = hexString.slice(5).toLowerCase();
  const rgb = {
    r: parseInt(red, 16),
    g: parseInt(green, 16),
    b: parseInt(blue, 16),
  };

  return rgb;
};

module.exports = hexStringToRGB;
