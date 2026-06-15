// Optimise public/michelangelo-creation-adam.jpg → .webp
// Usage: node scripts/optimize-hero.mjs
import sharp from "sharp";
import { statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const input = join(root, "public/michelangelo-creation-adam.jpg");
const output = join(root, "public/michelangelo-creation-adam.webp");

const before = statSync(input).size;
const info = await sharp(input)
  .resize({ width: 1920, withoutEnlargement: true })
  .webp({ quality: 78, effort: 5 })
  .toFile(output);

const after = info.size;
const pct = (((before - after) / before) * 100).toFixed(1);

console.log(
  `OK ${input}\n  ${(before / 1024).toFixed(0)} KB JPEG → ${(after / 1024).toFixed(0)} KB WebP (${info.width}×${info.height}, ${pct}% smaller)`,
);
