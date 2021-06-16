const getLoopTestTitle = (index, input, output) => {
  const inputString = JSON.stringify(input);
  const outputString = JSON.stringify(output);

  return `Test ${index}: input ${inputString} should return ${outputString}`;
};

module.exports = {
  getLoopTestTitle,
};
