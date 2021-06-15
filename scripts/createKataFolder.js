const fs = require("fs");
const path = require("path");

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
    const defaultKataFiles = ["index.js", "test.js", "readme.md"];

    console.log("Creating Kata files...");
    defaultKataFiles.forEach((fileName) => {
      console.log(`${fileName} file created.`);
      fs.writeFileSync(`${folderPath}/${fileName}`, "");
    });
    console.log("Kata files created.");
  } catch (err) {
    console.error("Error creating Kata files.");
    throw err;
  }
});
