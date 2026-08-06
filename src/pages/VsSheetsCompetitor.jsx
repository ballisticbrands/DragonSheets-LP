import { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Check, Shield } from 'lucide-react';
import { getSheetsCompetitor } from '../data/sheetsCompetitors';
import SheetsNavbar, { INSTALL_HREF, DragonSheetsBrand } from '../components/SheetsNavbar';
import SheetsFooter from '../components/SheetsFooter';

/* ─── DragonSheets vs <competitor> comparison page ───
   Data-driven from src/data/sheetsCompetitors.js (one entry per slug).
   Light theme, matching the landing page. */

const sysFont = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";

function Section({ className = '', children }) {
  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-5xl mx-auto px-6">{children}</div>
    </section>
  );
}

function CompareCell({ value, isUs }) {
  if (value === 'yes') {
    return <Check className={`w-[18px] h-[18px] mx-auto ${isUs ? 'text-[#2F7D4F]' : 'text-[#1A1A1A]/50'}`} />;
  }
  if (value === 'no') {
    return <span className="block text-center text-[#1A1A1A]/25 text-lg leading-none">–</span>;
  }
  if (value === 'partial') {
    return <span className="block text-center text-[11px] font-semibold text-[#B45309]">Partial</span>;
  }
  return (
    <span className={`block text-center text-[12px] font-semibold ${isUs ? 'text-[#1A1A1A]' : 'text-[#1A1A1A]/60'}`}>
      {value.t}
    </span>
  );
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left gap-4">
        <span className="font-semibold text-[#1A1A1A]">{q}</span>
        <ChevronDown className={`w-5 h-5 text-[#1A1A1A]/40 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <p className="pb-5 text-[#1A1A1A]/60 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function VsSheetsCompetitor({ slug: slugProp }) {
  const params = useParams();
  const slug = slugProp || params.slug;
  const c = getSheetsCompetitor(slug);

  useEffect(() => {
    if (!c) return;
    document.title = c.metaTitle;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', c.metaDescription);
    window.scrollTo(0, 0);
  }, [c]);

  if (!c) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen bg-white text-[#1A1A1A]" style={{ fontFamily: sysFont }}>
      <SheetsNavbar />

      {/* ─── HERO ─── */}
      <section className="relative pt-32 pb-14 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-[#98CC65]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-40 right-1/4 w-[400px] h-[400px] bg-[#2F7D4F]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#2F7D4F]/10 rounded-full text-sm font-medium text-[#2F7D4F] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#98CC65] animate-pulse shrink-0" />
              {c.eyebrow}
            </span>

            {/* Versus lockup */}
            <div className="flex items-center justify-center gap-5 mb-8">
              <div className="flex items-center gap-2.5">
                <img src="/logos/dragonsheets.png" alt="DragonSheets" className="h-10" />
                <DragonSheetsBrand />
              </div>
              <span className="text-xl font-bold text-[#1A1A1A]/30">vs</span>
              <span className="text-[22px] sm:text-[25px] font-bold text-[#1A1A1A]/60 whitespace-nowrap">{c.name}</span>
            </div>

            <h1 className="font-extrabold text-[34px] sm:text-[48px] lg:text-[56px] leading-[1.06] tracking-[-0.035em] mb-6">
              {c.h1.plain}{' '}
              <span className="bg-gradient-to-r from-[#2F7D4F] to-[#98CC65] bg-clip-text text-transparent">{c.h1.accent}</span>
            </h1>

            <p className="text-[16px] sm:text-[18px] text-[#1A1A1A]/60 max-w-2xl mx-auto mb-9 leading-[1.6]">
              {c.subhead}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <a href={INSTALL_HREF}
                className="inline-flex items-center gap-3 px-9 py-4 text-lg bg-[#2F7D4F] hover:bg-[#256B42] text-white font-semibold uppercase tracking-wide rounded-lg transition-all hover:shadow-xl hover:shadow-[#2F7D4F]/25 hover:-translate-y-0.5">
                Add to Google Sheets <ArrowRight className="w-5 h-5" />
              </a>
              <a href="/#how-it-works"
                className="px-9 py-4 text-lg bg-gray-100 hover:bg-[#2F7D4F] text-[#1A1A1A]/70 hover:text-white font-semibold uppercase tracking-wide rounded-lg transition-all">
                See how it works
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[13px] font-medium text-[#1A1A1A]/40">
              <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-[#2F7D4F]" />Official Amazon APIs — no scraping</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#2F7D4F]" />7-day free trial, no credit card</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── TL;DR ─── */}
      <Section className="!pt-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-xs font-semibold text-[#1A1A1A]/40 uppercase tracking-widest mb-6">The TL;DR</p>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-[#fafafa] border border-gray-200 rounded-2xl p-7">
              <p className="text-sm font-semibold text-[#1A1A1A]/60 mb-3">Choose {c.name} if</p>
              <p className="text-[#1A1A1A]/80 text-base leading-relaxed">{c.tldr.them}</p>
            </div>
            <div className="bg-[#2F7D4F]/5 border border-[#2F7D4F]/25 rounded-2xl p-7">
              <p className="text-sm font-semibold text-[#2F7D4F] mb-3">Choose DragonSheets if</p>
              <p className="text-[#1A1A1A]/90 text-base leading-relaxed">{c.tldr.us}</p>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── COMPARISON TABLE ─── */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="font-extrabold text-2xl sm:text-3xl tracking-[-0.03em]">Side-by-side</h2>
          <p className="mt-3 text-[#1A1A1A]/50 max-w-xl mx-auto">The same job, both tools.</p>
        </div>

        <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden border border-gray-200 shadow-xl shadow-[#2F7D4F]/5 bg-white">
          <div className="grid grid-cols-[1.6fr_1fr_1fr] border-b border-gray-200">
            <div className="px-4 py-3.5" />
            <div className="px-3 py-3.5 text-center bg-[#2F7D4F]/10 border-x border-[#2F7D4F]/20">
              <span className="text-[13px] font-bold text-[#2F7D4F]">DragonSheets</span>
            </div>
            <div className="px-3 py-3.5 text-center">
              <span className="text-[13px] font-bold text-[#1A1A1A]/60">{c.name}</span>
            </div>
          </div>

          {c.compare.map(group => (
            <div key={group.label}>
              <div className="grid grid-cols-[1.6fr_1fr_1fr] bg-[#fafafa] border-b border-gray-100">
                <div className="px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#1A1A1A]/35">
                  {group.label}
                </div>
                <div className="bg-[#2F7D4F]/[0.04] border-x border-[#2F7D4F]/15" />
                <div />
              </div>
              {group.rows.map(row => (
                <div key={row.feature} className="grid grid-cols-[1.6fr_1fr_1fr] items-center border-b border-gray-100 last:border-b-0">
                  <div className="px-4 py-3.5">
                    <div className="text-[13px] font-medium text-[#1A1A1A]/85 leading-snug">{row.feature}</div>
                    {row.note && <div className="text-[11px] text-[#1A1A1A]/35 mt-0.5">{row.note}</div>}
                  </div>
                  {row.values.map((v, i) => (
                    <div key={i} className={`px-3 py-3.5 self-stretch flex items-center justify-center ${i === 0 ? 'bg-[#2F7D4F]/[0.04] border-x border-[#2F7D4F]/15' : ''}`}>
                      <div className="w-full"><CompareCell value={v} isUs={i === 0} /></div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>

        {c.priceNote && (
          <p className="mt-6 text-center text-[13px] text-[#1A1A1A]/45 leading-relaxed max-w-2xl mx-auto">{c.priceNote}</p>
        )}
      </Section>

      {/* ─── WHERE THEY WIN ─── */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="font-extrabold text-2xl sm:text-3xl tracking-[-0.03em]">
            Where {c.name} wins
          </h2>
          <p className="mt-3 text-[#1A1A1A]/50 max-w-2xl mx-auto">
            We're not pretending {c.name} is a bad product. Here's where it's genuinely a fit.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {c.themWins.map((w, i) => (
            <div key={i} className="bg-[#fafafa] border border-gray-200 rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-2">{w.title}</h3>
              <p className="text-[#1A1A1A]/60 text-sm leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── WHERE WE WIN ─── */}
      <Section className="!pt-6">
        <div className="text-center mb-10">
          <h2 className="font-extrabold text-2xl sm:text-3xl tracking-[-0.03em]">
            Where <span className="bg-gradient-to-r from-[#2F7D4F] to-[#98CC65] bg-clip-text text-transparent">DragonSheets</span> wins
          </h2>
          <p className="mt-3 text-[#1A1A1A]/50 max-w-2xl mx-auto">The reasons sellers pick the narrow tool.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {c.usWins.map((w, i) => (
            <div key={i} className="bg-[#2F7D4F]/5 border border-[#2F7D4F]/25 rounded-2xl p-6 flex gap-4">
              <Check className="w-6 h-6 text-[#2F7D4F] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-lg mb-1.5">{w.title}</h3>
                <p className="text-[#1A1A1A]/70 text-sm leading-relaxed">{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── FAQ ─── */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="font-extrabold text-2xl sm:text-3xl tracking-[-0.03em]">Frequently asked</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          {c.faq.map((item, i) => (
            <FAQItem key={i} q={item.q} a={item.a} />
          ))}
        </div>
      </Section>

      {/* ─── FINAL CTA ─── */}
      <Section>
        <div className="max-w-3xl mx-auto text-center bg-[#2F7D4F]/5 border border-[#2F7D4F]/20 rounded-3xl p-12">
          <img src="/logos/dragonsheets.png" alt="DragonSheets" className="h-14 mx-auto mb-6" />
          <h2 className="font-extrabold text-2xl sm:text-3xl tracking-[-0.03em] mb-4">
            Your Amazon data, live in Google Sheets.
          </h2>
          <p className="text-[#1A1A1A]/60 max-w-xl mx-auto mb-8">
            Add to Chrome, connect Amazon in about 3 minutes, and never download a CSV again. 7 days free — no credit card.
          </p>
          <a href={INSTALL_HREF}
            className="inline-flex items-center gap-3 px-9 py-4 text-lg bg-[#2F7D4F] hover:bg-[#256B42] text-white font-semibold uppercase tracking-wide rounded-lg transition-all hover:shadow-xl hover:shadow-[#2F7D4F]/25 hover:-translate-y-0.5">
            Add to Google Sheets <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </Section>

      <SheetsFooter />
    </div>
  );
}
