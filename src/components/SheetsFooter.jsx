import { sheetsCompetitors } from '../data/sheetsCompetitors';

/* ─── DragonSheets footer ───
   Shared by the landing page, /install, and every /vs/* comparison page.
   On-page anchors are absolute (/#…) so they resolve from any route.
   The Resources column is derived from the competitor data file, so new
   comparison pages appear (and get crawled) automatically. */

const PRODUCT_LINKS = [
  { label: 'Features', href: '/#features' },
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Install', href: '/install' },
];

const COMPANY_LINKS = [
  { label: 'Support', href: '/support', newTab: true },
  { label: 'Privacy', href: '/privacy', newTab: true },
  { label: 'Terms of Service', href: '/tos', newTab: true },
];

const RESOURCE_LINKS = Object.entries(sheetsCompetitors).map(([slug, c]) => ({
  label: `DragonSheets vs ${c.name}`,
  href: `/vs/${slug}`,
}));

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="text-sm font-bold text-white mb-4">{title}</h4>
      <ul className="space-y-3">
        {links.map(l => (
          <li key={l.label}>
            <a href={l.href} {...(l.newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="text-sm text-white/50 hover:text-white transition-colors">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SheetsFooter() {
  return (
    <footer className="bg-[#0F3D2E] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <img src="/logos/dragonsheets.png" alt="DragonSheets" className="h-8" />
              <span className="font-bold text-lg text-white">DragonSheets</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-[230px]">
              Amazon Seller Central &amp; PPC data, live in Google Sheets. Synced on your schedule — no CSV exports, no code.
            </p>
          </div>

          <FooterColumn title="Product" links={PRODUCT_LINKS} />
          <FooterColumn title="Company" links={COMPANY_LINKS} />
          <FooterColumn title="Resources" links={RESOURCE_LINKS} />
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="mailto:info@getdragonsheets.com" className="text-sm text-white/50 hover:text-white transition-colors">
            info@getdragonsheets.com
          </a>
          <div className="text-center md:text-right">
            <p className="text-sm text-white/30">&copy; {new Date().getFullYear()} Chacha Advisory LLC. All rights reserved.</p>
            <p className="text-xs text-white/20 mt-1">30 N Gould St Ste R, Sheridan, WY 82801, USA</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
