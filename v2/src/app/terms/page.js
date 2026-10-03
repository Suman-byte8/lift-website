import { buildMetadata } from "@/lib/seo";
import { site } from "@/data/site";
import PageHero from "@/components/sections/PageHero";

export const metadata = buildMetadata({ title: "Terms of Use", description: `Terms governing use of the ${site.name} website.`, path: "/terms" });

const sections = [
  ["Website content", "Content on this site is for general information. Product specifications, images and availability are indicative and confirmed only in a written proposal."],
  ["Intellectual property", `All brand names, text and designs on this site belong to ${site.name} unless otherwise stated.`],
  ["Limitation of liability", "We take care to keep information accurate but do not accept liability for decisions made solely on the basis of website content."],
  ["Contact", `Questions about these terms can be sent to ${site.contact.email}.`],
];

export default function TermsPage() {
  return (
    <>
      <PageHero crumbs={[{ label: "Terms of Use", href: "/terms" }]} eyebrow="Legal" title="Terms of Use" intro="Template text — have this reviewed by your legal adviser before launch." />
      <section className="bg-ivory pb-28"><div className="mx-auto max-w-3xl space-y-10 px-5 sm:px-8">
        {sections.map(([h, t]) => <div key={h}><h2 className="font-serif text-3xl text-ink">{h}</h2><p className="mt-3 text-[15.5px] leading-relaxed text-ink-500">{t}</p></div>)}
      </div></section>
    </>
  );
}
