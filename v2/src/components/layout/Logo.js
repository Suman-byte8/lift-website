import Link from "next/link";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

export default function Logo({ light, className }) {
  return (
    <Link href="/" aria-label={`${site.name} — home`} className={cn("group inline-flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-500", className)}>
      <span className={cn("relative grid h-9 w-9 place-items-center rounded-full border", light ? "border-white/40" : "border-champagne-500/50")}>
        <span className="absolute inset-[5px] rounded-full bg-gradient-to-b from-champagne-200 to-champagne-500 opacity-90 transition-transform duration-700 ease-luxe group-hover:scale-90" />
        <svg viewBox="0 0 24 24" className="relative h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <path d="M8 4v16M16 4v16M8 11h8M12 7l-2 2M12 7l2 2" strokeLinecap="round" />
        </svg>
      </span>
      <span className="leading-none">
        <span className={cn("block font-serif text-[1.55rem] font-semibold tracking-[0.04em]", light ? "text-ivory" : "text-ink")}>Velora</span>
        <span className={cn("mt-0.5 block text-[9px] font-semibold uppercase tracking-[0.34em]", light ? "text-ivory/70" : "text-ink-500")}>Home Lifts</span>
      </span>
    </Link>
  );
}
