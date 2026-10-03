"use client";
import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { ease } from "@/lib/motion";

export default function FAQAccordion({ items, defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen);
  const base = useId();
  return (
    <ul className="divide-y divide-ink/10 border-y border-ink/10">
      {items.map((f, i) => {
        const isOpen = open === i;
        const id = `${base}-${i}`;
        return (
          <li key={f.q}>
            <h3>
              <button
                type="button"
                id={`${id}-btn`}
                aria-expanded={isOpen}
                aria-controls={`${id}-panel`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-center justify-between gap-6 py-6 text-left focus-visible:outline-none"
              >
                <span className={`font-serif text-[1.35rem] leading-snug transition-colors duration-500 sm:text-2xl ${isOpen ? "text-champagne-700" : "text-ink group-hover:text-champagne-600"} group-focus-visible:underline group-focus-visible:decoration-champagne-500 group-focus-visible:underline-offset-4`}>{f.q}</span>
                <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-all duration-700 ease-luxe ${isOpen ? "rotate-45 border-champagne-500 bg-champagne-500 text-white" : "border-ink/15 text-ink"}`} aria-hidden="true">
                  <Plus className="h-4 w-4" strokeWidth={1.4} />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`${id}-panel`}
                  role="region"
                  aria-labelledby={`${id}-btn`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.6, ease }}
                  className="overflow-hidden"
                >
                  <p className="max-w-3xl pb-7 pr-14 text-[15px] leading-relaxed text-ink-500">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
