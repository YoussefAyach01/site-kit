import { cpSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderPage, esc } from './render.ts';
import { TEMPLATES } from './content/index.ts';

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
  cpSync(join(root, 'assets'), join(dir, 'assets'), { recursive: true });
  write(join(dir, 'index.html'), renderPage(site, { lang: 'fr', root: '', baseUrl }));
  write(join(dir, 'ar', 'index.html'), renderPage(site, { lang: 'ar', root: '../', baseUrl }));
}

const cards = TEMPLATES.map(
  (s) =>
    `<li><a href="${s.id}/">${esc(s.name.fr)}</a> · <a href="${s.id}/ar/" hreflang="ar" lang="ar">${esc(s.name.ar)}</a></li>`,
).join('\n');
write(
  join(dist, 'index.html'),
  `<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>site-kit · démos</title></head><body style="font-family:system-ui;max-width:32rem;margin:2rem auto;padding:0 1rem;line-height:1.8"><h1>site-kit</h1><ul>${cards}</ul></body></html>\n`,
);

console.log(`Built ${TEMPLATES.length} templates x 2 languages into ${dist}`);
