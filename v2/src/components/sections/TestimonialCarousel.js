"use client";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import SmartImage from "@/components/ui/SmartImage";
import Eyebrow from "@/components/ui/Eyebrow";
import { ease } from "@/lib/motion";
import useSafeReducedMotion from "@/lib/useSafeReducedMotion";

export default function TestimonialCarousel({ items = testimonials }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useSafeReducedMotion();
  const go = useCallback((d) => setI((v) => (v + d + items.length) % items.length), [items.length]);

  useEffect(() => {
    if (paused || reduce) return;
    const t = setInterval(() => go(1), 9000);
    return () => clearInterval(t);
  }, [paused, reduce, go]);

  const t = items[i];
  return (
    <section
      className="relative overflow-hidden bg-[linear-gradient(135deg,#EEF1ED_0%,#F5F1EA_100%)] py-24 lg:py-36"
      aria-roledescription="carousel"
      aria-label="Customer stories"
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}
    >
      <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.25fr_1fr] lg:gap-20 lg:px-12">
        <div>
          <Eyebrow>Customer experience</Eyebrow>
          <Quote className="mt-8 h-10 w-10 text-champagne-300" strokeWidth={1} aria-hidden="true" />
          <div className="relative mt-4 min-h-[340px] sm:min-h-[280px]" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.figure key={t.id} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.8, ease }}>
                <blockquote className="font-serif text-[1.9rem] leading-[1.25] text-ink sm:text-[2.4rem] lg:text-[2.7rem]">“{t.quote}”</blockquote>
                <figcaption className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px]">
                  <span className="font-semibold text-ink">{t.name}</span>
                  <span className="h-1 w-1 rounded-full bg-champagne-500" aria-hidden="true" />
                  <span className="text-ink-500">{t.city}</span>
                  <span className="h-1 w-1 rounded-full bg-champagne-500" aria-hidden="true" />
                  <span className="text-ink-500">{t.homeType} · {t.model}</span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>
          <div className="mt-10 flex items-center gap-6">
            <div className="flex gap-3">
              <button onClick={() => go(-1)} aria-label="Previous testimonial" className="grid h-12 w-12 place-items-center rounded-full border border-ink/15 bg-white/60 transition hover:border-champagne-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-500"><ChevronLeft className="h-5 w-5" strokeWidth={1.3} /></button>
              <button onClick={() => go(1)} aria-label="Next testimonial" className="grid h-12 w-12 place-items-center rounded-full border border-ink/15 bg-white/60 transition hover:border-champagne-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-500"><ChevronRight className="h-5 w-5" strokeWidth={1.3} /></button>
            </div>
            <div className="flex gap-2" role="tablist" aria-label="Choose testimonial">
              {items.map((it, k) => (
                <button key={it.id} role="tab" aria-selected={k === i} aria-label={`Testimonial ${k + 1}`} onClick={() => setI(k)} className="group py-3 focus-visible:outline-none">
                  <span className={`block h-[2px] rounded-full transition-all duration-700 ease-luxe group-focus-visible:ring-2 group-focus-visible:ring-champagne-500 ${k === i ? "w-10 bg-champagne-500" : "w-5 bg-ink/20"}`} />
                </button>
              ))}
            </div>
          </div>
          <p className="mt-6 text-[11px] text-ink-300">Placeholder testimonials — replace in data/testimonials.js.</p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] shadow-lift sm:aspect-[4/5] sm:rounded-b-[30px] sm:rounded-t-[999px]">
          <AnimatePresence mode="sync">
            <motion.div key={t.id} className="absolute inset-0" initial={{ opacity: 0, scale: 1.06 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.2, ease }}>
              <SmartImage image={t.image} alt={`${t.homeType} in ${t.city}`} sizes="(min-width:1024px) 40vw, 100vw" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
