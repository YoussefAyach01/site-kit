// Tiny static server for previewing dist/ locally. Not for production.
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('.', import.meta.url)), '..', 'dist');
const port = Number(process.env.PORT ?? 3100);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css' };

createServer(async (req, res) => {
  try {
    const { pathname } = new URL(req.url ?? '/', 'http://x');
    let file = resolve(root, '.' + decodeURIComponent(pathname));
    // resolve() collapses "..", so this check stops path traversal.
    if (file !== root && !file.startsWith(root + sep)) throw new Error('outside root');
    if (!extname(file)) file = join(file, 'index.html');
    const body = await readFile(file);
    res.writeHead(200, {
      'content-type': types[extname(file)] ?? 'application/octet-stream',
      'x-content-type-options': 'nosniff',
    });
    res.end(body);
  } catch {
    res.writeHead(404, { 'content-type': 'text/plain' });
    res.end('Not found');
  }
}).listen(port, () => console.log(`site-kit preview on http://localhost:${port}`));
