import type { Lang, SiteContent } from './types.ts';
import { t } from './ui.ts';

const ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

/** Escape text for HTML body and attribute contexts. */
export function esc(value: string): string {
  return value.replace(/[&<>"']/g, (c) => ESCAPES[c] ?? c);
}

/** Digits only, so numbers work in tel: and wa.me links whatever the formatting. */
export function digits(phone: string): string {
  return phone.replace(/\D/g, '');
}

export function waLink(whatsapp: string, message: string): string {
  return `https://wa.me/${digits(whatsapp)}?text=${encodeURIComponent(message)}`;
}

export function telHref(phone: string): string {
  return `tel:+${digits(phone)}`;
}

export function formatPrice(priceMad: number | undefined, lang: Lang): string {
  if (priceMad === undefined) return t('onQuote', lang);
  const n = new Intl.NumberFormat(lang === 'ar' ? 'ar-MA-u-nu-latn' : 'fr-MA').format(priceMad);
  return `${n} ${t('currency', lang)}`;
}

/** JSON for a ld+json script block: "<" is escaped so content can never close the tag. */
export function safeJson(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

export interface RenderOptions {
  lang: Lang;
  /** Relative path from the page to the folder that holds assets/ (e.g. "" or "../"). */
  root: string;
  baseUrl?: string;
  year?: number;
}

export function renderPage(c: SiteContent, { lang, root, baseUrl, year }: RenderOptions): string {
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  const other: Lang = lang === 'ar' ? 'fr' : 'ar';
  const otherHref = lang === 'ar' ? '../' : 'ar/';
  const name = c.name[lang];
  const wa = waLink(c.contact.whatsapp, c.contact.whatsappMessage[lang]);
  const tel = telHref(c.contact.phone);

  const jsonLd = safeJson({
    '@context': 'https://schema.org',
    '@type': c.schemaType,
    name,
    description: c.tagline[lang],
    telephone: `+${digits(c.contact.phone)}`,
    email: c.contact.email,
    address: c.contact.address[lang],
    openingHours: c.contact.hours[lang],
    ...(baseUrl ? { url: baseUrl } : {}),
  });

  const services = c.services
    .map(
      (s) => `<li class="service">
          <div class="service__head"><h3>${esc(s.name[lang])}</h3><span class="service__leader" aria-hidden="true"></span><span class="service__price">${esc(formatPrice(s.priceMad, lang))}</span></div>
          <p>${esc(s.desc[lang])}</p>
        </li>`,
    )
    .join('\n        ');

  const highlights = c.highlights.map((h) => `<li>${esc(h[lang])}</li>`).join('');
  const testimonials = c.testimonials
    .map(
      (q) =>
        `<figure class="quote"><blockquote><p>${esc(q.quote[lang])}</p></blockquote><figcaption>${esc(q.author[lang])}</figcaption></figure>`,
    )
    .join('\n        ');
  const hours = c.contact.hours[lang].map((h) => `<li>${esc(h)}</li>`).join('');
  const about = c.about.body[lang].map((p) => `<p>${esc(p)}</p>`).join('');

  return `<!doctype html>
<html lang="${lang}" dir="${dir}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" href="data:,">
  <title>${esc(name)} · ${esc(c.tagline[lang])}</title>
  <meta name="description" content="${esc(c.hero.sub[lang])}">
  <meta http-equiv="Content-Security-Policy" content="default-src 'self'; style-src 'self'; img-src 'self' data:; base-uri 'none'; form-action 'none'">
  <link rel="alternate" hreflang="${other}" href="${otherHref}">
  <link rel="stylesheet" href="${root}assets/base.css">
  <link rel="stylesheet" href="${root}assets/themes/${c.id}.css">
  <script type="application/ld+json">${jsonLd}</script>
</head>
<body class="theme-${c.id}">
  <a class="skip" href="#main">${esc(t('skip', lang))}</a>
  <header class="site-header">
    <a class="brand" href="#top">${esc(name)}</a>
    <nav aria-label="${esc(t('nav', lang))}">
      <ul>
        <li><a href="#about">${esc(t('navAbout', lang))}</a></li>
        <li><a href="#services">${esc(t('navServices', lang))}</a></li>
        <li><a href="#contact">${esc(t('navContact', lang))}</a></li>
      </ul>
    </nav>
    <a class="lang" href="${otherHref}" hreflang="${other}" lang="${other}" aria-label="${esc(t('langSwitchLabel', lang))}">${esc(t('langSwitch', lang))}</a>
  </header>
  <main id="main">
    <section class="hero" id="top">
      <div class="hero__inner">
        <p class="eyebrow">${esc(c.tagline[lang])}</p>
        <h1>${esc(c.hero.title[lang])}</h1>
        <p class="hero__sub">${esc(c.hero.sub[lang])}</p>
        <p class="hero__actions">
          <a class="btn btn--primary" href="${esc(wa)}" rel="noopener">${esc(c.hero.cta[lang])}</a>
          <a class="btn" href="${esc(tel)}">${esc(t('call', lang))}</a>
        </p>
      </div>
      <div class="hero__art" aria-hidden="true"></div>
    </section>

    <section class="about" id="about" aria-labelledby="about-h">
      <h2 id="about-h">${esc(c.about.title[lang])}</h2>
      <div class="about__body">${about}</div>
      <ul class="highlights" aria-label="${esc(c.highlightsTitle[lang])}">${highlights}</ul>
    </section>

    <section class="services" id="services" aria-labelledby="services-h">
      <h2 id="services-h">${esc(c.servicesTitle[lang])}</h2>
      <ul class="service-list">
        ${services}
      </ul>
    </section>

    <section class="testimonials" aria-labelledby="tm-h">
      <h2 id="tm-h">${esc(t('testimonials', lang))}</h2>
      <div class="quotes">
        ${testimonials}
      </div>
    </section>

    <section class="contact" id="contact" aria-labelledby="contact-h">
      <h2 id="contact-h">${esc(t('contactTitle', lang))}</h2>
      <div class="contact__grid">
        <div>
          <h3>${esc(t('hours', lang))}</h3>
          <ul class="hours">${hours}</ul>
        </div>
        <div>
          <h3>${esc(t('address', lang))}</h3>
          <address>${esc(c.contact.address[lang])}</address>
          <p><a href="${esc(tel)}" dir="ltr">${esc(c.contact.phone)}</a></p>
          <p><a href="mailto:${esc(c.contact.email)}" dir="ltr">${esc(c.contact.email)}</a></p>
        </div>
      </div>
      <p><a class="btn btn--primary" href="${esc(wa)}" rel="noopener">${esc(t('whatsapp', lang))}</a></p>
    </section>
  </main>
  <footer class="site-footer">
    <p>© ${year ?? new Date().getFullYear()} ${esc(name)}. ${esc(t('rights', lang))}</p>
  </footer>
</body>
</html>
`;
}
