import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { esc, formatPrice, renderPage, safeJson, telHref, waLink } from '../src/render.ts';
import { TEMPLATES } from '../src/content/index.ts';
import { t, UI } from '../src/ui.ts';
import type { Lang, SiteContent } from '../src/types.ts';

const sample = TEMPLATES[0] as SiteContent;

describe('helpers', () => {
  it('escapes HTML metacharacters', () => {
    expect(esc(`<script>alert("x")</script> & 'y'`)).toBe(
      '&lt;script&gt;alert(&quot;x&quot;)&lt;/script&gt; &amp; &#39;y&#39;',
    );
  });

  it('builds a wa.me link with digits only and an encoded message', () => {
    expect(waLink('+212 6 00-00 00 00', 'Bonjour & merci ?')).toBe(
      'https://wa.me/212600000000?text=Bonjour%20%26%20merci%20%3F',
    );
  });

  it('encodes Arabic messages', () => {
    expect(waLink('212600000000', 'مرحبا')).toContain('text=%D9%85');
  });

  it('builds a tel: href from a formatted number', () => {
    expect(telHref('+212 5 22 00 00 00')).toBe('tel:+212522000000');
  });

  it('formats prices in MAD, or "on quote" when missing', () => {
    expect(formatPrice(1500, 'fr')).toMatch(/^1\D?500\sMAD$/);
    expect(formatPrice(95, 'ar')).toBe('95 درهم');
    expect(formatPrice(undefined, 'fr')).toBe('Sur devis');
  });

  it('never lets "<" through in JSON-LD', () => {
    expect(safeJson({ a: '</script><script>x' })).not.toContain('<');
  });

  it('throws on a missing UI string instead of printing "undefined"', () => {
    expect(() => t('nope', 'fr')).toThrow();
  });
});

describe.each(TEMPLATES.map((c) => [c.id, c] as const))('template %s', (_id, content) => {
  it('has complete FR and AR content (no empty strings)', () => {
    const walk = (v: unknown, path: string): void => {
      if (typeof v === 'string') expect(v.trim(), path).not.toBe('');
      else if (Array.isArray(v)) v.forEach((x, i) => walk(x, `${path}[${i}]`));
      else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) walk(x, `${path}.${k}`);
    };
    walk(content, content.id);
    const localizedOnly = JSON.stringify(content.hero);
    expect(localizedOnly).toMatch(/[؀-ۿ]/);
  });

  it.each(['fr', 'ar'] as Lang[])('renders a valid %s page', (lang) => {
    const html = renderPage(content, { lang, root: lang === 'ar' ? '../' : '', year: 2026 });
    expect(html).toContain(`<html lang="${lang}" dir="${lang === 'ar' ? 'rtl' : 'ltr'}">`);
    expect(html.match(/<h1[ >]/g)).toHaveLength(1);
    expect(html).toContain('name="viewport"');
    expect(html).toContain('href="#main"');
    expect(html).toContain('https://wa.me/');
    expect(html).toContain(`themes/${content.id}.css`);
    expect(html).not.toMatch(/undefined|\[object/);
    // every id referenced by aria-labelledby exists
    for (const m of html.matchAll(/aria-labelledby="([^"]+)"/g)) expect(html).toContain(`id="${m[1]}"`);
    // every in-page anchor has a target
    for (const m of html.matchAll(/href="#([^"]+)"/g)) expect(html).toContain(`id="${m[1]}"`);
  });

  it('shows every service price', () => {
    const html = renderPage(content, { lang: 'fr', root: '' });
    const withPrice = content.services.filter((s) => s.priceMad !== undefined).length;
    expect(html.match(/class="service__price"/g)).toHaveLength(content.services.length);
    expect(html.match(/MAD/g)?.length ?? 0).toBeGreaterThanOrEqual(withPrice);
  });

  it('switches language via relative links that match the folder layout', () => {
    expect(renderPage(content, { lang: 'fr', root: '' })).toContain('href="ar/" hreflang="ar"');
    expect(renderPage(content, { lang: 'ar', root: '../' })).toContain('href="../" hreflang="fr"');
  });
});

it('escapes hostile business data', () => {
  const evil: SiteContent = {
    ...sample,
    name: { fr: '<img src=x onerror=alert(1)>', ar: 'x' },
  };
  const html = renderPage(evil, { lang: 'fr', root: '' });
  expect(html).not.toContain('<img src=x');
  expect(html).toContain('&lt;img src=x');
});

it('UI dictionary has both languages for every key', () => {
  for (const [key, v] of Object.entries(UI)) {
    expect(v.fr, key).toBeTruthy();
    expect(v.ar, key).toBeTruthy();
  }
});

// ---- Accessibility: WCAG contrast of every theme's text/link/button pairs ----
function lum(hex: string): number {
  const n = parseInt(hex.slice(1), 16);
  const ch = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * (ch[0] ?? 0) + 0.7152 * (ch[1] ?? 0) + 0.0722 * (ch[2] ?? 0);
}
function ratio(a: string, b: string): number {
  const [hi, lo] = [lum(a), lum(b)].sort((x, y) => y - x) as [number, number];
  return (hi + 0.05) / (lo + 0.05);
}
function vars(block: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const m of block.matchAll(/--([a-z-]+):\s*(#[0-9a-fA-F]{6})/g)) out[m[1] as string] = m[2] as string;
  return out;
}

describe.each(TEMPLATES.map((c) => c.id))('contrast of theme %s', (id) => {
  const css = readFileSync(new URL(`../assets/themes/${id}.css`, import.meta.url), 'utf8');
  const root = vars(css.match(new RegExp(`\\.theme-${id} \\{([^}]*)\\}`))?.[1] ?? '');
  const hero = vars(css.match(new RegExp(`\\.theme-${id} \\.hero \\{([^}]*)\\}`))?.[1] ?? '');

  it('meets 4.5:1 on the page background', () => {
    for (const [fg, bg] of [
      ['text', 'bg'],
      ['muted', 'bg'],
      ['accent', 'bg'],
      ['text', 'surface'],
      ['muted', 'surface'],
    ] as const) {
      // A theme that remaps colours in the hero (gym) uses a dark surface only there; hero test covers it.
      if (bg === 'surface' && Object.keys(hero).length) continue;
      expect(ratio(root[fg] as string, root[bg] as string), `${fg} on ${bg}`).toBeGreaterThanOrEqual(4.5);
    }
  });

  it('meets 4.5:1 on buttons', () => {
    expect(ratio(root['on-accent'] as string, root['accent'] as string)).toBeGreaterThanOrEqual(4.5);
  });

  it('meets 4.5:1 inside the hero when it remaps colours', () => {
    if (!Object.keys(hero).length) return;
    const h = { ...root, ...hero };
    const bg =
      /background:\s*(#[0-9a-f]{6})/i.exec(
        css.match(new RegExp(`\\.theme-${id} \\.hero \\{([^}]*)\\}`))?.[1] ?? '',
      )?.[1] ?? h['bg'];
    for (const fg of ['text', 'muted', 'accent'] as const) {
      expect(ratio(h[fg] as string, bg as string), fg).toBeGreaterThanOrEqual(4.5);
    }
    expect(ratio(h['on-accent'] as string, h['accent'] as string)).toBeGreaterThanOrEqual(4.5);
  });
});
