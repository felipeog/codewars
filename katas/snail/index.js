const snail = (inputArray) => {
  const array = inputArray.map((item) => {
    return [...item];
  });
  const n = array[0].length;

  if (n <= 0) {
    return [];
  }

  if (n === 1) {
    return array[0];
  }

  if (n === 2) {
    const topRow = array.shift();
    const bottomRow = array.pop();

    return [...topRow, ...bottomRow.reverse()];
  }

  if (n >= 3) {
    const topRow = array.shift();
    const bottomRow = array.pop();

    const { leftColumn, rightColumn } = array.reduce(
      (acc, row) => {
        return {
          leftColumn: [...acc.leftColumn, row.shift()],
          rightColumn: [...acc.rightColumn, row.pop()],
        };
      },
      { leftColumn: [], rightColumn: [] }
    );

    const result = [
      ...topRow,
      ...rightColumn,
      ...bottomRow.reverse(),
      ...leftColumn.reverse(),
    ];

    return [...result, ...snail(array)];
  }
};

module.exports = snail;
