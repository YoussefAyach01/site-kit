import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { expect, it } from 'vitest';

const root = join(import.meta.dirname, '..');

it('npm run build emits FR + AR pages and assets for all four templates', () => {
  execFileSync(process.execPath, ['src/build.ts'], { cwd: root, stdio: 'pipe' });
  for (const id of ['restaurant', 'barber', 'dentist', 'gym']) {
    for (const p of [
      `${id}/index.html`,
      `${id}/ar/index.html`,
      `${id}/assets/base.css`,
      `${id}/assets/themes/${id}.css`,
    ]) {
      expect(existsSync(join(root, 'dist', p)), p).toBe(true);
    }
    expect(readFileSync(join(root, 'dist', id, 'ar', 'index.html'), 'utf8')).toContain('dir="rtl"');
  }
});
