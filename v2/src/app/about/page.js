import { buildMetadata } from "@/lib/seo";
import { values } from "@/data/features";
import PageHero from "@/components/sections/PageHero";
import StatsBand from "@/components/sections/StatsBand";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import CTASection from "@/components/sections/CTASection";
import SectionHeading from "@/components/ui/SectionHeading";
import ImageReveal from "@/components/ui/ImageReveal";
import Icon from "@/components/ui/Icon";
import { Stagger, StaggerItem, Reveal } from "@/components/ui/Reveal";

export const metadata = buildMetadata({
  title: "About Velora",
  description: "Our story, mission and engineering philosophy — and how we design, install and support premium home lifts for life.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "About", href: "/about" }]}
        eyebrow="Our story"
        title={<>We believe a home should <em className="italic text-champagne-600">rise to meet you.</em></>}
        intro="Velora began with a simple observation: families were leaving homes they loved because the stairs became a barrier. We set out to change that — beautifully."
        image="luxuryHome"
      />

      <section className="bg-ivory py-24 lg:py-32" aria-labelledby="story-title">
        <div className="mx-auto grid max-w-[1320px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-24 lg:px-12">
          <div>
            <SectionHeading id="story-title" eyebrow="Brand story" title={<>Architecture first. <em className="italic text-champagne-600">Engineering always.</em></>} />
            <Reveal className="mt-8 space-y-5 text-[15.5px] leading-relaxed text-ink-500">
              <p>Too many home lifts looked like equipment. We wanted ours to look like they belonged — designed with the same care as the staircase, the joinery and the light.</p>
              <p>So we pair architectural design with residential lift engineering: slim structures, honest materials and drives tuned for silence. Every project is surveyed, specified and installed by our own teams. (Placeholder brand copy — refine with your story.)</p>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <ImageReveal image="detailChair" className="aspect-[3/4]" sizes="25vw" />
            <ImageReveal image="materialStone" className="mt-16 aspect-[3/4]" sizes="25vw" />
          </div>
        </div>
      </section>

      <StatsBand />

      <section className="bg-[linear-gradient(180deg,#F5F1EA_0%,#EEF1ED_100%)] py-24 lg:py-32" aria-labelledby="values-title">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <SectionHeading id="values-title" eyebrow="What guides us" title={<>Mission, philosophy <em className="italic text-champagne-600">& promise.</em></>} />
          <Stagger className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3" gap={0.1}>
            {values.map((v, i) => (
              <StaggerItem as="article" key={v.title} className={`rounded-[26px] border border-white/80 bg-white/60 p-8 shadow-soft ${i === 0 ? "lg:col-span-2 lg:bg-gradient-to-br lg:from-champagne-100 lg:to-ivory" : ""}`}>
                <span className="grid h-12 w-12 place-items-center rounded-full border border-champagne-500/30 text-champagne-600"><Icon name={v.icon} /></span>
                <h3 className="mt-6 font-serif text-3xl text-ink">{v.title}</h3>
                <p className={`mt-3 leading-relaxed text-ink-500 ${i === 0 ? "font-serif text-2xl text-ink-700" : "text-[15px]"}`}>{v.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <ProcessTimeline eyebrow="Installation & support" />
      <CTASection />
    </>
  );
}
