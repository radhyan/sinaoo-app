import sharp from "sharp";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function findImages(dir, extensions = [".png", ".jpg", ".jpeg"]) {
  let results = [];
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      results = results.concat(findImages(fullPath, extensions));
    } else {
      const ext = path.extname(item).toLowerCase();
      if (extensions.includes(ext)) {
        results.push(fullPath);
      }
    }
  }
  return results;
}

async function convertToWebP() {
  const dirs = [
    path.resolve(__dirname, "src/assets"),
    path.resolve(__dirname, "public"),
  ];

  let totalFiles = 0;
  let totalSavedBytes = 0;

  for (const dir of dirs) {
    if (!fs.existsSync(dir)) continue;

    const images = findImages(dir);
    console.log(`\nFound ${images.length} images in ${dir}`);

    for (const imgPath of images) {
      const ext = path.extname(imgPath);
      const webpPath = imgPath.replace(ext, ".webp");

      try {
        const originalSize = fs.statSync(imgPath).size;

        await sharp(imgPath).webp({ quality: 80 }).toFile(webpPath);

        const webpSize = fs.statSync(webpPath).size;
        const saved = originalSize - webpSize;
        const savedPercent = ((saved / originalSize) * 100).toFixed(1);

        totalSavedBytes += saved;
        totalFiles++;

        const relPath = path.relative(__dirname, imgPath);
        console.log(
          `  ✓ ${relPath} → .webp (${(originalSize / 1024).toFixed(0)}KB → ${(webpSize / 1024).toFixed(0)}KB, -${savedPercent}%)`,
        );
      } catch (err) {
        console.error(`  ✗ Failed: ${imgPath} - ${err.message}`);
      }
    }
  }

  console.log(`\n=== Done! ===`);
  console.log(`Converted ${totalFiles} images`);
  console.log(
    `Total space saved: ${(totalSavedBytes / 1024 / 1024).toFixed(2)} MB`,
  );
}

convertToWebP();
