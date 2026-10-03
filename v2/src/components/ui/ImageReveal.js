"use client";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SmartImage from "./SmartImage";
import { revealMask, viewport } from "@/lib/motion";
import { cn } from "@/lib/cn";

/** Image that unmasks on scroll-in, with an optional gentle parallax. */
export default function ImageReveal({ image, alt, className, sizes, parallax = true, priority, children }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <motion.div
      ref={ref}
      variants={revealMask}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className={cn("relative overflow-hidden rounded-[28px] bg-mist-50", className)}
    >
      <motion.div className="absolute inset-[-8%]" style={parallax && !reduce ? { y } : undefined}>
        <SmartImage image={image} alt={alt} sizes={sizes} priority={priority} />
      </motion.div>
      {children}
    </motion.div>
  );
}
