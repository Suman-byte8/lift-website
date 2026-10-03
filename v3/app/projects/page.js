import PageHero from '@/components/PageHero';
import { createPageMetadata } from '@/lib/seo';
import { images } from '@/data/images';
import SectionHeading from '@/components/SectionHeading';
import ProjectGallery from '@/components/ProjectGallery';
import CTASection from '@/components/CTASection';
import { projects, projectFilters } from '@/data/projects';

export const metadata = createPageMetadata({ title: 'Project inspiration', description: 'Explore illustrative home lift project studies for villas, duplex homes and contemporary residential interiors.', path: '/projects', image: images.interiors.villaExterior.src, imageAlt: images.interiors.villaExterior.alt });

export default function ProjectsPage() {
  return (
    <>
      <PageHero eyebrow="AUREL / in context" title={<>Made for the spaces<br />we call home.</>} description="Discover how home mobility can be considered alongside architecture, interior details and the ways we move through everyday life." image={images.interiors.villaExterior.src} alt="Modern residence set within a mature garden landscape" breadcrumbs={[{ label: 'Projects' }]} />
      <section className="bg-[#f7f5ef] py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="mb-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end"><SectionHeading eyebrow="The AUREL journal" title={<>Ideas to make<br />your own.</>} description="A collection of spaces, materials and project briefs that show different ways a lift can belong in a home." /><p className="max-w-xl text-[12px] leading-6 text-muted lg:justify-self-end">Illustrative project studies only. Locations, narratives and imagery are placeholders—not completed AUREL customer installations. Replace with approved case studies before publication.</p></div>
          <ProjectGallery projects={projects} filters={projectFilters} linkCards />
        </div>
      </section>
      <section className="bg-[#e9ede7] py-16 md:py-20"><div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16"><div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center"><div><p className="text-[9px] uppercase tracking-[0.18em] text-[#8a7657]">A different starting point for every home</p><h2 className="mt-3 font-serif text-[clamp(2rem,4vw,3.5rem)] leading-tight text-ink">Your project will have its own story.</h2></div><a href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-6 text-[10px] uppercase tracking-[0.14em] text-ivory transition hover:bg-[#464740] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne">Tell us about it</a></div></div></section>
      <CTASection title="Start with your space." description="We will help you explore the questions behind a design that feels at home." image={images.interiors.softLiving.src} />
    </>
  );
}
