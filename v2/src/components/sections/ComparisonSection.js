import Link from "next/link";
import { Check } from "lucide-react";
import { comparison } from "@/data/features";
import SectionHeading from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export default function ComparisonSection() {
  const { columns, rows } = comparison;
  return (
    <section className="bg-[linear-gradient(180deg,#FAF8F4_0%,#F5F1EA_100%)] py-24 lg:py-36" aria-labelledby="compare-title">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <SectionHeading id="compare-title" align="center" eyebrow="Compare" title={<>Which Lift Fits <em className="italic text-champagne-600">Your Home?</em></>} intro="A quick guide to our three most-requested configurations. Your consultant will confirm the right fit after a site survey." />

        {/* Desktop / tablet table */}
        <Reveal className="mt-16 hidden overflow-hidden rounded-[28px] border border-white/80 bg-white/55 shadow-soft backdrop-blur md:block">
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">Comparison of compact, premium glass and luxury villa home lifts (indicative values)</caption>
            <thead>
              <tr>
                <th scope="col" className="w-[22%] p-6 align-bottom text-[11px] font-semibold uppercase tracking-eyebrow text-ink-500">Feature</th>
                {columns.map((c) => (
                  <th key={c.key} scope="col" className={cn("p-6 align-bottom", c.featured && "bg-gradient-to-b from-champagne-100 to-transparent")}>
                    {c.featured && <span className="mb-3 inline-block rounded-full bg-champagne-500 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">Most chosen</span>}
                    <span className="block font-serif text-2xl font-medium text-ink">{c.name}</span>
                    <Link href={`/models/${c.model}`} className="mt-1 inline-block text-[12px] text-champagne-600 hover:underline">See model →</Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.label} className={i % 2 ? "bg-white/40" : ""}>
                  <th scope="row" className="border-t border-ink/[0.07] p-6 text-[13px] font-semibold text-ink-700">{r.label}</th>
                  {columns.map((c) => (
                    <td key={c.key} className={cn("border-t border-ink/[0.07] p-6 text-[14px] text-ink-500", c.featured && "bg-champagne-100/30")}>{r[c.key]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        {/* Mobile cards */}
        <div className="mt-12 space-y-5 md:hidden">
          {columns.map((c) => (
            <Reveal key={c.key} className={cn("rounded-[24px] border border-white/80 p-6 shadow-soft", c.featured ? "bg-gradient-to-br from-champagne-100 to-ivory" : "bg-white/60")}>
              {c.featured && <span className="mb-3 inline-block rounded-full bg-champagne-500 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">Most chosen</span>}
              <h3 className="font-serif text-3xl text-ink">{c.name}</h3>
              <dl className="mt-5 space-y-3">
                {rows.map((r) => (
                  <div key={r.label} className="flex justify-between gap-4 border-t border-ink/[0.07] pt-3 text-[13.5px]">
                    <dt className="text-ink-500">{r.label}</dt>
                    <dd className="text-right font-medium text-ink-700">{r[c.key]}</dd>
                  </div>
                ))}
              </dl>
              <Link href={`/models/${c.model}`} className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-champagne-600"><Check className="h-4 w-4" aria-hidden="true" />See this model</Link>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-[11.5px] text-ink-300">All values are indicative placeholders for layout — replace with certified specifications in data/features.js.</p>
      </div>
    </section>
  );
}
