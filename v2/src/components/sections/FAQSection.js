import { faqs } from "@/data/faqs";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import JsonLd from "@/components/ui/JsonLd";
import { faqLd } from "@/lib/seo";
import FAQAccordion from "./FAQAccordion";

export default function FAQSection({ items = faqs, title, withSchema = true, showLink = true }) {
  return (
    <section className="bg-[linear-gradient(180deg,#FAF8F4_0%,#F1F3F4_100%)] py-24 lg:py-36" aria-labelledby="faq-title">
      {withSchema && <JsonLd data={faqLd(items)} />}
      <div className="mx-auto grid max-w-[1320px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.4fr] lg:px-12">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading id="faq-title" eyebrow="Questions & answers" title={title ?? <>Everything you <em className="italic text-champagne-600">wanted to ask.</em></>} intro="Can't find what you need? Our specialists are happy to talk through your home." />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact">Ask a specialist</Button>
            {showLink && <Button href="/faq" variant="outline" arrow={false}>All FAQs</Button>}
          </div>
        </div>
        <FAQAccordion items={items} />
      </div>
    </section>
  );
}
