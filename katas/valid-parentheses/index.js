const validParentheses = (parens) => {
  let index = 0;
  let depth = 0;

  while (index < parens.length) {
    const currentParentheses = parens[index++];

    if (currentParentheses === "(") {
      depth++;
    }

    if (currentParentheses === ")") {
      depth--;
    }

    if (depth < 0) {
      return false;
    }
  }

  const isValid = depth === 0;

  return isValid;
};

module.exports = validParentheses;
