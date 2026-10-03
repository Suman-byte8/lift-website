"use client";
import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

export default function StatCounter({ value, suffix = "", label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) { setN(value); return; }
    const c = animate(0, value, { duration: 2.4, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, [inView, value, reduce]);

  return (
    <div ref={ref} className="text-center lg:text-left">
      <p className="font-serif text-5xl font-medium tracking-tight text-ink sm:text-6xl" aria-label={`${value.toLocaleString("en-IN")}${suffix} ${label}`}>
        <span aria-hidden="true">{n.toLocaleString("en-IN")}<span className="text-champagne-500">{suffix}</span></span>
      </p>
      <p className="mt-3 text-[11px] font-semibold uppercase tracking-eyebrow text-ink-500" aria-hidden="true">{label}</p>
    </div>
  );
}
