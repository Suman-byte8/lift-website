import Link from 'next/link';
import { createPageMetadata } from '@/lib/seo';
import { images } from '@/data/images';
import { ArrowUpRight, Clock3, Mail, MapPin, Phone } from 'lucide-react';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import { siteConfig } from '@/data/site';

export const metadata = createPageMetadata({ title: 'Talk with an AUREL home lift specialist', description: 'Book a considered first conversation about your home, your priorities and the right residential lift direction.', path: '/contact', image: images.interiors.softLiving.src, imageAlt: images.interiors.softLiving.alt });

const contactDetails = [
  { icon: Phone, label: 'Call the studio', value: siteConfig.phoneDisplay, href: `tel:${siteConfig.phoneLink}` },
  { icon: Mail, label: 'Write to us', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: MapPin, label: 'Studio', value: siteConfig.office, href: null },
  { icon: Clock3, label: 'Conversation hours', value: siteConfig.hours, href: null }
];

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Your home, your next chapter" title={<>Let’s begin<br />with a conversation.</>} description="Tell us a little about your home and what you would like a lift to make possible. The first step is simply understanding what matters to you." image={images.interiors.softLiving.src} alt="Warm, welcoming living space with natural light and soft neutral materials" breadcrumbs={[{ label: 'Contact' }]} />
      <section className="bg-[#f7f5ef] py-16 md:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 md:px-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:px-16">
          <div>
            <SectionHeading eyebrow="A thoughtful first step" title={<>Tell us about<br />your space.</>} description="Whether you have a floor plan or only an early idea, our team can help you shape the next useful question." />
            <div className="mt-9 space-y-0 divide-y divide-[#dfdbd2] border-y border-[#dfdbd2]">
              {contactDetails.map(({ icon: Icon, label, value, href }) => <div key={label} className="flex gap-4 py-4"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#d3c9b8] text-[#8a7657]"><Icon size={15} strokeWidth={1.3} /></span><div><p className="text-[8px] uppercase tracking-[0.16em] text-[#8a7657]">{label}</p>{href ? <a href={href} className="mt-1.5 inline-block text-[12px] text-ink transition hover:text-[#8d7653] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne">{value}</a> : <p className="mt-1.5 text-[12px] leading-5 text-ink">{value}</p>}</div></div>)}
            </div>
            <Link href="/faq" className="group mt-6 inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.14em] text-muted transition-colors hover:text-ink">See common questions <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
          </div>
          <div className="rounded-[1.5rem] border border-[#dfdbd2] bg-[#f1efe9] p-5 sm:p-8 md:p-10">
            <div className="mb-7 border-b border-[#ddd8ce] pb-6"><p className="text-[9px] uppercase tracking-[0.17em] text-[#8a7657]">Request a consultation</p><h2 className="mt-3 font-serif text-[30px] leading-tight text-ink md:text-[36px]">A little about your home.</h2><p className="mt-3 max-w-lg text-[12px] leading-6 text-muted">Share a few details and a specialist can prepare for a more useful conversation.</p></div>
            <ContactForm />
          </div>
        </div>
      </section>
      <section className="bg-[#e9ede7] py-16 md:py-20">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 sm:px-8 md:grid-cols-[0.8fr_1.2fr] md:items-center md:px-12 lg:px-16">
          <div><p className="text-[9px] uppercase tracking-[0.17em] text-[#8a7657]">Find our studio</p><h2 className="mt-3 font-serif text-[clamp(2rem,4vw,3.6rem)] leading-tight text-ink">A place for a good conversation.</h2><p className="mt-4 text-[12px] leading-6 text-muted">Office location and map details will be confirmed before publication.</p></div>
          <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden rounded-[1.5rem] border border-[#d6ddd3] bg-[radial-gradient(circle_at_50%_50%,_#f8f8f2_0%,_#e4e9e1_58%,_#dce3dc_100%)]">
            <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_right,_#b6c0b4_1px,_transparent_1px),_linear-gradient(to_bottom,_#b6c0b4_1px,_transparent_1px)] bg-[length:38px_38px] opacity-30" />
            <div className="relative rounded-2xl border border-white/75 bg-white/75 px-6 py-5 text-center shadow-soft backdrop-blur"><MapPin size={22} strokeWidth={1.3} className="mx-auto text-[#9a815d]" /><p className="mt-3 text-[9px] uppercase tracking-[0.16em] text-[#8a7657]">AUREL Studio</p><p className="mt-1 font-serif text-[18px] text-ink">Map placeholder</p><p className="mt-2 max-w-[220px] text-[10px] leading-5 text-muted">Replace with verified office address and an accessible map embed.</p></div>
          </div>
        </div>
      </section>
      <CTASection title="We would love to hear what you are imagining." description="A conversation does not need a finished plan. It just needs a place to begin." image={images.interiors.villaLiving.src} />
    </>
  );
}
