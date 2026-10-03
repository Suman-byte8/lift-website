"use client";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/motion";

/** Fades content up once it enters the viewport. */
export function Reveal({ as = "div", variants = fadeUp, delay = 0, className, children, ...rest }) {
  const M = motion[as] || motion.div;
  const v = delay ? { ...variants, show: { ...variants.show, transition: { ...variants.show.transition, delay } } } : variants;
  return (
    <M
      className={className}
      variants={v}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      {...rest}
    >
      {children}
    </M>
  );
}

/** Parent that staggers its <StaggerItem> children. */
export function Stagger({ as = "div", gap = 0.12, delay = 0, className, children, amount = 0.15 }) {
  const M = motion[as] || motion.div;
  return (
    <M className={className} variants={stagger(gap, delay)} initial="hidden" whileInView="show" viewport={{ once: true, amount }}>
      {children}
    </M>
  );
}

export function StaggerItem({ as = "div", className, children, variants = fadeUp, ...rest }) {
  const M = motion[as] || motion.div;
  return (
    <M className={className} variants={variants} {...rest}>
      {children}
    </M>
  );
}
