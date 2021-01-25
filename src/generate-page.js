const fs = require("fs");

const writeFile = (Team) => {
  fileContent = makeHTML(Team);
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", "something", (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
};

module.exports = writeFile;
