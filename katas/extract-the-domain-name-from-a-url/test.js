const { getLoopTestTitle } = require("../../utils/test");
const {
  generateRandomNumber,
  generateRandomArrayIndex,
} = require("../../utils/random");
const domainName = require("./index");

describe("Static tests", () => {
  const tests = [
    { input: "http://google.com", output: "google" },
    { input: "http://google.co.jp", output: "google" },
    { input: "https://123.net", output: "123" },
    { input: "https://hyphen-site.org", output: "hyphen-site" },
    { input: "http://codewars.com", output: "codewars" },
    { input: "www.xakep.ru", output: "xakep" },
    { input: "https://youtube.com", output: "youtube" },
    { input: "http://www.codewars.com/kata/", output: "codewars" },
    { input: "icann.org", output: "icann" },
  ];

  tests.forEach(({ input, output }, index) => {
    const testTitle = getLoopTestTitle(index + 1, input, output);

    it(testTitle, () => {
      expect(domainName(input)).toEqual(output);
    });
  });
});

describe("Random tests", () => {
  const domainNameCheck = (url) => {
    return url
      .replace("www.", "")
      .replace("https://", "")
      .replace("http://", "")
      .split(".")[0];
  };

  const generateUrl = () => {
    const prefixes = ["", "http://", "https://", "http://www.", "https://www."];
    const base = "0123456789abcdefghijklmnopqrstuvwxyz-";
    const topLevel = [
      ".biz",
      ".br",
      ".co.uk",
      ".co.za",
      ".co",
      ".com",
      ".de",
      ".edu",
      ".fr",
      ".info",
      ".io",
      ".it",
      ".jp",
      ".name",
      ".net",
      ".org",
      ".pro",
      ".tv",
      ".tv",
      ".us",
    ];
    const paths = [
      "",
      "/",
      "/archive/",
      "/default.html",
      "/error",
      "/img/",
      "/index.php",
      "/users",
      "/warez/",
    ];
    const domainlength = generateRandomNumber(5, 30);
    let domain = "";

    for (let i = 0; i < domainlength; i++) {
      const nextletter = base[generateRandomArrayIndex(base.length)];

      domain += nextletter;
    }

    const prefix = prefixes[generateRandomArrayIndex(prefixes.length)];
    const top = topLevel[generateRandomArrayIndex(topLevel.length)];
    const path = paths[generateRandomArrayIndex(paths.length)];

    return `${prefix}${domain}${top}${path}`;
  };

  for (let i = 0; i < 40; i++) {
    const url = generateUrl();
    const input = url;
    const output = domainNameCheck(url);
    const testTitle = getLoopTestTitle(i + 1, input, output);

    it(testTitle, () => {
      expect(domainName(input)).toEqual(output);
    });
  }
});
