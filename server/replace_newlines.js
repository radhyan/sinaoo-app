const fs = require("fs");

const run = () => {
  const files = [
    "scripts/seedPenulisanAngkaBilangan.js",
    "scripts/seedHurufMiring.js",
    "scripts/seedHurufKapital.js",
    "scripts/seedTitikKomaTitikKoma.js",
  ];

  for (const file of files) {
    if (fs.existsSync(file)) {
      let content = fs.readFileSync(file, "utf8");

      // The regex replaces "\\n" literal string or actual newline inside strings with "<br/>"
      // to render newlines in the QuizContent correctly using dangerouslySetInnerHTML
      content = content.replace(/\\\\n/g, "<br/>");
      content = content.replace(/\\n/g, "<br/>");

      fs.writeFileSync(file, content);
      console.log("Replaced newlines with <br/> tags in", file, "successfully");
    }
  }
};

run();
