import { buildMetadata, faqLd } from "@/lib/seo";
import { faqGroups } from "@/data/faqs";
import PageHero from "@/components/sections/PageHero";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTASection from "@/components/sections/CTASection";
import JsonLd from "@/components/ui/JsonLd";
import Button from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = buildMetadata({
  title: "Home Lift FAQs",
  description: "Answers to common questions about home lifts — space, shafts, installation time, safety, power cuts, maintenance and customization.",
  path: "/faq",
});

export default function FAQPage() {
  const all = faqGroups.flatMap((g) => g.items);
  return (
    <>
      <JsonLd data={faqLd(all)} />
      <PageHero crumbs={[{ label: "FAQ", href: "/faq" }]} eyebrow="Frequently asked" title={<>Questions, <em className="italic text-champagne-600">answered.</em></>} intro="Straightforward answers about planning, installing and living with a home lift." tone="from-mist-50 via-ivory to-champagne-100" />
      <section className="bg-ivory pb-24 lg:pb-32" aria-label="FAQ topics">
        <div className="mx-auto grid max-w-[1320px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.6fr_1.4fr] lg:px-12">
          <nav aria-label="FAQ topics" className="h-fit lg:sticky lg:top-28">
            <ul className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
              {faqGroups.map((g, i) => (
                <li key={g.title}><a href={`#faq-${i}`} className="block rounded-full border border-ink/10 px-4 py-2 text-[14px] text-ink-700 transition hover:border-champagne-500 lg:rounded-none lg:border-0 lg:border-l lg:px-5 lg:py-3 lg:hover:text-champagne-600">{g.title}</a></li>
              ))}
            </ul>
            <div className="mt-10 hidden rounded-[24px] border border-white/80 bg-gradient-to-br from-champagne-100 to-ivory p-6 shadow-soft lg:block">
              <p className="font-serif text-2xl text-ink">Still curious?</p>
              <p className="mt-2 text-[14px] text-ink-500">Our specialists will answer anything about your home.</p>
              <Button href="/contact" className="mt-5 px-5 py-3">Ask us</Button>
            </div>
          </nav>
          <div className="space-y-16">
            {faqGroups.map((g, i) => (
              <Reveal key={g.title} as="section" id={`faq-${i}`} className="scroll-mt-28" aria-labelledby={`faq-h-${i}`}>
                <h2 id={`faq-h-${i}`} className="mb-4 font-serif text-4xl text-ink">{g.title}</h2>
                <FAQAccordion items={g.items} defaultOpen={i === 0 ? 0 : null} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
