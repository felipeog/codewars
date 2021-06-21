const topThreeWords = (text) => {
  if (!text.match(/[a-z]/gi)) {
    return [];
  }

  const { top } = text.match(/\b[a-z']+\b/gi).reduce(
    (acc, word) => {
      const lowerCase = word.toLowerCase();
      const wordCount = acc.count[lowerCase] ? acc.count[lowerCase] + 1 : 1;
      const newCount = {
        ...acc.count,
        [lowerCase]: wordCount,
      };

      // if the current word is already on the top three, increment its count
      const onTopIndex = acc.top.findIndex(({ word }) => {
        return lowerCase === word;
      });

      if (onTopIndex >= 0) {
        const newTop = [
          ...acc.top.slice(0, onTopIndex),
          { word: lowerCase, count: wordCount },
          ...acc.top.slice(onTopIndex + 1),
        ].sort((a, b) => {
          return b.count - a.count;
        });

        return {
          count: newCount,
          top: newTop,
        };
      }

      // if a top word has a smaller count than the current word, replace it
      const smallerCountIndex = acc.top.findIndex(({ count }) => {
        return wordCount > count;
      });

      if (smallerCountIndex >= 0) {
        const newTop = [
          ...acc.top.slice(0, smallerCountIndex),
          { word: lowerCase, count: wordCount },
          ...acc.top.slice(smallerCountIndex + 1),
        ];

        return {
          count: newCount,
          top: newTop,
        };
      }

      // if the top array has less than three words, append the current word
      if (acc.top.length < 3) {
        const newTop = [...acc.top, { word: lowerCase, count: wordCount }];

        return {
          count: newCount,
          top: newTop,
        };
      }

      // else, return the same top array
      return {
        count: newCount,
        top: acc.top,
      };
    },
    {
      count: {},
      top: [],
    }
  );
  const result = top.map(({ word }) => {
    return word;
  });

  return result;
};

module.exports = topThreeWords;
