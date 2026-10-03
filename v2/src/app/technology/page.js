import { buildMetadata } from "@/lib/seo";
import { technologyPillars } from "@/data/features";
import PageHero from "@/components/sections/PageHero";
import TechnologySection from "@/components/sections/TechnologySection";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import CTASection from "@/components/sections/CTASection";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import { Stagger, StaggerItem, Reveal } from "@/components/ui/Reveal";

export const metadata = buildMetadata({
  title: "Home Lift Technology",
  description: "How Velora home lifts work — drive systems, intelligent controls, layered safety and the details that make every ride quiet and smooth.",
  path: "/technology",
});

const system = [
  { k: "Landing & cabin panels", d: "Your call is registered" },
  { k: "Controller", d: "Checks doors, locks and sensors" },
  { k: "Drive", d: "Soft-start, steady travel" },
  { k: "Levelling", d: "Precise stop at the landing" },
  { k: "Doors", d: "Open once cabin is level" },
];

const journey = [
  { n: "01", title: "Call", text: "A light touch on the landing panel registers your call and the cabin is dispatched.", icon: "MessageCircle" },
  { n: "02", title: "Lock & check", text: "Doors close and interlocks confirm every landing is secured before motion is permitted.", icon: "Lock" },
  { n: "03", title: "Glide", text: "The drive ramps up gently, travels steadily, then eases down as it nears your floor.", icon: "Waves" },
  { n: "04", title: "Arrive", text: "The cabin levels precisely with the floor and the doors open — step out, no step up.", icon: "Sparkles" },
];

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Technology", href: "/technology" }]}
        eyebrow="Engineering"
        title={<>Quiet technology, <em className="italic text-champagne-600">beautifully resolved.</em></>}
        intro="The best engineering in a home is the kind you feel rather than see. Here is what happens behind the glass."
        image="interiorCalm"
        tone="from-mist-50 via-ivory to-sage-50"
      />

      <section className="bg-ivory py-24 lg:py-32" aria-labelledby="concept-title">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <SectionHeading id="concept-title" eyebrow="The engineering concept" title={<>Four systems, <em className="italic text-champagne-600">one calm ride.</em></>} intro="Drive, controls, safety and experience are designed together — each one shaped by the others." />
          <Stagger className="mt-16 grid gap-6 md:grid-cols-2" gap={0.12}>
            {technologyPillars.map((t, i) => (
              <StaggerItem as="article" key={t.title} className={`group relative overflow-hidden rounded-[28px] border border-white/80 p-8 shadow-soft sm:p-10 ${["bg-champagne-100/60", "bg-sage-50", "bg-mist-50", "bg-ivory-100"][i]}`}>
                <span aria-hidden="true" className="absolute -right-6 -top-10 font-serif text-[9rem] leading-none text-white/80">0{i + 1}</span>
                <span className="relative grid h-12 w-12 place-items-center rounded-full border border-champagne-500/30 bg-white/70 text-champagne-600"><Icon name={t.icon} /></span>
                <h3 className="relative mt-8 font-serif text-4xl text-ink">{t.title}</h3>
                <p className="relative mt-3 max-w-lg text-[15px] leading-relaxed text-ink-500">{t.text}</p>
                <ul className="relative mt-6 flex flex-wrap gap-2">
                  {t.points.map((pt) => <li key={pt} className="rounded-full border border-ink/10 bg-white/60 px-3 py-1.5 text-[12px] text-ink-700">{pt}</li>)}
                </ul>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* System diagram */}
      <section className="bg-[linear-gradient(180deg,#F5F1EA_0%,#FAF8F4_100%)] py-24 lg:py-32" aria-labelledby="diagram-title">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <SectionHeading id="diagram-title" align="center" eyebrow="System diagram" title="How a single journey is controlled." />
          <Reveal as="ol" className="relative mt-16 grid gap-4 md:grid-cols-5 md:gap-0">
            {system.map((s, i) => (
              <li key={s.k} className="relative flex items-center gap-4 md:flex-col md:text-center">
                <span className="relative z-10 grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-champagne-300 bg-white font-serif text-2xl text-champagne-600 shadow-soft md:h-20 md:w-20">{i + 1}</span>
                {i < system.length - 1 && <span aria-hidden="true" className="absolute left-8 top-16 h-4 w-px bg-champagne-300 md:left-[calc(50%+40px)] md:top-10 md:h-px md:w-[calc(100%-80px)]" />}
                <div className="md:mt-5 md:px-3">
                  <p className="font-semibold text-ink">{s.k}</p>
                  <p className="mt-1 text-[13.5px] text-ink-500">{s.d}</p>
                </div>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      <TechnologySection showLink={false} />
      <ProcessTimeline steps={journey} eyebrow="User experience" title={<>What a ride <em className="italic text-champagne-600">feels like.</em></>} intro="Every journey follows the same calm sequence — designed so nothing ever feels abrupt." />
      <CTASection title={<>See the engineering <em className="italic text-champagne-200">in person.</em></>} text="Visit our experience studio or book a home consultation with an engineer." image="materialStone" />
    </>
  );
}
