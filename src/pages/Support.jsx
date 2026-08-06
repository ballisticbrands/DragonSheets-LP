const sysFont = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";

export default function Support() {
  return (
    <div className="db-page min-h-screen bg-[#0F0F0F] text-white" style={{ fontFamily: sysFont }}>
      <style>{`.db-page h1,.db-page h2,.db-page h3,.db-page h4,.db-page h5,.db-page h6{font-family:inherit!important}`}</style>
      {/* Header */}
      <div className="border-b border-white/10">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <a href="/" className="inline-flex items-center gap-2 mb-10 text-sm text-[#98CC65] hover:text-[#2F7D4F] transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to DragonSheets
          </a>
          <div className="flex items-center gap-3 mb-4">
            <img src="/logos/dragonsheets.png" alt="DragonSheets" className="h-8" />
            <span className="text-sm font-medium text-[#2F7D4F] bg-[#2F7D4F]/10 px-3 py-1 rounded-full">Support</span>
          </div>
          <h1 className="font-extrabold text-4xl">Support &amp; Help Center</h1>
          <p className="mt-3 text-white/50 text-lg leading-relaxed max-w-xl">
            Need help? We're here for you. Reach out and we'll get back to you as soon as possible.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-14">

        {/* Contact */}
        <section className="mb-16">
          <h2 className="font-bold text-2xl mb-6">Get in touch</h2>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <p className="text-white/70 leading-relaxed">
                  Send us an email at{' '}
                  <a href="mailto:info@getdragonsheets.com" className="text-[#98CC65] hover:text-[#2F7D4F] underline transition-colors font-semibold">
                    info@getdragonsheets.com
                  </a>
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Response time</h3>
                <p className="text-white/70 leading-relaxed">
                  We respond to all inquiries within <strong className="text-white">24 hours</strong>, Sunday through Friday. We are closed on Saturdays.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Common topics */}
        <section className="mb-16">
          <h2 className="font-bold text-2xl mb-6">Common topics</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'Getting started', desc: 'How to add DragonSheets to Chrome, connect a Google Sheet, link your Amazon account, and sync your first report.', href: '/support/getting-started' },
              { title: 'Billing & trial', desc: 'Questions about the 7-day free trial, the $29/mo plan, or payment methods.', href: '/support/billing-credits' },
              { title: 'Amazon integration', desc: 'Setting up the Amazon connection, permissions, and troubleshooting access issues.', href: '/support/amazon-integration' },
              { title: 'Security & privacy', desc: 'How we handle your data, what DragonSheets can access, and how to revoke it.', href: '/support/security-privacy' },
              { title: 'Account management', desc: 'Updating your details, disconnecting accounts, or deleting your data.', href: '/support/account-management' },
              { title: 'Feature requests', desc: 'Missing a report or a schedule option? We\'d love to hear it — send us a message.', href: '/support/feature-requests' },
            ].map((topic, i) => (
              <a key={i} href={topic.href} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-[#2F7D4F]/30 transition-colors block">
                <h3 className="font-semibold mb-1">{topic.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{topic.desc}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Emergency */}
        <section className="mb-16">
          <h2 className="font-bold text-2xl mb-4">Urgent issues</h2>
          <p className="text-white/70 leading-relaxed">
            If you're experiencing a critical issue — a sync writing to the wrong sheet, or a connection you didn't authorize — email us at{' '}
            <a href="mailto:info@getdragonsheets.com" className="text-[#98CC65] hover:text-[#2F7D4F] underline transition-colors font-semibold">
              info@getdragonsheets.com
            </a>{' '}
            with "URGENT" in the subject line. We prioritize these and aim to respond within 1 hour during business hours.
          </p>
        </section>

        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-white/30">
            &copy; {new Date().getFullYear()} Chacha Advisory LLC. All rights reserved.
          </p>
          <p className="text-xs text-white/20 mt-1">30 N Gould St Ste R, Sheridan, WY 82801, USA</p>
        </div>
      </div>
    </div>
  );
}
