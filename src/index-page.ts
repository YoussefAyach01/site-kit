import { esc } from './render.ts';
import type { Category } from './categories.ts';
import type { SiteContent } from './types.ts';

export interface Palette {
  bg: string;
  text: string;
  accent: string;
}

const FALLBACK: Palette = { bg: '#ffffff', text: '#111111', accent: '#0645ad' };

/** Reads --bg / --text / --accent from the first `.theme-{id} { ... }` block of a theme stylesheet. */
export function parsePalette(css: string, id: string): Palette {
  const block = new RegExp(`\\.theme-${id}\\s*\\{([^}]*)\\}`).exec(css)?.[1] ?? '';
  const pick = (name: string, fallback: string): string =>
    new RegExp(`--${name}:\\s*(#[0-9a-fA-F]{3,8})`).exec(block)?.[1] ?? fallback;
  return {
    bg: pick('bg', FALLBACK.bg),
    text: pick('text', FALLBACK.text),
    accent: pick('accent', FALLBACK.accent),
  };
}

export interface IndexInput {
  templates: readonly SiteContent[];
  categories: readonly Category[];
  palettes: Record<string, Palette>;
  /** Ids that have a generated thumbnail at thumbs/{id}.webp. */
  thumbs: ReadonlySet<string>;
}

/** Both languages are always in the markup; CSS shows one based on <html data-lang>. */
function bi(fr: string, ar: string, tag = 'span'): string {
  return `<${tag} class="l-fr">${esc(fr)}</${tag}><${tag} class="l-ar" lang="ar">${esc(ar)}</${tag}>`;
}

function card(site: SiteContent, input: IndexInput): string {
  const p = input.palettes[site.id] ?? FALLBACK;
  const media = input.thumbs.has(site.id)
    ? `<img src="thumbs/${site.id}.webp" width="480" height="300" loading="lazy" decoding="async" alt="">`
    : `<span class="flat" style="background:${p.bg};color:${p.accent}" aria-hidden="true">${esc(site.name.fr.charAt(0))}</span>`;
  return `<li class="card">
<div class="card__media">${media}</div>
<div class="card__swatches" aria-hidden="true"><i style="background:${p.bg}"></i><i style="background:${p.accent}"></i><i style="background:${p.text}"></i></div>
<div class="card__body">
<h3 class="card__name"><a class="card__main" href="${site.id}/" data-fr="${site.id}/" data-ar="${site.id}/ar/">${bi(site.name.fr, site.name.ar)}</a></h3>
<p class="card__tag">${bi(site.tagline.fr, site.tagline.ar, 'span')}</p>
<a class="card__alt" href="${site.id}/ar/" data-fr="${site.id}/ar/" data-ar="${site.id}/"><span class="l-fr" lang="ar">العربية</span><span class="l-ar" lang="fr">Français</span></a>
</div>
</li>`;
}

