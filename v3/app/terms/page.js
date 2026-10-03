import PageHero from '@/components/PageHero';
import { images } from '@/data/images';
import { createPageMetadata } from '@/lib/seo';
import SectionHeading from '@/components/SectionHeading';

export const metadata = createPageMetadata({ title: 'Website terms', description: 'Read the draft terms for using the AUREL home lift website concept.', path: '/terms', image: images.hero.src, imageAlt: images.hero.alt, robots: { index: true, follow: true } });

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Using this website" title={<>A few terms,<br />clearly stated.</>} description="This is a draft terms page for a website concept. Obtain legal review and insert the correct entity details before publication." breadcrumbs={[{ label: 'Terms' }]} size="short" />
      <section className="bg-[#f7f5ef] py-16 md:py-24"><div className="mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-8 md:px-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-16"><div><SectionHeading eyebrow="AUREL / website terms" title={<>An introduction,<br />not a specification.</>} description="All information on this concept website is subject to confirmation." /><p className="mt-5 text-[10px] leading-5 text-[#8a7657]">Draft placeholder · legal review required</p></div><div className="space-y-8 text-[13px] leading-7 text-muted"><article><h2 className="font-serif text-[25px] text-ink">Website information</h2><p className="mt-3">This website is an illustrative design concept. Product names, model descriptions, imagery, locations, contact details, project studies, sample testimonials and specifications may be placeholders. They must not be treated as a quotation, product offer, engineering recommendation or guarantee.</p></article><article><h2 className="font-serif text-[25px] text-ink">Technical and safety details</h2><p className="mt-3">The suitability, dimensions, capacity, travel, equipment, operating functions, installation method and applicable requirements for a home lift depend on the specific site and approved project specification. Obtain advice from qualified professionals and confirm all details in writing.</p></article><article><h2 className="font-serif text-[25px] text-ink">Intellectual property</h2><p className="mt-3">A final website operator should identify the owner of the branding, copy, imagery and other materials and set out the permissions that apply to visitors.</p></article><article><h2 className="font-serif text-[25px] text-ink">External services</h2><p className="mt-3">Links to third-party websites are provided for convenience only. Their content, terms and privacy practices are managed by the relevant operators.</p></article><article><h2 className="font-serif text-[25px] text-ink">Contact and governing law</h2><p className="mt-3">Insert the correct company name, registered office, support contact and applicable governing-law clause after legal review.</p></article></div></div></section>
    </>
  );
}
