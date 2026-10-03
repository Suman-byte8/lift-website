import { buildMetadata } from "@/lib/seo";
import PageHero from "@/components/sections/PageHero";
import ProjectsExplorer from "@/components/sections/ProjectsExplorer";
import CTASection from "@/components/sections/CTASection";

export const metadata = buildMetadata({
  title: "Projects & Gallery",
  description: "Home lift installations in villas, duplexes and apartments — explore projects by home type and style.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Projects", href: "/projects" }]}
        eyebrow="Projects"
        title={<>Homes we’ve <em className="italic text-champagne-600">elevated.</em></>}
        intro="A selection of residences where the lift became part of the architecture. Filter by home type or style."
        tone="from-champagne-100 via-ivory to-mist-50"
      />
      <section className="bg-ivory pb-28 pt-4" aria-label="Project gallery">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <ProjectsExplorer />
          <p className="mt-16 text-[11.5px] text-ink-300">Project stories and photography are placeholders — replace in data/projects.js and data/images.js.</p>
        </div>
      </section>
      <CTASection title={<>Imagine it in <em className="italic text-champagne-200">your home.</em></>} />
    </>
  );
}
