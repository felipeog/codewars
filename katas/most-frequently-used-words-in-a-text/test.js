const { getLoopTestTitle } = require("../../utils/test");
const { generateRandomArrayIndex } = require("../../utils/random");
const topThreeWords = require("./index");

describe("Static tests", () => {
  const tests = [
    { input: "a a a  b  c c  d d d d  e e e e e", output: ["e", "d", "a"] },
    { input: "a a c b b", output: ["a", "b", "c"] },
    {
      input: "e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e",
      output: ["e", "ddd", "aa"],
    },
    { input: "  //wont won't won't ", output: ["won't", "wont"] },
    { input: "  , e   .. ", output: ["e"] },
    { input: "  ...  ", output: [] },
    { input: "  '  ", output: [] },
    {
      input:
        "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.",
      output: ["a", "of", "on"],
    },
  ];

  tests.forEach(({ input, output }, index) => {
    const testTitle = getLoopTestTitle(index + 1, input, output);

    it(testTitle, () => {
      expect(topThreeWords(input)).toEqual(output);
    });
  });
});

describe("Random tests", () => {
  const generateHistogram = (words) => {
    const histogram = {};

    words.forEach((word) => {
      histogram[word] = histogram[word] ? histogram[word] + 1 : 1;
    });

    return histogram;
  };

  const topThreeWordsCheck = (text) => {
    const originalText = text
      .toLowerCase()
      .replace(/[\/,\.]| ' /g, "")
      .split(" ");
    const histogram = generateHistogram(originalText);

    return [
      Object.keys(histogram)
        .sort((a, b) => {
          return histogram[b] - histogram[a];
        })
        .filter((word) => {
          return word;
        })
        .slice(0, 3),
      histogram,
    ];
  };

  const prepositions = [
      "with",
      "at",
      "from",
      "into",
      "of",
      "among",
      "against",
      "above",
      "for",
      "on",
      "by",
      "to",
      "in",
    ],
    articles = ["a", "the"],
    nouns = [
      "cat",
      "rat",
      "doll",
      "monster",
      "jedi",
      "frog",
      "toad",
      "dresser",
      "CD",
      "blanket",
      "poster",
    ],
    verbs = [
      "ran",
      "ate",
      "saw",
      "spoke",
      "bolted",
      "jumped",
      "dove",
      "yelled",
      "caved",
      "exploded",
    ];
  const sequence = [
    articles,
    nouns,
    verbs,
    prepositions,
    articles,
    nouns,
    prepositions,
    articles,
    nouns,
  ];

  const generateText = () => {
    const text = sequence.reduce((acc, collection) => {
      const index = generateRandomArrayIndex(collection.length);

      return `${acc} ${collection[index]}`;
    }, "");

    return text.trim();
  };

  for (let i = 0; i < 50; i++) {
    const text = generateText();
    const [check, histogram] = topThreeWordsCheck(text);
    const checkCount = check.map((word) => {
      return histogram[word];
    });
    const resultCount = topThreeWords(text).map((word) => {
      return histogram[word];
    });
    const testTitle = getLoopTestTitle(i + 1, text, checkCount);

    it(testTitle, () => {
      // as ties may be broken arbitrarily, instead of comparing the words themselves, their count is compared
      expect(resultCount).toEqual(checkCount);
    });
  }
});
