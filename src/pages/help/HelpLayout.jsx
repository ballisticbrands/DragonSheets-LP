const sysFont = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";

export default function HelpLayout({ title, children }) {
  return (
    <div className="db-page min-h-screen bg-[#0F0F0F] text-white" style={{ fontFamily: sysFont }}>
      <style>{`.db-page h1,.db-page h2,.db-page h3,.db-page h4,.db-page h5,.db-page h6{font-family:inherit!important}`}</style>
      <div className="border-b border-white/10">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <a href="/support" className="inline-flex items-center gap-2 mb-10 text-sm text-[#98CC65] hover:text-[#2F7D4F] transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Support
          </a>
          <div className="flex items-center gap-3 mb-4">
            <img src="/logos/dragonsheets.png" alt="DragonSheets" className="h-8" />
            <span className="text-sm font-medium text-[#2F7D4F] bg-[#2F7D4F]/10 px-3 py-1 rounded-full">Help</span>
          </div>
          <h1 className="font-extrabold text-3xl sm:text-4xl">{title}</h1>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-14">
        <div className="space-y-8 text-white/70 leading-relaxed">
          {children}
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-white/50 text-sm mb-2">Still need help?</p>
          <a href="mailto:info@getdragonsheets.com" className="text-[#98CC65] hover:text-[#2F7D4F] underline transition-colors font-semibold">info@getdragonsheets.com</a>
          <p className="text-xs text-white/30 mt-6">&copy; {new Date().getFullYear()} Chacha Advisory LLC. All rights reserved.</p>
          <p className="text-xs text-white/20 mt-1">30 N Gould St Ste R, Sheridan, WY 82801, USA</p>
        </div>
      </div>
    </div>
  );
}
