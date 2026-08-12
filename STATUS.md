# DragonSheets LP — state of play

**Paused 2026-08-12.** The landing page is finished and live; nothing here is blocked. The open
work is in the extension and the backend, not this repo.

The product-wide picture lives in the extension repo:
[`DragonSheets-extension/STATUS.md`](https://github.com/ballisticbrands/DragonSheets-extension/blob/main/STATUS.md).
Backend and plan docs are in the private `sellerconnect` repo (`DRAGONSHEETS_PLAN.md`,
`DRAGONSHEETS_USER_TASKS.md`).

---

## Live

`https://getdragonsheets.com` — HTTPS enforced, cert issued, `www` 301s to the apex.
12 prerendered routes, verified via headless DOM dump: `/`, `/install/`, `/vs/hopted/`,
`/privacy/`, `/tos/`, `/support/` + 6 support pages.

DNS: apex A records to GitHub Pages' four IPs (they differ in the **third** octet —
`185.199.108/109/110/111.153`; getting this wrong costs a TLS cert that silently never issues),
`www` and `go` CNAME to `ballisticbrands.github.io.`

## Tracking — wired and verified firing

| | |
|---|---|
| GA4 | `548983284` / `G-7NC5Q82FB1` — linked to Google Ads `807-173-1091` |
| Clarity | `xyaewgiiy7` |
| Meta pixel | `2431527440666944` ⚠️ domain not Meta-verified, AEM not configured |
| Attribution cookie | `dragonbot_attribution` on `.getdragonsheets.com` — **keep the name**, it is the cross-brand contract `frontend-shared` reads |

Verified with a headless network capture against the live site: GA4 `page_view` to the right
`tid`, Clarity tag loading, Meta pixel initialising.

## The one open item in this repo

**`src/lib/config.js` → `CWS_URL` is `null`.**

While null, `/install/` renders a "launching soon" page instead of redirecting. That is
deliberate: the Chrome Web Store item is still a **draft** (`papoimmliahhmamjdagmajeddimpmojo`),
so pointing at it would 404 real visitors.

The moment the listing is live, set it to
`https://chromewebstore.google.com/detail/papoimmliahhmamjdagmajeddimpmojo`, rebuild, deploy.
That is the whole change.

`cta_click` already fires for links to `/install` **and** to `chromewebstore.google.com`, so
funnel tracking works either way.

## How this LP differs from the other Dragon LPs

Worth knowing before applying the `new-product-funnel` playbook here by muscle memory:

- **No `app.` subdomain and no signup page.** The CTA is "Add to Google Sheets" → the Web Store.
  `go.getdragonsheets.com` (the extension repo's Pages site) replaces the app host.
- **Turnstile is skipped** — there is no email/password form; sign-up happens inside the
  extension via Google OAuth.
- Everything else follows the playbook: Vite + React + Tailwind, `postbuild-spa-routes.mjs`
  prerender (**do not remove — it is what keeps Ads Quality Score off the floor**), Actions →
  Pages deploy.

## Build / deploy

```bash
npm install
npm run build      # vite build + prerender
npm run dev
```

Push to `main` deploys via Actions. `workflow_dispatch` is enabled, so a redeploy needs no dummy
commit (`gh workflow run deploy.yml -R ballisticbrands/DragonSheets-LP`).

⚠️ The Actions deploy **ignores** `public/CNAME`; the custom domain is set through the Pages API
and is already configured. Don't "fix" it by editing CNAME.

## Content notes

- Pricing on the page is **$29/mo, 7-day trial, no card** — a placeholder, marked
  `TODO(pricing)` in the source. Competitor (hopted) is $33/mo anchored from $60. Never
  confirmed.
- `/vs/hopted/` leads with the competitor's name deliberately — that is the fleet's pattern for
  "hopted alternative" search intent.
- Support pages describe the extension flow (share-with-service-account, Amazon connect), so
  they need a pass if that onboarding changes.
