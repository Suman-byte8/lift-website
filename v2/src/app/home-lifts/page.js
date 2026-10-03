import { buildMetadata } from "@/lib/seo";
import PageHero from "@/components/sections/PageHero";
import BenefitsSection from "@/components/sections/BenefitsSection";
import ProductGrid from "@/components/sections/ProductGrid";
import TechnologySection from "@/components/sections/TechnologySection";
import SafetySection from "@/components/sections/SafetySection";
import ApplicationsSection from "@/components/sections/ApplicationsSection";
import CTASection from "@/components/sections/CTASection";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = buildMetadata({
  title: "Residential Home Lifts",
  description: "What a residential home lift is, how it fits into an existing or new home, and how to choose the right model for your villa, duplex or apartment.",
  path: "/home-lifts",
});

const facts = [
  ["Shaft", "Often not required — many models are self-supporting."],
  ["Pit", "Shallow or none, depending on model."],
  ["Power", "Typically a standard domestic supply."],
  ["Footprint", "From around one square metre for compact models."],
];

export default function HomeLiftsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home Lifts", href: "/home-lifts" }]}
        eyebrow="Residential home lifts"
        title={<>Every level of home, <em className="italic text-champagne-600">within reach.</em></>}
        intro="A home lift is a compact passenger lift built for private residences — quieter, smaller and far more design-led than a commercial elevator."
        image="openPlan"
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/models">Compare models</Button>
          <Button href="/contact" variant="glass" arrow={false}>Book a site assessment</Button>
        </div>
      </PageHero>

      <section className="bg-ivory py-24 lg:py-32" aria-labelledby="what-title">
        <div className="mx-auto grid max-w-[1320px] gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-24 lg:px-12">
          <SectionHeading id="what-title" eyebrow="The essentials" title={<>Simpler to add than <em className="italic text-champagne-600">most people think.</em></>}>
            <div className="mt-7 space-y-5 text-[15.5px] leading-relaxed text-ink-500">
              <p>Unlike building elevators, residential lifts are designed for lower loads and gentler speeds. That allows slimmer structures, smaller pits and drives that sit within the lift itself — so they adapt to homes that were never planned for one.</p>
              <p>They can stand in a stairwell void, beside a staircase, in an atrium or through a new opening between floors, and are finished to match the surrounding interior.</p>
            </div>
          </SectionHeading>
          <Reveal as="dl" className="grid gap-4 self-end sm:grid-cols-2">
            {facts.map(([t, d]) => (
              <div key={t} className="rounded-[22px] border border-white/80 bg-gradient-to-br from-champagne-100/70 to-ivory p-6 shadow-soft">
                <dt className="font-serif text-3xl text-ink">{t}</dt>
                <dd className="mt-2 text-[14px] text-ink-500">{d}</dd>
              </div>
            ))}
            <p className="text-[11.5px] text-ink-300 sm:col-span-2">Requirements vary by model and site; confirmed at survey.</p>
          </Reveal>
        </div>
      </section>

      <BenefitsSection />
      <ProductGrid eyebrow="Product categories" title={<>Four families, <em className="italic text-champagne-600">one standard.</em></>} />
      <TechnologySection />
      <SafetySection />
      <ApplicationsSection />
      <CTASection />
    </>
  );
}
