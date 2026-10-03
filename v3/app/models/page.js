import PageHero from '@/components/PageHero';
import { createPageMetadata } from '@/lib/seo';
import { images } from '@/data/images';
import SectionHeading from '@/components/SectionHeading';
import ModelExplorer from '@/components/ModelExplorer';
import ComparisonTable from '@/components/ComparisonTable';
import CTASection from '@/components/CTASection';
import { products, modelCategories, comparisonRows } from '@/data/products';

export const metadata = createPageMetadata({ title: 'Explore our home lift models', description: 'Compare AUREL home lift design directions, from compact residential lifts to bespoke panoramic and villa concepts.', path: '/models', image: images.liftDetail.src, imageAlt: images.liftDetail.alt });

export default function ModelsPage() {
  return (
    <>
      <PageHero eyebrow="The AUREL collection" title={<>Four ways to<br />make home move.</>} description="Each collection offers a different starting point for the conversation. Explore the form, then let your home, brief and technical review shape the final specification." image={images.liftDetail.src} alt="A refined private lift interior with natural oak and glass" breadcrumbs={[{ label: 'Models' }]} />
      <section className="bg-[#f7f5ef] py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="mb-8 grid gap-6 md:grid-cols-[1fr_0.65fr] md:items-end"><SectionHeading eyebrow="Choose your direction" title={<>Find a lift that feels<br className="hidden md:block" /> right at home.</>} /><p className="max-w-xl text-[13px] leading-7 text-muted md:justify-self-end">Filter by design direction to explore a place to begin. Exact dimensions, drive technology, capacity and equipment are confirmed after review.</p></div>
          <ModelExplorer products={products} categories={modelCategories} />
        </div>
      </section>
      <section className="bg-[#e9ede7] py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="mb-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"><SectionHeading eyebrow="A practical comparison" title={<>See the differences<br className="hidden md:block" /> side by side.</>} /><p className="max-w-xl text-[13px] leading-7 text-muted lg:justify-self-end">This comparison is intentionally design-led. Product values remain project-specific until the technical brief is reviewed.</p></div>
          <ComparisonTable rows={comparisonRows} />
        </div>
      </section>
      <CTASection title="The best fit begins with a good question." description="Tell us about your floor plan, your priorities and the details you are still figuring out." image={images.interiors.villaLiving.src} />
    </>
  );
}
