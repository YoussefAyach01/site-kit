import { describe, expect, it } from 'vitest';
import { CATEGORIES } from '../src/categories.ts';
import { TEMPLATES } from '../src/content/index.ts';
import { parsePalette, renderIndex } from '../src/index-page.ts';

describe('index page', () => {
  it('puts every template in exactly one category', () => {
    const placed = CATEGORIES.flatMap((c) => [...c.ids]);
    expect(new Set(placed).size).toBe(placed.length);
    expect([...placed].sort()).toEqual(TEMPLATES.map((t) => t.id).sort());
  });

  it('reads the palette from the first theme block only', () => {
    const css =
      '.theme-x { --bg: #fff1e0; --text: #222; --accent: #946329; }\n.theme-x .hero { --accent: #f0ae5c; }';
    expect(parsePalette(css, 'x')).toEqual({ bg: '#fff1e0', text: '#222', accent: '#946329' });
  });

  it('renders a card with FR and AR links for every template', () => {
    const html = renderIndex({
      templates: TEMPLATES,
      categories: CATEGORIES,
      palettes: {},
      thumbs: new Set(),
    });
    for (const t of TEMPLATES) {
      expect(html).toContain(`href="${t.id}/"`);
      expect(html).toContain(`href="${t.id}/ar/"`);
    }
    expect(html).toContain('dir="ltr"');
  });
});
