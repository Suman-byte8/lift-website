import { buildMetadata } from "@/lib/seo";
import { site } from "@/data/site";
import PageHero from "@/components/sections/PageHero";

export const metadata = buildMetadata({ title: "Privacy Policy", description: `How ${site.name} collects and uses personal information.`, path: "/privacy" });

const sections = [
  ["Information we collect", "When you submit a form we collect the details you provide — such as name, phone, email, city and information about your property — to respond to your enquiry."],
  ["How we use it", "We use your information to contact you about your enquiry, arrange consultations and site visits, and send materials you request. We do not sell personal data."],
  ["Cookies & analytics", "We may use cookies and analytics tools to understand how the site is used. You can control cookies through your browser settings."],
  ["Your rights", `You can request access, correction or deletion of your data by writing to ${site.contact.email}.`],
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero crumbs={[{ label: "Privacy Policy", href: "/privacy" }]} eyebrow="Legal" title="Privacy Policy" intro="Template text — have this reviewed by your legal adviser before launch." />
      <section className="bg-ivory pb-28"><div className="mx-auto max-w-3xl space-y-10 px-5 sm:px-8">
        {sections.map(([h, t]) => <div key={h}><h2 className="font-serif text-3xl text-ink">{h}</h2><p className="mt-3 text-[15.5px] leading-relaxed text-ink-500">{t}</p></div>)}
      </div></section>
    </>
  );
}
