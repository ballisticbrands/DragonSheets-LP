# DragonSheets-LP

> **Picking this up after a break? Read [STATUS.md](STATUS.md) first.** The LP is live and
> finished; the only open item here is `CWS_URL`.

Landing page for **DragonSheets** — Amazon Seller Central & PPC data, live in Google Sheets, delivered as a Chrome extension.

- **Live:** https://getdragonsheets.com
- **Funnel:** LP CTA "Add to Google Sheets" → `/install` → Chrome Web Store listing → extension. There is **no app subdomain signup** — the extension is the product. `/install` is driven by `CWS_URL` in [`src/lib/config.js`](src/lib/config.js): while `null` it shows a launching-soon state; set it to the listing URL and the page becomes an instant redirect.
- **Deploy:** GitHub Actions → GitHub Pages (auto-builds on push to `main`).
- **Build:** `npm run build` = Vite build + [`scripts/postbuild-spa-routes.mjs`](scripts/postbuild-spa-routes.mjs), which prerenders per-route `<title>`/meta/canonical/OG and a real content block into every route's HTML (Google Ads Quality Score depends on this — do not remove).

## Tracking IDs

> ⚠️ All IDs are **placeholders** — the real per-product GA4 property, Clarity
> project, and Meta dataset have not been created yet.
> See `DRAGONSHEETS_USER_TASKS.md` for the setup steps, and never reuse another
> Dragon product's IDs (fork-inherited IDs pollute the parent's property).

| Tool | ID |
|------|----|
| Google Analytics (GA4) property | TBD — see DRAGONSHEETS_USER_TASKS.md |
| GA4 measurement ID | `G-TODOTODO00` (placeholder) — TBD, see DRAGONSHEETS_USER_TASKS.md |
| Microsoft Clarity project | `TODO_CLARITY_ID` (placeholder) — TBD, see DRAGONSHEETS_USER_TASKS.md |
| Meta Pixel (dataset) | `TODO_META_PIXEL_ID` (placeholder) — TBD, see DRAGONSHEETS_USER_TASKS.md |

Snippets live in [`index.html`](index.html) `<head>` (marked `TODO_TRACKING`).
Event mirroring (GA4 + Clarity + Meta) and SPA route pageviews live in
[`src/lib/track.js`](src/lib/track.js) — `cta_click` fires on any link to
`/install` or `chromewebstore.google.com`. Cross-subdomain attribution lives in
[`src/lib/attribution.js`](src/lib/attribution.js) (cookie domain
`.getdragonsheets.com`; the cookie **name** `dragonbot_attribution` is a
cross-brand contract — do not rename).

## Content

- Homepage copy is data-driven from [`src/data/lpPages.js`](src/data/lpPages.js) (JSX-free — imported by the Node prerender script too).
- Competitor pages (`/vs/hopted`) are data-driven from [`src/data/sheetsCompetitors.js`](src/data/sheetsCompetitors.js) — add an entry and the route, footer link, and prerender appear automatically.
- Pricing ($29/mo, 7-day trial) is a **placeholder pending decision** — grep `TODO(pricing)`.
