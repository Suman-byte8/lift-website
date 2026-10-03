import { buildMetadata } from "@/lib/seo";
import PageHero from "@/components/sections/PageHero";
import ModelsExplorer from "@/components/sections/ModelsExplorer";
import ComparisonSection from "@/components/sections/ComparisonSection";
import CTASection from "@/components/sections/CTASection";

export const metadata = buildMetadata({
  title: "Home Lift Models",
  description: "Explore Aura, Nova, Lumina and Elite — glass, compact, panoramic and villa home lifts. Filter by type and home to find your fit.",
  path: "/models",
});

export default function ModelsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Models", href: "/models" }]}
        eyebrow="The collection"
        title={<>Four models. <em className="italic text-champagne-600">Endless</em> possibilities.</>}
        intro="Filter by lift type or the kind of home you live in. Every model can be finished to suit your interiors."
        tone="from-mist-50 via-ivory to-champagne-100"
      />
      <section className="bg-ivory pb-24 pt-4 lg:pb-32" aria-label="Model listing">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <ModelsExplorer />
          <p className="mt-10 text-[11.5px] text-ink-300">All specifications are indicative placeholders pending certified data.</p>
        </div>
      </section>
      <ComparisonSection />
      <CTASection />
    </>
  );
}
