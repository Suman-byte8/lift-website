"use client";
import { motion } from "framer-motion";
import { processSteps } from "@/data/features";
import Icon from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";
import { ease } from "@/lib/motion";

export default function ProcessTimeline({ steps = processSteps, title, eyebrow = "How it works", intro }) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#F1F3F4_0%,#FAF8F4_100%)] py-24 lg:py-36" aria-labelledby="process-title">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <SectionHeading id="process-title" align="center" eyebrow={eyebrow} title={title ?? <>From first conversation <em className="italic text-champagne-600">to first ride.</em></>} intro={intro ?? "A single coordinator guides you through four clear stages — no surprises, no guesswork."} />
        <ol className="relative mt-20 grid gap-12 lg:grid-cols-4 lg:gap-8">
          {/* connecting line: vertical on mobile, horizontal on desktop */}
          <motion.span aria-hidden="true" className="absolute bottom-6 left-[27px] top-6 w-px origin-top bg-gradient-to-b from-champagne-300 via-champagne-500 to-sage-300 lg:hidden" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1.8, ease }} />
          <motion.span aria-hidden="true" className="absolute left-[12%] right-[12%] top-[27px] hidden h-px origin-left bg-gradient-to-r from-champagne-300 via-champagne-500 to-sage-300 lg:block" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 1.8, ease }} />
          {steps.map((s, i) => (
            <motion.li
              key={s.n}
              className="relative flex gap-6 lg:flex-col lg:items-center lg:text-center"
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.9, ease, delay: 0.3 + i * 0.2 }}
            >
              <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full border border-champagne-300 bg-ivory text-champagne-600 shadow-soft">
                <Icon name={s.icon} className="h-5 w-5" />
              </span>
              <div className="lg:mt-8">
                <p className="font-serif text-5xl leading-none text-champagne-300">{s.n}</p>
                <h3 className="mt-3 font-serif text-[1.7rem] text-ink">{s.title}</h3>
                <p className="mt-2 max-w-xs text-[14px] leading-relaxed text-ink-500 lg:mx-auto">{s.text}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
