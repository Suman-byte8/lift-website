import { inspiration } from "@/data/features";
import SectionHeading from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/Button";
import Gallery from "./Gallery";

export default function InspirationSection() {
  return (
    <section className="bg-ivory py-24 lg:py-36" aria-labelledby="inspire-title">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading id="inspire-title" eyebrow="Inspiration" title={<>Made for <em className="italic text-champagne-600">Beautiful</em> Spaces.</>} intro="From minimalist apartments to classic family residences — a lift that adapts to the character of the home." />
          <TextLink href="/projects">View all projects</TextLink>
        </div>
        <Gallery items={inspiration} />
      </div>
    </section>
  );
}
