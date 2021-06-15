const calc = (expression) => {
  return Math.floor(eval(expression));
};

const zero = (expression = "") => {
  if (!expression.length) {
    return "0";
  }

  return calc(`0 ${expression}`);
};

const one = (expression = "") => {
  if (!expression.length) {
    return "1";
  }

  return calc(`1 ${expression}`);
};

const two = (expression = "") => {
  if (!expression.length) {
    return "2";
  }

  return calc(`2 ${expression}`);
};

const three = (expression = "") => {
  if (!expression.length) {
    return "3";
  }

  return calc(`3 ${expression}`);
};

const four = (expression = "") => {
  if (!expression.length) {
    return "4";
  }

  return calc(`4 ${expression}`);
};

const five = (expression = "") => {
  if (!expression.length) {
    return "5";
  }

  return calc(`5 ${expression}`);
};

const six = (expression = "") => {
  if (!expression.length) {
    return "6";
  }

  return calc(`6 ${expression}`);
};

const seven = (expression = "") => {
  if (!expression.length) {
    return "7";
  }

  return calc(`7 ${expression}`);
};

const eight = (expression = "") => {
  if (!expression.length) {
    return "8";
  }

  return calc(`8 ${expression}`);
};

const nine = (expression = "") => {
  if (!expression.length) {
    return "9";
  }

  return calc(`9 ${expression}`);
};

const plus = (number = "0") => {
  return `+ ${number}`;
};

const minus = (number = "0") => {
  return `- ${number}`;
};

const times = (number = "1") => {
  return `* ${number}`;
};

const dividedBy = (number = "1") => {
  return `/ ${number}`;
};

module.exports = {
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  plus,
  minus,
  times,
  dividedBy,
};
