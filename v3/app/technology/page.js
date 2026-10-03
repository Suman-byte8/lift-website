import Image from 'next/image';
import { createPageMetadata } from '@/lib/seo';
import { images } from '@/data/images';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import FeatureCard from '@/components/FeatureCard';
import CTASection from '@/components/CTASection';
import ButtonLink from '@/components/ButtonLink';
import Icon from '@/components/Icon';
import { technologyFeatures, processSteps } from '@/data/content';
import { Reveal } from '@/components/Reveal';

export const metadata = createPageMetadata({ title: 'Home lift technology', description: 'Understand the drive, controls, safety systems and service considerations behind a thoughtfully planned residential lift.', path: '/technology', image: images.hero.src, imageAlt: images.hero.alt });

const engineeringSteps = [
  { number: '01', title: 'The home', body: 'Structure, openings, travel, landing positions and the existing services are reviewed.' },
  { number: '02', title: 'The system', body: 'Drive approach and equipment are matched to the site, intended use and applicable rules.' },
  { number: '03', title: 'The experience', body: 'Controls, doors, finishes and user guidance are considered around the people who will use it.' },
  { number: '04', title: 'The care', body: 'Operating details, service intervals and support expectations are shared at handover.' }
];

export default function TechnologyPage() {
  return (
    <>
      <PageHero eyebrow="Technology, with a human point of view" title={<>Intelligent engineering.<br />Effortless experience.</>} description="Behind a calm, uncomplicated journey is a system that has been carefully planned for the home, the people who use it and the way it will be cared for." image={images.hero.src} alt="Residential lift and staircase in an open, naturally lit home" breadcrumbs={[{ label: 'Technology' }]}>
        <ButtonLink href="/contact">Talk to a specialist</ButtonLink>
        <ButtonLink href="/models" variant="outline">Explore models</ButtonLink>
      </PageHero>

      <section className="bg-[#f7f5ef] py-20 md:py-28">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 sm:px-8 md:px-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-16">
          <div><SectionHeading eyebrow="Designed around the experience" title={<>The best technology<br />feels intuitive.</>} description="The right system is not chosen by headline numbers alone. It is selected through a conversation about the building, travel, acoustic expectations, daily use and long-term care." /><p className="mt-5 max-w-xl text-[13px] leading-7 text-muted">AUREL makes those technical considerations clear so you can make an informed decision with your architect, contractor and lift specialist.</p></div>
          <div className="relative min-h-[420px] overflow-hidden rounded-[1.5rem]"><Image src={images.staircaseLift.src} alt="Detail of lift structure and stair integration in a contemporary home" fill sizes="(max-width: 1024px) 100vw, 48vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#24251f]/50 via-transparent to-transparent" /><div className="absolute bottom-6 left-6 max-w-xs text-white"><p className="text-[9px] uppercase tracking-[0.16em] text-white/75">AUREL engineering approach</p><p className="mt-2 font-serif text-[28px] leading-tight">Make the complex feel considered.</p></div></div>
        </div>
      </section>

      <section className="bg-[#e9ede7] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"><SectionHeading eyebrow="A system, not a single part" title={<>Each decision<br />connects to the next.</>} /><p className="max-w-xl text-[14px] leading-7 text-muted lg:justify-self-end">The plan, drive system, controls and service approach all influence one another. We make those connections visible before anything is finalised.</p></div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{engineeringSteps.map((step, index) => <Reveal key={step.number} delay={index * 0.06} className="relative rounded-[1.4rem] border border-[#d8ded6] bg-[#f6f7f3]/75 p-6"><span className="font-serif text-[32px] leading-none text-[#a08b67]">{step.number}</span><h3 className="mt-7 font-serif text-[24px] leading-tight text-ink">{step.title}</h3><p className="mt-3 text-[12px] leading-6 text-muted">{step.body}</p></Reveal>)}</div>
          <div className="mt-14 overflow-hidden rounded-[1.5rem] border border-[#d6dbd3] bg-[#f6f7f3]/70 p-6 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
              <div><p className="text-[9px] uppercase tracking-[0.18em] text-[#8a7657]">A simplified design model</p><h3 className="mt-4 font-serif text-[32px] leading-tight text-ink md:text-[40px]">The lift works<br />as one whole.</h3><p className="mt-4 text-[12px] leading-6 text-muted">This conceptual diagram is illustrative. Actual equipment and system interfaces depend on the approved project specification.</p></div>
              <div className="relative grid gap-3 sm:grid-cols-5">
                <div aria-hidden="true" className="absolute left-[9%] right-[9%] top-1/2 hidden h-px bg-[#c6b99f] sm:block" />
                {[{ icon: 'House', name: 'Home' }, { icon: 'Cog', name: 'Drive' }, { icon: 'PanelsTopLeft', name: 'Controls' }, { icon: 'ShieldCheck', name: 'Safety' }, { icon: 'Wrench', name: 'Care' }].map((node, index) => <div key={node.name} className="relative z-10 flex flex-row items-center gap-3 rounded-xl border border-[#d8d4ca] bg-[#fbfaf6] p-3 sm:flex-col sm:gap-3 sm:p-4 sm:text-center"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#cabda7] bg-[#f7f4ed] text-[#8a7657]"><Icon name={node.icon} size={17} strokeWidth={1.3} /></span><div><p className="text-[8px] uppercase tracking-[0.13em] text-[#8a7657]">0{index + 1}</p><p className="mt-1 text-[10px] uppercase tracking-[0.1em] text-ink">{node.name}</p></div></div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f5ef] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16"><div className="mb-10 grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"><SectionHeading eyebrow="The components behind the journey" title={<>Four areas,<br />one experience.</>} /><p className="max-w-xl text-[14px] leading-7 text-muted lg:justify-self-end">Each item below is a point of discussion. The selected model determines the available options and final operating characteristics.</p></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{technologyFeatures.map((feature, index) => <FeatureCard key={feature.title} feature={feature} index={index} variant="soft" />)}</div></div>
      </section>

      <section className="bg-[#f0eee8] py-20 md:py-28">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 sm:px-8 md:px-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20 lg:px-16">
          <div className="relative aspect-[1.18/1] overflow-hidden rounded-[1.5rem]"><Image src={images.liftDetail.src} alt="Residential lift detail with softly lit timber surfaces and glass panels" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" /><span className="absolute left-5 top-5 rounded-full border border-white/70 bg-white/80 px-3 py-2 text-[8px] uppercase tracking-[0.16em] text-[#66675f] backdrop-blur">Details matter</span></div>
          <div><SectionHeading eyebrow="The everyday details" title={<>A more human<br />interface.</>} description="Call points, cabin controls, lighting, landing access and user guidance are considered together. The goal is clarity: where to call, what to expect and who to reach if something needs attention." /><ul className="mt-7 space-y-3 text-[12px] text-muted">{['A simple, legible control layout', 'Operating instructions in plain language', 'Clear support and maintenance contacts'].map((item) => <li key={item} className="flex gap-3"><span className="mt-[3px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#c8b99f] text-[#907b58]"><Icon name="Check" size={11} /></span>{item}</li>)}</ul><ButtonLink href="/safety" variant="outline" className="mt-8">Understand safety</ButtonLink></div>
        </div>
      </section>

      <section className="bg-[#e9ede7] py-20 md:py-28"><div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16"><SectionHeading eyebrow="From first visit to handover" title={<>Clear communication<br />at each stage.</>} description="Technology is only reassuring when people understand it. Our process makes room for questions before, during and after installation." /><div className="mt-10 grid gap-4 md:grid-cols-4">{processSteps.map((step) => <article key={step.number} className="border-t border-[#cfd6cc] pt-5"><p className="font-serif text-[25px] text-[#a08b67]">{step.number}</p><h3 className="mt-4 font-serif text-[22px] text-ink">{step.title}</h3><p className="mt-2 text-[12px] leading-6 text-muted">{step.text}</p></article>)}</div></div></section>
      <CTASection title="Let the right questions lead." description="Our specialists can help translate your plans into a clear first brief." image={images.staircaseLift.src} />
    </>
  );
}
