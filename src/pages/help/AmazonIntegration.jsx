import HelpLayout from './HelpLayout';

export default function AmazonIntegration() {
  return (
    <HelpLayout title="Amazon integration">
      <section>
        <h2 className="font-bold text-xl text-white mb-3">How the connection works</h2>
        <p>DragonSheets connects to your Amazon account through the <strong className="text-white">official Selling Partner API (SP-API) and Amazon Ads API</strong> — the same authorization system every approved Amazon tool uses. You approve access on Amazon's own login page; we never see or store your Amazon password, and nothing is scraped from Seller Central.</p>
      </section>

      <section>
        <h2 className="font-bold text-xl text-white mb-3">What DragonSheets can access</h2>
        <p>Read access to the reporting data behind your reports:</p>
        <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
          <li>Sales, orders, and traffic reports</li>
          <li>Advertising campaigns, ad groups, keywords, and search terms</li>
          <li>FBA inventory, inbound shipments, and reserved units</li>
          <li>Listing prices and Buy Box status</li>
          <li>Fees, payouts, and returns</li>
        </ul>
        <p className="mt-3">DragonSheets does not write to your Amazon account — it cannot change prices, edit listings, or touch campaigns.</p>
      </section>

      <section>
        <h2 className="font-bold text-xl text-white mb-3">Multiple marketplaces &amp; accounts</h2>
        <p>One connection covers every marketplace under your Seller Central account. Selling in multiple regions or managing several accounts (common for agencies)? Connect each one and point it at its own sheet.</p>
      </section>

      <section>
        <h2 className="font-bold text-xl text-white mb-3">Troubleshooting</h2>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li><strong className="text-white">Authorization fails:</strong> make sure you're signing in with a Seller Central user that has permission to authorize apps (account owner or an admin with developer permissions).</li>
          <li><strong className="text-white">A report comes back empty:</strong> some Amazon reports lag by a day or two on Amazon's side — the sync time stamp in your sheet shows when we last pulled, and the report reflects the latest data Amazon makes available.</li>
          <li><strong className="text-white">Connection dropped:</strong> Amazon authorizations occasionally expire; reconnect from the extension panel in under a minute.</li>
        </ul>
      </section>

      <section>
        <h2 className="font-bold text-xl text-white mb-3">Revoking access</h2>
        <p>You can revoke DragonSheets' access at any time from Seller Central under <em>Apps &amp; Services → Manage your apps</em>. Syncing stops immediately; data already written to your sheets stays yours.</p>
      </section>
    </HelpLayout>
  );
}
