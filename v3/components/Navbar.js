'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import { navigation } from '@/data/navigation';
import useSafeReducedMotion from '@/lib/useSafeReducedMotion';

function BrandMark() {
  return (
    <Link href="/" aria-label="AUREL Home Lifts, home" className="group inline-flex items-center gap-3 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne">
      <span className="flex h-9 w-9 items-center justify-center border border-[#b7a27e] text-[18px] font-serif leading-none text-ink transition-transform duration-500 group-hover:rotate-45">A</span>
      <span className="flex flex-col leading-none">
        <span className="text-[15px] font-medium tracking-[0.24em]">AUREL</span>
        <span className="mt-[5px] text-[7px] uppercase tracking-[0.23em] text-muted">Home lifts</span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useSafeReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  const isActive = (href) => href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className={`sticky top-0 z-50 border-b transition-all duration-500 ${scrolled ? 'border-[#dfdbd1]/80 bg-ivory/90 shadow-[0_5px_25px_rgba(45,43,37,0.04)] backdrop-blur-xl' : 'border-[#dfdbd1]/50 bg-ivory/75 backdrop-blur-md'}`}>
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 md:px-12 lg:px-16">
        <BrandMark />
        <nav className="hidden items-center gap-5 xl:flex 2xl:gap-7" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? 'page' : undefined} className={`relative py-3 text-[10px] uppercase tracking-[0.12em] transition-colors duration-300 hover:text-[#9a8058] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne ${isActive(item.href) ? 'text-ink' : 'text-[#6e706a]'}`}>
              {item.label}
              {isActive(item.href) && <motion.span layoutId="active-nav" className="absolute -bottom-[1px] left-0 right-0 h-px bg-[#a98e65]" transition={{ duration: reduceMotion ? 0 : 0.25 }} />}
            </Link>
          ))}
        </nav>
        <div className="hidden xl:block">
          <Link href="/contact" className="group inline-flex min-h-11 items-center gap-3 rounded-full border border-[#c9c4b8] px-5 text-[10px] font-medium uppercase tracking-[0.13em] transition-all hover:border-ink hover:bg-white/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne">
            Book a consultation <ArrowRight size={14} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d8d4ca] text-ink transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne xl:hidden"
        >
          {menuOpen ? <X size={19} strokeWidth={1.4} /> : <Menu size={19} strokeWidth={1.4} />}
        </button>
      </div>
      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.36, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 right-0 top-full overflow-hidden border-b border-[#e2ded5] bg-ivory shadow-[0_22px_40px_rgba(40,39,34,0.10)] xl:hidden"
          >
            <nav aria-label="Mobile navigation" className="mx-auto max-h-[calc(100dvh-90px)] max-w-[1440px] overflow-y-auto px-5 pb-6 pt-3 sm:px-8 md:px-12">
              <ul className="divide-y divide-[#e6e2d9]">
                {navigation.map((item, index) => (
                  <motion.li key={item.href} initial={reduceMotion ? false : { opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: reduceMotion ? 0 : 0.035 * index, duration: 0.24 }}>
                    <Link href={item.href} onClick={() => setMenuOpen(false)} aria-current={isActive(item.href) ? 'page' : undefined} className="flex items-center justify-between py-4 text-[12px] uppercase tracking-[0.16em] text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne">
                      <span>{item.label}</span><ArrowRight size={14} strokeWidth={1.4} />
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <Link href="/contact" onClick={() => setMenuOpen(false)} className="mt-6 flex min-h-12 items-center justify-between rounded-full bg-ink px-5 text-[10px] uppercase tracking-[0.15em] text-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne">
                Book a consultation <ArrowRight size={15} strokeWidth={1.5} />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
