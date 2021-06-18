const flatten = (...args) => {
  if (!args.length) {
    return [];
  }

  if (!Array.isArray(args[0])) {
    return [args[0], ...flatten(...args.slice(1))];
  }

  return [...flatten(...args[0]), ...flatten(...args.slice(1))];
};

module.exports = flatten;
