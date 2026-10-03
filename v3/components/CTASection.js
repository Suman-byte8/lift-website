import Image from 'next/image';
import { images } from '@/data/images';
import ButtonLink from '@/components/ButtonLink';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTASection({ title = 'Your home has more levels to discover.', description = 'Talk to our specialists about the right home lift for your space.', image = images.interiors.villaExterior.src, compact = false }) {
  return (
    <section className={`relative isolate overflow-hidden ${compact ? 'py-16 md:py-20' : 'py-20 md:py-28'}`}>
      <Image src={image} alt="Warm contemporary residence with carefully considered architecture" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#252620]/80 via-[#35362f]/61 to-[#4a4940]/28" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#22231f]/20 to-transparent" />
      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-3xl">
          <p className="mb-5 text-[10px] uppercase tracking-[0.21em] text-[#e1d0b2]">A good place to begin</p>
          <h2 className="font-serif text-[clamp(2.8rem,6vw,5.7rem)] leading-[0.95] tracking-[-0.04em] text-ivory">{title}</h2>
          <p className="mt-6 max-w-xl text-[15px] leading-7 text-ivory/78">{description}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact" variant="light">Book a consultation</ButtonLink>
            <Link href="/brochure" className="group inline-flex min-h-12 items-center gap-3 rounded-full border border-white/40 px-6 py-3 text-[11px] uppercase tracking-[0.14em] text-ivory transition hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Request a brochure <ArrowRight size={15} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
