/* ═══════════════════════════════════════════════════════════════
   DragonSheets competitor comparison pages.
   Each entry powers a /vs/:slug page rendered by VsSheetsCompetitor.
   These pages are linked from the footer (Resources column), which is
   derived from this object — add an entry here and the route, footer
   link, and prerendered HTML all appear automatically.

   Cell values in `compare`: 'yes' | 'no' | 'partial' | { t: 'free text' }.
   KEEP THIS FILE JSX-FREE — it is imported by
   scripts/postbuild-spa-routes.mjs under plain Node.

   ⚠️ Competitor facts: keep claims about the other product hedged and
   verifiable ("as of this writing", their own positioning) — never
   invent specific numbers for them.
   ═══════════════════════════════════════════════════════════════ */

export const sheetsCompetitors = {
  'hopted': {
    name: 'Hopted',
    metaTitle: 'DragonSheets vs Hopted: Amazon Data in Google Sheets Compared (2026)',
    metaDescription:
      'Honest comparison of DragonSheets and Hopted for syncing Amazon Seller Central and PPC data into Google Sheets. Hopted is a multi-source data platform; DragonSheets does one job — Amazon to Sheets — for one flat $29/mo.',
    eyebrow: 'DragonSheets vs Hopted',
    h1: {
      plain: 'Hopted connects many sources.',
      accent: 'DragonSheets does Amazon — flat, simple, $29.',
    },
    subhead:
      'Hopted is a solid data platform that pipes several business sources into Google Sheets. DragonSheets is deliberately narrower: Amazon Seller Central and PPC into Sheets, one flat price, set up in about 3 minutes. Here is an honest side-by-side so you can pick the right shape of tool.',
    tldr: {
      them:
        'Choose Hopted if you want one platform syncing multiple data sources — beyond Amazon — into your spreadsheets, and you are comfortable with platform-tier pricing for that breadth.',
      us:
        'Choose DragonSheets if the job is Amazon data in Google Sheets, you want it running in minutes, and you want one flat $29/mo — not a tier to size or credits to watch.',
    },
    compare: [
      {
        label: 'Amazon coverage',
        rows: [
          { feature: 'Seller Central reports (sales, inventory, returns)', values: ['yes', 'yes'] },
          { feature: 'Amazon PPC & search-term reports', values: ['yes', 'yes'] },
          { feature: 'Scheduled auto-refresh into Sheets', values: ['yes', 'yes'] },
          { feature: 'Official Amazon APIs, no scraping', values: ['yes', 'yes'] },
        ],
      },
      {
        label: 'Scope',
        rows: [
          { feature: 'Non-Amazon data sources', note: 'other channels & tools',
            values: ['no', 'yes'] },
          { feature: 'Built only for Amazon sellers', note: 'reports named the way Seller Central names them',
            values: ['yes', 'no'] },
        ],
      },
      {
        label: 'Price & setup',
        rows: [
          { feature: 'Pricing model', values: [{ t: '$29/mo flat' }, { t: 'Tiered plans' }] },
          { feature: 'Free trial without a credit card', values: ['yes', 'partial'] },
          { feature: 'Time to first synced report', values: [{ t: '~3 min' }, { t: 'Varies' }] },
        ],
      },
    ],
    priceNote:
      'Hopted prices by plan tier — the right tier depends on your sources and volume, so check their site for current numbers. DragonSheets is one flat $29/mo with everything included, and the price doesn’t move when your account grows.',
    themWins: [
      {
        title: 'More data sources',
        desc: 'If you need non-Amazon data — other channels, other tools — in the same spreadsheet, a multi-source platform is the right shape. DragonSheets only does Amazon.',
      },
      {
        title: 'One platform for a data team',
        desc: 'Teams standardizing many feeds through one vendor get real value from that consolidation. That is Hopted’s pitch, and for that buyer it is a fair one.',
      },
      {
        title: 'Broader spreadsheet tooling',
        desc: 'A platform with more surface area ships more platform features. If you want a data-ops layer rather than a connector, breadth wins.',
      },
    ],
    usWins: [
      {
        title: 'One flat price',
        desc: '$29/mo, everything included. No tier sizing, no usage math, no upgrade conversation when you add SKUs or marketplaces.',
      },
      {
        title: 'Built for Amazon sellers only',
        desc: 'Reports are named and shaped the way Seller Central names them. No generic connector configuration — pick the report you already know, and it lands.',
      },
      {
        title: 'Running in about 3 minutes',
        desc: 'Add to Chrome, sign in with Google, approve the Amazon connection. No onboarding call, no workspace setup, no source mapping.',
      },
      {
        title: 'Try it without a card',
        desc: '7 days free, no credit card up front. If it doesn’t earn its keep in a week of real reporting, walk away having typed nothing into a billing form.',
      },
    ],
    faq: [
      {
        q: 'Is DragonSheets a Hopted clone?',
        a: 'No — it is a deliberately narrower tool. Hopted syncs many sources into spreadsheets; DragonSheets does exactly one job (Amazon Seller Central + PPC into Google Sheets) and prices it flat. Same spreadsheet-first philosophy, different scope.',
      },
      {
        q: 'Can DragonSheets pull non-Amazon data?',
        a: 'No. If you need multiple sources in one sheet, an all-purpose platform like Hopted is the better fit. If Amazon is the job, you won’t pay for connectors you never use.',
      },
      {
        q: 'Do both use official Amazon APIs?',
        a: 'Yes — both connect through Amazon’s authorized APIs with OAuth. Neither scrapes Seller Central. The difference is scope and pricing, not access method.',
      },
      {
        q: 'What does switching cost?',
        a: 'Nothing but the 3-minute setup. Your data lives with Amazon, not with any connector — point DragonSheets at a sheet, connect your account, and your history syncs fresh.',
      },
    ],
  },
};

export function getSheetsCompetitor(slug) {
  return sheetsCompetitors[slug] || null;
}

export function getSheetsCompetitorSlugs() {
  return Object.keys(sheetsCompetitors);
}
