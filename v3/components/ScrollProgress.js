'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import useSafeReducedMotion from '@/lib/useSafeReducedMotion';

export default function ScrollProgress() {
  const reduceMotion = useSafeReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 90, damping: 24, restDelta: 0.001 });
  if (reduceMotion) return null;
  return <motion.div aria-hidden="true" className="fixed left-0 right-0 top-0 z-[100] h-[2px] origin-left bg-[#a88d64]" style={{ scaleX }} />;
}
