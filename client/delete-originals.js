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

function deleteOriginals(filePath) {
  if (
    filePath.endsWith(".png") ||
    filePath.endsWith(".jpg") ||
    filePath.endsWith(".jpeg")
  ) {
    fs.unlinkSync(filePath);
    console.log(`Deleted: ${path.relative(__dirname, filePath)}`);
  }
}

const assetsPath = path.resolve(__dirname, "src/assets");
const publicPath = path.resolve(__dirname, "public");

if (fs.existsSync(assetsPath)) walkSync(assetsPath, deleteOriginals);
if (fs.existsSync(publicPath)) walkSync(publicPath, deleteOriginals);

console.log("Deletion complete.");
