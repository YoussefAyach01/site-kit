# site-kit

Four ready-to-sell static websites for Moroccan local businesses: **restaurant**, **barber**, **dentist**, **gym**.
Each one ships in French (LTR) and Arabic (RTL), is mobile-first (checked at 375px), and needs no server: the output is plain HTML + CSS.

| Template   | Look                                        | Sample business |
| ---------- | ------------------------------------------- | --------------- |
| restaurant | deep green + saffron, zellige pattern       | Dar Zitoun      |
| barber     | black shop sign, barber-pole stripes        | Le Rasoir d'Or  |
| dentist    | calm teal, soft rounded cards               | Cabinet Amrani  |
| gym        | chalk + black slab, hot orange, Impact type | Atlas Fitness   |

## Run

```bash
npm install
npm run build      # writes dist/<template>/ (FR) and dist/<template>/ar/ (AR)
npm run serve      # preview on http://localhost:3100 (PORT=... to change)
npm run typecheck && npm run lint && npm test
```

Requires Node 22.18+ (runs the TypeScript build script natively; developed on Node 25).

## Customise for a client (about 15 minutes)

1. Copy nothing: edit the content file in `src/content/<template>.ts` (name, prices in MAD, hours, address, phone, WhatsApp number in international digits like `212612345678`, testimonials, FR and AR text).
2. Optional colours/fonts: the first block of `assets/themes/<template>.css`. `npm test` fails if a palette drops below WCAG 4.5:1 contrast.
3. `SITE_BASE_URL=https://client.ma npm run build`, then deliver the `dist/<template>/` folder.

The Arabic copy is a good first draft written for this kit. Have a native reader proof each client's text before delivery.

## Deploy

Static hosting only, no accounts needed by the code. Upload `dist/<template>/` to GitHub Pages, Cloudflare Pages, Netlify or any cPanel host. Each template folder is self-contained (its own `assets/`). The pages carry a strict CSP meta tag; on hosts that support headers also add `X-Content-Type-Options: nosniff` and `Referrer-Policy: strict-origin-when-cross-origin`.

## What is inside

- `src/render.ts`: pure HTML renderer (escapes all content, builds `wa.me` and `tel:` links, JSON-LD for local SEO).
- `src/content/*.ts`: typed content per template.
- `assets/base.css` + `assets/themes/*.css`: shared structure, per-template look (logical CSS properties so RTL just works).
- `tests/`: renderer tests, FR/AR completeness, anchor/ARIA integrity, theme contrast, and a build smoke test.

## Known limits

No contact form (by design: WhatsApp and phone links convert better locally and need no backend). No images: the sample look is CSS-only, so real client photos must be added. No map embed.
