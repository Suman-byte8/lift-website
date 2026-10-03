"use client";
import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import SmartImage from "@/components/ui/SmartImage";
import { ease } from "@/lib/motion";

/** items: [{image, title}] ; index: number|null */
export default function Lightbox({ items, index, onClose, onChange }) {
  const closeRef = useRef(null);
  const open = index !== null && index !== undefined;

  useEffect(() => {
    if (!open) return;
    const prevFocus = document.activeElement;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onChange((index + 1) % items.length);
      if (e.key === "ArrowLeft") onChange((index - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = prev; window.removeEventListener("keydown", onKey); prevFocus?.focus?.(); };
  }, [open, index, items.length, onClose, onChange]);

  const item = open ? items[index] : null;
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog" aria-modal="true" aria-label={`Image ${index + 1} of ${items.length}: ${item.title}`}
          className="fixed inset-0 z-[90] flex flex-col bg-[#F5F1EA]/90 backdrop-blur-2xl"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease }}
          onClick={onClose}
        >
          <div className="flex items-center justify-between px-5 py-5 sm:px-10" onClick={(e) => e.stopPropagation()}>
            <p className="text-[12px] uppercase tracking-[0.24em] text-ink-500">{String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</p>
            <button ref={closeRef} onClick={onClose} aria-label="Close gallery" className="grid h-11 w-11 place-items-center rounded-full border border-ink/10 bg-white/70 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-500"><X className="h-5 w-5" strokeWidth={1.3} /></button>
          </div>
          <div className="relative flex flex-1 items-center justify-center px-4 pb-6 sm:px-20" onClick={(e) => e.stopPropagation()}>
            <AnimatePresence mode="wait">
              <motion.figure
                key={index}
                className="relative h-full max-h-[78vh] w-full max-w-6xl overflow-hidden rounded-[24px] shadow-lift"
                initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.6, ease }}
              >
                <SmartImage image={item.image} alt={item.alt || item.title} sizes="90vw" className="object-cover" />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/60 to-transparent p-6 font-serif text-2xl text-ivory sm:text-3xl">{item.title}</figcaption>
              </motion.figure>
            </AnimatePresence>
            {items.length > 1 && (
              <>
                <button onClick={() => onChange((index - 1 + items.length) % items.length)} aria-label="Previous image" className="absolute left-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/70 bg-white/70 backdrop-blur focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-500 sm:left-6"><ChevronLeft className="h-5 w-5" strokeWidth={1.3} /></button>
                <button onClick={() => onChange((index + 1) % items.length)} aria-label="Next image" className="absolute right-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/70 bg-white/70 backdrop-blur focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-500 sm:right-6"><ChevronRight className="h-5 w-5" strokeWidth={1.3} /></button>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
