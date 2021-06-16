const getLoopTestTitle = (index, input, output) => {
  const inputString = JSON.stringify(input);
  const outputString = JSON.stringify(output);

  return `Test ${index}: expect ${inputString} to equal ${outputString}"`;
};

module.exports = {
  getLoopTestTitle,
};
