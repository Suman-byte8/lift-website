import Image from 'next/image';
import { createPageMetadata } from '@/lib/seo';
import { images } from '@/data/images';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import HomeHero from '@/components/HomeHero';
import SectionHeading from '@/components/SectionHeading';
import ImageReveal from '@/components/ImageReveal';
import ButtonLink from '@/components/ButtonLink';
import ProductCard from '@/components/ProductCard';
import FeatureCard from '@/components/FeatureCard';
import StatCounter from '@/components/StatCounter';
import TechnicalCallout from '@/components/TechnicalCallout';
import ProcessTimeline from '@/components/ProcessTimeline';
import ComparisonTable from '@/components/ComparisonTable';
import ProjectGallery from '@/components/ProjectGallery';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';
import { Reveal } from '@/components/Reveal';
import Icon from '@/components/Icon';
import { products, comparisonRows } from '@/data/products';
import { projects, projectFilters } from '@/data/projects';
import { faqs } from '@/data/faqs';
import { stats, benefits, safetyFeatures, customization, applications, testimonials, processSteps, technologyFeatures } from '@/data/content';

export const metadata = createPageMetadata({ title: 'Home lifts, considered differently', description: 'Discover thoughtfully designed residential home lifts that bring accessibility, engineering and interior architecture together.', path: '/', image: images.hero.src, imageAlt: images.hero.alt });

