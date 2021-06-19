const getRegex = (markers) => {
  const metaCharacters = [
    "\\",
    "^",
    "$",
    ".",
    "|",
    "?",
    "*",
    "+",
    "(",
    ")",
    "[",
    "{",
  ];
  const regexPattern = markers.reduce((acc, marker, index) => {
    const shouldScape = metaCharacters.includes(marker);
    const isLast = index === markers.length - 1;

    return `${acc}${shouldScape ? "\\" : ""}${marker}.*${isLast ? "" : "|"}`;
  }, "");
  const regex = new RegExp(regexPattern, "gi");

  return regex;
};

const solution = (input, markers) => {
  const lines = input.split("\n");
  const regex = getRegex(markers);
  const result = lines.reduce((acc, line, index) => {
    const striped = line.replace(regex, "");
    const trimmed = striped.trim();
    const isLast = index === lines.length - 1;

    return `${acc}${trimmed}${isLast ? "" : "\n"}`;
  }, "");

  return result;
};

module.exports = solution;
