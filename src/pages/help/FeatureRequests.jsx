import HelpLayout from './HelpLayout';

export default function FeatureRequests() {
  return (
    <HelpLayout title="Feature requests">
      <section>
        <h2 className="font-bold text-xl text-white mb-3">Missing a report?</h2>
        <p>DragonSheets covers the core Seller Central and PPC reports, and the roadmap is driven by what sellers actually ask for. If there's a report, a column, or a schedule option you need, tell us — the fastest way to get it built is to describe the sheet you wish you had.</p>
      </section>

      <section>
        <h2 className="font-bold text-xl text-white mb-3">How to send one</h2>
        <p>Email <a href="mailto:info@getdragonsheets.com" className="text-[#98CC65] underline">info@getdragonsheets.com</a> with:</p>
        <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
          <li>What you're trying to see (the report or metric)</li>
          <li>How often it should refresh</li>
          <li>What decision it feeds — that helps us shape the columns right</li>
        </ul>
        <p className="mt-3">We read everything and reply to every request. If it's already possible, we'll show you how; if it isn't, you'll hear when it ships.</p>
      </section>
    </HelpLayout>
  );
}
