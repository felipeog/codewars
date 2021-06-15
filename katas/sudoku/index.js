const hasZeroes = (board) => {
  return board.some((row) => row.includes(0));
};

const hasAllDigits = (row) => {
  const allDigits = [...Array(9)].map((_, i) => i + 1);
  const uniqueDigits = [...new Set(row)];

  if (uniqueDigits.length < 9) {
    return false;
  }

  return allDigits.every((digit) => uniqueDigits.includes(digit));
};

const validSolution = (board) => {
  if (hasZeroes(board)) {
    return false;
  }

  const { rows, columnsAsRows, blocksAsRows } = board.reduce(
    (acc, currentRow, index) => {
      const rows = [...acc.rows, currentRow];
      const columnsAsRows = acc.columnsAsRows.map((column, index) => {
        return [...column, currentRow[index]];
      });

      switch (index) {
        case 0:
        case 1:
        case 2:
          acc.blocksAsRows[0] = [
            ...acc.blocksAsRows[0],
            ...currentRow.slice(0, 3),
          ];
          acc.blocksAsRows[1] = [
            ...acc.blocksAsRows[1],
            ...currentRow.slice(3, 6),
          ];
          acc.blocksAsRows[2] = [
            ...acc.blocksAsRows[2],
            ...currentRow.slice(6, 9),
          ];
          break;

        case 3:
        case 4:
        case 5:
          acc.blocksAsRows[3] = [
            ...acc.blocksAsRows[3],
            ...currentRow.slice(0, 3),
          ];
          acc.blocksAsRows[4] = [
            ...acc.blocksAsRows[4],
            ...currentRow.slice(3, 6),
          ];
          acc.blocksAsRows[5] = [
            ...acc.blocksAsRows[5],
            ...currentRow.slice(6, 9),
          ];
          break;

        case 6:
        case 7:
        case 8:
          acc.blocksAsRows[6] = [
            ...acc.blocksAsRows[6],
            ...currentRow.slice(0, 3),
          ];
          acc.blocksAsRows[7] = [
            ...acc.blocksAsRows[7],
            ...currentRow.slice(3, 6),
          ];
          acc.blocksAsRows[8] = [
            ...acc.blocksAsRows[8],
            ...currentRow.slice(6, 9),
          ];
          break;

        default:
          break;
      }

      return {
        rows,
        columnsAsRows,
        blocksAsRows: acc.blocksAsRows,
      };
    },
    {
      rows: [],
      columnsAsRows: [...Array(9)].map((_) => []),
      blocksAsRows: [...Array(9)].map((_) => []),
    }
  );

  const isValid = [...rows, ...columnsAsRows, ...blocksAsRows].every(
    hasAllDigits
  );

  return isValid;
};

module.exports = validSolution;