export function renderIndex(input: IndexInput): string {
  const byId = new Map(input.templates.map((s) => [s.id, s]));
  const total = input.templates.length;
  const sections = input.categories
    .map((c) => {
      const sites = c.ids.map((id) => byId.get(id)).filter((s): s is SiteContent => Boolean(s));
      return `<section class="group" data-cat="${c.id}" aria-labelledby="h-${c.id}">
<h2 id="h-${c.id}">${bi(c.name.fr, c.name.ar)} <small>${sites.length}</small></h2>
<ul class="grid">
${sites.map((s) => card(s, input)).join('\n')}
</ul>
</section>`;
    })
    .join('\n');
  const chips = input.categories
    .map(
      (c) =>
        `<button type="button" class="chip" data-filter="${c.id}" aria-pressed="false">${bi(c.name.fr, c.name.ar)}</button>`,
    )
    .join('\n');

  return `<!doctype html>
<html lang="fr" dir="ltr" data-lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>site-kit · ${total} sites de démonstration FR/AR</title>
<meta name="description" content="${total} sites vitrines pour petits commerces marocains, chacun en français et en arabe (RTL). Choisissez un métier, ouvrez la démo.">
<style>${CSS}</style>
</head>
<body>
<a class="skip" href="#demos"><span class="l-fr">Aller aux démos</span><span class="l-ar" lang="ar">انتقل إلى النماذج</span></a>
<header class="top">
<div class="wrap">
<p class="kicker">site-kit</p>
<h1>${bi(`${total} sites, deux langues, un seul moteur`, `${total} موقعا، لغتان، محرك واحد`)}</h1>
<p class="lede">${bi(
    'Des sites vitrines pour petits commerces marocains, chacun livré en français et en arabe (RTL). Ce sont des démos de concept, pas des sites de clients. Trouvez un métier proche du vôtre et ouvrez la démo.',
    'مواقع تعريفية للمحلات الصغيرة بالمغرب، كل واحد بالفرنسية والعربية (من اليمين إلى اليسار). هذه نماذج تجريبية وليست مواقع زبناء. اختر مهنة قريبة من مهنتك وافتح النموذج.',
  )}</p>
</div>
</header>
<nav class="bar" aria-label="Filtres">
<div class="wrap bar__in">
<div class="chips" role="group" aria-label="Catégories">
<button type="button" class="chip" data-filter="all" aria-pressed="true">${bi('Tous', 'الكل')}</button>
${chips}
</div>
<button type="button" class="lang" id="lang" aria-pressed="false" aria-label="Lire cette page en arabe"><span class="l-fr" lang="ar">العربية</span><span class="l-ar" lang="fr">Français</span></button>
</div>
</nav>
<main id="demos" class="wrap">
<p class="count" id="count" aria-live="polite" data-total="${total}">${bi(`${total} démos`, `${total} نموذجا`)}</p>
${sections}
</main>
<footer class="wrap foot">
<p>${bi('Un projet de Youssef Ayach · démos de concept, textes et coordonnées fictifs.', 'مشروع من إنجاز يوسف عياش · نماذج تجريبية، النصوص والبيانات وهمية.')}</p>
</footer>
<script>${JS}</script>
</body>
</html>
`;
}

const CSS = `
:root{--bg:#eef1f4;--surface:#fff;--ink:#101b26;--muted:#4a5663;--line:#d3d9e0;--accent:#0b6e6e;--on-accent:#fff;--r:14px;
--font:system-ui,-apple-system,'Segoe UI','Noto Naskh Arabic',Tahoma,sans-serif;--mono:ui-monospace,'Cascadia Mono',Menlo,Consolas,monospace}
@media (prefers-color-scheme:dark){:root{--bg:#0e151c;--surface:#17212b;--ink:#eef2f6;--muted:#a9b6c3;--line:#2a3745;--accent:#5cc8c8;--on-accent:#0e151c}}
*,*::before,*::after{box-sizing:border-box;margin:0}
html{scroll-behavior:smooth}
@media (prefers-reduced-motion:reduce){html{scroll-behavior:auto}*{transition:none!important}}
body{font-family:var(--font);background:var(--bg);color:var(--ink);line-height:1.5;-webkit-text-size-adjust:100%}
a{color:inherit}
:focus-visible{outline:3px solid var(--accent);outline-offset:3px;border-radius:6px}
.wrap{width:min(100% - 32px,72rem);margin-inline:auto}
.l-ar{display:none}
html[data-lang=ar] .l-fr{display:none}
html[data-lang=ar] .l-ar{display:inline}
.skip{position:absolute;inset-inline-start:16px;top:-100px;background:var(--ink);color:var(--bg);padding:8px 14px;border-radius:8px;z-index:20}
.skip:focus{top:12px}
.top{padding-block:clamp(40px,9vw,88px) 28px}
.kicker{font-family:var(--mono);font-size:.8rem;letter-spacing:.08em;text-transform:uppercase;color:var(--accent);margin-bottom:12px}
h1{font-size:clamp(2rem,6.4vw,4rem);line-height:1.04;letter-spacing:-.03em;font-weight:800;max-width:18ch}
.lede{margin-top:18px;max-width:46rem;color:var(--muted);font-size:1.05rem}
.bar{position:sticky;top:0;z-index:10;background:color-mix(in srgb,var(--bg) 92%,transparent);backdrop-filter:blur(8px);border-block:1px solid var(--line)}
.bar__in{display:flex;gap:12px;align-items:center;padding-block:10px}
.chips{display:flex;flex-wrap:wrap;gap:8px;flex:1}
@media (max-width:719px){.chips{flex-wrap:nowrap;overflow-x:auto;scrollbar-width:none;padding-block:2px}.chips::-webkit-scrollbar{display:none}}
.chip,.lang{font:inherit;font-size:.88rem;white-space:nowrap;border:1px solid var(--line);background:var(--surface);color:var(--ink);padding:8px 14px;border-radius:999px;cursor:pointer;min-height:40px}
.chip:hover,.lang:hover{border-color:var(--ink)}
.chip[aria-pressed=true]{background:var(--ink);color:var(--bg);border-color:var(--ink)}
.lang{background:var(--accent);color:var(--on-accent);border-color:var(--accent);font-weight:700;flex:none}
.count{font-family:var(--mono);font-size:.82rem;color:var(--muted);margin-block:28px 4px}
.group{padding-block:28px 12px}
.group[hidden]{display:none}
.group h2{font-size:1.35rem;letter-spacing:-.01em;margin-bottom:16px;display:flex;align-items:baseline;gap:10px}
.group h2 small{font-family:var(--mono);font-size:.78rem;color:var(--muted);font-weight:400}
.grid{list-style:none;padding:0;display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,17rem),1fr));gap:18px}
.card{position:relative;background:var(--surface);border:1px solid var(--line);border-radius:var(--r);overflow:hidden;display:flex;flex-direction:column;transition:transform .2s,box-shadow .2s}
.card:hover{transform:translateY(-3px);box-shadow:0 10px 28px -12px rgba(16,27,38,.35)}
.card__media{aspect-ratio:8/5;background:var(--line);overflow:hidden}
.card__media img,.flat{display:block;width:100%;height:100%;object-fit:cover}
.flat{display:grid;place-items:center;font-size:4.5rem;font-weight:800}
.card__swatches{display:flex;height:8px}
.card__swatches i{flex:1}
.card__body{padding:16px 18px 18px;display:flex;flex-direction:column;gap:6px;flex:1}
.card__name{font-size:1.08rem;line-height:1.25}
.card__main{text-decoration:none}
.card__main::after{content:"";position:absolute;inset:0}
.card__main:hover{text-decoration:underline;text-underline-offset:3px}
.card__tag{font-size:.9rem;color:var(--muted)}
.card__alt{position:relative;z-index:1;align-self:flex-start;margin-top:auto;padding-top:8px;font-size:.85rem;color:var(--accent);font-weight:600;text-underline-offset:3px}
.foot{padding-block:56px 48px;color:var(--muted);font-size:.9rem}
@media (max-width:480px){.bar__in{align-items:flex-start}}
`;

