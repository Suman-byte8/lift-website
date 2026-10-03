'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Icon from '@/components/Icon';

export default function FeatureCard({ feature, index = 0, variant = 'default' }) {
  const reduceMotion = useReducedMotion();
  const soft = variant === 'soft';
  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.68, delay: (index % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      className={`relative h-full overflow-hidden rounded-[1.5rem] border border-[#e2ded5] p-6 sm:p-7 ${soft ? feature.tone || 'bg-[#eeeee9]' : 'bg-white/55'} shadow-[0_5px_18px_rgba(45,43,37,0.025)] transition-shadow duration-500 hover:shadow-card`}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#cfc7b7] text-[#8a7656]"><Icon name={feature.icon} size={18} strokeWidth={1.3} /></div>
      <h3 className="mt-7 font-serif text-[23px] leading-tight text-ink">{feature.title}</h3>
      <p className="mt-3 text-[13px] leading-6 text-muted">{feature.text}</p>
      {feature.number && <span className="absolute right-6 top-6 text-[9px] tracking-[0.16em] text-[#a7a398]">{feature.number}</span>}
    </motion.article>
  );
}
