const { getLoopTestTitle } = require("../../utils/test");
const {
  generateRandomNumber,
  generateRandomArrayIndex,
} = require("../../utils/random");
const generateBC = require("./index");

describe("Static Tests", () => {
  const tests = [
    {
      input: ["mysite.com/pictures/holidays.html", " : "],
      output:
        '<a href="/">HOME</a> : <a href="/pictures/">PICTURES</a> : <span class="active">HOLIDAYS</span>',
    },
    {
      input: ["www.codewars.com/users/GiacomoSorbi?ref=CodeWars", " / "],
      output:
        '<a href="/">HOME</a> / <a href="/users/">USERS</a> / <span class="active">GIACOMOSORBI</span>',
    },
    {
      input: [
        "www.microsoft.com/important/confidential/docs/index.htm#top",
        " * ",
      ],
      output:
        '<a href="/">HOME</a> * <a href="/important/">IMPORTANT</a> * <a href="/important/confidential/">CONFIDENTIAL</a> * <span class="active">DOCS</span>',
    },
    {
      input: [
        "mysite.com/very-long-url-to-make-a-silly-yet-meaningful-example/example.asp",
        " > ",
      ],
      output:
        '<a href="/">HOME</a> > <a href="/very-long-url-to-make-a-silly-yet-meaningful-example/">VLUMSYME</a> > <span class="active">EXAMPLE</span>',
    },
    {
      input: [
        "www.very-long-site_name-to-make-a-silly-yet-meaningful-example.com/users/giacomo-sorbi",
        " + ",
      ],
      output:
        '<a href="/">HOME</a> + <a href="/users/">USERS</a> + <span class="active">GIACOMO SORBI</span>',
    },
    {
      input: ["https://www.linkedin.com/in/giacomosorbi", " * "],
      output:
        '<a href="/">HOME</a> * <a href="/in/">IN</a> * <span class="active">GIACOMOSORBI</span>',
    },
    {
      input: ["www.agcpartners.co.uk/", " * "],
      output: '<span class="active">HOME</span>',
    },
    {
      input: ["www.agcpartners.co.uk", " # "],
      output: '<span class="active">HOME</span>',
    },
    {
      input: ["https://www.agcpartners.co.uk/index.html", " >>> "],
      output: '<span class="active">HOME</span>',
    },
    {
      input: ["http://www.agcpartners.co.uk", " % "],
      output: '<span class="active">HOME</span>',
    },
  ];

  tests.forEach(({ input, output }, index) => {
    const testTitle = getLoopTestTitle(index + 1, input, output);

    it(testTitle, () => {
      expect(generateBC(...input)).toEqual(output);
    });
  });
});

