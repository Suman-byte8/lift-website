import Image from 'next/image';
import { images } from '@/data/images';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionHeading from '@/components/SectionHeading';
import ProductCard from '@/components/ProductCard';
import SpecificationTable from '@/components/SpecificationTable';
import FeatureCard from '@/components/FeatureCard';
import FAQAccordion from '@/components/FAQAccordion';
import ButtonLink from '@/components/ButtonLink';
import CTASection from '@/components/CTASection';
import StructuredData from '@/components/StructuredData';
import { Reveal } from '@/components/Reveal';
import { products } from '@/data/products';
import { faqs } from '@/data/faqs';
import { safetyFeatures, technologyFeatures, customization } from '@/data/content';
import { siteConfig } from '@/data/site';

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) return { title: 'Model not found' };
  return {
    title: `${product.name} ${product.cardTitle}`,
    description: product.description,
    alternates: { canonical: `/models/${product.slug}` },
    openGraph: { title: `${product.name} | AUREL Home Lifts`, description: product.description, url: `/models/${product.slug}`, images: [product.image] },
    twitter: { card: 'summary_large_image', title: `${product.name} | AUREL Home Lifts`, description: product.description, images: [product.image] }
  };
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();
  const related = products.filter((item) => item.slug !== product.slug).slice(0, 3);
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${product.name} ${product.cardTitle}`,
    description: product.description,
    image: [`${siteConfig.origin}${product.image}`],
    brand: { '@type': 'Brand', name: 'AUREL' },
    category: 'Residential home lift',
    additionalProperty: Object.entries(product.specifications).map(([name, value]) => ({ '@type': 'PropertyValue', name, value }))
  };
  const breadcrumbs = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteConfig.origin}/` },
      { '@type': 'ListItem', position: 2, name: 'Models', item: `${siteConfig.origin}/models` },
      { '@type': 'ListItem', position: 3, name: product.name, item: `${siteConfig.origin}/models/${product.slug}` }
    ]
  };
  return (
    <>
      <StructuredData type="product" data={schema} />
      <StructuredData type="breadcrumbs" data={breadcrumbs} />
      <section className="relative overflow-hidden bg-[#f2efe8]">
        <div className="mx-auto grid max-w-[1440px] items-center gap-0 px-5 sm:px-8 md:px-12 lg:min-h-[670px] lg:grid-cols-[0.84fr_1.16fr] lg:px-16">
          <div className="relative z-10 py-14 md:py-20 lg:py-24">
            <Breadcrumbs items={[{ label: 'Models', href: '/models' }, { label: product.name }]} />
            <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-[#8a7657]">{product.category} collection <span className="px-2">·</span> {product.descriptor}</p>
            <h1 className="font-serif text-[clamp(3.5rem,8vw,7.4rem)] leading-[0.88] tracking-[-0.055em] text-ink">{product.name}</h1>
            <p className="mt-5 font-serif text-[clamp(1.35rem,2.4vw,2.1rem)] leading-tight text-[#55574f]">{product.cardTitle}</p>
            <p className="mt-6 max-w-xl text-[14px] leading-7 text-muted md:text-[15px]">{product.description} {product.bestFor}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><ButtonLink href="/contact">Discuss this model</ButtonLink><ButtonLink href="/models" variant="outline">Back to all models</ButtonLink></div>
            <p className="mt-7 text-[9px] uppercase tracking-[0.14em] text-[#818177]">Project specifications confirmed after consultation</p>
          </div>
          <div className="relative -mx-5 aspect-[1.1/1] overflow-hidden sm:-mx-8 md:-mx-12 lg:mx-0 lg:aspect-[0.93/1] lg:min-h-[670px]">
            <Image src={product.image} alt={product.imageAlt} fill priority sizes="(max-width: 1024px) 100vw, 58vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#252620]/20 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 rounded-xl border border-white/70 bg-white/80 px-4 py-3 backdrop-blur sm:bottom-8 sm:left-8"><p className="text-[8px] uppercase tracking-[0.16em] text-[#8a7657]">Design direction</p><p className="mt-1 font-serif text-[17px] text-ink">{product.name} / AUREL</p></div>
          </div>
        </div>
      </section>

      <section className="bg-[#faf8f4] py-20 md:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 md:px-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-16">
          <div><SectionHeading eyebrow={`${product.name} / The idea`} title={<>A clearer way<br />to connect home.</>} description={product.overview} /><p className="mt-5 text-[13px] leading-7 text-muted">Best considered as part of the home from the beginning, this collection gives you a direction for the form and feel. The project team will refine every technical decision against your actual layout.</p></div>
          <SpecificationTable specifications={product.specifications} caption="Early planning details" />
        </div>
      </section>

      <section className="bg-[#e9ede7] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16"><div className="mb-10 grid gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:items-end"><SectionHeading eyebrow="What shapes the experience" title={<>A considered set<br />of possibilities.</>} /><p className="max-w-xl text-[14px] leading-7 text-muted lg:justify-self-end">These are design intentions, not a final feature list. Every element is checked against the selected model, building and local requirements.</p></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{product.features.map((feature, index) => <FeatureCard key={feature} index={index} feature={{ icon: ['Layers3', 'Ruler', 'Settings2', 'House'][index % 4], title: feature, text: index === 0 ? product.bestFor : 'Final availability is confirmed in the project-specific proposal.' }} variant="soft" />)}</div></div>
      </section>

      <section className="bg-[#f7f5ef] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16"><div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"><SectionHeading eyebrow="In the home" title={<>Form, light<br />and material.</>} description="A few visual references to help start a conversation about how this collection might live in your space." /><ButtonLink href="/contact" variant="outline">Plan a consultation</ButtonLink></div><div className="grid gap-4 md:grid-cols-3">{product.gallery.map((image, index) => <Reveal key={image} delay={index * 0.07} className={`relative overflow-hidden rounded-[1.35rem] ${index === 1 ? 'aspect-[0.92/1] md:mt-10' : 'aspect-[1.12/1]'}`}><Image src={image} alt={`${product.name} design inspiration ${index + 1}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 hover:scale-105 motion-reduce:transition-none motion-reduce:hover:scale-100" /></Reveal>)}</div></div>
      </section>

      <section className="bg-[#f0eee8] py-20 md:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 md:px-12 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:px-16">
          <div><SectionHeading eyebrow="Engineering & everyday use" title={<>Quiet capability,<br />clearly explained.</>} description="Drive options, controls and ride characteristics are discussed in the context of your project. The final system is selected only after technical and site review." /><div className="mt-7 space-y-4">{technologyFeatures.slice(0, 3).map((feature) => <article key={feature.title} className="border-b border-[#dedad1] pb-4 last:border-0"><h3 className="text-[10px] uppercase tracking-[0.14em] text-[#8a7657]">{feature.title}</h3><p className="mt-2 text-[12px] leading-6 text-muted">{feature.text}</p></article>)}</div></div>
          <div className="relative min-h-[430px] overflow-hidden rounded-[1.5rem] border border-[#dfdbd2] bg-[#e6e4dc]"><Image src={images.staircaseLift.src} alt="A considered glass lift installation alongside a warm timber stair" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#252620]/60 via-transparent to-transparent" /><div className="absolute bottom-6 left-6 max-w-sm text-white"><p className="text-[9px] uppercase tracking-[0.16em] text-white/75">Built around your brief</p><p className="mt-2 font-serif text-[28px] leading-tight">Every movement begins with a plan.</p></div></div>
        </div>
      </section>

      <section className="bg-[#e9ede7] py-20 md:py-28"><div className="mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-8 md:px-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20 lg:px-16"><div><SectionHeading eyebrow="Safety and care" title={<>The right details,<br />for your home.</>} description="Safety systems, emergency procedures, user guidance and service schedules are specified for the final selected configuration." /><Link href="/safety" className="group mt-7 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] text-ink">Read about safety <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></Link></div><div className="grid gap-3 sm:grid-cols-2">{safetyFeatures.slice(0, 4).map((feature) => <article key={feature.title} className="rounded-[1.2rem] border border-[#d9ded7] bg-[#f5f6f1]/80 p-5"><h3 className="font-serif text-[21px] text-ink">{feature.title}</h3><p className="mt-2 text-[12px] leading-6 text-muted">{feature.text}</p></article>)}</div></div><p className="mx-auto mt-6 max-w-[1440px] px-5 text-[10px] leading-5 text-muted sm:px-8 md:px-12 lg:px-16">System functions and local compliance requirements vary. Please request the complete documentation for the final installation.</p></section>

      <section className="bg-[#faf8f4] py-20 md:py-28"><div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16"><div className="mb-9 grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"><SectionHeading eyebrow="The final expression" title={<>Choose the details<br />that feel like you.</>} /><p className="max-w-xl text-[13px] leading-7 text-muted lg:justify-self-end">Glass, cabin surfaces, handrails, lighting, flooring and controls may be considered as part of the design conversation. Availability depends on the model.</p></div><div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">{customization.map((item) => <div key={item.title} className="rounded-[1rem] border border-[#e0dcd3] bg-white/60 p-4"><span className={`block h-10 w-10 rounded-full border border-white shadow-inner ${item.swatch}`} /><h3 className="mt-4 text-[9px] uppercase tracking-[0.13em] text-ink">{item.title}</h3><p className="mt-2 text-[10px] leading-5 text-muted">{item.detail}</p></div>)}</div></div></section>

      <section className="bg-[#e9ede7] py-20 md:py-28"><div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16"><div className="mb-9 grid gap-7 lg:grid-cols-[0.82fr_1.18fr] lg:items-end"><SectionHeading eyebrow="Applications" title={<>A thoughtful fit<br />for your kind of home.</>} description={product.bestFor} /><p className="max-w-xl text-[12px] leading-6 text-muted lg:justify-self-end">These are possible design contexts, not a guarantee of suitability. A site and engineering review determines what can be achieved.</p></div><div className="grid gap-3 sm:grid-cols-3">{product.applications.map((application, index) => <article key={application} className="rounded-[1.2rem] border border-[#d7ded5] bg-[#f5f6f2]/80 p-5"><p className="font-serif text-[22px] text-[#9b8967]">0{index + 1}</p><h3 className="mt-4 font-serif text-[22px] text-ink">{application}</h3><p className="mt-2 text-[11px] leading-5 text-muted">Considered against the home's structure, routes and everyday use.</p></article>)}</div></div></section>

      <section className="bg-[#f0eee8] py-20 md:py-28"><div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16"><div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"><SectionHeading eyebrow="Still exploring?" title={<>One good fit leads<br />to another.</>} description="Compare other AUREL design directions to see which conversation feels right for your home." /><Link href="/models" className="group inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] text-ink">All models <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1" /></Link></div><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{related.map((item, index) => <ProductCard key={item.slug} product={item} index={index} compact />)}</div></div></section>

      <FAQSection title={`${product.name} questions`} />
      <CTASection title={`Imagine ${product.name} in your home.`} description="Tell us about your space and what you would like a lift to make possible." image={product.image} />
    </>
  );
}

function FAQSection({ title }) {
  const items = faqs.filter((item) => ['How much space is required?', 'Can the lift be customized?', 'Can it be installed in an existing home?', 'How many floors can it serve?'].includes(item.question));
  return <section className="bg-[#f7f5ef] py-20 md:py-28"><div className="mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-8 md:px-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20 lg:px-16"><SectionHeading eyebrow="A few useful details" title={<>Questions about<br />{title.replace(' questions', '')}?</>} description="A site-specific answer is always more useful. These common questions are a good place to begin." /><FAQAccordion items={items} /></div></section>;
}
