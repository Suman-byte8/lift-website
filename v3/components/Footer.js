import Link from 'next/link';
import { ArrowUpRight, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/site';
const footerGroups = [
  { title: 'Explore', links: [{ label: 'Home lifts', href: '/home-lifts' }, { label: 'Models', href: '/models' }, { label: 'Projects', href: '/projects' }, { label: 'How it works', href: '/#process' }] },
  { title: 'Consider', links: [{ label: 'Technology', href: '/technology' }, { label: 'Safety', href: '/safety' }, { label: 'FAQs', href: '/faq' }, { label: 'About AUREL', href: '/about' }] }
];

export default function Footer() {
  return (
    <footer className="bg-[#eeece5] text-ink">
      <div className="mx-auto max-w-[1440px] px-5 pb-8 pt-16 sm:px-8 md:px-12 md:pt-20 lg:px-16">
        <div className="grid gap-12 border-b border-[#d9d5cb] pb-14 md:grid-cols-[1.45fr_1fr_1fr_1.25fr] md:gap-10">
          <div className="max-w-sm">
            <Link href="/" aria-label="AUREL home" className="inline-flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center border border-[#b7a27e] font-serif text-[19px]">A</span>
              <span className="flex flex-col"><span className="text-[16px] tracking-[0.24em]">AUREL</span><span className="mt-1 text-[7px] uppercase tracking-[0.23em] text-muted">Home lifts</span></span>
            </Link>
            <p className="mt-6 max-w-xs text-[14px] leading-7 text-muted">Home mobility, considered as part of the architecture. Thoughtfully planned for the way you live.</p>
            <div className="mt-7 flex gap-3">
              <a href="https://www.instagram.com/" aria-label="Instagram" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d0ccc1] transition hover:border-ink hover:bg-white/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne"><Instagram size={16} strokeWidth={1.4} /></a>
              <a href="https://www.linkedin.com/" aria-label="LinkedIn" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d0ccc1] transition hover:border-ink hover:bg-white/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne"><Linkedin size={16} strokeWidth={1.4} /></a>
            </div>
          </div>
          {footerGroups.map((group) => (
            <div key={group.title}>
              <p className="mb-5 text-[10px] uppercase tracking-[0.19em] text-[#8b795b]">{group.title}</p>
              <ul className="space-y-3.5">
                {group.links.map((link) => <li key={link.href}><Link href={link.href} className="text-[13px] text-[#62645e] transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne">{link.label}</Link></li>)}
              </ul>
            </div>
          ))}
          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.19em] text-[#8b795b]">Start a conversation</p>
            <p className="text-[13px] leading-6 text-muted">Tell us a little about your home. We will help you find the right next question.</p>
            <Link href="/contact" className="group mt-5 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.14em] text-ink underline decoration-[#b8aa91] underline-offset-4">Book a consultation <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></Link>
            <div className="mt-7 space-y-2 text-[12px] text-muted">
              <a href={`tel:${siteConfig.phoneLink}`} className="block transition hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne">{siteConfig.phoneDisplay}</a>
              <a href={`mailto:${siteConfig.email}`} className="block transition hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne">{siteConfig.email}</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-6 text-[9px] uppercase tracking-[0.13em] text-[#77786f] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} AUREL Home Lifts. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/faq" className="transition hover:text-ink">FAQs</Link>
            <Link href="/privacy" className="transition hover:text-ink">Privacy</Link>
            <Link href="/terms" className="transition hover:text-ink">Terms</Link>
            <a href="#main" className="inline-flex items-center gap-1 transition hover:text-ink">Back to top <ArrowUpRight size={12} /></a>
          </div>
        </div>
        <p className="mt-4 max-w-5xl text-[10px] leading-5 text-[#8a8b83]">Website concept content for demonstration. Product specifications, service coverage, contact details, testimonials and regulatory information must be verified and replaced with approved information before publication.</p>
      </div>
    </footer>
  );
}
