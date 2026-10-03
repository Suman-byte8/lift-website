"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FAQS } from "@/data/faqs";

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="py-24 bg-white border-t border-champagne-200 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-champagne-700 font-semibold block mb-2">Clarity & Confidence</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-mineral">Frequently Addressed Inquiries</h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={faq.q} className="border border-stone-200 rounded-2xl overflow-hidden transition-all duration-200">
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-6 bg-stone-50/50 hover:bg-stone-50 flex items-center justify-between gap-4 transition"
                >
                  <span className="font-serif text-base sm:text-lg text-mineral font-medium">{faq.q}</span>
                  {isOpen ? <ChevronUp size={18} className="text-stone-500 shrink-0" /> : <ChevronDown size={18} className="text-stone-500 shrink-0" />}
                </button>
                {isOpen && (
                  <div className="p-6 pt-2 bg-white text-stone-600 text-xs sm:text-sm leading-relaxed border-t border-stone-100">{faq.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
