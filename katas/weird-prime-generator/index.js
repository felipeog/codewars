let aCache = [];

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
};

const a = (n) => {
  if (n === 1) {
    return 7;
  }

  if (!aCache[n]) {
    const aResult = a(n - 1);
    const result = aResult + gcd(n, aResult);
    aCache[n] = result;

    return result;
  } else {
    return aCache[n];
  }
};

const an = (n) => {
  const result = [];

  for (let i = 1; i <= n; i++) {
    result.push(a(i));
  }

  return result;
};

const g = (n) => {
  const result = a(n + 1) - a(n);

  return result;
};

const gn = (n) => {
  const result = [];

  for (let i = 1; i < n; i++) {
    result.push(g(i));
  }

  return [1, ...result];
};

const countOnes = (n) => {
  const gnResult = gn(n);
  const result = gnResult.reduce((acc, term) => {
    if (term === 1) {
      return acc + 1;
    }

    return acc;
  }, 0);

  return result;
};

const p = (n) => {
  const result = [];
  let i = 1;

  while (result.length < n) {
    const gResult = g(i++);

    if (gResult === 1) {
      continue;
    }

    const isNew = !result.includes(gResult);

    if (isNew) {
      result.push(gResult);
    }
  }

  return result;
};

const maxPn = (n) => {
  const pResult = p(n);
  const result = Math.max(...pResult);

  return result;
};

const anOver = (n) => {
  const result = [];
  let i = 1;

  while (result.length < n) {
    const gResult = g(i++);

    if (gResult === 1) {
      continue;
    }

    result.push(a(i) / i);
  }

  return result;
};

const anOverAverage = (n) => {
  const anOverResult = anOver(n);
  const sum = anOverResult.reduce((acc, term) => {
    return acc + term;
  }, 0);
  const result = sum / anOverResult.length;

  return result;
};

module.exports = {
  countOnes,
  maxPn,
  anOverAverage,
};
