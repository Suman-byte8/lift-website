import ImageReveal from "@/components/ui/ImageReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const pillars = [
  ["Accessibility", "Step-free movement between every level."],
  ["Architecture", "Proportions and finishes drawn from your interiors."],
  ["Technology", "Quiet drives and layered safety, working unseen."],
];

export default function IntroSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(160deg,#F5F1EA_0%,#FAF8F4_45%,#EEF1ED_100%)] py-24 lg:py-36" aria-labelledby="intro-title">
      <div className="mx-auto grid max-w-[1320px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:gap-24 lg:px-12">
        <div className="relative">
          <ImageReveal image="introResidence" className="aspect-[4/5] w-full lg:aspect-[5/6]" sizes="(min-width:1024px) 50vw, 100vw" />
          <Reveal delay={0.4} className="absolute -bottom-8 right-4 max-w-[240px] rounded-[22px] border border-white/80 bg-white/70 p-5 shadow-glass backdrop-blur-xl sm:right-[-28px]">
            <p className="font-serif text-4xl text-ink">1 m²</p>
            <p className="mt-1 text-[12.5px] leading-snug text-ink-500">Compact models start from roughly one square metre of floor space.*</p>
          </Reveal>
        </div>
        <div>
          <SectionHeading id="intro-title" eyebrow="Engineered for better living" title={<>A Lift Designed <em className="italic text-champagne-600">Around</em> Your Home.</>}>
            <div className="mt-7 space-y-5 text-[15.5px] leading-relaxed text-ink-500">
              <p>A modern home lift is no longer an afterthought bolted to a stairwell. It is a quiet, considered element of the house — sized to its rooms, finished in its materials and engineered so you rarely think about it at all.</p>
              <p>We combine everyday accessibility with architectural detail: slim frames, panoramic glass and smooth, near-silent drives that bring every floor — from basement to roof terrace — within easy reach.</p>
            </div>
          </SectionHeading>
          <Reveal delay={0.2} as="ul" className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
            {pillars.map(([t, d], i) => (
              <li key={t} className="flex gap-6 py-5">
                <span className="font-serif text-lg text-champagne-500">0{i + 1}</span>
                <div>
                  <p className="font-semibold text-ink">{t}</p>
                  <p className="mt-1 text-[14px] text-ink-500">{d}</p>
                </div>
              </li>
            ))}
          </Reveal>
          <TextLink href="/about" className="mt-10">Discover Our Approach</TextLink>
        </div>
      </div>
    </section>
  );
}
