const addValue = (obj, keys, value) => {
  const currentKey = keys[0];
  const restOfKeys = keys.slice(1);

  if (keys.length <= 1) {
    return {
      ...obj,
      [currentKey]: value,
    };
  }

  if (obj.hasOwnProperty(currentKey)) {
    const prevObj = obj[currentKey];
    const nextObj = addValue(prevObj, restOfKeys, value);

    return {
      ...obj,
      [currentKey]: {
        ...prevObj,
        ...nextObj,
      },
    };
  }

  return {
    ...obj,
    [currentKey]: {
      ...addValue({}, restOfKeys, value),
    },
  };
};

const convertQueryToMap = (query) => {
  if (!query) {
    return {};
  }

  const entries = query.split("&");
  const map = entries.reduce((acc, entry) => {
    const [path, value] = entry.split("=");
    const keys = path.split(".");
    const newObj = addValue(acc, keys, decodeURIComponent(value));

    return newObj;
  }, {});

  return map;
};

module.exports = convertQueryToMap;
