import { buildMetadata } from "@/lib/seo";
import { safetyFeatures } from "@/data/features";
import { faqs } from "@/data/faqs";
import PageHero from "@/components/sections/PageHero";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import { Stagger, StaggerItem, Reveal } from "@/components/ui/Reveal";
import LiftIllustration from "@/components/lift/LiftIllustration";

export const metadata = buildMetadata({
  title: "Home Lift Safety",
  description: "Understand the layered safety systems in a Velora home lift — interlocks, door sensors, battery-backed emergency lowering, alarms and over-speed protection.",
  path: "/safety",
});

const layers = [
  { name: "Prevent", text: "Interlocks and sensors stop unsafe situations before motion begins.", ring: "inset-0", tone: "border-sage-300 bg-sage-50/60" },
  { name: "Detect", text: "Door edges, light curtains and obstacle sensors watch continuously.", ring: "inset-[14%]", tone: "border-sage-300 bg-sage-100/60" },
  { name: "Protect", text: "Over-speed safety gear and battery-backed lowering act independently.", ring: "inset-[28%]", tone: "border-sage-500/50 bg-white/80" },
];

const outage = [
  { n: "01", title: "Power is lost", text: "The battery backup takes over cabin lighting and the alarm immediately.", icon: "BatteryCharging" },
  { n: "02", title: "Cabin lowers", text: "Automatic emergency lowering moves the cabin gently to the nearest landing.", icon: "ArrowDownToLine" },
  { n: "03", title: "Doors release", text: "Once level, the door can be opened so passengers step out safely.", icon: "Lock" },
  { n: "04", title: "We respond", text: "Your service team is alerted (where an auto-dialler is fitted) and follows up.", icon: "HeartHandshake" },
];

export default function SafetyPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Safety", href: "/safety" }]}
        eyebrow="Safety"
        title={<>Peace of mind, <em className="italic text-sage-700">built in.</em></>}
        intro="Safety in a home lift isn't one feature — it's several independent layers. Here's how they work, in plain language."
        tone="from-sage-50 via-ivory to-mist-50"
      />

      <section className="bg-ivory py-24 lg:py-32" aria-labelledby="layers-title">
        <div className="mx-auto grid max-w-[1320px] items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
          <Reveal className="relative mx-auto aspect-square w-full max-w-[520px]">
            {layers.map((l) => <div key={l.name} aria-hidden="true" className={`absolute ${l.ring} rounded-full border ${l.tone}`} />)}
            <div className="absolute inset-[38%] grid place-items-center"><div className="w-[55%]"><LiftIllustration floors={2} travel={false} /></div></div>
            {layers.map((l, i) => (
              <span key={l.name} className="absolute left-1/2 -translate-x-1/2 rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-sage-700 shadow-soft backdrop-blur" style={{ top: `${1 + i * 14}%` }}>{l.name}</span>
            ))}
          </Reveal>
          <div>
            <SectionHeading id="layers-title" eyebrow="Layered protection" title={<>Three layers, <em className="italic text-sage-700">working independently.</em></>} />
            <ol className="mt-10 space-y-6">
              {layers.map((l, i) => (
                <Reveal as="li" key={l.name} delay={i * 0.12} className="flex gap-5 border-t border-ink/10 pt-6">
                  <span className="font-serif text-2xl text-sage-500">0{i + 1}</span>
                  <div><h3 className="font-serif text-2xl text-ink">{l.name}</h3><p className="mt-1 text-[15px] text-ink-500">{l.text}</p></div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#EEF1ED_0%,#FAF8F4_100%)] py-24 lg:py-32" aria-labelledby="features-title">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <SectionHeading id="features-title" eyebrow="Safety features" title="Each feature, explained." intro="Feature sets vary by model and local regulation — your proposal lists exactly what's included." />
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" gap={0.08}>
            {safetyFeatures.map((f) => (
              <StaggerItem as="article" key={f.title} className="group rounded-[24px] border border-white/80 bg-white/65 p-7 shadow-soft transition-all duration-700 ease-luxe hover:-translate-y-1 hover:shadow-lift">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-sage-50 text-sage-700 transition-colors duration-700 group-hover:bg-sage-700 group-hover:text-white"><Icon name={f.icon} /></span>
                <h3 className="mt-6 font-serif text-[1.6rem] leading-tight text-ink">{f.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-500">{f.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <ProcessTimeline steps={outage} eyebrow="During a power cut" title={<>What happens if <em className="italic text-champagne-600">the power fails?</em></>} intro="A calm, automatic sequence designed so no one is left waiting between floors." />

      <section className="bg-ivory py-24 lg:py-28" aria-labelledby="maint-title">
        <div className="mx-auto grid max-w-[1320px] gap-10 px-5 sm:px-8 lg:grid-cols-3 lg:px-12">
          <SectionHeading id="maint-title" eyebrow="Keeping it safe" title="Maintenance matters." />
          {[["Planned maintenance", "Scheduled preventive visits keep sensors, brakes and batteries in specification."], ["Testing & inspection", "Every lift is tested before handover; periodic inspections follow local requirements."]].map(([t, d]) => (
            <Reveal key={t} className="rounded-[24px] border border-white/80 bg-gradient-to-br from-sage-50 to-ivory p-8 shadow-soft">
              <h3 className="font-serif text-3xl text-ink">{t}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-500">{d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <FAQSection items={[faqs[5], faqs[7], faqs[8]]} title={<>Safety, <em className="italic text-champagne-600">answered.</em></>} />
      <CTASection />
    </>
  );
}
