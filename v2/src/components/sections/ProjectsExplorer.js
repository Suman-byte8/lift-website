"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { projects, projectFilters } from "@/data/projects";
import { getProduct } from "@/data/products";
import SmartImage from "@/components/ui/SmartImage";
import { ease } from "@/lib/motion";

export default function ProjectsExplorer() {
  const [filter, setFilter] = useState("All");
  const list = useMemo(() => (filter === "All" ? projects : projects.filter((p) => p.tags.includes(filter))), [filter]);
  return (
    <div>
      <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
        {projectFilters.map((f) => {
          const active = f === filter;
          return (
            <button key={f} type="button" aria-pressed={active} onClick={() => setFilter(f)} className={`relative rounded-full px-5 py-2.5 text-[13px] transition-colors duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-500 ${active ? "text-white" : "border border-ink/10 bg-white/60 text-ink-700 hover:border-champagne-500"}`}>
              {active && <motion.span layoutId="proj-chip" className="absolute inset-0 rounded-full bg-ink" transition={{ type: "spring", stiffness: 300, damping: 32 }} />}
              <span className="relative">{f}</span>
            </button>
          );
        })}
      </div>
      <p className="mt-6 text-[13px] text-ink-500" aria-live="polite">{list.length} {list.length === 1 ? "project" : "projects"}</p>
      <motion.ul layout className="mt-8 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((p, i) => (
            <motion.li
              layout key={p.slug}
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.8, ease, delay: (i % 3) * 0.08 }}
              className={`group relative ${i % 3 === 1 ? "lg:mt-16" : ""}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[26px]">
                <SmartImage image={p.cover} alt={`${p.title}, ${p.location}`} sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw" className="transition-transform duration-[1800ms] ease-luxe group-hover:scale-[1.06]" />
                <span aria-hidden="true" className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/80 text-ink backdrop-blur transition-all duration-700 ease-luxe group-hover:rotate-45 group-hover:bg-champagne-500 group-hover:text-white"><ArrowUpRight className="h-4 w-4" strokeWidth={1.4} /></span>
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => <span key={t} className="rounded-full bg-white/75 px-3 py-1 text-[10.5px] uppercase tracking-[0.16em] text-ink-700 backdrop-blur">{t}</span>)}
                </div>
              </div>
              <p className="mt-5 flex items-center gap-1.5 text-[12px] uppercase tracking-[0.16em] text-ink-500"><MapPin className="h-3.5 w-3.5" strokeWidth={1.4} aria-hidden="true" />{p.location}</p>
              <h2 className="mt-2 font-serif text-3xl text-ink">
                <Link href={`/projects/${p.slug}`} className="after:absolute after:inset-0 focus-visible:outline-none focus-visible:underline">{p.title}</Link>
              </h2>
              <p className="mt-2 text-[14px] text-ink-500">{p.summary}</p>
              <p className="mt-3 text-[12.5px] text-champagne-700">{getProduct(p.model)?.name} · {p.stops} stops</p>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}
