const moveZeros = (arr) => {
  const { notZeros, zeros } = arr.reduce(
    (acc, item) => {
      if (item === 0) {
        return {
          ...acc,
          zeros: [...acc.zeros, item],
        };
      }

      return {
        ...acc,
        notZeros: [...acc.notZeros, item],
      };
    },
    {
      notZeros: [],
      zeros: [],
    }
  );
  const result = [...notZeros, ...zeros];

  return result;
};

module.exports = moveZeros;
