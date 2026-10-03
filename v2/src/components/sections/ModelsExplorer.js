"use client";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { products, productCategories, productUses } from "@/data/products";
import ProductCard from "./ProductCard";

function Chips({ label, options, value, onChange }) {
  return (
    <div role="group" aria-label={label} className="flex flex-wrap items-center gap-2">
      <span className="mr-2 text-[11px] font-semibold uppercase tracking-eyebrow text-ink-500">{label}</span>
      {options.map((o) => {
        const active = value === o;
        return (
          <button
            key={o}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(o)}
            className={`relative rounded-full px-4 py-2 text-[13px] transition-colors duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-500 ${active ? "text-white" : "border border-ink/10 bg-white/60 text-ink-700 hover:border-champagne-500"}`}
          >
            {active && <motion.span layoutId={`chip-${label}`} className="absolute inset-0 rounded-full bg-ink" transition={{ type: "spring", stiffness: 300, damping: 32 }} />}
            <span className="relative">{o}</span>
          </button>
        );
      })}
    </div>
  );
}

export default function ModelsExplorer() {
  const [cat, setCat] = useState("All");
  const [use, setUse] = useState("All homes");
  const list = useMemo(
    () => products.filter((p) => (cat === "All" || p.category === cat) && (use === "All homes" || p.bestFor.includes(use))),
    [cat, use]
  );
  return (
    <div>
      <div className="flex flex-col gap-4 rounded-[24px] border border-white/80 bg-white/50 p-5 shadow-soft backdrop-blur lg:flex-row lg:items-center lg:justify-between lg:p-6">
        <Chips label="Type" options={productCategories} value={cat} onChange={setCat} />
        <Chips label="Best for" options={productUses} value={use} onChange={setUse} />
      </div>
      <p className="mt-6 text-[13px] text-ink-500" aria-live="polite">{list.length} {list.length === 1 ? "model" : "models"} shown</p>
      <motion.div layout className="mt-8 grid gap-8 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {list.map((p, i) => <ProductCard key={p.slug} product={p} index={products.indexOf(p)} />)}
        </AnimatePresence>
      </motion.div>
      {list.length === 0 && (
        <div className="mt-8 rounded-[24px] border border-dashed border-ink/15 p-12 text-center text-ink-500">
          No model matches both filters. <button className="font-semibold text-champagne-600 underline" onClick={() => { setCat("All"); setUse("All homes"); }}>Reset filters</button>
        </div>
      )}
    </div>
  );
}
