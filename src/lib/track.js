// Lightweight funnel tracking for the DragonSheets landing page.
//
// Fires GA4 events (via the gtag installed in index.html), mirrors them as
// Clarity custom events so session recordings are tagged too, and mirrors
// them to the Meta Pixel. Safe no-op if any of the three is blocked / not
// yet loaded.
//
// Funnel steps tracked here: `cta_click` — any click on a link to /install
// (the Chrome-Web-Store gateway page) or directly to the Chrome Web Store —
// and `pricing_view` on the high-intent pages. Install/activation events
// fire from the extension side, not here.

// Meta standard-event names for our LP funnel steps. Standard events carry
// cross-advertiser optimization priors that custom ones don't, so map onto
// them wherever the semantics are honest; anything unmapped falls through
// to trackCustom rather than being dropped.
const META_EVENTS = {
  cta_click: 'InitiateCheckout',
  pricing_view: 'ViewContent',
};

export function track(event, params = {}) {
  try {
    if (typeof window.gtag === 'function') window.gtag('event', event, params);
    if (typeof window.clarity === 'function') window.clarity('event', event);
    if (typeof window.fbq === 'function') {
      const standard = META_EVENTS[event];
      if (standard) window.fbq('track', standard, params);
      else window.fbq('trackCustom', event, params);
    }
  } catch (_) {
    /* analytics must never break the page */
  }
}

// ─── Route-change pageviews ─────────────────────────────────────────
//
// This is a React Router SPA, but BOTH analytics snippets in index.html
// only ever fire one pageview: gtag('config') auto-sends `page_view` at
// load, and fbq fires PageView at load. Neither knows about client-side
// navigation — so without this, every route past the visitor's entry
// page would go uncounted in GA4 (skewing landing-page analysis for
// Google Ads too, not just Meta) and never reach the Meta Pixel
// (shrinking the retargeting pool).

/** High-intent pages → Meta `ViewContent`. The pricing section lives on the
 * homepage (#pricing), so the /vs/ comparison pages are the standalone
 * high-intent routes here. */
function isHighIntentPath(pathname) {
  // GitHub Pages serves prerendered routes with a trailing slash, so an
  // exact match would silently miss direct ad/organic loads. Normalize.
  const p = pathname.replace(/\/+$/, '') || '/';
  return p.startsWith('/vs/');
}

let isFirstRoute = true;

/**
 * Report a route. Call on mount and on every subsequent location change.
 *
 * The first call is the initial hard load, which index.html has already
 * counted in both GA4 and Meta — sending another pageview here would
 * double-count it, so we skip it. `pricing_view` is still evaluated on
 * that first call, because landing directly on a high-intent page from
 * an ad is the common case and it hasn't been reported by anything else.
 */
export function trackRouteChange(pathname) {
  try {
    if (isFirstRoute) {
      isFirstRoute = false;
    } else {
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'page_view', {
          page_path: pathname,
          page_location: window.location.href,
          page_title: document.title,
        });
      }
      if (typeof window.fbq === 'function') window.fbq('track', 'PageView');
    }

    if (isHighIntentPath(pathname)) {
      track('pricing_view', { page_path: pathname });
    }
  } catch (_) {
    /* analytics must never break the page */
  }
}

/**
 * True when a link is a DragonSheets install CTA: either the internal
 * /install gateway page (every primary CTA on this site) or a direct link
 * to the extension's Chrome Web Store listing.
 */
function isInstallHref(href) {
  if (href.includes('chromewebstore.google.com')) return true;
  try {
    const url = new URL(href, window.location.href);
    const p = url.pathname.replace(/\/+$/, '');
    return p === '/install';
  } catch {
    return false;
  }
}

// Install a single delegated click listener that fires `cta_click` whenever a
// user clicks any link pointing to /install or the Chrome Web Store. Capture
// phase so it runs before navigation; gtag uses sendBeacon, so the event
// survives unload.
export function initCtaTracking() {
  document.addEventListener(
    'click',
    (e) => {
      const t = e.target;
      const a = t && t.closest ? t.closest('a[href]') : null;
      if (!a) return;
      const href = a.getAttribute('href') || '';
      if (!isInstallHref(href)) return;
      track('cta_click', {
        destination: href.split('?')[0],
        link_text: (a.textContent || '').trim().slice(0, 80),
        page_path: window.location.pathname,
      });
    },
    true,
  );
}
