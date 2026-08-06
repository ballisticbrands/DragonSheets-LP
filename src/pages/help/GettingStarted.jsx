import HelpLayout from './HelpLayout';

export default function GettingStarted() {
  return (
    <HelpLayout title="Getting started">
      <section>
        <h2 className="font-bold text-xl text-white mb-3">1. Add DragonSheets to Chrome</h2>
        <p>Install the DragonSheets extension from the <a href="/install" className="text-[#98CC65] underline">Chrome Web Store</a>. One click — no signup form first.</p>
      </section>

      <section>
        <h2 className="font-bold text-xl text-white mb-3">2. Open a Google Sheet and sign in with Google</h2>
        <p>Open any Google Sheet (a new blank one works fine) — the DragonSheets panel appears right in your spreadsheet. Sign in with Google to link the sheet you want your Amazon data written to. Access is sheet-scoped: DragonSheets can only touch the spreadsheets you connect, never the rest of your Drive.</p>
      </section>

      <section>
        <h2 className="font-bold text-xl text-white mb-3">3. Connect your Amazon account</h2>
        <p>Click <strong className="text-white">Connect Amazon</strong> in the panel. You'll approve access on Amazon's own login page via the official Selling Partner and Ads APIs — we never see your Amazon password, and nothing is scraped from Seller Central.</p>
        <p className="mt-3">The authorization takes about 30 seconds. Once connected, DragonSheets can pull your sales, PPC, inventory, pricing, profitability, and returns reports.</p>
      </section>

      <section>
        <h2 className="font-bold text-xl text-white mb-3">4. Sync your first report</h2>
        <p>Pick a report, pick the tab it should land in, and click Sync. Common first reports:</p>
        <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
          <li>Sales &amp; traffic by SKU, by day</li>
          <li>PPC campaigns and search terms with spend and ACOS</li>
          <li>FBA inventory levels and inbound shipments</li>
        </ul>
        <p className="mt-3">The data lands as clean rows — every formula, pivot, and chart you already know how to build in Sheets works on top of it.</p>
      </section>

      <section>
        <h2 className="font-bold text-xl text-white mb-3">5. Put it on a schedule</h2>
        <p>Set each report to refresh daily (or more often). From then on the sheet keeps itself current — open it and the numbers are already today's. Each sync stamps the sheet with the time it ran, so you always know how fresh the data is.</p>
      </section>
    </HelpLayout>
  );
}
