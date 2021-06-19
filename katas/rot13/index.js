const ASCII_LOWER_CASE_A = "a".charCodeAt();
const ASCII_LOWER_CASE_Z = "z".charCodeAt();
const ASCII_UPPER_CASE_A = "A".charCodeAt();
const ASCII_UPPER_CASE_Z = "Z".charCodeAt();

const isLetter = (asciiCode) => {
  const ranges = [
    { lowerLimit: ASCII_LOWER_CASE_A, upperLimit: ASCII_LOWER_CASE_Z },
    { lowerLimit: ASCII_UPPER_CASE_A, upperLimit: ASCII_UPPER_CASE_Z },
  ];
  const result = ranges.some(({ lowerLimit, upperLimit }) => {
    return asciiCode >= lowerLimit && asciiCode <= upperLimit;
  });

  return result;
};

const isLowerCase = (asciiCode) => {
  const result =
    asciiCode >= ASCII_LOWER_CASE_A && asciiCode <= ASCII_LOWER_CASE_Z;

  return result;
};

const rot13 = (message, increment = 13) => {
  const chars = [...message];
  const result = chars.reduce((acc, char) => {
    const asciiCode = char.charCodeAt();

    if (!isLetter(asciiCode)) {
      return `${acc}${char}`;
    }

    const [lowerLimit, upperLimit] = isLowerCase(asciiCode)
      ? [ASCII_LOWER_CASE_A, ASCII_LOWER_CASE_Z]
      : [ASCII_UPPER_CASE_A, ASCII_UPPER_CASE_Z];
    const sum = asciiCode + increment;
    const nextAsciiCode =
      sum <= upperLimit ? sum : sum - upperLimit + lowerLimit - 1;
    const codedChar = String.fromCharCode(nextAsciiCode);

    return acc + codedChar;
  }, "");

  return result;
};

module.exports = rot13;
