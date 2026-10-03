"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, VolumeX, Ruler } from "lucide-react";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import SmartImage from "@/components/ui/SmartImage";
import LiftIllustration from "@/components/lift/LiftIllustration";
import { ease } from "@/lib/motion";

const specCards = [
  { icon: VolumeX, label: "Whisper-quiet", value: "Soft-start drive", pos: "left-[-4%] top-[18%] sm:left-[-10%]", delay: 1.1 },
  { icon: ShieldCheck, label: "Safety", value: "Battery-backed lowering", pos: "right-[-2%] top-[46%] sm:right-[-6%]", delay: 1.3 },
  { icon: Ruler, label: "Footprint", value: "From ~1 m² *", pos: "right-[4%] bottom-[10%]", delay: 1.5 },
];

const particles = [12, 28, 44, 63, 78, 90];

export default function HeroSection() {
  const ref = useRef(null);
  const prefersReduce = useReducedMotion();
  // Only honour reduced motion after mount so the first client render matches the server HTML.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reduce = mounted && prefersReduce;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const liftY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  const line = { hidden: { y: "105%" }, show: (i) => ({ y: "0%", transition: { duration: 1.2, ease, delay: 0.15 + i * 0.12 } }) };

  return (
    <section ref={ref} className="relative -mt-20 overflow-hidden pt-20 lg:-mt-24 lg:pt-24" aria-labelledby="hero-title">
      {/* layered gradient field */}
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,#FAF8F4_0%,#F5F1EA_60%,#EEF1ED_100%)]" />
      <div aria-hidden="true" className="absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-champagne-200/60 blur-3xl motion-safe:animate-drift" />
      <div aria-hidden="true" className="absolute -right-32 bottom-0 h-[460px] w-[460px] rounded-full bg-sage-100 blur-3xl motion-safe:animate-drift [animation-delay:-8s]" />
      <div aria-hidden="true" className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent_0_119px,rgba(32,33,31,0.035)_119px_120px)]" />

      <div className="relative mx-auto grid max-w-[1320px] items-center gap-14 px-5 pb-20 pt-10 sm:px-8 lg:min-h-[calc(100svh-96px)] lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:px-12 lg:pb-24 lg:pt-6">
        {/* copy */}
        <div className="relative z-10 max-w-xl">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease }}>
            <Eyebrow>The future of home mobility</Eyebrow>
          </motion.div>
          <h1 id="hero-title" className="mt-7 font-serif text-[3.4rem] font-medium leading-[0.98] tracking-[-0.02em] text-ink sm:text-7xl lg:text-[5.6rem]">
            {["Elevate the Way", "You Live."].map((t, i) => (
              <span key={t} className="block overflow-hidden pb-2">
                <motion.span className="block" custom={i} variants={line} initial={reduce ? "show" : "hidden"} animate="show">
                  {i === 1 ? <>You <em className="font-normal italic text-champagne-600">Live.</em></> : t}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p
            className="mt-7 max-w-md text-[15.5px] leading-relaxed text-ink-500 sm:text-base"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease, delay: 0.6 }}
          >
            Residential lifts engineered to disappear into your architecture — compact, remarkably quiet and designed around every
            safety detail, so each floor of your home is effortless to reach.
          </motion.p>
          <motion.div className="mt-10 flex flex-col gap-3 sm:flex-row" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease, delay: 0.8 }}>
            <Button href="/home-lifts">Explore Home Lifts</Button>
            <Button href="/contact" variant="glass" arrow={false}>Book a Consultation</Button>
          </motion.div>
          <motion.dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-ink/10 pt-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 1.1 }}>
            {[["2–7", "Stops"], ["4", "Model families"], ["24/7", "Support"]].map(([v, l]) => (
              <div key={l}>
                <dt className="text-[10.5px] uppercase tracking-[0.2em] text-ink-500">{l}</dt>
                <dd className="mt-1 font-serif text-3xl text-ink">{v}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* visual */}
        <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none">
          <motion.div
            className="relative mx-auto aspect-[4/5] w-[88%] overflow-hidden rounded-t-[999px] rounded-b-[32px] shadow-lift sm:w-[80%] lg:ml-auto lg:mr-0"
            initial={{ opacity: 0, clipPath: "inset(30% 0 0 0 round 999px 999px 32px 32px)" }}
            animate={{ opacity: 1, clipPath: "inset(0% 0 0 0 round 999px 999px 32px 32px)" }}
            transition={{ duration: 1.6, ease, delay: 0.2 }}
          >
            <motion.div className="absolute inset-[-10%]" style={reduce ? undefined : { y: imgY }}>
              <SmartImage image="heroInterior" priority sizes="(min-width:1024px) 45vw, 90vw" />
            </motion.div>
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-champagne-100/20" />
            {/* rising light motes */}
            {!reduce && particles.map((x, i) => (
              <span key={x} aria-hidden="true" className="absolute bottom-6 h-1 w-1 rounded-full bg-white/80 shadow-[0_0_8px_2px_rgba(255,255,255,0.7)] animate-rise" style={{ left: `${x}%`, animationDelay: `${i * 1.9}s` }} />
            ))}
          </motion.div>

          {/* drawn lift in front of the arch */}
          <motion.div
            className="absolute bottom-[-4%] left-[2%] w-[30%] sm:left-[6%] lg:left-[-2%]"
            style={reduce ? undefined : { y: liftY }}
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.4, ease, delay: 0.7 }}
          >
            <LiftIllustration floors={3} />
            {/* technical annotation */}
            <div className="absolute left-full top-[30%] hidden items-center sm:flex" aria-hidden="true">
              <span className="h-px w-10 bg-champagne-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-champagne-500" />
              <span className="ml-2 whitespace-nowrap rounded-full bg-white/70 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-ink-500 backdrop-blur">Panoramic enclosure</span>
            </div>
          </motion.div>

          {specCards.map(({ icon: I, label, value, pos, delay }) => (
            <motion.div
              key={label}
              className={`absolute ${pos} z-10 hidden sm:block`}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, ease, delay }}
            >
              <div className="flex items-center gap-3 rounded-2xl border border-white/80 bg-white/65 py-3 pl-3 pr-5 shadow-glass backdrop-blur-xl motion-safe:animate-float" style={{ animationDelay: `${delay * 2}s` }}>
                <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-b from-champagne-100 to-champagne-200 text-champagne-700"><I className="h-4 w-4" strokeWidth={1.4} aria-hidden="true" /></span>
                <span>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-ink-500">{label}</span>
                  <span className="block text-[13px] font-semibold text-ink">{value}</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <p className="relative mx-auto max-w-[1320px] px-5 pb-6 text-[11px] text-ink-300 sm:px-8 lg:px-12">* Indicative; final dimensions depend on model and site survey.</p>
    </section>
  );
}
