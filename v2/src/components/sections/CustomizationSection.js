"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { customizationOptions } from "@/data/features";
import SectionHeading from "@/components/ui/SectionHeading";
import SmartImage from "@/components/ui/SmartImage";
import { ease } from "@/lib/motion";

export default function CustomizationSection() {
  const track = useRef(null);
  const scroll = (dir) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 420), behavior: "smooth" });
  };
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#F5F1EA_0%,#FAF8F4_100%)] py-24 lg:py-36" aria-labelledby="custom-title">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading id="custom-title" eyebrow="Design & customization" title={<>Designed to <em className="italic text-champagne-600">Belong.</em></>} intro="Your lift should feel like it was always part of the house. Choose every visible surface — from glass and metal to light and the touch of the buttons." />
          <div className="flex gap-3">
            <button type="button" onClick={() => scroll(-1)} aria-label="Scroll finishes left" className="grid h-12 w-12 place-items-center rounded-full border border-ink/15 bg-white/70 transition hover:border-champagne-500 hover:text-champagne-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-500"><ChevronLeft className="h-5 w-5" strokeWidth={1.3} /></button>
            <button type="button" onClick={() => scroll(1)} aria-label="Scroll finishes right" className="grid h-12 w-12 place-items-center rounded-full border border-ink/15 bg-white/70 transition hover:border-champagne-500 hover:text-champagne-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-500"><ChevronRight className="h-5 w-5" strokeWidth={1.3} /></button>
          </div>
        </div>
      </div>
      <ul
        ref={track}
        tabIndex={0}
        aria-label="Customization options"
        className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-5 pb-6 [scrollbar-width:none] focus-visible:outline-none sm:px-8 lg:gap-7 lg:px-[max(3rem,calc((100vw_-_1320px)/2_+_3rem))] lg:scroll-px-[max(3rem,calc((100vw_-_1320px)/2_+_3rem))] [&::-webkit-scrollbar]:hidden"
      >
        {customizationOptions.map((o, i) => (
          <motion.li
            key={o.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease, delay: (i % 4) * 0.08 }}
            className={`group relative w-[78vw] shrink-0 snap-start overflow-hidden rounded-[26px] sm:w-[340px] ${i % 2 ? "aspect-[3/4] sm:mt-12" : "aspect-[3/4]"}`}
          >
            <SmartImage image={o.image} alt={`${o.title} options for a home lift`} sizes="340px" className="transition-transform duration-[1600ms] ease-luxe group-hover:scale-105" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-ivory">
              <p className="text-[10.5px] uppercase tracking-[0.24em] text-champagne-200">0{i + 1}</p>
              <h3 className="mt-2 font-serif text-3xl">{o.title}</h3>
              <p className="mt-2 max-h-0 overflow-hidden text-[13px] leading-relaxed text-ivory/85 opacity-0 transition-all duration-700 ease-luxe group-hover:max-h-24 group-hover:opacity-100 max-sm:max-h-24 max-sm:opacity-100">{o.text}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
