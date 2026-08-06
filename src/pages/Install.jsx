import { useEffect } from 'react';
import { Chrome, Mail, ArrowLeft } from 'lucide-react';
import { CWS_URL } from '../lib/config';
import SheetsNavbar from '../components/SheetsNavbar';
import SheetsFooter from '../components/SheetsFooter';

/* ─── /install — the Chrome-Web-Store gateway ───
   Every primary CTA on the site points here (which is also what
   src/lib/track.js keys `cta_click` on), so the funnel has ONE
   choke point to measure and one place to flip when the listing
   goes live:

   - CWS_URL set (src/lib/config.js): immediate location.replace()
     to the listing — replace, not assign, so Back doesn't bounce
     the visitor through this page again.
   - CWS_URL null (pre-launch): a launching-soon holding state.  */

const sysFont = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";

export default function Install() {
  useEffect(() => {
    document.title = 'Install DragonSheets — Chrome Web Store';
    if (CWS_URL) window.location.replace(CWS_URL);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] flex flex-col" style={{ fontFamily: sysFont }}>
      <SheetsNavbar />

      <main className="flex-1 flex items-center justify-center pt-32 pb-20 px-6">
        <div className="max-w-xl w-full text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#2F7D4F]/10 grid place-items-center mx-auto mb-7">
            <Chrome className="w-8 h-8 text-[#2F7D4F]" />
          </div>

          {CWS_URL ? (
            <>
              <h1 className="font-extrabold text-3xl sm:text-4xl tracking-[-0.03em] mb-4">
                Taking you to the Chrome Web Store…
              </h1>
              <p className="text-[#1A1A1A]/60 leading-relaxed mb-8">
                If nothing happens,{' '}
                <a href={CWS_URL} className="text-[#2F7D4F] font-semibold underline">open the listing directly</a>.
              </p>
            </>
          ) : (
            <>
              <h1 className="font-extrabold text-3xl sm:text-4xl tracking-[-0.03em] mb-4">
                DragonSheets is launching on the Chrome Web Store soon
              </h1>
              <p className="text-[#1A1A1A]/60 leading-relaxed mb-8">
                The extension is in final review. Want to know the moment it's live — or get early access?
                Email us and we'll put you at the front of the line.
              </p>
              <a href="mailto:info@getdragonsheets.com?subject=DragonSheets%20early%20access"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#2F7D4F] hover:bg-[#256B42] text-white font-semibold uppercase tracking-wide rounded-lg transition-all hover:shadow-xl hover:shadow-[#2F7D4F]/25 hover:-translate-y-0.5 mb-10">
                <Mail className="w-5 h-5" /> info@getdragonsheets.com
              </a>
              <div>
                <a href="/" className="inline-flex items-center gap-2 text-sm text-[#2F7D4F] hover:text-[#256B42] font-medium transition-colors">
                  <ArrowLeft className="w-4 h-4" /> Back to DragonSheets
                </a>
              </div>
            </>
          )}
        </div>
      </main>

      <SheetsFooter />
    </div>
  );
}
