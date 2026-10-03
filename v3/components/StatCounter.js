'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import useSafeReducedMotion from '@/lib/useSafeReducedMotion';

export default function StatCounter({ value, suffix = '', label, className = '' }) {
  const ref = useRef(null);
  const visible = useInView(ref, { once: true, amount: 0.45 });
  const reduceMotion = useSafeReducedMotion();
  const [count, setCount] = useState(reduceMotion ? value : 0);

  useEffect(() => {
    if (!visible) return;
    if (reduceMotion) {
      setCount(value);
      return;
    }
    let frame;
    const start = performance.now();
    const duration = 1100;
    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [visible, value, reduceMotion]);

  return (
    <div ref={ref} className={className}>
      <p className="font-serif text-[clamp(2rem,3.4vw,3.2rem)] leading-none tracking-[-0.04em] text-ink"><span>{String(count).padStart(value < 10 ? 2 : 1, '0')}</span><span className="ml-1 text-[0.48em] font-sans tracking-normal text-[#897a61]">{suffix}</span></p>
      <p className="mt-3 max-w-[180px] text-[10px] uppercase leading-5 tracking-[0.13em] text-muted">{label}</p>
    </div>
  );
}
