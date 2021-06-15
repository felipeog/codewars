const ONE_MINUTE_IN_SECONDS = 60;
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS * 60;
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS * 24;
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS * 365;

const formatDuration = (seconds) => {
  const durations = [];
  let auxSeconds = seconds;

  if (auxSeconds === 0) {
    durations.push("now");
  }

  const years = Math.floor(auxSeconds / ONE_YEAR_IN_SECONDS);
  if (years >= 1) {
    auxSeconds -= years * ONE_YEAR_IN_SECONDS;
    durations.push(getPlural(years, "year"));
  }

  const days = Math.floor(auxSeconds / ONE_DAY_IN_SECONDS);
  if (days >= 1) {
    auxSeconds -= days * ONE_DAY_IN_SECONDS;
    durations.push(getPlural(days, "day"));
  }

  const hours = Math.floor(auxSeconds / ONE_HOUR_IN_SECONDS);
  if (hours >= 1) {
    auxSeconds -= hours * ONE_HOUR_IN_SECONDS;
    durations.push(getPlural(hours, "hour"));
  }

  const minutes = Math.floor(auxSeconds / ONE_MINUTE_IN_SECONDS);
  if (minutes >= 1) {
    auxSeconds -= minutes * ONE_MINUTE_IN_SECONDS;
    durations.push(getPlural(minutes, "minute"));
  }

  if (auxSeconds >= 1) {
    durations.push(getPlural(auxSeconds, "second"));
  }

  return getFormattedDuration(durations);
};

const getPlural = (value, label) => {
  return `${value} ${label}${value > 1 ? "s" : ""}`;
};

const getFormattedDuration = (durations) => {
  if (durations.length === 1) {
    return durations[0];
  }

  const lastIndex = durations.length - 1;
  const commaSeparated = durations.slice(0, lastIndex).join(", ");
  const lastDuration = durations[lastIndex];

  return `${commaSeparated} and ${lastDuration}`;
};

module.exports = formatDuration;
