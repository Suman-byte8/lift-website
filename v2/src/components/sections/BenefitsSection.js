import { benefits } from "@/data/features";
import FeatureCard from "./FeatureCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

// Staggered masonry heights for an editorial rhythm (desktop only).
const heights = ["lg:min-h-[340px]", "lg:min-h-[300px] lg:translate-y-14", "lg:min-h-[360px]", "lg:min-h-[300px]", "lg:min-h-[340px] lg:translate-y-14", "lg:min-h-[280px]"];

export default function BenefitsSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#FAF8F4_0%,#EEF1ED_100%)] py-24 lg:py-36" aria-labelledby="why-title">
      <div className="mx-auto grid max-w-[1320px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.6fr] lg:px-12">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading id="why-title" eyebrow="Why a home lift?" title={<>More than access. <em className="italic text-champagne-600">A better way</em> to live.</>} intro="A well-planned lift changes how a home is used every day — opening up upper floors, terraces and basements to everyone, for decades." />
        </div>
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 lg:pb-14" gap={0.1}>
          {benefits.map((b, i) => (
            <StaggerItem key={b.title} className={heights[i]}>
              <FeatureCard {...b} index={i} className={b.tone} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
