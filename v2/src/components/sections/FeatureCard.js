import Icon from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

export default function FeatureCard({ icon, title, text, index, className }) {
  return (
    <article className={cn("group relative flex h-full flex-col justify-between overflow-hidden rounded-[26px] border border-white/80 p-7 shadow-soft transition-all duration-700 ease-luxe hover:-translate-y-1 hover:shadow-lift sm:p-8", className)}>
      <div className="flex items-start justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-full border border-champagne-500/30 bg-white/60 text-champagne-600 transition-colors duration-700 group-hover:bg-champagne-500 group-hover:text-white">
          <Icon name={icon} className="h-5 w-5" />
        </span>
        {index !== undefined && <span className="font-serif text-lg text-ink-300">0{index + 1}</span>}
      </div>
      <div className="mt-10">
        <h3 className="font-serif text-[1.65rem] leading-tight text-ink">{title}</h3>
        <p className="mt-3 text-[14px] leading-relaxed text-ink-500">{text}</p>
      </div>
    </article>
  );
}
