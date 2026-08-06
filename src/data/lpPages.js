/* ═══════════════════════════════════════════════════════════════
   DragonSheets homepage content — single source of truth.

   Rendered by src/pages/Landing.jsx AND read by
   scripts/postbuild-spa-routes.mjs to prerender the route's <title>,
   meta description, and #root content block (Google Ads Quality Score
   depends on the raw HTML carrying real copy — see that script).

   KEEP THIS FILE JSX-FREE — it is imported by the postbuild script
   under plain Node. Icon names are lucide-react component names,
   resolved to components inside Landing.jsx.
   ═══════════════════════════════════════════════════════════════ */

export const homePage = {
  path: '/',
  metaTitle: 'DragonSheets — Amazon Seller Central & PPC Data, Live in Google Sheets',
  metaDescription:
    'DragonSheets pipes your Amazon Seller Central and PPC reports into Google Sheets and keeps them fresh on a schedule. No CSV exports, no code. Add to Chrome, connect Amazon, and your data flows.',

  hero: {
    eyebrow: 'Chrome extension for Amazon sellers',
    headline: { plain: 'Your Amazon data,', accent: 'live in Google Sheets.' },
    paragraph:
      'DragonSheets syncs Seller Central and PPC reports straight into your spreadsheet — and refreshes them on a schedule you set. Set it up once. Never download a CSV again.',
    cta: 'Add to Google Sheets',
    secondaryCta: 'See how it works',
    trust: [
      'Official Amazon APIs — no scraping',
      'Setup takes about 3 minutes',
      'No code, no formulas to learn',
    ],
  },

  useCases: [
    {
      icon: 'Store',
      title: 'Sellers',
      desc:
        'Run the business from one sheet. Sales, ads, inventory, and payouts land in tabs you control — so you can build the dashboard Seller Central refuses to give you, with your own formulas on top.',
      points: [
        'Daily sales + PPC in one tab, per SKU',
        'Restock math on live inventory numbers',
        'Your P&L, your way — not a vendor dashboard',
      ],
    },
    {
      icon: 'Briefcase',
      title: 'Agencies',
      desc:
        'Report on every client without the export grind. Point each client sheet at their account, schedule the refresh, and Monday reporting writes itself — same template, always-current numbers.',
      points: [
        'One template, every client account',
        'Client-facing sheets that update themselves',
        'Hours of copy-paste per week, gone',
      ],
    },
  ],

  valueProps: [
    {
      icon: 'FileX2',
      title: 'Kill the CSV export',
      desc:
        'Download, rename, open, copy, paste — that whole ritual is over. The report lands in your sheet, in place, formatted the same way every time.',
    },
    {
      icon: 'RefreshCw',
      title: 'Always-fresh data',
      desc:
        "Schedules run daily, or as often as you need. Open the sheet and the numbers are already current — not whenever someone last remembered to export.",
    },
    {
      icon: 'Layers',
      title: 'Unified reporting',
      desc:
        "Seller Central and the Ads console don't talk to each other. A spreadsheet makes them: organic and PPC side by side, per SKU, in one view.",
    },
  ],

  ai: {
    eyebrow: 'Works with the AI you already use',
    title: 'Ask AI to build your report',
    paragraph:
      'Your data lives in a spreadsheet — the one format every AI already speaks. Ask Gemini in Sheets, or hand a tab to ChatGPT or Claude: "chart my TACoS by week", "which SKUs are losing margin?", "build me a restock plan". DragonSheets keeps the numbers current. The AI does the formulas.',
    prompts: [
      'Chart my TACoS by week for the last 90 days',
      'Which search terms spent over $50 with zero orders?',
      'Flag every SKU under 30 days of inventory cover',
    ],
  },

  features: {
    title: 'Every report that matters, on tap',
    intro:
      'Pick a report, pick a tab, pick a schedule. DragonSheets pulls it through the official Amazon APIs and keeps it current.',
    items: [
      { icon: 'BarChart3', title: 'SKU performance', desc: 'Sales, units, sessions, and conversion per SKU, per day — the report Seller Central makes you export one date range at a time.' },
      { icon: 'Megaphone', title: 'PPC & search terms', desc: 'Campaigns, ad groups, keywords, and search terms with spend, clicks, orders, and ACOS — ready for your bid decisions.' },
      { icon: 'Boxes', title: 'Inventory', desc: 'FBA stock levels, inbound shipments, and reserved units — live numbers for your restock math, not last Tuesday’s.' },
      { icon: 'Tag', title: 'Pricing', desc: 'Your listing prices and Buy Box status across the catalog — see price moves the day they happen.' },
      { icon: 'DollarSign', title: 'Profitability', desc: 'Fees, promos, and payouts against your sales — the inputs for a real per-SKU margin, not a revenue vanity number.' },
      { icon: 'Undo2', title: 'Returns', desc: 'Return counts, rates, and reasons per SKU — catch a quality problem in the data before it lands in the reviews.' },
    ],
  },

  steps: {
    title: 'Three steps, about 3 minutes',
    items: [
      {
        title: 'Add to Chrome',
        desc: 'One click from the Chrome Web Store. No signup form first — the extension is the product.',
      },
      {
        title: 'Open a Google Sheet & sign in with Google',
        desc: 'DragonSheets appears right in your spreadsheet. Sign in with Google to link the sheet you want your data in.',
      },
      {
        title: 'Connect Amazon — data flows',
        desc: 'Approve the connection through Amazon’s official login. Pick your reports and a schedule; the first sync starts immediately.',
      },
    ],
  },

  pricing: {
    eyebrow: 'Pricing',
    title: 'One plan. Everything in it.',
    price: '$29',
    period: '/mo',
    trial: '7-day free trial — no credit card required',
    features: [
      'All report types — Seller Central + PPC',
      'Scheduled refresh on every report',
      'Unlimited sheets and tabs',
      'Every marketplace on your account',
      'Cancel anytime',
    ],
    cta: 'Start free trial',
  },

  faq: [
    {
      q: 'Is it safe to connect my Amazon account?',
      a: 'Yes. DragonSheets connects through Amazon’s official Selling Partner and Ads APIs — the same authorization system every approved Amazon tool uses. You approve access on Amazon’s own login page; we never see your password, and there is no scraping or browser automation touching your Seller Central.',
    },
    {
      q: 'What can DragonSheets access in my Google account?',
      a: 'Only the sheets you connect. Data is written through a service account with sheet-scoped access — you share a specific spreadsheet with it, and that spreadsheet is all it can touch. It cannot browse your Drive, read your email, or see any other file.',
    },
    {
      q: 'How long does setup take?',
      a: 'About 3 minutes: add the extension, open a sheet and sign in with Google, then approve the Amazon connection. Your first report syncs immediately after.',
    },
    {
      q: 'Do I need to know formulas or code?',
      a: 'No. You pick a report, a tab, and a schedule — DragonSheets handles the rest. If you do like formulas, even better: the data lands as clean rows, so everything you already know how to do in Sheets works on top of it.',
    },
    {
      q: 'How fresh is the data?',
      a: 'As fresh as Amazon reports it. Schedules run daily or more often; each sync pulls the latest data Amazon’s APIs make available and stamps the sheet with the sync time.',
    },
    {
      q: 'What does it cost?',
      a: 'One plan: $29/month with a 7-day free trial, no credit card required to start. Every report type, scheduled refresh, and unlimited sheets are included.',
    },
  ],

  finalCta: {
    title: 'Stop exporting. Start opening your sheet.',
    paragraph:
      'Add DragonSheets to Chrome, connect Amazon in about 3 minutes, and your reports keep themselves current from then on.',
  },
};
