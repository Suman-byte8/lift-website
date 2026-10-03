import { cn } from "@/lib/cn";

export default function Eyebrow({ children, className, light }) {
  return (
    <p className={cn("flex items-center gap-3 text-[11px] font-semibold uppercase tracking-eyebrow", light ? "text-champagne-200" : "text-champagne-600", className)}>
      <span className={cn("h-px w-8", light ? "bg-champagne-200/70" : "bg-champagne-500/60")} aria-hidden="true" />
      {children}
    </p>
  );
}
