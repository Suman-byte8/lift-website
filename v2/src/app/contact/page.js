import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/data/site";
import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/forms/ContactForm";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = buildMetadata({
  title: "Contact & Consultation",
  description: "Book a home lift consultation or site assessment. Call, email or visit our experience studio.",
  path: "/contact",
});

export default function ContactPage() {
  const { contact } = site;
  const addr = `${contact.address.line1}, ${contact.address.city}, ${contact.address.region} ${contact.address.postal}`;
  const cards = [
    { icon: Phone, label: "Phone", value: contact.phone, href: contact.phoneHref },
    { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { icon: MapPin, label: "Experience studio", value: addr },
  ];
  return (
    <>
      <PageHero
        crumbs={[{ label: "Contact", href: "/contact" }]}
        eyebrow="Book a consultation"
        title={<>Let’s talk about <em className="italic text-champagne-600">your home.</em></>}
        intro="Share a few details and a specialist will call you to understand your space, timeline and design preferences."
      />
      <section className="bg-[linear-gradient(180deg,#FAF8F4_0%,#EEF1ED_100%)] pb-24 lg:pb-32" aria-label="Contact options">
        <div className="mx-auto grid max-w-[1320px] gap-10 px-5 sm:px-8 lg:grid-cols-[1.4fr_1fr] lg:gap-14 lg:px-12">
          <Reveal><ContactForm /></Reveal>
          <div className="space-y-5">
            {cards.map(({ icon: I, label, value, href }) => (
              <Reveal key={label} className="flex gap-4 rounded-[24px] border border-white/80 bg-white/60 p-6 shadow-soft">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-champagne-100 text-champagne-700"><I className="h-4 w-4" strokeWidth={1.4} aria-hidden="true" /></span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-500">{label}</p>
                  {href ? <a href={href} className="mt-1 block break-all text-[15px] font-medium text-ink hover:text-champagne-600">{value}</a> : <p className="mt-1 text-[15px] font-medium text-ink">{value}</p>}
                </div>
              </Reveal>
            ))}
            <Reveal className="flex gap-4 rounded-[24px] border border-white/80 bg-white/60 p-6 shadow-soft">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-champagne-100 text-champagne-700"><Clock className="h-4 w-4" strokeWidth={1.4} aria-hidden="true" /></span>
              <div className="flex-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-500">Business hours</p>
                <dl className="mt-2 space-y-1.5 text-[14px]">
                  {contact.hours.map((h) => <div key={h.days} className="flex justify-between gap-4"><dt className="text-ink-500">{h.days}</dt><dd className="font-medium text-ink">{h.time}</dd></div>)}
                </dl>
              </div>
            </Reveal>
            <Reveal className="relative aspect-[4/3] overflow-hidden rounded-[24px] border border-white/80 bg-mist-50 shadow-soft">
              {/* Google Maps placeholder — replace the q= value with your exact address or a Place embed URL */}
              <iframe
                title={`Map showing ${site.name} experience studio`}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(addr)}&z=14&output=embed`}
                className="absolute inset-0 h-full w-full grayscale-[60%] sepia-[15%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
