'use client';

import { useId, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import useSafeReducedMotion from '@/lib/useSafeReducedMotion';

export default function FAQAccordion({ items, defaultOpen = -1, className = '' }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);
  const id = useId();
  const reduceMotion = useSafeReducedMotion();
  return (
    <div className={`divide-y divide-[#dedad1] border-y border-[#dedad1] ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${id}-panel-${index}`;
        const buttonId = `${id}-button-${index}`;
        return (
          <div key={item.question} className="group">
            <h3>
              <button id={buttonId} type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpenIndex(isOpen ? -1 : index)} className="flex w-full items-center justify-between gap-5 py-5 text-left text-[15px] font-normal leading-6 text-ink transition-colors hover:text-[#8c7652] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne md:py-6 md:text-[17px]">
                <span>{item.question}</span>
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#d8d3c9] transition-transform duration-300 ${isOpen ? 'rotate-45 bg-[#eeece5]' : ''}`}><Plus size={15} strokeWidth={1.4} aria-hidden="true" /></span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div id={panelId} role="region" aria-labelledby={buttonId} initial={reduceMotion ? false : { height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }} transition={{ duration: reduceMotion ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                  <p className="max-w-3xl pb-6 pr-10 text-[14px] leading-7 text-muted md:pb-7">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
