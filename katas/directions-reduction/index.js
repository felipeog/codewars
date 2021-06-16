const isMoveNeedless = (inputFrom, inputTo) => {
  const needlessMoves = [
    { from: "NORTH", to: "SOUTH" },
    { from: "SOUTH", to: "NORTH" },
    { from: "EAST", to: "WEST" },
    { from: "WEST", to: "EAST" },
  ];
  const isNeedless = needlessMoves.some(({ from, to }) => {
    return inputFrom === from && inputTo === to;
  });

  return isNeedless;
};

const dirReduc = (arr) => {
  let result = [];
  let index = 0;

  while (index < arr.length - 1) {
    const lastIndex = arr.length - 1;
    const currentMove = arr[index];
    const nextMove = arr[index + 1];

    if (isMoveNeedless(currentMove, nextMove)) {
      index += 2;

      if (index === lastIndex) {
        result = [...result, arr[lastIndex]];
      }
    } else {
      index++;

      if (index === lastIndex) {
        result = [...result, currentMove, nextMove];
      } else {
        result = [...result, currentMove];
      }
    }
  }

  const isSameResult = arr.length === result.length;

  if (result.length === 1 || isSameResult) {
    return result;
  }

  return dirReduc(result);
};

module.exports = dirReduc;
