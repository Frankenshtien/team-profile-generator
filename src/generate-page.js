const fs = require("fs");
const makeHTML = require("./page-template");

const writeFile = (Team) => {
  const fileContent = makeHTML(Team);

  return fs.writeFile("./dist/index.html", fileContent, (err) => {
    if (err) {
      return "err";
    }
  });
};

module.exports = writeFile;
