import Image from 'next/image';
import { createPageMetadata } from '@/lib/seo';
import { images } from '@/data/images';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import FeatureCard from '@/components/FeatureCard';
import CTASection from '@/components/CTASection';
import ButtonLink from '@/components/ButtonLink';
import Icon from '@/components/Icon';
import { safetyFeatures } from '@/data/content';
import { faqs } from '@/data/faqs';

export const metadata = createPageMetadata({ title: 'Home lift safety', description: 'Understand the safety questions, system details and handover guidance to review when planning a home lift.', path: '/safety', image: images.liftDetail.src, imageAlt: images.liftDetail.alt });

const questionsToAsk = [
  'Which safety functions are included in the exact model being proposed?',
  'What is the agreed response to a power interruption?',
  'How should a user call for help if the cabin stops?',
  'Who is authorised to carry out emergency procedures?',
  'What inspection, maintenance and documentation are required locally?'
];

export default function SafetyPage() {
  return (
    <>
      <PageHero eyebrow="Safety, understood" title={<>Engineered around<br />what matters most.</>} description="A safe home lift is a complete, well-specified installation—supported by clear user guidance, appropriate maintenance and a project team that explains every detail." image={images.liftDetail.src} alt="Glass home lift with a warm timber interior, seen from the landing" breadcrumbs={[{ label: 'Safety' }]}>
        <ButtonLink href="/contact">Ask a safety question</ButtonLink>
        <ButtonLink href="/faq" variant="outline">Browse FAQs</ButtonLink>
      </PageHero>

      <section className="bg-[#f7f5ef] py-20 md:py-28">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 sm:px-8 md:px-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-16">
          <div><SectionHeading eyebrow="More than a checklist" title={<>Confidence comes<br />from clarity.</>} description="Good safety planning brings together the lift, its installation, the building, the user and the support plan. It starts with a transparent conversation—not a blanket promise." /><p className="mt-5 max-w-xl text-[13px] leading-7 text-muted">We help you understand which devices and procedures apply to the selected system, which details need site review and what information should be included at handover.</p></div>
          <div className="relative min-h-[400px] overflow-hidden rounded-[1.5rem]"><Image src={images.staircaseLift.src} alt="Home lift entrance and landing in a modern residence" fill sizes="(max-width: 1024px) 100vw, 48vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#23241f]/40 via-transparent to-transparent" /><div className="absolute bottom-5 left-5 rounded-xl border border-white/70 bg-white/85 px-4 py-3 backdrop-blur"><p className="text-[8px] uppercase tracking-[0.15em] text-[#8a7657]">Built on understanding</p><p className="mt-1 font-serif text-[19px] text-ink">Clear is reassuring.</p></div></div>
        </div>
      </section>

      <section className="bg-[#e9ede7] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16"><div className="mb-10 grid gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:items-end"><SectionHeading eyebrow="What to understand" title={<>Eight safety topics<br />worth discussing.</>} /><p className="max-w-xl text-[14px] leading-7 text-muted lg:justify-self-end">These prompts are a guide, not a statement that every function is present on every model. The exact protection and documentation must be verified for your project.</p></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{safetyFeatures.map((feature, index) => <FeatureCard key={feature.title} feature={feature} index={index} variant="soft" />)}</div></div>
      </section>

      <section className="bg-[#f0eee8] py-20 md:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 md:px-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-16">
          <div className="relative min-h-[440px] overflow-hidden rounded-[1.5rem]"><Image src={images.interiors.foyer.src} alt="Open residential landing showing clear circulation and natural light" fill sizes="(max-width: 1024px) 100vw, 48vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#20211d]/30 to-transparent" /><p className="absolute bottom-5 left-5 max-w-xs font-serif text-[25px] leading-tight text-white">Safety is a property of the whole installation.</p></div>
          <div><SectionHeading eyebrow="Ask before you decide" title={<>A few questions<br />that bring clarity.</>} description="Use these questions when comparing proposals or discussing a home lift with your project team." /><ul className="mt-8 divide-y divide-[#dcd8ce] border-y border-[#dcd8ce]">{questionsToAsk.map((question, index) => <li key={question} className="flex gap-4 py-4"><span className="font-serif text-[18px] text-[#a08b67]">0{index + 1}</span><p className="text-[12px] leading-6 text-[#565850]">{question}</p></li>)}</ul><Link href="/contact" className="group mt-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] text-ink">Discuss your project <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></Link></div>
        </div>
      </section>

      <section className="bg-[#f7f5ef] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16"><div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center"><div><SectionHeading eyebrow="Power interruption & assistance" title={<>Know the plan<br />before you need it.</>} description={faqs.find((item) => item.question.startsWith('What happens during a power failure?')).answer} /><p className="mt-5 text-[12px] leading-6 text-muted">Ask for a demonstration of the correct procedure, any backup function included and the contact route for assistance. Never attempt an emergency operation unless you have been trained and authorised to do so.</p></div><div className="rounded-[1.5rem] border border-[#dedad1] bg-[#eeece5] p-6 md:p-9"><p className="text-[9px] uppercase tracking-[0.17em] text-[#8a7657]">At handover</p><div className="mt-5 space-y-4">{['A written user and emergency guide', 'A clear route to request service', 'A maintenance and inspection schedule', 'A record of the confirmed installation details'].map((item) => <div key={item} className="flex items-start gap-3 border-b border-[#dbd6cc] pb-4 last:border-0 last:pb-0"><span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#c9b99d] text-[#8b7755]"><Icon name="Check" size={12} /></span><p className="text-[12px] leading-5 text-[#565850]">{item}</p></div>)}</div></div></div></div>
      </section>

      <section className="bg-[#e9ede7] py-16"><div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16"><div className="rounded-[1.4rem] border border-[#d6ddd3] bg-[#f6f7f3]/80 p-6 md:p-8"><p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#7b785f]">Important</p><p className="mt-3 max-w-4xl text-[12px] leading-6 text-muted">AUREL website content is an introduction, not safety advice or a technical specification. The suitability, safety equipment, operating instructions and applicable standards must be determined by qualified professionals for the final lift and local jurisdiction.</p></div></div></section>
      <CTASection title="Let’s make the details clear." description="Bring your questions. We will help you understand which information matters for your home." image={images.interiors.villaExterior.src} />
    </>
  );
}
