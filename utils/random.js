const { uniqueNamesGenerator, names } = require("unique-names-generator");

const generateRandomArrayIndex = (length) => {
  return Math.floor(Math.random() * length);
};

const generateRandomChar = () => {
  const chars =
    "abcdefghijklmnopqrstuvwxyz1234567890-=!@#$%^&*()_+[];,./{}:|<>? ";
  const randomIndex = generateRandomArrayIndex(chars.length);

  return chars[randomIndex];
};

const generateRandomChars = (length) => {
  let result = "";

  for (let i = 0; i < length; i++) {
    result += generateRandomChar();
  }

  return result;
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

// https://www.w3schools.com/js/js_random.asp
const generateRandomNumber = (min, max) => {
  // both included
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateRandomNumbers = (length, min, max) => {
  const result = [];

  for (let i = 0; i < length; i++) {
    result.push(generateRandomNumber(min, max));
  }

  return result;
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

const generateRandomString = (length) => {
  let result = "";

  for (let i = 0; i < length; i++) {
    const isLowerCase = Math.random() > 0.5;
    const randomNumber = isLowerCase
      ? generateRandomNumber(65, 90)
      : generateRandomNumber(97, 122);

    result += String.fromCharCode(randomNumber);
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
  generateRandomChar,
  generateRandomChars,
  generateRandomName,
  generateRandomNames,
  generateRandomNumber,
  generateRandomNumbers,
  generateRandomEvenNumber,
  generateRandomOddNumber,
  generateRandomString,
  shuffleArray,
};
