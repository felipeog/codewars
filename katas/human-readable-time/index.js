const ONE_MINUTE_IN_SECONDS = 60;
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS * 60;

const getPadded = (inputString) => {
  const string = inputString.toString();

  return string.padStart(2, "0");
};

const humanReadable = (inputSeconds) => {
  let auxSeconds = inputSeconds;

  const hours = Math.floor(auxSeconds / ONE_HOUR_IN_SECONDS);
  auxSeconds -= hours * ONE_HOUR_IN_SECONDS;

  const minutes = Math.floor(auxSeconds / ONE_MINUTE_IN_SECONDS);
  auxSeconds -= minutes * ONE_MINUTE_IN_SECONDS;

  const seconds = auxSeconds;

  return `${getPadded(hours)}:${getPadded(minutes)}:${getPadded(seconds)}`;
};

module.exports = humanReadable;
