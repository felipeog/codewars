const generateHashtag = (str) => {
  const fragments = str.split(" ");
  const hashtag = fragments.reduce((acc, fragment) => {
    if (!fragment.length) {
      return acc;
    }

    if (fragment.length === 1) {
      return `${acc}${fragment.toUpperCase()}`;
    }

    const first = fragment.slice(0, 1);
    const rest = fragment.slice(1);
    const capitalized = `${first.toUpperCase()}${rest.toLowerCase()}`;

    return `${acc}${capitalized}`;
  }, "#");
  const isValid = hashtag.length > 1 && hashtag.length <= 140;

  return isValid && hashtag;
};

module.exports = generateHashtag;
