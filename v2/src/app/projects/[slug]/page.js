import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects, getProject } from "@/data/projects";
import { getProduct } from "@/data/products";
import { images } from "@/data/images";
import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Eyebrow from "@/components/ui/Eyebrow";
import ImageReveal from "@/components/ui/ImageReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import Gallery from "@/components/sections/Gallery";
import CTASection from "@/components/sections/CTASection";

export const dynamicParams = false;
export const generateStaticParams = () => projects.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return buildMetadata({ title: `${p.title}, ${p.location.split(",")[0]}`, description: p.summary, path: `/projects/${p.slug}`, image: images[p.cover].src.replace("w=2000", "w=1200") });
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();
  const model = getProduct(p.model);
  const next = projects[(projects.indexOf(p) + 1) % projects.length];
  const facts = [["Location", p.location], ["Home type", p.homeType], ["Lift model", `${model.name} — ${model.line}`], ["Stops", p.stops], ["Completed", p.year]];

  return (
    <>
      <section className="bg-[linear-gradient(180deg,#F5F1EA_0%,#FAF8F4_100%)] pb-12 pt-10 lg:pt-14">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <Breadcrumbs items={[{ label: "Projects", href: "/projects" }, { label: p.title, href: `/projects/${p.slug}` }]} />
          <Reveal className="mt-10 max-w-4xl">
            <Eyebrow>Case study · {p.homeType}</Eyebrow>
            <h1 className="mt-5 font-serif text-[3.2rem] font-medium leading-[1] text-ink sm:text-7xl lg:text-[6rem]">{p.title}</h1>
            <p className="mt-6 max-w-xl text-[16px] text-ink-500">{p.summary}</p>
          </Reveal>
        </div>
        <div className="mx-auto mt-12 max-w-[1320px] px-3 sm:px-5 lg:px-8">
          <ImageReveal image={p.cover} priority className="aspect-[16/10] w-full lg:aspect-[21/9]" sizes="100vw" />
        </div>
      </section>

      <section className="bg-ivory py-20 lg:py-28" aria-labelledby="overview-title">
        <div className="mx-auto grid max-w-[1320px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.4fr] lg:gap-24 lg:px-12">
          <Reveal as="dl" className="h-fit divide-y divide-ink/10 rounded-[24px] border border-white/80 bg-white/60 p-6 shadow-soft lg:sticky lg:top-28">
            {facts.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 py-3.5 first:pt-0 last:pb-0">
                <dt className="text-[12px] uppercase tracking-[0.16em] text-ink-500">{k}</dt>
                <dd className="text-right text-[14px] font-medium text-ink">{k === "Lift model" ? <Link href={`/models/${model.slug}`} className="text-champagne-700 hover:underline">{v}</Link> : v}</dd>
              </div>
            ))}
          </Reveal>
          <div className="space-y-14">
            <div>
              <SectionHeading id="overview-title" eyebrow="Project overview" title="The brief." />
              <Reveal className="mt-6 font-serif text-2xl leading-snug text-ink-700">{p.brief}</Reveal>
            </div>
            <div className="grid gap-10 sm:grid-cols-2">
              <Reveal><h2 className="font-serif text-3xl text-ink">Design</h2><p className="mt-3 text-[15px] leading-relaxed text-ink-500">{p.design}</p></Reveal>
              <Reveal delay={0.1}><h2 className="font-serif text-3xl text-ink">Installation</h2><p className="mt-3 text-[15px] leading-relaxed text-ink-500">{p.installation}</p></Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory pb-24" aria-labelledby="pgallery-title">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <h2 id="pgallery-title" className="mb-10 font-serif text-4xl text-ink">Gallery</h2>
          <Gallery items={p.gallery.map((g, i) => ({ image: g, title: `${p.title} — ${i + 1}` }))} />
          <Link href={`/projects/${next.slug}`} className="group mt-16 flex items-center justify-between gap-6 border-y border-ink/10 py-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-500">
            <span>
              <span className="text-[11px] font-semibold uppercase tracking-eyebrow text-champagne-600">Next project</span>
              <span className="mt-2 block font-serif text-4xl text-ink transition-colors group-hover:text-champagne-600 sm:text-5xl">{next.title}</span>
            </span>
            <ArrowRight className="h-8 w-8 shrink-0 transition-transform duration-700 ease-luxe group-hover:translate-x-2" strokeWidth={1} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <CTASection />
    </>
  );
}
