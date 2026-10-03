'use client';

import { motion } from 'framer-motion';
import useSafeReducedMotion from '@/lib/useSafeReducedMotion';

export function Reveal({ children, className = '', delay = 0, distance = 22, duration = 0.8, once = true }) {
  const reduceMotion = useSafeReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.16, margin: '0px 0px -40px 0px' }}
      transition={reduceMotion ? { duration: 0 } : { duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({ children, className = '', delay = 0.08, once = true }) {
  const reduceMotion = useSafeReducedMotion();
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.12 }}
      variants={{ visible: { transition: { staggerChildren: reduceMotion ? 0 : delay } } }}
    >
      {children}
    </motion.div>
  );
}

export const revealItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } }
};
