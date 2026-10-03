"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X, Phone, Mail } from "lucide-react";
import { mainNav, site } from "@/data/site";
import { ease } from "@/lib/motion";
import Logo from "./Logo";
import Button from "@/components/ui/Button";

export default function MobileMenu({ open, onClose, pathname }) {
  const panelRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && panelRef.current) {
        const f = panelRef.current.querySelectorAll("a[href], button");
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener("keydown", onKey);
    panelRef.current?.querySelector("button")?.focus();
    return () => { document.body.style.overflow = prev; window.removeEventListener("keydown", onKey); };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="mobile-menu"
          ref={panelRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-[80] flex flex-col bg-[radial-gradient(130%_90%_at_100%_0%,#F3EBDD_0%,#FAF8F4_45%,#EEF1ED_100%)] lg:hidden"
          initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
          animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)", transition: { duration: 0.7, ease } }}
          exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)", transition: { duration: 0.5, ease } }}
        >
          <div className="flex h-20 items-center justify-between px-5 sm:px-8">
            <Logo />
            <button onClick={onClose} aria-label="Close menu" className="grid h-11 w-11 place-items-center rounded-full border border-ink/10 bg-white/60 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-500">
              <X className="h-5 w-5" strokeWidth={1.4} />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-5 pb-6 pt-4 sm:px-8" aria-label="Mobile">
            <motion.ul initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } } }}>
              {mainNav.map((item, i) => {
                const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <motion.li key={item.href} variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } }} className="border-b border-ink/[0.07]">
                    <Link href={item.href} onClick={onClose} aria-current={active ? "page" : undefined} className="flex items-baseline justify-between py-4 focus-visible:outline-none focus-visible:text-champagne-600">
                      <span className={`font-serif text-[2rem] leading-none ${active ? "text-champagne-600" : "text-ink"}`}>{item.label}</span>
                      <span className="text-[11px] tracking-[0.2em] text-ink-300">0{i + 1}</span>
                    </Link>
                  </motion.li>
                );
              })}
            </motion.ul>
          </nav>
          <div className="space-y-4 border-t border-ink/[0.07] bg-white/40 px-5 py-6 backdrop-blur sm:px-8">
            <Button href="/contact" className="w-full" onClick={onClose}>Book a Consultation</Button>
            <div className="flex justify-between text-[13px] text-ink-500">
              <a href={site.contact.phoneHref} className="flex items-center gap-2"><Phone className="h-4 w-4" strokeWidth={1.4} aria-hidden="true" />Call us</a>
              <a href={`mailto:${site.contact.email}`} className="flex items-center gap-2"><Mail className="h-4 w-4" strokeWidth={1.4} aria-hidden="true" />Email</a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
