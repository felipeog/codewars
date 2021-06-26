const cutLog = (prices, length, cache) => {
  if (length === 0) {
    return 0;
  }

  if (!cache) {
    cache = new Map();
  }

  if (cache.get(length)) {
    return cache.get(length);
  }

  let result = -1;

  for (let i = 1; i <= length; i++) {
    result = Math.max(result, prices[i] + cutLog(prices, length - i, cache));
  }

  cache.set(length, result);

  return result;
};

module.exports = cutLog;
