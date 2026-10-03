"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/data/nav";
import { useConsultation } from "@/components/ConsultationProvider";

export default function Navbar() {
  const pathname = usePathname();
  const { open } = useConsultation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen ? "glass-nav shadow-sm py-3.5 border-b border-champagne-200/60" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        <Link href="/" className="group flex items-center space-x-3" aria-label="Aurelia home">
          <div className="w-10 h-10 rounded-full border border-champagne-500/40 flex items-center justify-center bg-white/70 shadow-sm group-hover:border-champagne-600 transition-colors">
            <span className="font-serif text-xl font-bold tracking-widest text-champagne-700">A</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl tracking-[0.25em] font-semibold text-mineral uppercase">AURELIA</span>
            <span className="text-[9px] tracking-[0.35em] text-champagne-600 uppercase -mt-1 font-medium">Home Elevators</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center space-x-8" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs uppercase tracking-[0.16em] transition-all font-medium relative py-1 ${
                isActive(link.href) ? "text-champagne-800 font-semibold" : "text-stone-600 hover:text-mineral"
              }`}
            >
              {link.label}
              {isActive(link.href) && <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-champagne-600" />}
            </Link>
          ))}
        </nav>

        <div className="hidden sm:flex items-center space-x-4">
          <Link
            href="/estimator"
            className="text-xs uppercase tracking-wider text-stone-700 hover:text-champagne-800 font-medium px-3 py-2 transition"
          >
            Instant Quote
          </Link>
          <button
            onClick={open}
            className="bg-mineral hover:bg-stone-900 text-alabaster text-xs uppercase tracking-[0.18em] px-5 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg border border-stone-800 flex items-center space-x-2"
          >
            <span>Book Consultation</span>
            <ArrowUpRight size={14} />
          </button>
        </div>

        <div className="flex items-center lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-mineral hover:text-champagne-700 transition"
            aria-label="Toggle Navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-alabaster/98 backdrop-blur-xl border-b border-champagne-200 px-6 py-6 shadow-2xl max-h-[calc(100vh-65px)] overflow-y-auto">
          <div className="flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-left text-sm uppercase tracking-widest py-2 border-b border-stone-200/50 ${
                  isActive(link.href) ? "text-champagne-700 font-semibold" : "text-stone-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 flex flex-col space-y-3">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  open();
                }}
                className="w-full bg-mineral text-alabaster py-3 rounded-full text-xs uppercase tracking-widest text-center shadow font-medium"
              >
                Schedule Home Feasibility Visit
              </button>
              <Link
                href="/estimator"
                className="w-full border border-champagne-500 text-champagne-800 py-3 rounded-full text-xs uppercase tracking-widest text-center font-medium"
              >
                Launch Cost Calculator
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
