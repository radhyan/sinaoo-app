import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function walkSync(currentDirPath, callback) {
  fs.readdirSync(currentDirPath).forEach(function (name) {
    var filePath = path.join(currentDirPath, name);
    var stat = fs.statSync(filePath);
    if (stat.isFile()) {
      callback(filePath, stat);
    } else if (stat.isDirectory()) {
      walkSync(filePath, callback);
    }
  });
}

function replaceInFile(filePath) {
  if (!filePath.endsWith(".jsx") && !filePath.endsWith(".js")) return;
  const original = fs.readFileSync(filePath, "utf-8");
  if (
    original.includes(".png") ||
    original.includes(".jpg") ||
    original.includes(".jpeg")
  ) {
    const updated = original
      .replace(/\.png/g, ".webp")
      .replace(/\.jpg/g, ".webp")
      .replace(/\.jpeg/g, ".webp");
    if (original !== updated) {
      fs.writeFileSync(filePath, updated, "utf-8");
      console.log(`Updated: ${path.relative(__dirname, filePath)}`);
    }
  }
}

const srcPath = path.resolve(__dirname, "src");
walkSync(srcPath, replaceInFile);
console.log("Replacement complete.");
