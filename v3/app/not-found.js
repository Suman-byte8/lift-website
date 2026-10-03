import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="bg-[radial-gradient(ellipse_at_top_right,_#e9ede7_0%,_#f5f1e9_48%,_#faf8f4_100%)] px-5 py-24 sm:px-8 md:py-36">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#8a7657]">404 · A quiet detour</p>
        <h1 className="mt-6 font-serif text-[clamp(3rem,8vw,6.5rem)] leading-[0.93] tracking-[-0.04em] text-ink">This level<br />is not here.</h1>
        <p className="mx-auto mt-6 max-w-lg text-[14px] leading-7 text-muted">The page you were looking for may have moved. Let’s find a better way through.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Link href="/" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-ink px-6 text-[10px] uppercase tracking-[0.14em] text-ivory transition hover:bg-[#454741] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne"><ArrowLeft size={14} /> Return home</Link><Link href="/contact" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-[#c9c4b8] px-6 text-[10px] uppercase tracking-[0.14em] text-ink transition hover:border-ink hover:bg-white/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne">Talk to us <ArrowRight size={14} /></Link></div>
      </div>
    </section>
  );
}
