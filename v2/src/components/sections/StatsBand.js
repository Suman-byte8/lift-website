import { stats } from "@/data/site";
import StatCounter from "./StatCounter";

export default function StatsBand() {
  return (
    <section aria-label="Velora in numbers" className="relative border-y border-champagne-300/40 bg-[linear-gradient(90deg,#FAF8F4_0%,#F1F3F4_50%,#FAF8F4_100%)]">
      <div className="mx-auto grid max-w-[1320px] grid-cols-2 gap-y-12 px-5 py-16 sm:px-8 lg:grid-cols-4 lg:px-12 lg:py-20">
        {stats.map((s, i) => (
          <div key={s.label} className={`relative ${i > 0 ? "lg:border-l lg:border-ink/10 lg:pl-12" : ""}`}>
            <StatCounter {...s} />
          </div>
        ))}
      </div>
      <p className="pb-4 text-center text-[10.5px] text-ink-300">Figures are illustrative placeholders — update in data/site.js.</p>
    </section>
  );
}
