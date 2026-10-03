import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Eyebrow from "@/components/ui/Eyebrow";
import ImageReveal from "@/components/ui/ImageReveal";
import { Reveal } from "@/components/ui/Reveal";

/** Editorial hero for inner pages. */
export default function PageHero({ eyebrow, title, intro, image, crumbs, children, tone = "from-champagne-100 via-ivory to-sage-50" }) {
  return (
    <section className={`relative overflow-hidden bg-gradient-to-br ${tone} pb-16 pt-10 lg:pb-24 lg:pt-14`}>
      <div aria-hidden="true" className="absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-white/60 blur-3xl" />
      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        {crumbs && <Breadcrumbs items={crumbs} />}
        <div className={`mt-10 grid items-end gap-10 ${image ? "lg:grid-cols-[1.1fr_1fr] lg:gap-16" : ""}`}>
          <Reveal className="max-w-3xl">
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            <h1 className="mt-6 font-serif text-[3rem] font-medium leading-[1.0] tracking-[-0.015em] text-ink sm:text-6xl lg:text-[5rem]">{title}</h1>
            {intro && <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-ink-500">{intro}</p>}
            {children}
          </Reveal>
          {image && <ImageReveal image={image} priority className="aspect-[5/4] w-full lg:aspect-[4/3]" sizes="(min-width:1024px) 45vw, 100vw" />}
        </div>
      </div>
    </section>
  );
}
