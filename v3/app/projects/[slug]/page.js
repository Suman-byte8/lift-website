import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionHeading from '@/components/SectionHeading';
import ButtonLink from '@/components/ButtonLink';
import CTASection from '@/components/CTASection';
import StructuredData from '@/components/StructuredData';
import { projects } from '@/data/projects';
import { siteConfig } from '@/data/site';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return { title: 'Project not found' };
  return {
    title: `${project.title} — project study`,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { title: `${project.title} | AUREL Project Study`, description: project.summary, url: `/projects/${project.slug}`, images: [project.image] },
    twitter: { card: 'summary_large_image', title: `${project.title} | AUREL`, description: project.summary, images: [project.image] }
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const moreProjects = projects.filter((item) => item.slug !== project.slug).slice(0, 3);
  const schema = {
    '@context': 'https://schema.org', '@type': 'CreativeWork',
    name: project.title,
    description: project.summary,
    image: `${siteConfig.origin}${project.image}`,
    creator: { '@type': 'Organization', name: 'AUREL Home Lifts' },
    genre: 'Illustrative residential design study'
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteConfig.origin}/` },
      { '@type': 'ListItem', position: 2, name: 'Projects', item: `${siteConfig.origin}/projects` },
      { '@type': 'ListItem', position: 3, name: project.title, item: `${siteConfig.origin}/projects/${project.slug}` }
    ]
  };
  return (
    <>
      <StructuredData type="project" data={schema} />
      <StructuredData type="breadcrumbs" data={breadcrumbSchema} />
      <section className="bg-[#f2efe8]">
        <div className="mx-auto max-w-[1440px] px-5 pt-8 sm:px-8 md:px-12 lg:px-16">
          <Breadcrumbs items={[{ label: 'Projects', href: '/projects' }, { label: project.title }]} />
          <div className="grid items-end gap-7 pb-10 md:grid-cols-[1fr_0.58fr] md:pb-12">
            <div><p className="mb-4 text-[9px] uppercase tracking-[0.18em] text-[#8a7657]">Illustrative project study <span className="px-2">·</span> {project.type} <span className="px-2">·</span> {project.style}</p><h1 className="font-serif text-[clamp(3rem,7vw,6.8rem)] leading-[0.94] tracking-[-0.045em] text-ink">{project.title}</h1></div>
            <p className="max-w-lg text-[14px] leading-7 text-muted md:justify-self-end">{project.summary}</p>
          </div>
        </div>
        <div className="relative mx-auto aspect-[1.18/1] max-h-[690px] max-w-[1440px] overflow-hidden sm:aspect-[1.8/1] md:mx-12 md:rounded-[1.4rem] lg:mx-auto lg:w-[calc(100%-8rem)]">
          <Image src={project.image} alt={project.alt} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#20211d]/35 via-transparent to-transparent" />
          <span className="absolute bottom-4 left-5 rounded-full border border-white/70 bg-white/80 px-3 py-2 text-[8px] uppercase tracking-[0.15em] text-[#62635c] backdrop-blur">Illustrative imagery · concept study</span>
        </div>
      </section>

      <section className="bg-[#f7f5ef] py-20 md:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 md:px-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-16">
          <div><SectionHeading eyebrow="The project idea" title={<>A home-first<br />design conversation.</>} description={project.story} /><p className="mt-5 text-[10px] leading-5 text-muted">This narrative is an illustrative placeholder, not a report of completed work. Replace with an approved customer case study before publication.</p></div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {[{ label: 'Location', value: project.location }, { label: 'Home type', value: project.type }, { label: 'Lift direction', value: project.model }, { label: 'Design language', value: project.style }].map((item) => <div key={item.label} className="rounded-[1.2rem] border border-[#e0dcd3] bg-white/60 p-4 sm:p-5"><p className="text-[8px] uppercase tracking-[0.16em] text-[#8a7657]">{item.label}</p><p className="mt-3 font-serif text-[18px] leading-tight text-ink sm:text-[21px]">{item.value}</p></div>)}
          </div>
        </div>
      </section>

      <section className="bg-[#e9ede7] py-20 md:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 md:px-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-16">
          <div><SectionHeading eyebrow="Design considerations" title={<>The details<br />behind the brief.</>} description="The project team explored how a lift might respond to the home, its routes and its material story." /></div>
          <div className="space-y-0 divide-y divide-[#d4dbd2] border-y border-[#d4dbd2]">{project.design.map((item, index) => <div key={item} className="flex gap-5 py-5"><span className="font-serif text-[20px] text-[#9b8865]">0{index + 1}</span><p className="max-w-xl text-[13px] leading-6 text-[#555750]">{item}</p></div>)}</div>
        </div>
      </section>

      <section className="bg-[#f0eee8] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="mb-9 grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"><SectionHeading eyebrow="Installation planning" title={<>Thoughtful preparation<br />for the site.</>} /><p className="max-w-xl text-[12px] leading-6 text-muted lg:justify-self-end">A verified case study should document site preparation, access, sequencing, coordination and handover. This illustrative concept does not claim a completed installation.</p></div>
          <div className="grid gap-3 md:grid-cols-3">{[{ title: 'Site review', text: 'Confirm structure, clearances, services and landing conditions with qualified project professionals.' }, { title: 'Installation plan', text: 'Agree responsibilities, preparation, access and a realistic programme for the selected system.' }, { title: 'Handover & care', text: 'Record the exact equipment, user instructions, safety procedures and service arrangements.' }].map((item, index) => <article key={item.title} className="rounded-[1.2rem] border border-[#ddd8ce] bg-[#f8f6f1]/80 p-5"><p className="font-serif text-[21px] text-[#9b8865]">0{index + 1}</p><h3 className="mt-4 font-serif text-[23px] text-ink">{item.title}</h3><p className="mt-2 text-[12px] leading-6 text-muted">{item.text}</p></article>)}</div>
        </div>
      </section>

      <section className="bg-[#f7f5ef] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16"><div className="mb-9 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"><SectionHeading eyebrow="A few frames from the concept" title={<>Material, light<br />and movement.</>} /><p className="max-w-md text-[11px] leading-6 text-muted">Illustrative image references only. Approved project photography should replace these before launch.</p></div><div className="grid gap-4 md:grid-cols-3">{project.gallery.map((image, index) => <div key={`${image}-${index}`} className={`relative overflow-hidden rounded-[1.25rem] ${index === 1 ? 'aspect-[0.95/1] md:mt-9' : 'aspect-[1.2/1]'}`}><Image src={image} alt={`${project.title} illustrative gallery reference ${index + 1}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 hover:scale-105 motion-reduce:transition-none motion-reduce:hover:scale-100" /></div>)}</div></div>
      </section>

      <section className="bg-[#f0eee8] py-12 md:py-16"><div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-5 sm:px-8 md:flex-row md:items-center md:justify-between md:px-12 lg:px-16"><Link href="/projects" className="group inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] text-ink"><ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" /> All project studies</Link><ButtonLink href="/contact">Discuss a home lift</ButtonLink></div></section>

      <section className="bg-[#f7f5ef] py-20 md:py-24"><div className="mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16"><div className="mb-8 flex items-end justify-between gap-5"><SectionHeading eyebrow="Continue exploring" title={<>More design studies.</>} /><Link href="/projects" className="hidden items-center gap-2 text-[9px] uppercase tracking-[0.14em] sm:inline-flex">All projects <ArrowRight size={13} /></Link></div><div className="grid gap-4 md:grid-cols-3">{moreProjects.map((item) => <Link key={item.slug} href={`/projects/${item.slug}`} className="group"><div className="relative aspect-[1.3/1] overflow-hidden rounded-[1.2rem]"><Image src={item.image} alt={item.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100" /></div><h3 className="mt-4 font-serif text-[22px] text-ink group-hover:text-[#8b7655]">{item.title}</h3><p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-muted">{item.type} · {item.style}</p></Link>)}</div></div></section>
      <CTASection title="Your home has its own story." description="Tell us about it, and we will help you explore a lift direction that belongs." image={project.image} />
    </>
  );
}
