import { applications } from "@/data/features";
import SectionHeading from "@/components/ui/SectionHeading";
import SmartImage from "@/components/ui/SmartImage";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function ApplicationsSection({ eyebrow = "Residential applications", title }) {
  return (
    <section className="bg-ivory py-24 lg:py-36" aria-labelledby="apps-title">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <SectionHeading id="apps-title" eyebrow={eyebrow} title={title ?? <>A lift for every <em className="italic text-champagne-600">kind of home.</em></>} />
        <Stagger className="mt-16 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3" gap={0.1}>
          {applications.map((a, i) => (
            <StaggerItem as="article" key={a.slug} className={`group ${i % 3 === 1 ? "lg:mt-14" : ""}`}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[24px]">
                <SmartImage image={a.image} sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="transition-transform duration-[1600ms] ease-luxe group-hover:scale-105" />
              </div>
              <div className="mt-6 flex gap-5">
                <span className="mt-1 font-serif text-lg text-champagne-500">0{i + 1}</span>
                <div>
                  <h3 className="font-serif text-[1.8rem] leading-tight text-ink">{a.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-500">{a.text}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
