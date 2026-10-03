import Link from 'next/link';
import { createPageMetadata } from '@/lib/seo';
import { images } from '@/data/images';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';
import StructuredData from '@/components/StructuredData';
import SectionHeading from '@/components/SectionHeading';
import ButtonLink from '@/components/ButtonLink';
import { faqs } from '@/data/faqs';

export const metadata = createPageMetadata({ title: 'Home lift questions & answers', description: 'Find clear answers to common questions about home lift planning, space, installation, customization, safety and maintenance.', path: '/faq', image: images.interiors.foyer.src, imageAlt: images.interiors.foyer.alt });

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer }
  }))
};

export default function FAQPage() {
  return (
    <>
      <StructuredData type="faq" data={schema} />
      <PageHero eyebrow="Good questions make good plans" title={<>Everything begins<br />with a question.</>} description="Clear answers to the things people most often ask when considering a lift for home. For a project-specific answer, it helps to look at your plan and your priorities together." image={images.interiors.foyer.src} alt="Open residential interior with a calm, natural material palette" breadcrumbs={[{ label: 'FAQs' }]} />
      <section className="bg-[#f7f5ef] py-16 md:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-8 md:px-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:px-16">
          <div className="lg:sticky lg:top-36 lg:self-start"><SectionHeading eyebrow="AUREL / frequently asked" title={<>A little more<br />clarity.</>} description="Browse the questions below, or start a conversation if your home has a detail that needs a more personal answer." /><ButtonLink href="/contact" className="mt-7">Ask a specialist</ButtonLink><div className="mt-10 border-t border-[#dedad1] pt-5"><p className="text-[9px] uppercase tracking-[0.16em] text-[#8a7657]">Helpful next reads</p><div className="mt-4 space-y-3">{[{ label: 'Home lift technology', href: '/technology' }, { label: 'Safety in more detail', href: '/safety' }, { label: 'Compare our models', href: '/models' }].map((item) => <Link key={item.href} href={item.href} className="group flex items-center justify-between text-[11px] text-muted transition-colors hover:text-ink"><span>{item.label}</span><ArrowRight size={13} className="transition-transform group-hover:translate-x-1" /></Link>)}</div></div></div>
          <FAQAccordion items={faqs} />
        </div>
      </section>
      <section className="bg-[#e9ede7] py-16 md:py-20"><div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16"><div className="grid gap-7 md:grid-cols-[1fr_auto] md:items-center"><div><p className="text-[9px] uppercase tracking-[0.17em] text-[#8a7657]">Still wondering?</p><h2 className="mt-3 font-serif text-[clamp(2rem,4vw,3.4rem)] leading-tight text-ink">Your home may have a better question.</h2></div><Link href="/contact" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-[#c9c4b8] px-6 text-[10px] uppercase tracking-[0.14em] transition hover:border-ink hover:bg-white/60">Talk with our team <ArrowRight size={14} /></Link></div></div></section>
      <CTASection title="Let’s answer it together." description="Share a floor plan, a question or just the idea you are working through." image={images.interiors.softLiving.src} />
    </>
  );
}
