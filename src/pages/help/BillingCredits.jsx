import HelpLayout from './HelpLayout';

export default function BillingCredits() {
  return (
    <HelpLayout title="Billing & trial">
      <section>
        <h2 className="font-bold text-xl text-white mb-3">The free trial</h2>
        <p>Every new account starts with a <strong className="text-white">7-day free trial</strong> — full product, every report type, scheduled refresh included. No credit card is required to start, and nothing is charged automatically when the trial ends: if you don't subscribe, syncing simply pauses and your sheets keep whatever data is already in them.</p>
      </section>

      <section>
        <h2 className="font-bold text-xl text-white mb-3">The plan</h2>
        <p>DragonSheets has one plan: <strong className="text-white">$29/month</strong>, everything included — all report types (Seller Central + PPC), scheduled refresh on every report, unlimited sheets and tabs, and every marketplace on your Amazon account. There are no tiers, no usage credits, and the price doesn't change as your account grows.</p>
      </section>

      <section>
        <h2 className="font-bold text-xl text-white mb-3">Payment &amp; invoices</h2>
        <p>We accept all major credit and debit cards. Invoices are emailed after each charge. Need a copy, a VAT detail changed, or a different card on file? Email us and we'll sort it within a business day.</p>
      </section>

      <section>
        <h2 className="font-bold text-xl text-white mb-3">Cancelling</h2>
        <p>Cancel anytime from the extension panel or by emailing <a href="mailto:info@getdragonsheets.com" className="text-[#98CC65] underline">info@getdragonsheets.com</a>. Your subscription stays active until the end of the paid period, then syncing stops. Your spreadsheets are yours — the data already written to them stays put.</p>
      </section>
    </HelpLayout>
  );
}
