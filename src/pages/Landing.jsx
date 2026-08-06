import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Check, ChevronDown, Sparkles, Chrome, Table2, Link2,
  Store, Briefcase, FileX2, RefreshCw, Layers,
  BarChart3, Megaphone, Boxes, Tag, DollarSign, Undo2, ShieldCheck, Clock3,
} from 'lucide-react';
import { homePage } from '../data/lpPages';
import SheetsNavbar, { INSTALL_HREF } from '../components/SheetsNavbar';
import SheetsFooter from '../components/SheetsFooter';

/* Icon names in the (JSX-free) data file → lucide components. */
const ICONS = { Store, Briefcase, FileX2, RefreshCw, Layers, BarChart3, Megaphone, Boxes, Tag, DollarSign, Undo2 };

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6 },
};

function Eyebrow({ children }) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#2F7D4F]/10 rounded-full text-sm font-medium text-[#2F7D4F]">
      <span className="w-2 h-2 rounded-full bg-[#98CC65] animate-pulse shrink-0" />
      <span>{children}</span>
    </span>
  );
}

function PrimaryCta({ children = homePage.hero.cta, large = false }) {
  return (
    <a href={INSTALL_HREF}
      className={`inline-flex items-center gap-3 ${large ? 'px-9 py-4 text-lg' : 'px-7 py-3.5'} bg-[#2F7D4F] hover:bg-[#256B42] text-white font-semibold uppercase tracking-wide rounded-lg transition-all hover:shadow-xl hover:shadow-[#2F7D4F]/25 hover:-translate-y-0.5`}>
      {children} <ArrowRight className="w-5 h-5" />
    </a>
  );
}

/* ─── Hero mock: a Google-Sheets-style table that sells the product on sight ─── */
const SHEET_ROWS = [
  ['GP-CLASSIC-3PK', '$4,812', '312', '4.6%', '$96', '21%'],
  ['PEELER-SET-V2', '$3,290', '241', '5.1%', '$64', '18%'],
  ['CUT-BOARD-BAM', '$2,144', '129', '3.9%', '$88', '26%'],
  ['MAT-BAKE-2PK', '$1,873', '154', '4.2%', '$41', '15%'],
];

