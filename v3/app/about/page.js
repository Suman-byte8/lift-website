import Image from 'next/image';
import { createPageMetadata } from '@/lib/seo';
import { images } from '@/data/images';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import FeatureCard from '@/components/FeatureCard';
import ProcessTimeline from '@/components/ProcessTimeline';
import CTASection from '@/components/CTASection';
import ButtonLink from '@/components/ButtonLink';
import { processSteps } from '@/data/content';
import { Reveal } from '@/components/Reveal';

export const metadata = createPageMetadata({ title: 'About AUREL', description: 'Discover the AUREL point of view: thoughtful residential mobility, considered engineering and a home-first design process.', path: '/about', image: images.interiors.villaLiving.src, imageAlt: images.interiors.villaLiving.alt });

const principles = [
  { icon: 'House', title: 'Begin with the home', text: 'We look at the building, the people and the everyday routes before recommending a lift direction.' },
  { icon: 'Layers3', title: 'Design in context', text: 'Materials, proportion, light and circulation are part of the conversation from the start.' },
  { icon: 'Cog', title: 'Explain the engineering', text: 'We make technical decisions easier to understand, and distinguish ideas from confirmed specifications.' },
  { icon: 'Heart', title: 'Care beyond handover', text: 'Clear guidance and a defined service path matter long after the first journey.' }
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="The AUREL point of view" title={<>A more considered<br />kind of home lift.</>} description="We believe the best home mobility feels effortless—not because it was an afterthought, but because every detail was thoughtfully considered." image={images.interiors.villaLiving.src} alt="Warm, light-filled contemporary residence with carefully layered materials" breadcrumbs={[{ label: 'About' }]}>
        <ButtonLink href="/contact">Meet your specialist</ButtonLink>
        <ButtonLink href="/projects" variant="outline">See our approach</ButtonLink>
      </PageHero>

      <section className="bg-[#f7f5ef] py-20 md:py-28">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 sm:px-8 md:px-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-16">
          <div><SectionHeading eyebrow="A different starting point" title={<>The home is the<br />first brief.</>} description="AUREL is built around one simple idea: a home lift should belong to the home it serves. That means starting with people, plans, light, structure and daily routines—not with a product page." /><p className="mt-5 max-w-xl text-[13px] leading-7 text-muted">We bring architectural sensitivity and practical engineering into the same conversation, helping clients ask better questions and make decisions with confidence.</p></div>
          <div className="relative min-h-[480px] overflow-hidden rounded-[1.5rem]"><Image src={images.hero.src} alt="Modern private lift and oak stair in a double-height home" fill sizes="(max-width: 1024px) 100vw, 52vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#20211d]/45 via-transparent to-transparent" /><div className="absolute bottom-7 left-7 max-w-sm text-white"><p className="text-[9px] uppercase tracking-[0.17em] text-white/75">AUREL / since the first conversation</p><p className="mt-3 font-serif text-[30px] leading-tight">Mobility that feels part of home.</p></div></div>
        </div>
      </section>

      <section className="bg-[#e9ede7] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16"><div className="mb-11 grid gap-7 lg:grid-cols-[0.82fr_1.18fr] lg:items-end"><SectionHeading eyebrow="What guides us" title={<>A philosophy you<br />can feel in the details.</>} /><p className="max-w-xl text-[14px] leading-7 text-muted lg:justify-self-end">From the first plan to the day the lift is used, we want every step to feel measured, clear and respectful of the home.</p></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{principles.map((principle, index) => <FeatureCard key={principle.title} feature={principle} index={index} variant="soft" />)}</div></div>
      </section>

      <section className="bg-[#f0eee8] py-20 md:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 md:px-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-16">
          <div className="relative min-h-[460px] overflow-hidden rounded-[1.5rem]"><Image src={images.staircaseLift.src} alt="Lift and staircase composition with wood, glass and natural light" fill sizes="(max-width: 1024px) 100vw, 48vw" className="object-cover" /></div>
          <div><SectionHeading eyebrow="Engineering with restraint" title={<>Quiet technology.<br />Clear decisions.</>} description="Technology should solve a real need, feel intuitive in use and be explained in a way that lets you choose confidently." /><div className="mt-7 space-y-5">{['Quality starts with the right questions.', 'Installation is planned around the reality of the site.', 'After-sales care is part of the user experience.'].map((text, index) => <Reveal key={text} delay={index * 0.08} className="flex gap-4 border-t border-[#dcd8ce] pt-5"><span className="font-serif text-[20px] text-[#9f8965]">0{index + 1}</span><p className="max-w-sm text-[13px] leading-6 text-[#565850]">{text}</p></Reveal>)}</div></div>
        </div>
      </section>

      <section className="bg-[#f7f5ef] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16"><div className="grid gap-9 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"><SectionHeading eyebrow="Working as one team" title={<>From first sketch<br />to familiar routine.</>} /><div><p className="max-w-xl text-[14px] leading-7 text-muted">A home lift project touches architecture, structure, services and daily life. We encourage early collaboration with your architect, contractor and other specialists to make the full process easier to navigate.</p><Link href="/technology" className="group mt-5 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] text-ink">Our technology approach <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></Link></div></div><ProcessTimeline steps={processSteps} /></div>
      </section>

      <section className="bg-[#e9ede7] py-20 md:py-28"><div className="mx-auto grid max-w-[1440px] items-center gap-9 px-5 sm:px-8 md:px-12 lg:grid-cols-[1fr_1fr] lg:px-16"><div><SectionHeading eyebrow="An open invitation" title={<>Tell us about<br />your home.</>} description="A first conversation is simply a chance to understand the space, your priorities and what you would like to make easier." /><ButtonLink href="/contact" className="mt-7">Start a conversation</ButtonLink></div><div className="rounded-[1.5rem] border border-[#d6ddd3] bg-[#f6f7f3]/75 p-7 md:p-9"><p className="text-[9px] uppercase tracking-[0.17em] text-[#8a7657]">Our commitment</p><blockquote className="mt-5 font-serif text-[clamp(1.7rem,3vw,2.7rem)] leading-tight text-ink">“A lift should add possibility to the home—not take anything away from its character.”</blockquote><p className="mt-5 text-[10px] uppercase tracking-[0.13em] text-muted">The AUREL design principle</p></div></div></section>
      <CTASection title="Let’s shape what comes next." description="Explore a more considered approach to moving through your home." image={images.interiors.villaExterior.src} />
    </>
  );
}
