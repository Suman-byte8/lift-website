import { techCallouts } from "@/data/features";
import SectionHeading from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/Button";
import LiftIllustration from "@/components/lift/LiftIllustration";
import TechnicalCallout from "./TechnicalCallout";

export default function TechnologySection({ showLink = true }) {
  const left = techCallouts.filter((c) => c.side === "left");
  const right = techCallouts.filter((c) => c.side === "right");
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(90%_70%_at_50%_40%,#FFFFFF_0%,#F1F3F4_55%,#E6EAEC_100%)] py-24 lg:py-36" aria-labelledby="tech-title">
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(rgba(32,33,31,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(32,33,31,0.04)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(70%_60%_at_50%_45%,black,transparent)]" />
      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <SectionHeading id="tech-title" align="center" eyebrow="Technology" title={<>Intelligent Engineering.<br /><em className="italic text-champagne-600">Effortless</em> Experience.</>} intro="Every Velora lift is a system of quiet decisions — drive, control and safety working together so the ride simply feels calm." />

        <div className="mt-16 grid items-center gap-10 lg:mt-20 lg:grid-cols-[1fr_minmax(200px,260px)_1fr] lg:gap-0">
          <div className="order-2 flex flex-col gap-5 lg:order-1 lg:gap-16">
            {left.map((c, i) => <TechnicalCallout key={c.id} {...c} index={i} />)}
          </div>
          <div className="order-1 mx-auto w-[46%] max-w-[260px] py-6 lg:order-2 lg:w-full">
            <LiftIllustration floors={3} />
          </div>
          <div className="order-3 flex flex-col gap-5 lg:mt-12 lg:gap-16">
            {right.map((c, i) => <TechnicalCallout key={c.id} {...c} index={i + 3} />)}
          </div>
        </div>
        {showLink && <div className="mt-16 text-center"><TextLink href="/technology">Explore the technology</TextLink></div>}
      </div>
    </section>
  );
}
