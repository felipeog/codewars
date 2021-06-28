const sortIntervals = (intervals) => {
  const sorted = [...intervals].sort(([xA], [xB]) => {
    return xA - xB;
  });

  return sorted;
};

const removeOverlaps = (intervals) => {
  const sortedIntervals = sortIntervals(intervals);
  let noOverlaps = [...sortedIntervals];
  let i = 0;

  while (i < noOverlaps.length - 1) {
    const [currentX, currentY] = noOverlaps[i];
    const [nextX, nextY] = noOverlaps[i + 1];
    const isOverlapping = currentY > nextX;

    if (isOverlapping) {
      const biggerY = Math.max(currentY, nextY);

      noOverlaps = [
        ...noOverlaps.slice(0, i),
        [currentX, biggerY],
        ...noOverlaps.slice(i + 2),
      ];
    } else {
      i++;
    }
  }

  return noOverlaps;
};

const sumIntervals = (intervals) => {
  const noOverlaps = removeOverlaps(intervals);
  const sum = noOverlaps.reduce((acc, [x, y]) => {
    return acc + (y - x);
  }, 0);

  return sum;
};

module.exports = sumIntervals;
