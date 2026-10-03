"use client";
import { useCallback, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";
import SmartImage from "@/components/ui/SmartImage";
import { ease } from "@/lib/motion";

const Lightbox = dynamic(() => import("./Lightbox"), { ssr: false });

const aspect = { tall: "aspect-[3/4]", short: "aspect-[4/3]", square: "aspect-square" };

/** Masonry gallery with lightbox. items: [{image, title, span?}] */
export default function Gallery({ items, columns = "sm:columns-2 lg:columns-3" }) {
  const [active, setActive] = useState(null);
  const close = useCallback(() => setActive(null), []);
  return (
    <>
      <ul className={`gap-5 [column-fill:_balance] ${columns} lg:gap-6`}>
        {items.map((it, i) => (
          <motion.li
            key={`${it.image}-${i}`}
            className="mb-5 break-inside-avoid lg:mb-6"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease, delay: (i % 3) * 0.1 }}
          >
            <button
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Open image: ${it.title}`}
              className={`group relative block w-full overflow-hidden rounded-[24px] ${aspect[it.span || (i % 3 === 0 ? "tall" : "short")]} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-500 focus-visible:ring-offset-4 focus-visible:ring-offset-ivory`}
            >
              <SmartImage image={it.image} alt={it.alt || it.title} sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="transition-transform duration-[1800ms] ease-luxe group-hover:scale-[1.07]" />
              <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-100" />
              <span className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-left">
                <span className="font-serif text-2xl text-ivory">{it.title}</span>
                <span className="grid h-10 w-10 translate-y-2 place-items-center rounded-full bg-white/80 text-ink opacity-0 backdrop-blur transition-all duration-700 ease-luxe group-hover:translate-y-0 group-hover:opacity-100" aria-hidden="true">
                  <Maximize2 className="h-4 w-4" strokeWidth={1.3} />
                </span>
              </span>
            </button>
          </motion.li>
        ))}
      </ul>
      <Lightbox items={items} index={active} onClose={close} onChange={setActive} />
    </>
  );
}