const JS = `
(function(){
var root=document.documentElement,count=document.getElementById('count'),langBtn=document.getElementById('lang');
var chips=[].slice.call(document.querySelectorAll('.chip')),groups=[].slice.call(document.querySelectorAll('.group'));
var total=+count.getAttribute('data-total'),filter='all';
function save(l){try{localStorage.setItem('site-kit-lang',l)}catch(e){}}
function saved(){try{return localStorage.getItem('site-kit-lang')}catch(e){return null}}
function setLang(l){
root.setAttribute('lang',l);root.setAttribute('dir',l==='ar'?'rtl':'ltr');root.setAttribute('data-lang',l);
langBtn.setAttribute('aria-pressed',l==='ar'?'true':'false');
langBtn.setAttribute('aria-label',l==='ar'?'قراءة هذه الصفحة بالفرنسية':'Lire cette page en arabe');
[].forEach.call(document.querySelectorAll('a[data-fr]'),function(a){a.setAttribute('href',a.getAttribute('data-'+l))});
document.title=l==='ar'?'site-kit · '+total+' نموذجا بالفرنسية والعربية':'site-kit · '+total+' sites de démonstration FR/AR';
updateCount(l);
}
function updateCount(l){
var n=filter==='all'?total:groups.filter(function(g){return g.getAttribute('data-cat')===filter})[0].querySelectorAll('.card').length;
count.innerHTML=l==='ar'?'<span lang="ar">'+n+' نموذجا</span>':'<span>'+n+' démo'+(n>1?'s':'')+'</span>';
}
langBtn.addEventListener('click',function(){var l=root.getAttribute('data-lang')==='ar'?'fr':'ar';save(l);setLang(l)});
chips.forEach(function(c){c.addEventListener('click',function(){
filter=c.getAttribute('data-filter');
chips.forEach(function(x){x.setAttribute('aria-pressed',x===c?'true':'false')});
groups.forEach(function(g){g.hidden=filter!=='all'&&g.getAttribute('data-cat')!==filter});
updateCount(root.getAttribute('data-lang'));
})});
if(saved()==='ar')setLang('ar');
})();
`;
