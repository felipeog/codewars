const { uniqueNamesGenerator, names } = require("unique-names-generator");

const generateRandomArrayIndex = (length) => {
  return Math.floor(Math.random() * length);
};

const generateRandomName = () => {
  return uniqueNamesGenerator({
    dictionaries: [names],
  });
};

const generateRandomNames = (length) => {
  const result = [];

  for (let i = 0; i < length; i++) {
    result.push(generateRandomName());
  }

  return result;
};

// https://stackoverflow.com/a/2450976/10942224
const shuffleArray = (inputArray) => {
  const array = [...inputArray];
  let currentIndex = array.length;

  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex--);

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

module.exports = {
  generateRandomArrayIndex,
  generateRandomName,
  generateRandomNames,
  shuffleArray,
};
