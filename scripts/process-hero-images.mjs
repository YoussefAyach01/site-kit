import { readdirSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname, basename, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const incoming = join(root, 'incoming-images');
const outDir = join(root, 'assets', 'images');

const files = existsSync(incoming) ? readdirSync(incoming).filter((f) => /\.(jpe?g|png)$/i.test(f)) : [];

if (!files.length) {
  console.log('No incoming images found in', incoming);
  process.exit(0);
}

for (const file of files) {
  const id = basename(file, extname(file));
  const dir = join(outDir, id);
  mkdirSync(dir, { recursive: true });
  const out = join(dir, 'hero.webp');
  await sharp(join(incoming, file))
    .resize({ width: 1400, withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(out);
  console.log(`${id} -> ${out}`);
}
