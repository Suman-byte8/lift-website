import Image from 'next/image';
import { createPageMetadata } from '@/lib/seo';
import { images } from '@/data/images';
import { Download, ArrowDownToLine } from 'lucide-react';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import SectionHeading from '@/components/SectionHeading';
import ButtonLink from '@/components/ButtonLink';

export const metadata = createPageMetadata({ title: 'AUREL home lift brochure', description: 'Request the AUREL home lift overview and explore thoughtful questions to bring to your project.', path: '/brochure', image: images.hero.src, imageAlt: images.hero.alt });

export default function BrochurePage() {
  return (
    <>
      <PageHero eyebrow="A quieter kind of progress" title={<>A considered guide<br />to home mobility.</>} description="An introduction to the AUREL design point of view, the questions worth asking and the details to explore as you plan." image={images.hero.src} alt="A warm contemporary home with a glass lift and open staircase" breadcrumbs={[{ label: 'Brochure' }]}>
        <a href="/aurel-home-lifts-brochure.pdf" download className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-ink px-6 text-[10px] font-medium uppercase tracking-[0.14em] text-ivory transition hover:bg-[#454741] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne">Download the overview <Download size={15} strokeWidth={1.4} /></a>
        <ButtonLink href="#request" variant="outline">Request a personal copy</ButtonLink>
      </PageHero>
      <section className="bg-[#f7f5ef] py-16 md:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 md:px-12 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:px-16">
          <div>
            <div className="relative mb-8 aspect-[1.35/1] overflow-hidden rounded-[1.5rem] shadow-soft"><Image src={images.liftDetail.src} alt="Home lift materials and cabin details" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#20211d]/40 to-transparent" /><div className="absolute bottom-5 left-5 text-white"><p className="text-[8px] uppercase tracking-[0.16em] text-white/75">AUREL / Home Lift Overview</p><p className="mt-2 font-serif text-[25px]">A place to begin.</p></div></div>
            <SectionHeading eyebrow="Inside the guide" title={<>A few things to<br />think through.</>} description="The overview is designed to help you prepare for a more useful conversation—not replace a technical assessment or approved product specification." />
            <ul className="mt-6 space-y-3">{['How a lift can fit into the wider home', 'Design, materials and everyday use', 'Questions to bring to a site assessment', 'What to clarify about safety and care'].map((item) => <li key={item} className="flex items-center gap-3 text-[12px] text-[#54564f]"><span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#d2c7b5] text-[#8c7754]"><ArrowDownToLine size={12} /></span>{item}</li>)}</ul>
          </div>
          <div id="request" className="scroll-mt-28 rounded-[1.5rem] border border-[#dedad1] bg-[#f0eee8] p-6 sm:p-8 md:p-10">
            <p className="text-[9px] uppercase tracking-[0.17em] text-[#8a7657]">Request the brochure</p><h2 className="mt-3 font-serif text-[34px] leading-tight text-ink">A more personal introduction.</h2><p className="mt-3 mb-7 text-[12px] leading-6 text-muted">Leave your contact details and we will be in touch to share more about the AUREL approach.</p>
            <ContactForm mode="brochure" />
            <div className="mt-6 border-t border-[#ddd8ce] pt-5"><p className="text-[10px] leading-5 text-muted">Prefer a direct download? <a href="/aurel-home-lifts-brochure.pdf" download className="font-medium text-ink underline decoration-[#b8aa91] underline-offset-4">Download the overview PDF</a>.</p></div>
          </div>
        </div>
      </section>
      <section className="bg-[#e9ede7] py-16 md:py-20"><div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16"><div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center"><p className="max-w-3xl text-[12px] leading-6 text-muted">This brochure is an introductory concept document. Product specifications, availability, pricing, service coverage and compliance requirements must be confirmed in writing for each project.</p><ButtonLink href="/contact" variant="outline">Speak with a specialist</ButtonLink></div></div></section>
    </>
  );
}
