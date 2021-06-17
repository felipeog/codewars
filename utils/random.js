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

// https://www.w3schools.com/js/js_random.asp
const generateRandomNumber = (min, max) => {
  // both included
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateRandomEvenNumber = (min, max) => {
  const randomNumber = generateRandomNumber(min, max);

  if (randomNumber % 2 === 0) {
    return randomNumber;
  }

  if (randomNumber + 1 > max) {
    return randomNumber - 1;
  }

  return randomNumber + 1;
};

const generateRandomOddNumber = (min, max) => {
  const randomNumber = generateRandomNumber(min, max);

  if (randomNumber % 2 !== 0) {
    return randomNumber;
  }

  if (randomNumber + 1 > max) {
    return randomNumber - 1;
  }

  return randomNumber + 1;
};

const generateRandomNumbers = (length, min, max) => {
  const result = [];

  for (let i = 0; i < length; i++) {
    result.push(generateRandomNumber(min, max));
  }

  return result;
};

module.exports = {
  generateRandomArrayIndex,
  generateRandomName,
  generateRandomNames,
  generateRandomNumber,
  generateRandomNumbers,
  generateRandomEvenNumber,
  generateRandomOddNumber,
  shuffleArray,
};