const homeCallouts = [
  { label: 'Glass, carefully composed', icon: 'Layers3', position: 'left-5 top-[32%]' },
  { label: 'A calm cabin experience', icon: 'Waves', position: 'right-5 top-[55%]' },
  { label: 'Controls within reach', icon: 'Settings2', position: 'left-[28%] bottom-[19%]' }
];

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section aria-label="AUREL approach" className="border-b border-[#e4e0d7] bg-[#fbfaf7]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-x-5 gap-y-8 px-5 py-10 sm:px-8 md:grid-cols-4 md:gap-8 md:px-12 md:py-12 lg:px-16">
          {stats.map((stat) => <StatCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />)}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_78%_40%,_#edf0e8_0%,_#f5f1e9_42%,_#faf8f4_78%)] py-20 md:py-28 lg:py-32">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 sm:px-8 md:px-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20 lg:px-16">
          <div className="relative">
            <ImageReveal src={images.liftDetail.src} alt="Detail of a glass home lift with warm timber and subtle champagne-toned framing" className="aspect-[0.95/1] rounded-[1.6rem] shadow-soft sm:aspect-[1.1/1] lg:aspect-[0.93/1]" sizes="(max-width: 1024px) 100vw, 48vw" />
            <div className="absolute -bottom-5 right-4 max-w-[230px] rounded-2xl border border-white/70 bg-[#fbfaf7]/90 p-4 shadow-card backdrop-blur-md sm:-right-5 sm:p-5">
              <p className="text-[8px] uppercase tracking-[0.18em] text-[#8d7957]">Made to feel at home</p>
              <p className="mt-2 font-serif text-[19px] leading-tight text-ink">Every detail has a place.</p>
            </div>
          </div>
          <Reveal className="max-w-xl lg:pl-2">
            <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-[#897a61]">Engineered for better living</p>
            <h2 className="font-serif text-[clamp(2.8rem,5.4vw,5.5rem)] leading-[0.96] tracking-[-0.04em] text-ink">A lift designed<br className="hidden md:block" /> around your home.</h2>
            <p className="mt-7 text-[15px] leading-7 text-muted">A home lift should make daily movement feel simpler without asking your home to feel different. We begin with how you live, then consider access, architecture, materials and engineering as one conversation.</p>
            <p className="mt-4 text-[14px] leading-7 text-muted">From the first plan to the final handover, the details are shaped around your space—not the other way around.</p>
            <Link href="/about" className="group mt-8 inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.15em] text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne">Discover our approach <ArrowRight size={15} strokeWidth={1.4} className="transition-transform duration-300 group-hover:translate-x-1" /></Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f7f5ef] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="mb-10 flex flex-col gap-7 md:mb-14 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow="AUREL collections" title={<>Find your perfect<br className="hidden md:block" /> home lift.</>} description="Four thoughtful starting points. One considered process to find the right fit for your home." />
            <Link href="/models" className="group mb-1 inline-flex shrink-0 items-center gap-2 text-[10px] uppercase tracking-[0.15em] text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne">View all models <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" /></Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {products.map((product, index) => <ProductCard key={product.slug} product={product} index={index} />)}
          </div>
          <p className="mt-5 text-[10px] leading-5 text-muted">Model names introduce design directions. Final product scope, specifications and availability are confirmed after a project consultation.</p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#e9ede7] py-20 md:py-28 lg:py-32">
        <div className="pointer-events-none absolute -right-20 top-0 h-[420px] w-[420px] rounded-full bg-[#f7f6f1]/60 blur-3xl" />
        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <SectionHeading eyebrow="More than a way upstairs" title={<>Room for a<br />more considered life.</>} description="The value of a lift is felt in the small, everyday moments. Start with what would make home feel easier." />
            <p className="max-w-lg pb-1 text-[14px] leading-7 text-muted lg:justify-self-end">A well-planned lift brings convenience and accessibility into the architecture—quietly, thoughtfully and with a clear eye on how the home works as a whole.</p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {benefits.map((feature, index) => <div key={feature.title} className={`${index === 1 ? 'lg:translate-y-8' : ''} ${index === 4 ? 'lg:-translate-y-4' : ''}`}><FeatureCard feature={feature} index={index} variant="soft" /></div>)}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f5ef] py-20 md:py-28 lg:py-32">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 sm:px-8 md:px-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:px-16">
          <div className="relative">
            <TechnicalCallout src={images.staircaseLift.src} alt="Glass residential lift beside a light oak staircase in a sunlit home" callouts={homeCallouts} aspect="aspect-[1.05/1] md:aspect-[1.16/1]" />
            <div className="absolute -bottom-4 left-4 max-w-[260px] rounded-xl border border-white/70 bg-ivory/90 px-4 py-3 shadow-card backdrop-blur sm:left-8">
              <p className="text-[8px] uppercase tracking-[0.15em] text-[#8a7657]">Designed as one system</p>
              <p className="mt-1 font-serif text-[18px] leading-tight text-ink">Engineering, made human.</p>
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Intelligent engineering" title={<>Thoughtful in every<br className="hidden md:block" /> movement.</>} description="AUREL begins with the experience you want. Drive, controls, motion and maintenance are then considered together for the selected configuration." />
            <div className="mt-9 space-y-4">
              {technologyFeatures.map((feature) => <div key={feature.title} className="flex gap-4 border-b border-[#e0dcd2] pb-4 last:border-0"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#d1c7b6] text-[#8d7958]"><Icon name={feature.icon} size={16} strokeWidth={1.3} /></span><div><h3 className="text-[12px] font-medium uppercase tracking-[0.1em] text-ink">{feature.title}</h3><p className="mt-1.5 text-[12px] leading-5 text-muted">{feature.text}</p></div></div>)}
            </div>
            <ButtonLink href="/technology" variant="outline" className="mt-6">Explore our technology</ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-[#f0eee8] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="grid gap-9 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <SectionHeading eyebrow="Safety, made clear" title={<>Engineered around<br />what matters most.</>} />
            <div className="max-w-xl lg:justify-self-end"><p className="text-[14px] leading-7 text-muted">Safety is a conversation that covers the equipment, installation, everyday use and the people who will rely on it. We make each relevant system understandable before you decide.</p><Link href="/safety" className="group mt-5 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] text-ink">Explore safety in detail <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></Link></div>
          </div>
          <div className="mt-11 grid gap-7 lg:grid-cols-[0.9fr_1.1fr]">
            <ImageReveal src={images.liftDetail.src} alt="Interior of a residential glass lift with timber cabin detail" className="aspect-[1.12/1] rounded-[1.5rem] lg:aspect-[0.96/1]" sizes="(max-width: 1024px) 100vw, 42vw" />
            <div className="grid gap-3 sm:grid-cols-2">
              {safetyFeatures.map((feature, index) => <div key={feature.title} className={`flex gap-4 rounded-[1.15rem] border border-[#dedad1] p-4 sm:p-5 ${index === 0 || index === 5 ? 'bg-[#f8f6f1]' : 'bg-[#f4f2ec]'}`}>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#d1c7b6] text-[#8d7958]"><Icon name={feature.icon} size={15} strokeWidth={1.3} /></span><div><h3 className="text-[11px] font-medium uppercase tracking-[0.09em] text-ink">{feature.title}</h3><p className="mt-2 text-[11px] leading-[1.65] text-muted">{feature.text}</p></div>
              </div>)}
            </div>
          </div>
          <p className="mt-6 text-[10px] leading-5 text-muted">Equipment, functions and safety requirements vary by system and jurisdiction. The final, verified specification and user instructions should always be reviewed before installation and handover.</p>
        </div>
      </section>

      <section className="overflow-hidden bg-[radial-gradient(ellipse_at_14%_35%,_#f0eee7_0%,_#f7f5ef_45%,_#edf0ea_100%)] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <SectionHeading eyebrow="A language of materials" title={<>Designed<br />to belong.</>} description="A lift can have its own character and still feel completely at home. Bring your architect or interior designer into the conversation early." />
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {customization.map((finish, index) => <div key={finish.title} className="group overflow-hidden rounded-[1.1rem] border border-[#ddd9cf] bg-white/60 p-3 transition hover:-translate-y-1 hover:shadow-card">
                <div className={`relative aspect-[1.4/1] overflow-hidden rounded-lg ${finish.swatch}`}>
                  <Image src={index % 2 === 0 ? images.liftDetail.src : images.interiors.foyer.src} alt={`${finish.title} material reference`} fill sizes="(max-width: 640px) 40vw, 18vw" className="object-cover mix-blend-multiply opacity-80 transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
                  <span className={`absolute bottom-2 left-2 h-5 w-5 rounded-full border border-white/80 shadow-sm ${finish.swatch}`} />
                </div>
                <h3 className="mt-3 text-[10px] font-medium uppercase tracking-[0.12em] text-ink">{finish.title}</h3>
                <p className="mt-1 text-[10px] leading-4 text-muted">{finish.detail}</p>
              </div>)}
            </div>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-[#ddd9cf] pt-5 text-[9px] uppercase tracking-[0.15em] text-[#66675f]">
            <span className="text-[#8a7657]">Consider every touchpoint</span><span>Glass</span><span>Cabin</span><span>Handrails</span><span>Lighting</span><span>Flooring</span><span>Controls</span>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f5ef] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="mb-9 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow="AUREL in the home" title={<>Made for<br />beautiful spaces.</>} description="A home lift is at its best when it feels less like an addition and more like it has always belonged. Illustrative concept imagery—not completed customer installations." />
            <Link href="/projects" className="group inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] text-ink">View project stories <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></Link>
          </div>
          <ProjectGallery projects={projects.slice(0, 4)} filters={['All', 'Villa', 'Duplex', 'Apartment', 'Modern', 'Classic']} linkCards={false} />
        </div>
      </section>

      <section id="process" className="scroll-mt-28 bg-[#e9ede7] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <SectionHeading eyebrow="A clear way forward" title={<>A thoughtful<br />journey, step by step.</>} />
            <p className="max-w-xl text-[14px] leading-7 text-muted lg:justify-self-end">Good decisions begin with the right questions. Our process helps you move from an early idea to a project-specific plan with clarity at each stage.</p>
          </div>
          <ProcessTimeline steps={processSteps} />
        </div>
      </section>

      <section className="bg-[#f7f5ef] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="mb-9 grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <SectionHeading eyebrow="A useful first comparison" title={<>Which lift fits<br />your home?</>} />
            <p className="max-w-xl text-[14px] leading-7 text-muted lg:justify-self-end">Think of these as design directions, not final specifications. A consultation and site assessment establish what is feasible for your home.</p>
          </div>
          <ComparisonTable rows={comparisonRows} />
          <Link href="/models" className="group mt-7 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] text-ink">Compare model directions <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></Link>
        </div>
      </section>

      <section className="bg-[#eeece5] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="mb-10 grid gap-7 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <SectionHeading eyebrow="Designed for the way home works" title={<>A considered fit<br />for every level.</>} />
            <p className="max-w-xl text-[14px] leading-7 text-muted lg:justify-self-end">From new construction to a home that has grown with you, each application starts by understanding the everyday routes that matter.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((application, index) => <Reveal key={application.title} delay={index * 0.06} className={`group overflow-hidden rounded-[1.35rem] border border-[#ddd9cf] bg-[#f8f6f1] ${index === 1 || index === 4 ? 'lg:translate-y-7' : ''}`}>
              <div className="relative aspect-[1.5/1] overflow-hidden"><Image src={application.image} alt={application.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-[1000ms] group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100" /><div className="absolute inset-0 bg-gradient-to-t from-[#242520]/28 to-transparent" /></div>
              <div className="p-5"><h3 className="font-serif text-[23px] text-ink">{application.title}</h3><p className="mt-2 text-[12px] leading-6 text-muted">{application.text}</p></div>
            </Reveal>)}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f5ef] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow="A note from home" title={<>A more personal<br />kind of progress.</>} description="The right lift should make the home feel more connected, more comfortable and more your own." />
            <span className="mb-1 text-[9px] uppercase tracking-[0.15em] text-[#8b795d]">Sample stories · replace before launch</span>
          </div>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      <section className="bg-[#f0eee8] py-20 md:py-28 lg:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-8 md:px-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20 lg:px-16">
          <div className="lg:sticky lg:top-36 lg:self-start">
            <SectionHeading eyebrow="Good to know" title={<>Questions,<br />considered.</>} description="A few useful starting points. For a home-specific answer, our team is happy to talk through your layout and priorities." />
            <ButtonLink href="/faq" variant="outline" className="mt-7">Visit the FAQ</ButtonLink>
          </div>
          <FAQAccordion items={faqs.slice(0, 6)} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
