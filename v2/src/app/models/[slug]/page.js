import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { products, getProduct } from "@/data/products";
import { faqs } from "@/data/faqs";
import { images } from "@/data/images";
import { buildMetadata, productLd } from "@/lib/seo";
import JsonLd from "@/components/ui/JsonLd";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import SmartImage from "@/components/ui/SmartImage";
import SectionHeading from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import Gallery from "@/components/sections/Gallery";
import SpecificationTable from "@/components/sections/SpecificationTable";
import TechnologySection from "@/components/sections/TechnologySection";
import SafetySection from "@/components/sections/SafetySection";
import CustomizationSection from "@/components/sections/CustomizationSection";
import ApplicationsSection from "@/components/sections/ApplicationsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

export const dynamicParams = false;
export const generateStaticParams = () => products.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return buildMetadata({
    title: `${p.name} — ${p.line}`,
    description: `${p.summary} Explore specifications, features, safety and finishes for the ${p.name}.`,
    path: `/models/${p.slug}`,
    image: images[p.image].src.replace("w=2000", "w=1200"),
  });
}

export default async function ModelPage({ params }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();
  const idx = products.indexOf(p);
  const next = products[(idx + 1) % products.length];
  const gallery = p.gallery.map((g, i) => ({ image: g, title: `${p.name} — view ${i + 1}`, span: i % 3 === 0 ? "tall" : "short" }));
  const modelFaqs = [faqs[2], faqs[4], faqs[6], faqs[7], faqs[9]];

  return (
    <>
      <JsonLd data={productLd(p, images[p.image].src)} />
      {/* Hero */}
      <section className={`relative overflow-hidden bg-gradient-to-br ${p.accent} pb-16 pt-10 lg:pb-24 lg:pt-14`}>
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <Breadcrumbs items={[{ label: "Models", href: "/models" }, { label: p.name, href: `/models/${p.slug}` }]} />
          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
            <Reveal>
              <Eyebrow>{p.line}</Eyebrow>
              <h1 className="mt-5 font-serif text-[5rem] font-medium leading-[0.9] tracking-[0.04em] text-ink sm:text-[7rem] lg:text-[8.5rem]">{p.name.toUpperCase()}</h1>
              <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-ink-500">{p.summary}</p>
              <ul className="mt-8 flex flex-wrap gap-2">
                {p.highlights.map((h) => <li key={h} className="rounded-full border border-white/80 bg-white/60 px-4 py-2 text-[12.5px] text-ink-700 backdrop-blur">{h}</li>)}
              </ul>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button href={`/contact?model=${p.slug}`}>Book a Consultation</Button>
                <Button href="/brochure" variant="glass" arrow={false}>Download brochure</Button>
              </div>
            </Reveal>
            <Reveal delay={0.2} className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[32px] shadow-lift sm:aspect-[5/5] lg:aspect-[4/5]">
              <SmartImage image={p.image} priority sizes="(min-width:1024px) 50vw, 100vw" alt={`${p.name} ${p.line} in a residential setting (placeholder photography)`} />
              <dl className="absolute inset-x-4 bottom-4 grid grid-cols-3 gap-2 rounded-[22px] border border-white/70 bg-white/70 p-4 backdrop-blur-xl sm:inset-x-6 sm:bottom-6">
                {[["Capacity", p.specifications.capacity.split("·")[0]], ["Travel", p.specifications.travel], ["Stops", p.specifications.stops]].map(([l, v]) => (
                  <div key={l} className="text-center">
                    <dt className="text-[10px] uppercase tracking-[0.18em] text-ink-500">{l}</dt>
                    <dd className="mt-1 text-[13px] font-semibold text-ink">{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-ivory py-24 lg:py-32" aria-labelledby="overview-title">
        <div className="mx-auto grid max-w-[1320px] gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.2fr] lg:gap-24 lg:px-12">
          <SectionHeading id="overview-title" eyebrow="Overview" title={<>Designed for how <em className="italic text-champagne-600">you</em> live.</>} />
          <Reveal className="space-y-5 text-[16px] leading-relaxed text-ink-500">
            <p className="font-serif text-2xl leading-snug text-ink">{p.description}</p>
            <p>Each {p.name} is specified after a site survey, so its size, door arrangement and finishes are matched to your home and the way your family moves through it.</p>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-ivory pb-24 lg:pb-32" aria-labelledby="gallery-title">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <h2 id="gallery-title" className="mb-10 font-serif text-4xl text-ink">Gallery</h2>
          <Gallery items={gallery} columns="sm:columns-2" />
        </div>
      </section>

      {/* Specs + features */}
      <section className="bg-[linear-gradient(180deg,#F1F3F4_0%,#FAF8F4_100%)] py-24 lg:py-32" aria-labelledby="specs-title">
        <div className="mx-auto grid max-w-[1320px] gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <div>
            <SectionHeading id="specs-title" eyebrow="Specifications" title="The details." />
            <div className="mt-10"><SpecificationTable specs={p.specifications} placeholder={p.specsArePlaceholder} caption={`${p.name} specifications`} /></div>
          </div>
          <div>
            <SectionHeading eyebrow="Features" title="What sets it apart." as="h2" />
            <Stagger as="ul" className="mt-10 grid gap-4 sm:grid-cols-2">
              {p.features.map((f) => (
                <StaggerItem as="li" key={f.title} className="rounded-[22px] border border-white/80 bg-white/60 p-6 shadow-soft">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-champagne-100 text-champagne-700"><Check className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" /></span>
                  <h3 className="mt-5 font-serif text-2xl text-ink">{f.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-500">{f.text}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <TechnologySection />
      <SafetySection />
      <CustomizationSection />
      <ApplicationsSection eyebrow="Applications" title={<>Ideal for <em className="italic text-champagne-600">{p.bestFor.join(" & ").toLowerCase()}</em> homes — and more.</>} />
      <FAQSection items={modelFaqs} title={<>{p.name}, <em className="italic text-champagne-600">answered.</em></>} />

      {/* Next model */}
      <section className="bg-ivory py-16" aria-label="Next model">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <Link href={`/models/${next.slug}`} className="group flex items-center justify-between gap-6 border-y border-ink/10 py-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-500">
            <span>
              <span className="text-[11px] font-semibold uppercase tracking-eyebrow text-champagne-600">Next model</span>
              <span className="mt-2 block font-serif text-5xl text-ink transition-colors group-hover:text-champagne-600 sm:text-6xl">{next.name} <span className="text-2xl text-ink-500">— {next.line}</span></span>
            </span>
            <ArrowRight className="h-8 w-8 shrink-0 text-ink transition-transform duration-700 ease-luxe group-hover:translate-x-2" strokeWidth={1} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <CTASection image={p.image} />
    </>
  );
}
