const solution = (list) => {
  let currentRange = null;
  let rangeCount = 1;
  let result = "";
  let i = 0;

  while (i < list.length) {
    const isFirst = i === 0;
    const isLast = i === list.length - 1;
    const current = list[i];
    const next = list[i + 1];
    const isNextInRange = current + 1 === next;

    if (isFirst) {
      currentRange = isNextInRange ? current : null;
    }

    if (rangeCount === 2 && !isNextInRange) {
      result += `${currentRange},${current}`;
      result += isLast ? "" : ",";
      currentRange = null;
      rangeCount = 1;
      i++;

      continue;
    }

    if (isNextInRange) {
      currentRange = currentRange || current;
      rangeCount++;
      i++;

      continue;
    }

    result += currentRange ? `${currentRange}-` : "";
    result += current;
    result += isLast ? "" : ",";
    currentRange = null;
    rangeCount = 1;
    i++;
  }

  return result;
};

module.exports = solution;
