'use client';

import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

export default function TestimonialCarousel({ testimonials }) {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const current = testimonials[active];
  const move = (direction) => setActive((active + direction + testimonials.length) % testimonials.length);
  return (
    <div className="grid overflow-hidden rounded-[1.8rem] border border-[#dedad1] bg-[#f0eee8] lg:grid-cols-[1.05fr_0.95fr]">
      <div className="relative flex min-h-[410px] flex-col justify-between p-7 sm:p-10 md:p-14">
        <div>
          <Quote size={30} strokeWidth={1} className="text-[#a9926e]" aria-hidden="true" />
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: reduceMotion ? 0 : 0.42 }}>
              <blockquote className="mt-8 max-w-2xl font-serif text-[clamp(1.7rem,3.4vw,3.2rem)] leading-[1.14] tracking-[-0.025em] text-ink">“{current.quote}”</blockquote>
              <p className="mt-6 max-w-xl text-[10px] leading-5 text-[#947c55]">{current.label}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-10 flex items-end justify-between gap-4">
          <AnimatePresence mode="wait">
            <motion.div key={`${active}-meta`} initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-ink">{current.name}</p>
              <p className="mt-2 text-[11px] text-muted">{current.city} <span className="mx-1 text-[#aa9a7d]">·</span> {current.home}</p>
            </motion.div>
          </AnimatePresence>
          <div className="flex gap-2">
            <button type="button" onClick={() => move(-1)} aria-label="Previous testimonial" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#cfc9bd] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne"><ArrowLeft size={16} strokeWidth={1.4} /></button>
            <button type="button" onClick={() => move(1)} aria-label="Next testimonial" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#cfc9bd] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne"><ArrowRight size={16} strokeWidth={1.4} /></button>
          </div>
        </div>
      </div>
      <div className="relative min-h-[340px] overflow-hidden lg:min-h-[580px]">
        <AnimatePresence mode="wait">
          <motion.div key={current.image} initial={reduceMotion ? false : { opacity: 0, scale: 1.025 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduceMotion ? 0 : 0.6 }} className="absolute inset-0">
            <Image src={current.image} alt={current.alt} fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1b1b18]/20 via-transparent to-transparent" />
        <div className="absolute bottom-5 right-5 flex gap-1.5" aria-label={`Testimonial ${active + 1} of ${testimonials.length}`}>
          {testimonials.map((item, index) => <button key={item.quote} type="button" onClick={() => setActive(index)} aria-label={`Show testimonial ${index + 1}`} aria-current={active === index ? 'true' : undefined} className={`h-1.5 rounded-full transition-all ${active === index ? 'w-7 bg-white' : 'w-2 bg-white/55'}`} />)}
        </div>
      </div>
    </div>
  );
}
