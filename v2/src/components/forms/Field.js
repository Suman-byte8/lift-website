import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

const inputBase =
  "w-full rounded-2xl border bg-white/70 px-4 py-3.5 text-[15px] text-ink placeholder:text-ink-300 shadow-[inset_0_1px_2px_rgba(32,33,31,0.04)] transition-colors duration-300 focus:border-champagne-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-champagne-500/30";

export default function Field({ label, name, error, required, as = "input", options, className, hint, ...rest }) {
  const id = `f-${name}`;
  const Tag = as;
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.14em] text-ink-500">
        {label} {required && <span className="text-champagne-600" aria-hidden="true">*</span>}
      </label>
      {as === "select" ? (
        <div className="relative">
          <select id={id} name={name} required={required} aria-invalid={!!error} aria-describedby={error ? `${id}-err` : undefined} className={cn(inputBase, "appearance-none pr-11", error ? "border-red-400" : "border-ink/10")} {...rest}>
            <option value="">Select…</option>
            {options.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500" strokeWidth={1.5} aria-hidden="true" />
        </div>
      ) : (
        <Tag id={id} name={name} required={required} aria-invalid={!!error} aria-describedby={error ? `${id}-err` : undefined} className={cn(inputBase, as === "textarea" && "min-h-[140px] resize-y", error ? "border-red-400" : "border-ink/10")} {...rest} />
      )}
      {hint && !error && <p className="mt-1.5 text-[12px] text-ink-300">{hint}</p>}
      {error && <p id={`${id}-err`} className="mt-1.5 text-[12px] text-red-600">{error}</p>}
    </div>
  );
}
