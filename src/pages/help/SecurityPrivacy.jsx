import HelpLayout from './HelpLayout';

export default function SecurityPrivacy() {
  return (
    <HelpLayout title="Security & privacy">
      <section>
        <h2 className="font-bold text-xl text-white mb-3">Amazon access</h2>
        <p>DragonSheets uses Amazon's official Selling Partner and Ads APIs with OAuth authorization — you approve access on Amazon's own login page, and we never see your password. There is no scraping, no browser automation, and no headless session touching your Seller Central. Access is read-only: DragonSheets cannot change anything in your Amazon account.</p>
      </section>

      <section>
        <h2 className="font-bold text-xl text-white mb-3">Google access is sheet-scoped</h2>
        <p>Data is written to your spreadsheets through a <strong className="text-white">service account with sheet-scoped access</strong>: you share a specific spreadsheet with it, and that spreadsheet is all it can touch. DragonSheets cannot browse your Drive, read your email, or see any file you haven't explicitly connected.</p>
      </section>

      <section>
        <h2 className="font-bold text-xl text-white mb-3">How your data is handled</h2>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>Credentials are stored as encrypted OAuth tokens — never passwords</li>
          <li>Report data flows from Amazon to your sheet; we don't sell it or share it with third parties</li>
          <li>All traffic is encrypted in transit (TLS)</li>
          <li>Revoke access at any time — from Seller Central for Amazon, or by unsharing the sheet for Google</li>
        </ul>
      </section>

      <section>
        <h2 className="font-bold text-xl text-white mb-3">Deleting your data</h2>
        <p>Email <a href="mailto:info@getdragonsheets.com" className="text-[#98CC65] underline">info@getdragonsheets.com</a> and we'll delete your account and stored tokens. Data already written to your spreadsheets is yours and stays in your Google account — we can't and won't touch it after disconnect.</p>
      </section>

      <section>
        <h2 className="font-bold text-xl text-white mb-3">Full policies</h2>
        <p>The complete details live in our <a href="/privacy" className="text-[#98CC65] underline">Privacy Policy</a> and <a href="/tos" className="text-[#98CC65] underline">Terms of Service</a>.</p>
      </section>
    </HelpLayout>
  );
}
