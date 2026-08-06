// Site-wide configuration constants for DragonSheets.
//
// CWS_URL — the Chrome Web Store listing for the DragonSheets extension.
//
// While the listing doesn't exist yet this stays `null`: the /install page
// renders a "launching soon" holding state instead of redirecting. The moment
// the listing is live, set this to the full listing URL, e.g.
//   https://chromewebstore.google.com/detail/dragonsheets/<extension-id>
// and /install becomes an instant redirect. Nothing else needs to change —
// every CTA on the site already points at /install.
export const CWS_URL = null;
