import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

/* ─── Shared DragonSheets header ───
   Used by the landing page, /install, and the /vs/* comparison pages so
   every page carries the identical header. On-page anchors are absolute
   (/#…) so they resolve from any route. The CTA points at /install — the
   Chrome-Web-Store gateway page (src/lib/config.js decides whether that
   page redirects or shows the launching-soon state). */

export const INSTALL_HREF = '/install';

export const DragonSheetsBrand = ({ size = 'lg' }) => (
  <span
    className={`font-bold ${size === 'lg' ? 'text-[22px] sm:text-[24px]' : 'text-lg'} text-[#1A1A1A] whitespace-nowrap`}
    style={{ lineHeight: '1' }}
  >
    Dragon<span className="bg-gradient-to-r from-[#2F7D4F] to-[#98CC65] bg-clip-text text-transparent">Sheets</span>
  </span>
);

const navLinks = [
  { label: 'Use cases', href: '/#use-cases' },
  { label: 'Features', href: '/#features' },
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'FAQ', href: '/#faq' },
];

export default function SheetsNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5">
            <img src="/logos/dragonsheets.png" alt="DragonSheets" className="h-9" />
            <DragonSheetsBrand />
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(l => (
              <a key={l.label} href={l.href}
                className="text-[14px] font-medium text-[#1A1A1A]/60 hover:text-[#2F7D4F] transition-colors tracking-[-0.01em]">
                {l.label}
              </a>
            ))}
          </div>
          <div className="hidden md:flex items-center">
            <a href={INSTALL_HREF}
              className="px-5 py-2.5 bg-[#2F7D4F] hover:bg-[#256B42] text-white text-sm font-semibold uppercase tracking-wide rounded-lg transition-all hover:shadow-lg hover:shadow-[#2F7D4F]/25 hover:-translate-y-0.5">
              Add to Google Sheets
            </a>
          </div>
          <button className="md:hidden p-2 text-[#1A1A1A]" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 bg-white pt-20 px-6 overflow-y-auto">
            <div className="flex flex-col gap-6">
              {navLinks.map(l => (
                <a key={l.label} href={l.href} onClick={() => setMobileOpen(false)}
                  className="text-lg font-medium text-[#1A1A1A]">{l.label}</a>
              ))}
              <a href={INSTALL_HREF} onClick={() => setMobileOpen(false)}
                className="mt-4 px-6 py-3 bg-[#2F7D4F] text-white text-center font-semibold uppercase tracking-wide rounded-lg">
                Add to Google Sheets
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
