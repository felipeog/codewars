const validParentheses = (parens) => {
  let i = 0;
  let depth = 0;

  while (i < parens.length) {
    const currentParen = parens[i++];

    if (currentParen === "(") {
      depth++;
    }

    if (currentParen === ")") {
      depth--;
    }

    if (depth < 0) {
      return false;
    }
  }

  return depth === 0;
};

module.exports = validParentheses;
