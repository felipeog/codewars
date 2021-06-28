const getPathArray = (url) => {
  const cleanUrl = url.replace(/\?.*|#.*|https?:\/\//gi, "");
  const fragments = cleanUrl.split("/");
  const path = fragments.filter((fragment, index) => {
    const isDomain = index === 0;
    const isIndex = fragment.includes("index.");
    const isEmpty = !fragment.length;

    return !(isDomain || isIndex || isEmpty);
  });

  return path;
};

const getLabel = (path) => {
  const cleanPath = path.replace(/\..*/g, "");
  const words = cleanPath.split("-");

  if (path.length > 30) {
    const blacklist = [
      "the",
      "of",
      "in",
      "from",
      "by",
      "with",
      "and",
      "or",
      "for",
      "to",
      "at",
      "a",
    ];
    const label = words.reduce((acc, word) => {
      if (blacklist.includes(word)) {
        return acc;
      }

      return `${acc}${word[0]}`;
    }, "");

    return label;
  }

  return words.join(" ");
};

const generateBC = (url, separator) => {
  const pathArray = getPathArray(url);

  if (!pathArray.length) {
    return '<span class="active">HOME</span>';
  }

  const breadCrumb = pathArray.reduce((acc, path, index) => {
    const label = getLabel(path).toUpperCase();
    const isLast = index === pathArray.length - 1;

    if (isLast) {
      return `${acc}${separator}<span class="active">${label}</span>`;
    }

    const href = pathArray.slice(0, index + 1).join("/");

    return `${acc}${separator}<a href="/${href}/">${label}</a>`;
  }, '<a href="/">HOME</a>');

  return breadCrumb;
};

module.exports = generateBC;
