'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from 'lucide-react';
import useSafeReducedMotion from '@/lib/useSafeReducedMotion';

export default function ProjectGallery({ projects, filters, linkCards = true }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeItem, setActiveItem] = useState(null);
  const reduceMotion = useSafeReducedMotion();
  const filtered = useMemo(() => activeFilter === 'All' ? projects : projects.filter((project) => project.type === activeFilter || project.style === activeFilter), [activeFilter, projects]);
  const activeIndex = activeItem ? filtered.findIndex((item) => item.slug === activeItem.slug) : -1;

  const move = (direction) => {
    if (activeIndex < 0) return;
    const nextIndex = (activeIndex + direction + filtered.length) % filtered.length;
    setActiveItem(filtered[nextIndex]);
  };

  useEffect(() => {
    if (!activeItem) return;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setActiveItem(null);
      if (event.key === 'ArrowRight') move(1);
      if (event.key === 'ArrowLeft') move(-1);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeItem, activeIndex, filtered]);

  return (
    <>
      <div className="mb-9 flex flex-col gap-5 border-b border-[#dedad1] pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
          {filters.map((filter) => (
            <button key={filter} type="button" onClick={() => setActiveFilter(filter)} aria-pressed={activeFilter === filter} className={`min-h-9 rounded-full border px-4 text-[9px] uppercase tracking-[0.13em] transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne ${activeFilter === filter ? 'border-ink bg-ink text-ivory' : 'border-[#d5d0c6] bg-transparent text-[#63645d] hover:border-ink hover:text-ink'}`}>{filter}</button>
          ))}
        </div>
        <p className="text-[10px] uppercase tracking-[0.12em] text-muted" aria-live="polite">{filtered.length} considered spaces</p>
      </div>
      <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, index) => (
            <motion.article key={project.slug} layout initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }} transition={{ duration: reduceMotion ? 0 : 0.4, delay: index * 0.025 }} className={`group ${index % 5 === 1 ? 'sm:translate-y-8' : ''}`}>
              <div className={`relative overflow-hidden rounded-[1.4rem] bg-[#e8e5dc] ${index % 4 === 0 ? 'aspect-[0.88/1]' : index % 4 === 2 ? 'aspect-[1.15/1]' : 'aspect-[1.04/1]'}`}>
                {linkCards ? (
                  <Link href={`/projects/${project.slug}`} aria-label={`View ${project.title} project`} className="absolute inset-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-champagne">
                    <Image src={project.image} alt={project.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-[1100ms] group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#22231e]/65 via-transparent to-transparent opacity-75 transition-opacity duration-500 group-hover:opacity-95" />
                    <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                      <p className="text-[8px] uppercase tracking-[0.18em] text-white/75">{project.type} <span className="px-1.5">·</span> {project.style}</p>
                      <div className="mt-2 flex items-end justify-between gap-3">
                        <div><h3 className="font-serif text-[25px] leading-tight">{project.title}</h3><p className="mt-1 text-[11px] text-white/75">{project.location}</p></div>
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/60 transition-all group-hover:bg-white group-hover:text-ink"><ArrowUpRight size={15} strokeWidth={1.3} /></span>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <button type="button" onClick={() => setActiveItem(project)} aria-label={`Open image: ${project.title}`} className="absolute inset-0 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-champagne">
                    <Image src={project.image} alt={project.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-[1100ms] group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#22231e]/65 via-transparent to-transparent opacity-75 transition-opacity duration-500 group-hover:opacity-95" />
                    <div className="absolute inset-x-0 bottom-0 p-5 text-left text-white sm:p-6"><p className="text-[8px] uppercase tracking-[0.18em] text-white/75">{project.type} <span className="px-1.5">·</span> {project.style}</p><h3 className="mt-2 font-serif text-[25px] leading-tight">{project.title}</h3><p className="mt-1 text-[11px] text-white/75">{project.location}</p></div>
                  </button>
                )}
              </div>
              <p className="mt-4 max-w-sm text-[12px] leading-5 text-muted">{project.summary}</p>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
      {!linkCards && (
        <AnimatePresence>
          {activeItem && (
            <motion.div role="dialog" aria-modal="true" aria-label={`${activeItem.title} gallery image`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduceMotion ? 0 : 0.2 }} onClick={() => setActiveItem(null)} className="fixed inset-0 z-[80] flex items-center justify-center bg-[#151613]/90 p-4 backdrop-blur-sm sm:p-8">
              <motion.div initial={reduceMotion ? false : { scale: 0.97, y: 12 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.98 }} transition={{ duration: reduceMotion ? 0 : 0.3 }} onClick={(event) => event.stopPropagation()} className="relative w-full max-w-6xl">
                <div className="relative aspect-[4/3] max-h-[78vh] overflow-hidden rounded-xl bg-[#363832] sm:aspect-[16/10]">
                  <Image src={activeItem.image} alt={activeItem.alt} fill sizes="90vw" className="object-contain" priority />
                </div>
                <div className="mt-4 flex items-center justify-between gap-5 text-white">
                  <div><p className="text-[9px] uppercase tracking-[0.16em] text-white/65">{activeItem.type} · {activeItem.location}</p><p className="mt-1 font-serif text-[23px]">{activeItem.title}</p></div>
                  <div className="flex gap-2">
                    <button type="button" onClick={() => move(-1)} aria-label="Previous image" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/45 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><ArrowLeft size={16} /></button>
                    <button type="button" onClick={() => move(1)} aria-label="Next image" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/45 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><ArrowRight size={16} /></button>
                    <button type="button" onClick={() => setActiveItem(null)} aria-label="Close gallery" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/45 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><X size={16} /></button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  );
}
