'use client';

import Link from 'next/link';
import { ArrowRight, RefreshCw } from 'lucide-react';

export default function ErrorPage({ reset }) {
  return (
    <section role="alert" className="bg-[radial-gradient(ellipse_at_top_right,_#e9ede7_0%,_#f5f1e9_48%,_#faf8f4_100%)] px-5 py-24 sm:px-8 md:py-36">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#8a7657]">A small interruption</p>
        <h1 className="mt-6 font-serif text-[clamp(3rem,8vw,6.5rem)] leading-[0.93] tracking-[-0.04em] text-ink">Let’s find<br />our way back.</h1>
        <p className="mx-auto mt-6 max-w-lg text-[14px] leading-7 text-muted">Something did not load as expected. You can retry, or continue exploring from the home page.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button type="button" onClick={() => reset()} className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-ink px-6 text-[10px] uppercase tracking-[0.14em] text-ivory transition hover:bg-[#454741] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne"><RefreshCw size={14} /> Try again</button>
          <Link href="/" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-[#c9c4b8] px-6 text-[10px] uppercase tracking-[0.14em] text-ink transition hover:border-ink hover:bg-white/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne">Return home <ArrowRight size={14} /></Link>
        </div>
      </div>
    </section>
  );
}
