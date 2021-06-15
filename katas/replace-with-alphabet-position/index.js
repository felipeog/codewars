const alphabetPosition = (text) => {
  const characters = [...text];
  const result = characters.reduce((acc, char) => {
    if (char.match(/[a-z]/gi)) {
      const position = char.toLowerCase().charCodeAt() - 96;

      return acc === "" ? `${position}` : `${acc} ${position}`;
    }

    return acc;
  }, "");

  return result;
};

module.exports = alphabetPosition;
