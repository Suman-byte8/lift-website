"use client";
import { motion } from "framer-motion";
import Icon from "@/components/ui/Icon";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/cn";

/** Callout card with an animated leader line pointing toward the lift. */
export default function TechnicalCallout({ icon, title, text, side = "left", index = 0, compact }) {
  const left = side === "left";
  return (
    <motion.div
      initial={{ opacity: 0, x: left ? -24 : 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1, ease, delay: 0.3 + index * 0.12 }}
      className={cn("relative flex items-center", left ? "lg:flex-row" : "lg:flex-row-reverse", compact && "lg:!flex-row")}
    >
      <div className={cn("w-full rounded-2xl border border-white/80 bg-white/60 p-4 shadow-soft backdrop-blur-xl lg:max-w-[250px]", !compact && left && "lg:text-right")}>
        <div className={cn("flex items-center gap-3", !compact && left && "lg:flex-row-reverse")}>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-b from-champagne-100 to-champagne-200 text-champagne-700"><Icon name={icon} className="h-4 w-4" /></span>
          <h3 className="text-[14px] font-semibold text-ink">{title}</h3>
        </div>
        <p className="mt-2 text-[12.5px] leading-relaxed text-ink-500">{text}</p>
      </div>
      {!compact && (
        <div className={cn("hidden flex-1 items-center lg:flex", left ? "flex-row" : "flex-row-reverse")} aria-hidden="true">
          <motion.span
            className={cn("h-px flex-1 bg-gradient-to-r", left ? "origin-left from-champagne-300 to-champagne-500" : "origin-right from-champagne-500 to-champagne-300")}
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease, delay: 0.6 + index * 0.12 }}
          />
          <span className="relative grid h-3 w-3 place-items-center">
            <span className="absolute h-3 w-3 rounded-full bg-champagne-500/30 motion-safe:animate-ping [animation-duration:3s]" />
            <span className="h-1.5 w-1.5 rounded-full bg-champagne-500" />
          </span>
        </div>
      )}
    </motion.div>
  );
}
