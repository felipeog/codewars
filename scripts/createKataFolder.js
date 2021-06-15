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
  return console.error("Kata name was not provided.");
}

const kataName = process.argv[2];
const folderPath = path.resolve(__dirname, `../katas/${kataName}`);

if (fs.existsSync(folderPath)) {
  return console.error("Kata already exists.");
}

fs.mkdir(folderPath, { recursive: true }, (err) => {
  console.log("Creating Kata folder...");
  if (err) {
    console.error("Error creating Kata folder.");
    throw err;
  }
  console.log("Kata folder created.");

  try {
    console.log("Creating Kata files...");
    DEFAULT_KATA_FILES.forEach(({ name, content }) => {
      console.log(`${name} file created.`);
      fs.writeFileSync(`${folderPath}/${name}`, content);
    });
    console.log("Kata files created.");
  } catch (err) {
    // TODO: remove created folder
    console.error("Error creating Kata files.");
    throw err;
  }
});
