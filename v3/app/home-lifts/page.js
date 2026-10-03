import Image from 'next/image';
import { createPageMetadata } from '@/lib/seo';
import { images } from '@/data/images';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import FeatureCard from '@/components/FeatureCard';
import ProductCard from '@/components/ProductCard';
import TechnicalCallout from '@/components/TechnicalCallout';
import ProcessTimeline from '@/components/ProcessTimeline';
import CTASection from '@/components/CTASection';
import ButtonLink from '@/components/ButtonLink';
import Icon from '@/components/Icon';
import { benefits, processSteps, safetyFeatures, applications } from '@/data/content';
import { products } from '@/data/products';

export const metadata = createPageMetadata({ title: 'Residential home lifts', description: 'Explore residential home lifts planned around accessibility, architecture, everyday comfort and the character of your home.', path: '/home-lifts', image: images.staircaseLift.src, imageAlt: images.staircaseLift.alt });

export default function HomeLiftsPage() {
  return (
    <>
      <PageHero eyebrow="Home mobility, reimagined" title={<>Movement that<br />belongs at home.</>} description="A residential lift can make every level feel closer. AUREL brings planning, engineering and interior design together from the very first conversation." image={images.staircaseLift.src} alt="Glass lift set naturally alongside a sculptural oak staircase" breadcrumbs={[{ label: 'Home lifts' }]}>
        <ButtonLink href="/contact">Plan a conversation</ButtonLink>
        <ButtonLink href="/models" variant="outline">Explore models</ButtonLink>
      </PageHero>

      <section className="bg-[#f7f5ef] py-20 md:py-28">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 sm:px-8 md:px-12 lg:grid-cols-[1fr_0.92fr] lg:gap-20 lg:px-16">
          <div><SectionHeading eyebrow="A new perspective on the everyday" title={<>More ease.<br />More home.</>} description="A home lift is a practical addition with a very personal purpose. It can support changing needs, make everyday routines feel more comfortable and help keep the home connected across levels." /><p className="mt-5 max-w-xl text-[14px] leading-7 text-muted">The right choice depends on your home, your plans and the people who will use it. We begin with those details, then explore a solution that respects the architecture around it.</p></div>
          <div className="relative"><div className="relative aspect-[1.05/1] overflow-hidden rounded-[1.5rem]"><Image src={images.liftDetail.src} alt="Residential lift interior with glass, oak and understated metal finishes" fill sizes="(max-width: 1024px) 100vw, 44vw" className="object-cover" /></div><div className="absolute -bottom-5 -left-3 max-w-[240px] rounded-xl border border-white/70 bg-ivory/90 p-4 shadow-card backdrop-blur sm:-left-6"><p className="text-[8px] uppercase tracking-[0.16em] text-[#8a7657]">Start with the home</p><p className="mt-2 font-serif text-[18px] leading-tight">Every brief is different.</p></div></div>
        </div>
      </section>

      <section className="bg-[#e9ede7] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16">
          <SectionHeading eyebrow="A better way to move" title={<>Designed for life<br className="hidden md:block" /> between levels.</>} description="Accessibility is only part of the story. The right lift can make a home feel more comfortable now and more thoughtfully prepared for what comes next." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{benefits.map((feature, index) => <FeatureCard key={feature.title} feature={feature} index={index} variant="soft" />)}</div>
        </div>
      </section>

      <section className="bg-[#f7f5ef] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"><SectionHeading eyebrow="The collection" title={<>Four directions.<br />One personal fit.</>} description="Explore the design language behind each collection, then let your home guide the final choice." /><ButtonLink href="/models" variant="outline">Compare models</ButtonLink></div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">{products.map((product, index) => <ProductCard key={product.slug} product={product} index={index} />)}</div>
        </div>
      </section>

      <section className="bg-[#f0eee8] py-20 md:py-28">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 sm:px-8 md:px-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20 lg:px-16">
          <TechnicalCallout src={images.hero.src} alt="Home lift placed in a double-height villa beside timber stairs" aspect="aspect-[1.05/1]" callouts={[{ label: 'Drive system, chosen for the brief', icon: 'Cog', position: 'left-5 top-[34%]' }, { label: 'Landing arrangement', icon: 'PanelsTopLeft', position: 'right-5 top-[63%]' }]} />
          <div><SectionHeading eyebrow="Technology with intention" title={<>Quietly capable.<br />Thoughtfully planned.</>} description="Drive, controls, movement and the way a lift is serviced all shape the experience. We explain the options in plain language and connect every decision back to your home." /><ul className="mt-7 space-y-3">{['Drive approach reviewed against the home', 'Controls arranged around intended users', 'Operating and maintenance details explained'].map((text) => <li key={text} className="flex items-center gap-3 text-[12px] text-[#53554f]"><span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#d0c7b7] text-[#8a7657]"><Icon name="Check" size={12} /></span>{text}</li>)}</ul><ButtonLink href="/technology" variant="outline" className="mt-8">Explore technology</ButtonLink></div>
        </div>
      </section>

      <section className="bg-[#e9ede7] py-20 md:py-28">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 sm:px-8 md:px-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-16">
          <div><SectionHeading eyebrow="Designed around people" title={<>Confidence, built<br />into the conversation.</>} description="Before a proposal, we help you understand the safety systems, everyday operation and service needs relevant to the model being considered." /><ButtonLink href="/safety" variant="outline" className="mt-7">Explore safety</ButtonLink></div>
          <div className="grid gap-3 sm:grid-cols-2">{safetyFeatures.slice(0, 4).map((feature) => <article key={feature.title} className="rounded-[1.2rem] border border-[#d9ded7] bg-[#f6f7f3]/80 p-5"><span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c9d0c5] text-[#788370]"><Icon name={feature.icon} size={16} strokeWidth={1.3} /></span><h3 className="mt-5 font-serif text-[21px] text-ink">{feature.title}</h3><p className="mt-2 text-[12px] leading-6 text-muted">{feature.text}</p></article>)}</div>
        </div>
        <div className="mx-auto mt-6 max-w-[1440px] px-5 text-[10px] leading-5 text-muted sm:px-8 md:px-12 lg:px-16">Safety functions and applicable standards vary by project. All details should be verified in the final specification and handover documentation.</div>
      </section>

      <section className="bg-[#f7f5ef] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16"><div className="mb-10 grid gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:items-end"><SectionHeading eyebrow="Every home has its own rhythm" title={<>A thoughtful fit<br />for your home.</>} /><p className="max-w-xl text-[14px] leading-7 text-muted lg:justify-self-end">From a compact duplex to a new villa, we begin by understanding how your home is used—and how you would like it to work in the future.</p></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{applications.map((application) => <article key={application.title} className="group overflow-hidden rounded-[1.4rem] border border-[#e1ddd4] bg-white/60"><div className="relative aspect-[1.5/1] overflow-hidden"><Image src={application.image} alt={application.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100" /></div><div className="p-5"><h3 className="font-serif text-[23px] text-ink">{application.title}</h3><p className="mt-2 text-[12px] leading-6 text-muted">{application.text}</p></div></article>)}</div></div>
      </section>

      <section className="bg-[#f0eee8] py-20 md:py-28"><div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16"><SectionHeading eyebrow="From the first thought to everyday use" title={<>Clear steps.<br />Human support.</>} description="We make the journey easier to follow, with a named next step at each stage." /><ProcessTimeline steps={processSteps} /></div></section>
      <CTASection title="Make every level feel closer." description="Begin with a conversation about the home you have and the way you want to move through it." image={images.hero.src} />
    </>
  );
}
