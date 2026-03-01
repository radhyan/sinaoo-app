const fs = require("fs");
const file = "scripts/seedHurufMiring.js";
let content = fs.readFileSync(file, "utf8");

// The regex matches text between asterisks. For example *Smart and Green City* -> <i>Smart and Green City</i>
content = content.replace(/\*([^*]+)\*/g, "<i>$1</i>");

fs.writeFileSync(file, content);
console.log("Replaced stars with html tags successfully");
