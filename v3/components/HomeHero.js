'use client';

import { images } from '@/data/images';
import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ButtonLink from '@/components/ButtonLink';
import Link from 'next/link';
import { ArrowDown, MoveUpRight } from 'lucide-react';

export default function HomeHero() {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  return (
    <section ref={sectionRef} className="relative isolate flex min-h-[690px] items-center overflow-hidden bg-[#e9e5dc] md:min-h-[720px] lg:min-h-[calc(100svh-110px)]">
      <motion.div className="absolute inset-0" style={reduceMotion ? undefined : { y: imageY }}>
        <Image src={images.hero.src} alt="A glass home lift integrated into a warm, light-filled contemporary residence" fill priority sizes="100vw" className="object-cover object-[62%_center] md:object-center" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#f8f5ef]/95 via-[#f8f5ef]/54 to-[#f8f5ef]/12 md:bg-gradient-to-r md:from-[#f8f5ef]/95 md:via-[#f8f5ef]/82 md:to-[#f8f5ef]/12" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent" />
      <div className="relative mx-auto w-full max-w-[1440px] px-5 pb-16 pt-20 sm:px-8 md:px-12 md:pb-24 md:pt-24 lg:px-16">
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={reduceMotion ? { duration: 0 } : { duration: 1, ease: [0.22, 1, 0.36, 1] }} className="max-w-[650px]">
          <p className="mb-7 flex items-center gap-3 text-[9px] font-medium uppercase tracking-[0.22em] text-[#887554]"><span className="h-px w-8 bg-[#a88c63]" /> The future of home mobility</p>
          <h1 className="font-serif text-[clamp(4rem,9.4vw,8.5rem)] font-normal leading-[0.86] tracking-[-0.06em] text-ink">Elevate the Way<br className="hidden sm:block" /> You Live.</h1>
          <p className="mt-7 max-w-[440px] text-[14px] leading-7 text-[#555751] md:text-[16px] md:leading-8">A considered home lift is more than a way between floors. It is a thoughtful part of the home you already love—and the life still unfolding in it.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/home-lifts">Explore home lifts</ButtonLink>
            <ButtonLink href="/contact" variant="outline">Book a consultation</ButtonLink>
          </div>
          <div className="mt-12 flex items-center gap-4 text-[9px] uppercase tracking-[0.17em] text-[#74756d]">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#b8b1a2]"><ArrowDown size={13} strokeWidth={1.3} /></span>
            A quieter kind of arrival
          </div>
        </motion.div>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={reduceMotion ? { duration: 0 } : { delay: 0.45, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-9 right-5 hidden w-[238px] rounded-[1.2rem] border border-white/70 bg-[#fbfaf6]/85 p-4 shadow-soft backdrop-blur-md sm:block md:bottom-12 md:right-12 lg:right-16"
        >
          <div className="flex items-start justify-between gap-3"><div><p className="text-[8px] uppercase tracking-[0.19em] text-[#8b7657]">A considered detail</p><p className="mt-2 font-serif text-[20px] leading-tight text-ink">Architecture, in motion.</p></div><MoveUpRight size={16} strokeWidth={1.3} className="mt-1 text-[#8b7657]" /></div>
          <div className="mt-4 border-t border-[#ddd8cd] pt-3 text-[9px] uppercase leading-4 tracking-[0.12em] text-muted">AUREL <span className="px-1.5 text-[#b39b73]">/</span> Home collection</div>
        </motion.div>
        <Link href="/projects" className="absolute bottom-5 right-5 inline-flex items-center gap-2 text-[8px] uppercase tracking-[0.16em] text-[#6f7068] sm:hidden">See the collection <MoveUpRight size={12} /></Link>
      </div>
      <div className="pointer-events-none absolute right-6 top-8 hidden flex-col items-end text-[8px] uppercase leading-5 tracking-[0.14em] text-[#69675d]/70 md:flex lg:right-12">
        <span>01 / 04</span><span>Residential collection</span>
      </div>
    </section>
  );
}
