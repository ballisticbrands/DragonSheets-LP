import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { trackRouteChange } from './lib/track';
// Landing stays eagerly imported: it renders "/" (the primary ad
// destination), so it's on the critical path. Every other page is
// code-split so it doesn't ship in the homepage bundle.
import Landing from './pages/Landing';
import { getSheetsCompetitorSlugs } from './data/sheetsCompetitors';

const Install = lazy(() => import('./pages/Install'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Support = lazy(() => import('./pages/Support'));
const GettingStarted = lazy(() => import('./pages/help/GettingStarted'));
const BillingCredits = lazy(() => import('./pages/help/BillingCredits'));
const AmazonIntegration = lazy(() => import('./pages/help/AmazonIntegration'));
const SecurityPrivacy = lazy(() => import('./pages/help/SecurityPrivacy'));
const AccountManagement = lazy(() => import('./pages/help/AccountManagement'));
const FeatureRequests = lazy(() => import('./pages/help/FeatureRequests'));
const VsSheetsCompetitor = lazy(() => import('./pages/VsSheetsCompetitor'));

// Reports every route to GA4 + the Meta Pixel. Renders nothing; must live
// INSIDE <Router> so useLocation() has a router context. index.html only
// fires a pageview on hard load, so without this every client-side
// navigation goes uncounted — see trackRouteChange() in lib/track.js.
function RouteAnalytics() {
  const { pathname } = useLocation();
  useEffect(() => {
    trackRouteChange(pathname);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <RouteAnalytics />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* Chrome-Web-Store gateway: every primary CTA lands here. While
              CWS_URL (src/lib/config.js) is null it shows the launching-soon
              state; once set it redirects to the listing. */}
          <Route path="/install" element={<Install />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/tos" element={<Terms />} />
          <Route path="/support" element={<Support />} />
          <Route path="/support/getting-started" element={<GettingStarted />} />
          <Route path="/support/billing-credits" element={<BillingCredits />} />
          <Route path="/support/amazon-integration" element={<AmazonIntegration />} />
          <Route path="/support/security-privacy" element={<SecurityPrivacy />} />
          <Route path="/support/account-management" element={<AccountManagement />} />
          <Route path="/support/feature-requests" element={<FeatureRequests />} />
          {/* Competitor comparison pages (footer-linked; data-driven from
              src/data/sheetsCompetitors.js). Static entries outrank the
              param route in RRv6. */}
          {getSheetsCompetitorSlugs().map(slug => (
            <Route key={slug} path={`/vs/${slug}`} element={<VsSheetsCompetitor slug={slug} />} />
          ))}
          <Route path="/vs/:slug" element={<VsSheetsCompetitor />} />
          <Route path="*" element={<Landing />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