function SheetMock() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-[#2F7D4F]/10 overflow-hidden text-left">
      {/* Sheet chrome */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-200 bg-[#fafafa]">
        <div className="flex items-center gap-2 min-w-0">
          <span className="w-4 h-4 rounded-[3px] bg-[#2F7D4F] grid place-items-center shrink-0">
            <Table2 className="w-2.5 h-2.5 text-white" />
          </span>
          <span className="text-[13px] font-medium text-[#1A1A1A]/70 truncate">Amazon — Sales &amp; PPC by SKU</span>
        </div>
        <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#2F7D4F] bg-[#2F7D4F]/10 px-2.5 py-1 rounded-full shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-[#98CC65] animate-pulse" />
          Synced 2 min ago
        </span>
      </div>
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-[12px] leading-none">
          <thead>
            <tr className="bg-[#2F7D4F] text-white">
              {['SKU', 'Sales (7d)', 'Units', 'CVR', 'Ad spend', 'ACOS'].map(h => (
                <th key={h} className="px-3.5 py-2.5 text-left font-semibold whitespace-nowrap">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {SHEET_ROWS.map((row, i) => (
              <tr key={row[0]} className={i % 2 ? 'bg-[#fafafa]' : 'bg-white'}>
                {row.map((cell, j) => (
                  <td key={j} className={`px-3.5 py-2.5 whitespace-nowrap ${j === 0 ? 'font-medium text-[#1A1A1A]/80' : 'text-[#1A1A1A]/60 tabular-nums'}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-4 py-2 border-t border-gray-200 bg-[#fafafa] text-[11px] text-[#1A1A1A]/40">
        Refreshes daily at 6:00 AM — scheduled by DragonSheets
      </div>
    </div>
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

const sysFont = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
const STEP_ICONS = [Chrome, Table2, Link2];

export default function Landing() {
  const p = homePage;

  useEffect(() => {
    document.title = p.metaTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', p.metaDescription);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#1A1A1A]" style={{ fontFamily: sysFont }}>
      <SheetsNavbar />

      {/* ─── HERO ─── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-16 left-1/4 w-[500px] h-[500px] bg-[#98CC65]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-40 right-1/5 w-[400px] h-[400px] bg-[#2F7D4F]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-6"><Eyebrow>{p.hero.eyebrow}</Eyebrow></div>
            <h1 className="font-extrabold text-[42px] sm:text-[58px] lg:text-[72px] leading-[1.05] tracking-[-0.035em] mb-6">
              {p.hero.headline.plain}{' '}
              <span className="bg-gradient-to-r from-[#2F7D4F] to-[#98CC65] bg-clip-text text-transparent">
                {p.hero.headline.accent}
              </span>
            </h1>
            <p className="text-[17px] sm:text-[19px] text-[#1A1A1A]/60 leading-[1.6] tracking-[-0.01em] max-w-2xl mx-auto mb-9">
              {p.hero.paragraph}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <PrimaryCta large />
              <a href="/#how-it-works"
                className="px-9 py-4 text-lg bg-gray-100 hover:bg-[#2F7D4F] text-[#1A1A1A]/70 hover:text-white font-semibold uppercase tracking-wide rounded-lg transition-all">
                {p.hero.secondaryCta}
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[13px] font-medium text-[#1A1A1A]/40">
              {p.hero.trust.map((t, i) => (
                <span key={t} className="flex items-center gap-2">
                  {i === 0 ? <ShieldCheck className="w-4 h-4 text-[#2F7D4F]" /> : i === 1 ? <Clock3 className="w-4 h-4 text-[#2F7D4F]" /> : <Check className="w-4 h-4 text-[#2F7D4F]" />}
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-14 max-w-3xl mx-auto">
            <SheetMock />
          </motion.div>
        </div>
      </section>

      {/* ─── USE CASES ─── */}
      <section id="use-cases" className="py-24 bg-[#fafafa] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="font-extrabold text-3xl sm:text-4xl tracking-[-0.03em]">Built for the people drowning in exports</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {p.useCases.map(u => {
              const Icon = ICONS[u.icon];
              return (
                <motion.div key={u.title} {...fadeUp}
                  className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#2F7D4F]/30 hover:shadow-lg hover:shadow-[#2F7D4F]/5 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-[#2F7D4F]/10 grid place-items-center mb-5">
                    <Icon className="w-6 h-6 text-[#2F7D4F]" />
                  </div>
                  <h3 className="font-bold text-xl mb-3">{u.title}</h3>
                  <p className="text-[#1A1A1A]/60 leading-relaxed mb-5">{u.desc}</p>
                  <ul className="space-y-2.5">
                    {u.points.map(pt => (
                      <li key={pt} className="flex items-start gap-2.5 text-sm text-[#1A1A1A]/70">
                        <Check className="w-4 h-4 text-[#2F7D4F] shrink-0 mt-0.5" /> {pt}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── VALUE PROPS ─── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="font-extrabold text-3xl sm:text-4xl tracking-[-0.03em]">Why sellers switch</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {p.valueProps.map(v => {
              const Icon = ICONS[v.icon];
              return (
                <motion.div key={v.title} {...fadeUp}
                  className="bg-[#fafafa] border border-gray-100 rounded-2xl p-7 hover:border-[#2F7D4F]/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-[#2F7D4F]/10 grid place-items-center mb-5">
                    <Icon className="w-6 h-6 text-[#2F7D4F]" />
                  </div>
                  <h3 className="font-bold text-lg mb-2.5">{v.title}</h3>
                  <p className="text-[#1A1A1A]/60 text-[15px] leading-relaxed">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── AI SECTION (dark) ─── */}
      <section className="py-24 bg-[#0F3D2E]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full text-sm font-medium text-[#98CC65] mb-6">
              <Sparkles className="w-4 h-4" /> {p.ai.eyebrow}
            </span>
            <h2 className="font-extrabold text-3xl sm:text-4xl tracking-[-0.03em] text-white mb-5">{p.ai.title}</h2>
            <p className="text-white/70 text-[17px] leading-[1.7] max-w-2xl mx-auto mb-10">{p.ai.paragraph}</p>
            <div className="grid sm:grid-cols-3 gap-4 text-left">
              {p.ai.prompts.map(prompt => (
                <div key={prompt} className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <p className="text-[13px] text-white/40 mb-2 font-medium uppercase tracking-wide">Try asking</p>
                  <p className="text-white/85 text-[14px] leading-relaxed">&ldquo;{prompt}&rdquo;</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FEATURES MATRIX ─── */}
      <section id="features" className="py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="font-extrabold text-3xl sm:text-4xl tracking-[-0.03em] mb-4">{p.features.title}</h2>
            <p className="text-[#1A1A1A]/50 max-w-2xl mx-auto">{p.features.intro}</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {p.features.items.map(f => {
              const Icon = ICONS[f.icon];
              return (
                <motion.div key={f.title} {...fadeUp}
                  className="bg-white border border-gray-200 rounded-2xl p-7 hover:border-[#2F7D4F]/30 hover:shadow-lg hover:shadow-[#2F7D4F]/5 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-[#2F7D4F]/10 grid place-items-center mb-5">
                    <Icon className="w-6 h-6 text-[#2F7D4F]" />
                  </div>
                  <h3 className="font-bold text-lg mb-2.5">{f.title}</h3>
                  <p className="text-[#1A1A1A]/60 text-[15px] leading-relaxed">{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section id="how-it-works" className="py-24 bg-[#fafafa] scroll-mt-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="font-extrabold text-3xl sm:text-4xl tracking-[-0.03em]">{p.steps.title}</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {p.steps.items.map((s, i) => {
              const Icon = STEP_ICONS[i];
              return (
                <motion.div key={s.title} {...fadeUp} className="bg-white border border-gray-200 rounded-2xl p-8 relative">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="w-9 h-9 rounded-full bg-[#2F7D4F] text-white font-bold grid place-items-center text-sm">{i + 1}</span>
                    <Icon className="w-6 h-6 text-[#2F7D4F]" />
                  </div>
                  <h3 className="font-bold text-lg mb-2.5">{s.title}</h3>
                  <p className="text-[#1A1A1A]/60 text-[15px] leading-relaxed">{s.desc}</p>
                </motion.div>
              );
            })}
          </div>
          <motion.div {...fadeUp} className="text-center mt-12">
            <PrimaryCta />
          </motion.div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      {/* TODO(pricing): placeholder pending decision — $29/mo single plan,
          7-day trial, no credit card. Update src/data/lpPages.js (pricing +
          faq entries) when the real pricing is decided. */}
      <section id="pricing" className="py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <div className="mb-5"><Eyebrow>{p.pricing.eyebrow}</Eyebrow></div>
            <h2 className="font-extrabold text-3xl sm:text-4xl tracking-[-0.03em]">{p.pricing.title}</h2>
          </motion.div>
          <motion.div {...fadeUp}
            className="max-w-md mx-auto bg-white border-2 border-[#2F7D4F]/25 rounded-3xl p-10 text-center shadow-xl shadow-[#2F7D4F]/5">
            <div className="flex items-baseline justify-center gap-1 mb-2">
              <span className="font-extrabold text-6xl tracking-[-0.03em]">{p.pricing.price}</span>
              <span className="text-[#1A1A1A]/50 text-xl font-medium">{p.pricing.period}</span>
            </div>
            <p className="text-[#2F7D4F] font-semibold mb-8">{p.pricing.trial}</p>
            <ul className="space-y-3.5 text-left mb-9">
              {p.pricing.features.map(f => (
                <li key={f} className="flex items-start gap-3 text-[15px] text-[#1A1A1A]/70">
                  <Check className="w-5 h-5 text-[#2F7D4F] shrink-0 mt-0.5" /> {f}
                </li>
              ))}
            </ul>
            <a href={INSTALL_HREF}
              className="block w-full px-7 py-4 bg-[#2F7D4F] hover:bg-[#256B42] text-white font-semibold uppercase tracking-wide rounded-lg transition-all hover:shadow-xl hover:shadow-[#2F7D4F]/25">
              {p.pricing.cta}
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq" className="py-24 bg-[#fafafa] scroll-mt-20">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-10">
            <h2 className="font-extrabold text-3xl sm:text-4xl tracking-[-0.03em]">Frequently asked</h2>
          </motion.div>
          <motion.div {...fadeUp}>
            {p.faq.map(item => <FAQItem key={item.q} q={item.q} a={item.a} />)}
          </motion.div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center bg-[#2F7D4F]/5 border border-[#2F7D4F]/20 rounded-3xl p-12">
            <img src="/logos/dragonsheets.png" alt="DragonSheets" className="h-14 mx-auto mb-6" />
            <h2 className="font-extrabold text-3xl sm:text-4xl tracking-[-0.03em] mb-4">{p.finalCta.title}</h2>
            <p className="text-[#1A1A1A]/60 max-w-xl mx-auto mb-8 leading-relaxed">{p.finalCta.paragraph}</p>
            <PrimaryCta large />
          </motion.div>
        </div>
      </section>

      <SheetsFooter />
    </div>
  );
}
