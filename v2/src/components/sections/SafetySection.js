import { safetyFeatures } from "@/data/features";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import { TextLink } from "@/components/ui/Button";
import { Stagger, StaggerItem, Reveal } from "@/components/ui/Reveal";
import LiftIllustration from "@/components/lift/LiftIllustration";

export default function SafetySection({ showLink = true }) {
  const left = safetyFeatures.slice(0, 4);
  const right = safetyFeatures.slice(4);
  const Item = ({ f, i, align }) => (
    <StaggerItem as="li" className={`group flex gap-4 ${align === "right" ? "lg:flex-row-reverse lg:text-right" : ""}`}>
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-sage-300 bg-white/70 text-sage-700 transition-colors duration-700 group-hover:bg-sage-700 group-hover:text-white">
        <Icon name={f.icon} className="h-[18px] w-[18px]" />
      </span>
      <div>
        <h3 className="text-[15px] font-semibold text-ink">{f.title}</h3>
        <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-500">{f.text}</p>
      </div>
    </StaggerItem>
  );
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#EEF1ED_0%,#F5F1EA_100%)] py-24 lg:py-36" aria-labelledby="safety-title">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <SectionHeading id="safety-title" eyebrow="Safety first" title={<>Engineered Around What <em className="italic text-sage-700">Matters Most.</em></>} />
          <Reveal className="max-w-md text-[15px] leading-relaxed text-ink-500 lg:justify-self-end">
            Protection is layered, not single-point. Each system is designed to act independently, so the lift fails safe — and your family never has to think about it.
          </Reveal>
        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[1fr_auto_1fr] lg:gap-16">
          <Stagger as="ul" className="space-y-9" gap={0.1}>
            {left.map((f, i) => <Item key={f.title} f={f} i={i} align="right" />)}
          </Stagger>
          <Reveal className="relative mx-auto w-32 sm:w-48 lg:w-56">
            <div aria-hidden="true" className="absolute inset-[-30%] rounded-full bg-[radial-gradient(circle,rgba(174,185,173,0.45)_0%,transparent_65%)]" />
            <div aria-hidden="true" className="absolute inset-[-14%] rounded-full border border-dashed border-sage-300" />
            <LiftIllustration floors={2} travel={false} />
          </Reveal>
          <Stagger as="ul" className="space-y-9" gap={0.1}>
            {right.map((f, i) => <Item key={f.title} f={f} i={i + 4} />)}
          </Stagger>
        </div>
        <p className="mt-14 text-center text-[11.5px] text-ink-300">Feature availability varies by model and local regulations; confirm specifications with our engineering team.</p>
        {showLink && <div className="mt-6 text-center"><TextLink href="/safety">How our safety systems work</TextLink></div>}
      </div>
    </section>
  );
}
