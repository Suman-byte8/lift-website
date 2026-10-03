"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SmartImage from "@/components/ui/SmartImage";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/cn";

const keySpecs = [
  ["capacity", "Capacity"],
  ["travel", "Travel"],
  ["stops", "Stops"],
  ["drive", "Drive"],
];

export default function ProductCard({ product, index = 0, className }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 1, ease, delay: (index % 2) * 0.12 }}
      className={cn("group relative flex flex-col overflow-hidden rounded-[30px] border border-white/80 bg-gradient-to-br shadow-soft transition-shadow duration-700 ease-luxe hover:shadow-lift", product.accent, className)}
    >
      <div className="relative aspect-[16/11] overflow-hidden">
        <SmartImage image={product.image} alt={`${product.name} — ${product.line}, shown in a residential interior`} sizes="(min-width:1024px) 45vw, 100vw" className="transition-transform duration-[1600ms] ease-luxe group-hover:scale-[1.06]" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
        <span className="absolute left-5 top-5 rounded-full border border-white/60 bg-white/70 px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[0.2em] text-ink-700 backdrop-blur">{product.category}</span>
        <p aria-hidden="true" className="absolute bottom-3 right-6 font-serif text-[5.5rem] leading-none text-white/85 transition-transform duration-1000 ease-luxe group-hover:-translate-y-1">0{index + 1}</p>
      </div>
      <div className="flex flex-1 flex-col p-7 sm:p-9">
        <p className="text-[11px] font-semibold uppercase tracking-eyebrow text-champagne-600">{product.line}</p>
        <h3 className="mt-2 font-serif text-4xl font-medium tracking-[0.04em] text-ink sm:text-[2.7rem]">{product.name.toUpperCase()}</h3>
        <p className="mt-4 text-[14.5px] leading-relaxed text-ink-500">{product.summary}</p>
        <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-ink/10 pt-6">
          {keySpecs.map(([k, l]) => (
            <div key={k}>
              <dt className="text-[10.5px] uppercase tracking-[0.18em] text-ink-300">{l}</dt>
              <dd className="mt-1 text-[13.5px] font-medium text-ink-700">{product.specifications[k]}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-auto flex items-center justify-between pt-8">
          <Link
            href={`/models/${product.slug}`}
            className="text-[13px] font-semibold tracking-wide text-ink after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
            aria-label={`Explore the ${product.name} ${product.line}`}
          >
            Explore Model
          </Link>
          <span className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 bg-white/70 transition-all duration-700 ease-luxe group-hover:rotate-45 group-hover:border-champagne-500 group-hover:bg-champagne-500 group-hover:text-white group-has-[:focus-visible]:ring-2 group-has-[:focus-visible]:ring-champagne-500">
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.4} aria-hidden="true" />
          </span>
        </div>
      </div>
    </motion.article>
  );
}
