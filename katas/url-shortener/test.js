const {
  generateRandomNumber,
  generateRandomArrayIndex,
  shuffleArray,
} = require("../../utils/random");
const { urlShortener, urlRedirector } = require("./index");

const isShortUrlValid = (string) => {
  return /^short.ly\/[a-z]{1,4}$/.test(string);
};

describe("Static tests", () => {
  describe("Not equal URLs", () => {
    const urls = [
      "https://www.codewars.com/kata/5ef9ca8b76be6d001d5e1c3e",
      "https://www.codewars.com/kata/5efae11e2d12df00331f91a6",
    ];

    urls.forEach((url, index) => {
      const short = urlShortener(url);

      it(`Test ${
        index + 1
      }.1: ${short} should start with "short.ly/"; length < 14; only lowercase letters`, () => {
        expect(isShortUrlValid(short)).toBeTruthy();
      });

      it(`Test ${
        index + 1
      }.2: urlRedirector(${short}) should return ${url}`, () => {
        expect(urlRedirector(short)).toEqual(url);
      });
    });
  });

  describe("Equal URLs", () => {
    const long = "https://www.codewars.com/kata/5ef9c85dc41b4e000f9a645f";
    const short1 = urlShortener(long);
    const short2 = urlShortener(long);

    it(`${short1} and ${short2} should start with "short.ly/"; length < 14; only lowercase letters`, () => {
      expect(isShortUrlValid(short1)).toBeTruthy();
      expect(isShortUrlValid(short2)).toBeTruthy();
    });

    it(`${short1} and ${short2} should be equal`, () => {
      expect(short1).toEqual(short2);
    });

    it(`urlRedirector(${short1}) should return ${long}`, () => {
      expect(urlRedirector(short1)).toEqual(long);
    });
  });
});

describe("Random tests", () => {
  const getUrl = () => {
    const protocol = ["https://", "http://", ""];
    const topLovel = [
      ".com",
      ".org",
      ".us",
      ".io",
      ".fr",
      ".codes",
      ".ru",
      ".sh",
    ];
    const chars =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ?!%=";
    const length = generateRandomNumber(1, 50);
    let url = [];

    url.push(protocol[generateRandomArrayIndex(protocol.length)]);

    if (generateRandomNumber(0, 1)) {
      url.push("www.");
    }

    for (let _ = 0; _ < length; _++) {
      url.push(chars[generateRandomArrayIndex(chars.length)]);
    }

    url.push(topLovel[generateRandomArrayIndex(topLovel.length)]);

    if (generateRandomNumber(0, 1)) {
      url.push("/");
    }

    return url.join("");
  };

  it(`Should handle 475.000 random URLs`, () => {
    const urlMap = new Map();

    // can take some time
    for (let i = 0; i < 475_000; i++) {
      const long = getUrl();
      const short = urlShortener(long);

      expect(isShortUrlValid(short)).toBeTruthy();

      if (urlMap.has(long)) {
        expect(urlMap.get(long)).toEqual(short);
      } else {
        urlMap.set(long, short);
      }
    }

    for (let [short, long] of shuffleArray(urlMap.entries())) {
      expect(urlRedirector(long)).toEqual(short);
    }
  });
});
