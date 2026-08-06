/* Post-build: turn the single-page-app build into per-route STATIC HTML.
 *
 * Two jobs, and the second is why this file matters:
 *
 *  1. Give every SPA route a real index.html so GitHub Pages serves it with
 *     HTTP 200 instead of the 404.html fallback (renders fine but returns a
 *     404 status — bad for Google Ads destination checks and SEO).
 *
 *  2. PRERENDER each route's <title>, meta description, canonical, OG tags and
 *     a real content block into #root.
 *
 *     ⚠️ WHY (lesson from DragonRefunds, 2026-08-04): when every route was a
 *     byte-identical copy of the same shell, Google Ads scored landing page
 *     experience BELOW_AVERAGE on 16 of 18 keywords, pinning Quality Scores
 *     at 1–3/10 — inflating CPC and suppressing impressions. Server speed was
 *     never the problem; the raw HTML was simply empty. Same defect makes
 *     Google index every page as a duplicate.
 *
 *     The injected block is built from the SAME data files the React app
 *     renders from (src/data/lpPages.js, src/data/sheetsCompetitors.js), so
 *     this is prerendering, not cloaking. React's createRoot().render()
 *     replaces #root's children on mount, so real users get the app;
 *     crawlers and no-JS clients get the content.
 */
import { mkdirSync, writeFileSync, readFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { homePage } from '../src/data/lpPages.js';
import { sheetsCompetitors } from '../src/data/sheetsCompetitors.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const srcFile = join(dist, 'index.html');

if (!existsSync(srcFile)) {
  console.error('postbuild: dist/index.html not found — run vite build first');
  process.exit(1);
}
const SHELL = readFileSync(srcFile, 'utf8');
const SITE = 'https://getdragonsheets.com';
// Every prerendered CTA points at /install — the Chrome-Web-Store gateway
// (src/lib/config.js decides whether it redirects or shows launching-soon).
const INSTALL = '/install/';

const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const flat = (s = '') => String(s).replace(/\s+/g, ' ').trim();

/* ── Route → { title, description, eyebrow, h1, intro, bullets[] } ────── */
const meta = {};

/* Homepage — from the same data file Landing.jsx renders. */
meta['/'] = {
  title: homePage.metaTitle,
  description: homePage.metaDescription,
  eyebrow: homePage.hero.eyebrow,
  h1: `${homePage.hero.headline.plain} ${homePage.hero.headline.accent}`,
  intro: flat(homePage.hero.paragraph),
  bullets: [
    ...homePage.hero.trust,
    ...homePage.features.items.map(f => `${f.title} — ${flat(f.desc)}`),
    `${homePage.pricing.price}${homePage.pricing.period} — ${homePage.pricing.trial}`,
  ],
};

/* /install — mirrors the pre-launch holding state Install.jsx renders.
   ⚠️ Once CWS_URL is set the page becomes a redirect; update this copy then. */
meta['/install'] = {
  title: 'Install DragonSheets — Chrome Web Store',
  description:
    'Add DragonSheets to Chrome and get your Amazon Seller Central and PPC data flowing into Google Sheets in about 3 minutes.',
  h1: 'DragonSheets is launching on the Chrome Web Store soon',
  intro:
    "The extension is in final review. Email info@getdragonsheets.com for early access — we'll put you at the front of the line.",
};

/* Static company pages. */
const STATIC = {
  '/privacy': { title: 'Privacy Policy | DragonSheets', description: 'How DragonSheets collects, uses, and protects your data.' },
  '/tos':     { title: 'Terms of Service | DragonSheets', description: 'The terms governing your use of DragonSheets.' },
  '/support': { title: 'Support | DragonSheets', description: 'Help and documentation for DragonSheets.' },
};
for (const [path, m] of Object.entries(STATIC)) {
  meta[path] = { ...m, h1: m.title.split(/[—|]/)[0].trim(), intro: m.description };
}

/* Competitor comparison pages — from the same data file the /vs/ pages render. */
for (const [slug, c] of Object.entries(sheetsCompetitors)) {
  meta[`/vs/${slug}`] = {
    title: c.metaTitle || `DragonSheets vs ${c.name}`,
    description: c.metaDescription || flat(c.subhead),
    eyebrow: c.eyebrow,
    h1: [c.h1?.plain, c.h1?.accent].filter(Boolean).join(' '),
    intro: flat(c.subhead),
    bullets: [c.tldr?.us, c.tldr?.them].filter(Boolean).map(flat),
  };
}

/* Support sub-pages. */
const SUPPORT_TITLES = {
  'getting-started': 'Getting Started',
  'billing-credits': 'Billing & Trial',
  'amazon-integration': 'Amazon Integration',
  'security-privacy': 'Security & Privacy',
  'account-management': 'Account Management',
  'feature-requests': 'Feature Requests',
};
for (const [slug, name] of Object.entries(SUPPORT_TITLES)) {
  meta[`/support/${slug}`] = {
    title: `${name} | DragonSheets Support`,
    description: `${name} — DragonSheets help documentation.`,
    h1: name,
    intro: '',
  };
}

/* ── Build one route's HTML from the shell ───────────────────────────── */
function buildHtml(route, m) {
  const url = SITE + (route === '/' ? '/' : route + '/');
  const title = m.title || meta['/'].title;
  const desc = m.description || meta['/'].description;

  const head = [
    `<meta name="description" content="${esc(desc)}" />`,
    `<link rel="canonical" href="${esc(url)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:url" content="${esc(url)}" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(desc)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
  ].join('\n    ');

  /* Mirrors the copy React renders. Replaced on mount. */
  const body = [
    m.eyebrow ? `<p>${esc(m.eyebrow)}</p>` : '',
    `<h1>${esc(m.h1 || title)}</h1>`,
    m.intro ? `<p>${esc(m.intro)}</p>` : '',
    Array.isArray(m.bullets) && m.bullets.length
      ? `<ul>${m.bullets.map(b => `<li>${esc(b)}</li>`).join('')}</ul>` : '',
    `<p><a href="${INSTALL}">Add to Google Sheets — 7-day free trial, no credit card</a></p>`,
  ].filter(Boolean).join('\n        ');

  let html = SHELL;
  html = html.replace(
    /<title>[\s\S]*?<\/title>\s*(<meta name="description"[\s\S]*?\/>)?/,
    `<title>${esc(title)}</title>\n    ${head}\n    `
  );
  html = html.replace(
    /<div id="root"><\/div>/,
    `<div id="root"><div data-prerender="1" style="max-width:44rem;margin:0 auto;padding:4rem 1.5rem;font-family:system-ui,sans-serif">\n        ${body}\n      </div></div>`
  );
  return html;
}

/* ── Write every route ───────────────────────────────────────────────── */
const routes = [...new Set(['/', ...Object.keys(meta)])];
let n = 0;
for (const route of routes) {
  const m = meta[route];
  if (!m) continue;
  const dir = route === '/' ? dist : join(dist, ...route.split('/').filter(Boolean));
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), buildHtml(route, m));
  n++;
}
console.log(`postbuild: prerendered ${n} routes (title + description + canonical + OG + content)`);
