const fibonacci = (number, cache) => {
  if (!cache) {
    cache = new Map();
  }

  if (number === 0 || number === 1) {
    return number;
  }

  if (cache.get(number)) {
    return cache.get(number);
  }

  cache.set(
    number,
    fibonacci(number - 1, cache) + fibonacci(number - 2, cache)
  );

  return cache.get(number);
};

module.exports = fibonacci;
