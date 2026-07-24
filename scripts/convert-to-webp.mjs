import sharp from 'sharp';
import { readdirSync, unlinkSync } from 'fs';
import { join, parse } from 'path';
import { fileURLToPath } from 'url';

const __dirname = parse(fileURLToPath(import.meta.url)).dir;
const imgDir = join(__dirname, '..', 'public', 'img');

const files = readdirSync(imgDir);
const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.tiff', '.bmp'];

let converted = 0;

for (const file of files) {
  const ext = parse(file).ext.toLowerCase();
  if (!imageExtensions.includes(ext)) continue;

  const inputPath = join(imgDir, file);
  const outputName = parse(file).name + '.webp';
  const outputPath = join(imgDir, outputName);

  try {
    await sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath);

    unlinkSync(inputPath);
    console.log(`✓ ${file} → ${outputName}`);
    converted++;
  } catch (err) {
    console.error(`✗ ${file}: ${err.message}`);
  }
}

console.log(`\nDone. Converted ${converted} image(s) to WebP.`);