describe("Random Tests", () => {
  const separators = [
    " * ",
    " > ",
    " / ",
    " : ",
    " . ",
    " >>> ",
    " # ",
    " + ",
    " - ",
    " ; ",
  ];

  const solacronymize = (_label) => {
    const exclude = [
      "the",
      "of",
      "in",
      "from",
      "by",
      "with",
      "and",
      "or",
      "for",
      "to",
      "at",
      "a",
    ];
    const label = _label.toLowerCase().split("-");
    const res = [];

    for (let i = 0; i < label.length; i++) {
      if (exclude.indexOf(label[i]) === -1) res.push(label[i]);
    }

    return res
      .map((a) => {
        return a[0];
      })
      .join("");
  };

  const parseName = (_name) => {
    const name = _name.split("-").join(" ").replace(/\.\w+/, "").toUpperCase();

    return name;
  };

  const createHTMLPath = (label, url, _classes, last) => {
    const classes = _classes ? ` class="${_classes}"` : "";
    const element = !last
      ? `<a href="${url}"${classes}>${label}</a>`
      : `<span${classes}>${label}</span>`;

    return element;
  };

  const generateBCCheck = (_url, separator) => {
    const url = _url
      .replace(/https?:\/\//, "")
      .replace(/\/index\..+$/, "")
      .replace(/[?#].+$/, "");
    const base = (url.match(/.+?\//) || [url])[0];

    if (url === base) {
      return '<span class="active">HOME</span>';
    }

    const paths = url.slice(base.length).split("/");
    let path = "/";
    let breadcrumbedPath = ['<a href="/">HOME</a>'];

    for (let i = 0; i < paths.length; i++) {
      let classes;
      let last;
      let bcName = paths[i];

      if (i === paths.length - 1) {
        classes = "active";
        last = true;
      }

      if (paths[i].length > 30) {
        bcName = solacronymize(bcName);
      }

      path += paths[i] + "/";
      bcName = parseName(bcName);
      breadcrumbedPath.push(createHTMLPath(bcName, path, classes, last));
    }

    return breadcrumbedPath.join(separator);
  };

  const generatePath = () => {
    const paths = [
      "pictures",
      "images",
      "profiles",
      "users",
      "pictures-you-wished-you-never-saw-but-you-cannot-unsee-now",
      "issues",
      "files",
      "games",
      "app",
      "wanted",
      "web",
      "most-downloaded",
      "most-viewed",
    ];
    const words = [
      "the",
      "of",
      "in",
      "from",
      "by",
      "with",
      "and",
      "or",
      "for",
      "to",
      "at",
      "a",
      "bed",
      "uber",
      "cauterization",
      "pippi",
      "surfer",
      "insider",
      "kamehameha",
      "bladder",
      "skin",
      "transmutation",
      "meningitis",
      "paper",
      "research",
      "biotechnology",
      "bioengineering",
      "eurasian",
      "diplomatic",
      "immunity",
    ];
    const length = generateRandomNumber(0, 4);
    const path = [];

    for (let _ = 0; _ < length; _++) {
      if (generateRandomNumber(0, 1)) {
        path.push(paths[generateRandomArrayIndex(paths.length)]);
      } else {
        const path = [];
        const length = generateRandomNumber(20, 50);
        let i = 0;

        while (i < length) {
          const index = generateRandomArrayIndex(words.length);

          path.push(words[index]);
          i += words[index].length;
        }

        path.push(path.join("-"));
      }
    }

    return path;
  };

  const generateUrl = () => {
    const prefixes = [
      "http://",
      "https://",
      "http://www.",
      "https://www.",
      "",
      "",
      "",
      "",
    ];
    const sites = [
      "codewars.com",
      "google.ca",
      "facebook.fr",
      "linkedin.it",
      "github.com",
      "agcpartners.co.uk",
      "twitter.de",
      "pippi.pi",
    ];

    const documents = [
      "index",
      "funny",
      "giacomo-sorbi",
      "login",
      "test",
      "secret-page",
    ];
    const extensions = [".html", ".htm", ".asp", ".php"];
    const anchors = [
      "#top",
      "#bottom",
      "#images",
      "#info",
      "#conclusion",
      "#team",
      "#people",
      "#offers",
    ];
    const parameters = [
      "?source=utm_pippi",
      "?hack=off",
      "?referral=CodeWars",
      "?order=desc&filter=adult",
      "?favourite=code",
      "?previous=normalSearch&output=full",
      "?rank=recent_first&hide=sold",
      "?sortBy=year",
    ];
    const prefix = prefixes[generateRandomArrayIndex(prefixes.length)];
    const site = sites[generateRandomArrayIndex(sites.length)];
    const path = generatePath();
    let file = "";
    let anchor = "";
    let parameter = "";

    if (generateRandomNumber(0, 1)) {
      const document = documents[generateRandomArrayIndex(documents.length)];
      const extension = extensions[generateRandomArrayIndex(extensions.length)];

      file = `/${document}${extension}`;
    }

    if (generateRandomNumber(1, 10) > 7) {
      anchor = anchors[generateRandomArrayIndex(anchors.length)];
    }

    if (generateRandomNumber(1, 10) > 7) {
      parameter = parameters[generateRandomArrayIndex(parameters.length)];
    }

    return `${[prefix + site, ...path].join("/")}${file}${anchor}${parameter}`;
  };

  for (let i = 0; i < 40; i++) {
    const separator = separators[generateRandomArrayIndex(separators.length)];
    const url = generateUrl();
    const input = [url, separator];
    const output = generateBCCheck(...input);
    const testTitle = getLoopTestTitle(i + 1, input, output);

    it(testTitle, () => {
      expect(generateBC(...input)).toEqual(output);
    });
  }
});
