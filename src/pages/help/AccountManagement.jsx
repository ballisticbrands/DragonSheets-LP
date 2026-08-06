import HelpLayout from './HelpLayout';

export default function AccountManagement() {
  return (
    <HelpLayout title="Account management">
      <section>
        <h2 className="font-bold text-xl text-white mb-3">Your account</h2>
        <p>Your DragonSheets account is the Google account you sign in with — there's no separate username or password to manage. Billing details and connected Amazon accounts are managed from the extension panel.</p>
      </section>

      <section>
        <h2 className="font-bold text-xl text-white mb-3">Managing connections</h2>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li><strong className="text-white">Disconnect a sheet:</strong> remove it in the extension panel, or simply unshare the spreadsheet from the service account — syncing to it stops either way.</li>
          <li><strong className="text-white">Disconnect Amazon:</strong> from the panel, or from Seller Central under <em>Apps &amp; Services → Manage your apps</em>.</li>
          <li><strong className="text-white">Multiple accounts:</strong> agencies can connect several Amazon accounts, each pointed at its own client sheet.</li>
        </ul>
      </section>

      <section>
        <h2 className="font-bold text-xl text-white mb-3">Deleting your account</h2>
        <p>Email <a href="mailto:info@getdragonsheets.com" className="text-[#98CC65] underline">info@getdragonsheets.com</a> from the address on your account and we'll delete your account, stored tokens, and billing profile. Data already written to your spreadsheets stays in your Google account — it's yours.</p>
      </section>
    </HelpLayout>
  );
}
