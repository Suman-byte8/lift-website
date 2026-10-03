'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, MoveRight } from 'lucide-react';
import useSafeReducedMotion from '@/lib/useSafeReducedMotion';

export default function ProductCard({ product, index = 0, compact = false }) {
  const reduceMotion = useSafeReducedMotion();
  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.7, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduceMotion ? undefined : { y: -5 }}
      className="group flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-[#e4e0d7] bg-[#f8f6f1] shadow-card transition-shadow duration-500 hover:shadow-soft"
    >
      <Link href={`/models/${product.slug}`} className={`relative block overflow-hidden ${compact ? 'aspect-[1.2/1]' : 'aspect-[1.03/1]'} bg-gradient-to-br ${product.accent} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-champagne`} aria-label={`Explore ${product.name}, ${product.cardTitle}`}>
        <Image src={product.image} alt={product.imageAlt} fill sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw" className="object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.045] motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
        <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/75 px-3 py-1.5 text-[8px] uppercase tracking-[0.16em] text-[#66655d] backdrop-blur-sm">{product.badge}</span>
        <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-ivory/90 text-ink shadow-sm transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true"><ArrowUpRight size={17} strokeWidth={1.4} /></span>
      </Link>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="text-[9px] uppercase tracking-[0.18em] text-[#8c7858]">{product.category} collection</p>
            <h3 className="mt-2 font-serif text-[27px] leading-none tracking-[0.04em] text-ink">{product.name}</h3>
          </div>
          <p className="text-right text-[9px] uppercase leading-4 tracking-[0.08em] text-muted">{product.descriptor}</p>
        </div>
        <p className="mt-4 min-h-[3.2rem] text-[13px] leading-6 text-muted">{product.description}</p>
        <dl className="mt-4 grid grid-cols-3 gap-3 border-y border-[#e2ded5] py-4">
          <div><dt className="text-[8px] uppercase tracking-[0.13em] text-[#8a8a81]">Capacity</dt><dd className="mt-1 text-[10px] leading-4 text-[#4d4f49]">Project-specific</dd></div>
          <div><dt className="text-[8px] uppercase tracking-[0.13em] text-[#8a8a81]">Travel</dt><dd className="mt-1 text-[10px] leading-4 text-[#4d4f49]">Home-planned</dd></div>
          <div><dt className="text-[8px] uppercase tracking-[0.13em] text-[#8a8a81]">Stops</dt><dd className="mt-1 text-[10px] leading-4 text-[#4d4f49]">Layout-led</dd></div>
        </dl>
        <Link href={`/models/${product.slug}`} className="mt-5 inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.14em] text-ink transition-colors hover:text-[#947c56] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne">
          Explore model <MoveRight size={15} strokeWidth={1.3} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.article>
  );
}
