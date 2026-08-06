# DragonSheets — context

## The product

**DragonSheets** (getdragonsheets.com) is a Chrome extension that connects an
Amazon seller's **Seller Central + Amazon Ads (PPC)** data to **Google Sheets**
and keeps it synced on a schedule (in the spirit of hopted.com, but
Amazon-only and flat-priced). Reports covered: SKU performance, PPC & search
terms, inventory, pricing, profitability, returns. Access is via the official
SP-API / Ads API (OAuth, read-only, no scraping) on the Amazon side and a
**sheet-scoped service account** on the Google side.

Pricing (placeholder pending decision — `TODO(pricing)` in code): single plan
**$29/mo**, 7-day free trial, no credit card.

## The funnel — how it deviates from the other Dragon products

Every other Dragon LP sends its CTA to `app.<domain>/sign-up`. DragonSheets has
**no app subdomain and no web signup**:

```
LP CTA "Add to Google Sheets" → /install → Chrome Web Store listing → extension
```

- `/install` is the single funnel choke point. It reads `CWS_URL` from
  `src/lib/config.js`: `null` (pre-launch) renders a launching-soon page;
  once set, it `location.replace()`s to the listing.
- `cta_click` (GA4/Clarity/Meta `InitiateCheckout`) fires on any link to
  `/install` or `chromewebstore.google.com` — see `src/lib/track.js`.
- Install/activation events happen inside the extension, not on this site.
- The attribution cookie (`.getdragonsheets.com`, name `dragonbot_attribution`
  — cross-brand contract) is kept so any future subdomain inherits attribution.

## Branding

For all style and branding decisions (tone of voice, colors, fonts, buttons,
writing rules), refer to
**`/Users/gershonballas/work/DragonBot/Dragon-marketing/BRANDING.md`**
(system font stack; Forest `#2F7D4F` / Lime `#98CC65` / Deep `#0F3D2E` /
Ink `#1A1A1A`).

## Repo lineage

Forked from `ballisticbrands/DragonRefunds-LP` (itself from DragonBotLP) and
fully rebranded per the `new-product-funnel` skill: Vite 6 + React 18 +
react-router + Tailwind, no TS, with the critical
`scripts/postbuild-spa-routes.mjs` prerender step (per-route title/meta/
canonical/OG + real content in `#root`). Homepage copy lives in
`src/data/lpPages.js`, competitor pages in `src/data/sheetsCompetitors.js` —
both JSX-free because the Node prerender script imports them.
