import { Check } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/forms/ContactForm";
import SmartImage from "@/components/ui/SmartImage";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = buildMetadata({
  title: "Request a Brochure",
  description: "Request the Velora home lift brochure — models, finishes, specifications and installation guidance in one beautifully designed guide.",
  path: "/brochure",
});

const inside = ["All four model families in detail", "Finish and material library", "Indicative specifications & space planning", "Safety systems overview", "Installation journey and timelines", "Care and maintenance plans"];

export default function BrochurePage() {
  return (
    <>
      <PageHero crumbs={[{ label: "Brochure", href: "/brochure" }]} eyebrow="The Velora brochure" title={<>Everything, <em className="italic text-champagne-600">beautifully bound.</em></>} intro="A considered guide to our lifts, finishes and process — sent straight to your inbox." />
      <section className="bg-[linear-gradient(180deg,#FAF8F4_0%,#F5F1EA_100%)] pb-24 lg:pb-32" aria-label="Brochure request">
        <div className="mx-auto grid max-w-[1320px] items-start gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <Reveal>
            {/* brochure mock-up */}
            <div className="relative mx-auto aspect-[3/4] w-[78%] max-w-[420px]">
              <div aria-hidden="true" className="absolute inset-0 translate-x-6 translate-y-4 rotate-[5deg] rounded-[14px] bg-sage-100 shadow-soft" />
              <div className="relative h-full overflow-hidden rounded-[14px] bg-ivory shadow-lift">
                <div className="absolute inset-x-0 top-0 h-[62%]"><SmartImage image="villaWhite" sizes="420px" alt="Brochure cover photograph" /></div>
                <div className="absolute inset-x-0 bottom-0 flex h-[38%] flex-col justify-between bg-gradient-to-b from-ivory to-champagne-100 p-7">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.34em] text-champagne-600">Collection {new Date().getFullYear()}</p>
                  <p className="font-serif text-4xl leading-[0.95] text-ink">Elevate the<br />way you live.</p>
                  <p className="font-serif text-lg tracking-[0.08em] text-ink-500">Velora</p>
                </div>
              </div>
            </div>
            <h2 className="mt-16 font-serif text-3xl text-ink">What’s inside</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {inside.map((t) => <li key={t} className="flex items-start gap-3 text-[14.5px] text-ink-700"><Check className="mt-0.5 h-4 w-4 shrink-0 text-champagne-600" strokeWidth={1.6} aria-hidden="true" />{t}</li>)}
            </ul>
          </Reveal>
          <Reveal delay={0.15} className="lg:sticky lg:top-28">
            <ContactForm type="brochure" heading="Request the brochure" submitLabel="Send me the brochure" compact />
          </Reveal>
        </div>
      </section>
    </>
  );
}
