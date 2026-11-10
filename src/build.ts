import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { renderPage } from './render.ts';
import { TEMPLATES } from './content/index.ts';
import { CATEGORIES } from './categories.ts';
import { parsePalette, renderIndex, type Palette } from './index-page.ts';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const baseUrl = process.env.SITE_BASE_URL;

function write(path: string, content: string): void {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, content, 'utf8');
}

rmSync(dist, { recursive: true, force: true });

for (const site of TEMPLATES) {
  const dir = join(dist, site.id);
  mkdirSync(join(dir, 'assets', 'themes'), { recursive: true });
  cpSync(join(root, 'assets', 'base.css'), join(dir, 'assets', 'base.css'));
  cpSync(join(root, 'assets', 'themes', `${site.id}.css`), join(dir, 'assets', 'themes', `${site.id}.css`));
  const imgDir = join(root, 'assets', 'images', site.id);
  if (existsSync(imgDir)) {
    cpSync(imgDir, join(dir, 'assets', 'images', site.id), { recursive: true });
  }
  write(join(dir, 'index.html'), renderPage(site, { lang: 'fr', root: '', baseUrl }));
  write(join(dir, 'ar', 'index.html'), renderPage(site, { lang: 'ar', root: '../', baseUrl }));
}

// Index page: small thumbnails (the full heroes are ~250 KB each) + each niche's real palette.
const palettes: Record<string, Palette> = {};
const thumbs = new Set<string>();
for (const site of TEMPLATES) {
  const css = readFileSync(join(root, 'assets', 'themes', `${site.id}.css`), 'utf8');
  palettes[site.id] = parsePalette(css, site.id);
  const hero = join(root, 'assets', 'images', site.id, 'hero.webp');
  if (existsSync(hero)) {
    mkdirSync(join(dist, 'thumbs'), { recursive: true });
    await sharp(hero)
      .resize({ width: 480, height: 300, fit: 'cover' })
      .webp({ quality: 72 })
      .toFile(join(dist, 'thumbs', `${site.id}.webp`));
    thumbs.add(site.id);
  }
}
write(
  join(dist, 'index.html'),
  renderIndex({ templates: TEMPLATES, categories: CATEGORIES, palettes, thumbs }),
);

console.log(`Built ${TEMPLATES.length} templates x 2 languages into ${dist}`);
