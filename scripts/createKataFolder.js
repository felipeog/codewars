const fs = require("fs");
const path = require("path");

const DEFAULT_KATA_FILES = [
  {
    name: "index.js",
    content: "const fn = () => {};\n\nmodule.exports = fn;\n",
  },
  { name: "test.js", content: 'const fn = require("./index");\n' },
  { name: "readme.md", content: "# [name](url)\n" },
];

if (!process.argv[2]) {
  return console.error("ERROR: Kata name was not provided");
}

const kataName = process.argv[2];
const folderPath = path.resolve(__dirname, `../katas/${kataName}`);

if (fs.existsSync(folderPath)) {
  return console.error("ERROR: Kata already exists");
}

fs.mkdir(folderPath, { recursive: true }, (err) => {
  if (err) {
    return console.error("ERROR: Error creating Kata folder", err);
  }

  try {
    DEFAULT_KATA_FILES.forEach(({ name, content }) => {
      fs.writeFileSync(`${folderPath}/${name}`, content);
    });

    console.log("SUCCESS: Kata files created");
  } catch (err) {
    return console.error("ERROR: Error creating Kata files", err);
  }
});
