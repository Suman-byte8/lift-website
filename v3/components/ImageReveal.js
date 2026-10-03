'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

export default function ImageReveal({ src, alt, className = '', imageClassName = '', sizes = '(max-width: 768px) 100vw, 50vw', priority = false, fill = true, width, height, ...props }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      <motion.div className="absolute inset-0" initial={reduceMotion ? false : { scale: 1.06 }} whileInView={{ scale: 1 }} viewport={{ once: true, amount: 0.16 }} transition={reduceMotion ? { duration: 0 } : { duration: 1.2, ease: [0.22, 1, 0.36, 1] }}>
        {fill ? (
          <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={`object-cover ${imageClassName}`} />
        ) : (
          <Image src={src} alt={alt} width={width} height={height} priority={priority} className={imageClassName} />
        )}
      </motion.div>
    </motion.div>
  );
}
