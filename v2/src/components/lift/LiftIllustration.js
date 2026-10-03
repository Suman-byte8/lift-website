"use client";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

/**
 * Code-drawn glass home lift (no image dependency). Used in hero, technology and safety sections.
 * `floors` = number of landings drawn. `travel` animates the cabin once from the lowest to the
 * highest landing when it scrolls into view.
 */
export default function LiftIllustration({ floors = 3, className, travel = true, tone = "light" }) {
  const reduce = useReducedMotion();
  const slabs = Array.from({ length: floors - 1 }, (_, i) => ((i + 1) / floors) * 100);
  const cabinH = 100 / floors - 4;
  const start = 100 - cabinH - 2; // bottom landing (top %)
  const end = 2; // top landing

  return (
    <div className={cn("relative aspect-[9/19] w-full", className)} role="img" aria-label="Illustration of a glass home lift spanning multiple floors">
      {/* floor slabs extending beyond the frame */}
      {slabs.map((y) => (
        <div key={y} className="absolute -left-[18%] -right-[18%] h-[1.4%] rounded-full bg-gradient-to-r from-transparent via-taupe-300/70 to-transparent" style={{ top: `${y}%` }} />
      ))}
      <div className="absolute -left-[22%] -right-[22%] bottom-0 h-[1.6%] rounded-full bg-gradient-to-r from-transparent via-taupe-300 to-transparent" />

      {/* shaft frame */}
      <div className={cn(
        "absolute inset-0 overflow-hidden rounded-[18px] border shadow-glass",
        tone === "light" ? "border-white/80 bg-gradient-to-b from-white/50 via-white/25 to-mist-100/40" : "border-white/30 bg-white/10"
      )}>
        {/* posts */}
        <div className="absolute inset-y-0 left-0 w-[5%] bg-gradient-to-r from-champagne-500 via-champagne-200 to-champagne-500 opacity-80" />
        <div className="absolute inset-y-0 right-0 w-[5%] bg-gradient-to-r from-champagne-500 via-champagne-200 to-champagne-500 opacity-80" />
        {/* guide rails */}
        <div className="absolute inset-y-[1%] left-[22%] w-px bg-ink/15" />
        <div className="absolute inset-y-[1%] right-[22%] w-px bg-ink/15" />
        {/* glass panel joints */}
        {slabs.map((y) => (
          <div key={y} className="absolute left-[5%] right-[5%] h-px bg-white/90" style={{ top: `${y}%` }} />
        ))}
        {/* reflections */}
        <div className="absolute -left-1/2 top-0 h-full w-[60%] -skew-x-12 bg-gradient-to-r from-transparent via-white/45 to-transparent" />
        <div className="absolute left-[55%] top-0 h-full w-[8%] -skew-x-12 bg-white/25" />

        {/* cabin */}
        <motion.div
          className="absolute left-[9%] right-[9%]"
          style={{ height: `${cabinH}%` }}
          initial={{ top: `${travel && !reduce ? start : end}%` }}
          whileInView={{ top: `${end}%` }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 3.6, ease: [0.45, 0, 0.2, 1], delay: 0.4 }}
        >
          <div className="relative h-full w-full overflow-hidden rounded-[10px] border border-champagne-300/80 bg-gradient-to-b from-champagne-100/90 via-ivory/70 to-champagne-200/70 shadow-[0_20px_40px_-18px_rgba(122,99,64,0.55)]">
            {/* ceiling light */}
            <div className="absolute inset-x-[12%] top-[4%] h-[5%] rounded-full bg-white shadow-[0_0_24px_6px_rgba(255,244,222,0.95)]" />
            {/* back wall glass */}
            <div className="absolute inset-x-[8%] bottom-[10%] top-[14%] rounded-[6px] border border-white/80 bg-gradient-to-br from-white/60 to-sage-50/40" />
            {/* handrail */}
            <div className="absolute inset-x-[8%] top-[55%] h-[2.5%] rounded-full bg-gradient-to-r from-champagne-600 via-champagne-300 to-champagne-600" />
            {/* control panel */}
            <div className="absolute right-[12%] top-[30%] flex h-[22%] w-[8%] flex-col items-center justify-evenly rounded-[3px] bg-ink/80">
              <span className="h-1 w-1 rounded-full bg-champagne-200" />
              <span className="h-1 w-1 rounded-full bg-champagne-200/60" />
              <span className="h-1 w-1 rounded-full bg-champagne-200/60" />
            </div>
            {/* floor */}
            <div className="absolute inset-x-0 bottom-0 h-[10%] bg-gradient-to-b from-taupe-300 to-taupe-500" />
            {/* door split */}
            <div className="absolute inset-y-[14%] left-1/2 w-px bg-white/90" />
          </div>
        </motion.div>
      </div>

      {/* top machine cap */}
      <div className="absolute -top-[2.5%] left-[-2%] right-[-2%] h-[3%] rounded-t-[10px] bg-gradient-to-b from-champagne-300 to-champagne-500 shadow-soft" />
    </div>
  );
}
