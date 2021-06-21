const BASE_URL = "short.ly/";
const longMap = new Map();
const shortMap = new Map();
let pathIndex = 0;

// https://stackoverflow.com/a/32007970/10942224
const getCharFromIndex = (index) => {
  if (index < 26) {
    return String.fromCharCode(97 + index);
  }

  return (
    getCharFromIndex(Math.floor(index / 26) - 1) +
    String.fromCharCode(97 + Math.floor(index % 26))
  );
};

const getPath = () => {
  return getCharFromIndex(pathIndex++);
};

const urlShortener = (long) => {
  if (shortMap.has(long)) {
    return shortMap.get(long);
  }

  const short = BASE_URL + getPath();

  longMap.set(short, long);
  shortMap.set(long, short);

  return short;
};

const urlRedirector = (short) => {
  return longMap.get(short);
};

module.exports = {
  urlShortener,
  urlRedirector,
};
