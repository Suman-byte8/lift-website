import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

const styles = {
  primary:
    "bg-ink text-ivory hover:bg-ink-700 shadow-[0_10px_30px_-12px_rgba(32,33,31,0.55)] hover:shadow-[0_16px_40px_-14px_rgba(32,33,31,0.6)]",
  gold:
    "bg-gradient-to-r from-champagne-500 to-champagne-600 text-white hover:from-champagne-600 hover:to-champagne-700 shadow-[0_10px_30px_-12px_rgba(156,127,80,0.7)]",
  glass:
    "border border-white/70 bg-white/55 text-ink backdrop-blur-md hover:bg-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]",
  outline: "border border-ink/15 text-ink hover:border-ink/40 hover:bg-white/60",
  light: "border border-white/40 bg-white/10 text-white backdrop-blur-md hover:bg-white/20",
};

const base =
  "group inline-flex items-center justify-center gap-3 rounded-full px-7 py-3.5 text-[13px] font-semibold tracking-wide transition-all duration-500 ease-luxe focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory active:scale-[0.98]";

export default function Button({ href, variant = "primary", arrow = true, className, children, ...rest }) {
  const content = (
    <>
      <span>{children}</span>
      {arrow && <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-luxe group-hover:translate-x-1" strokeWidth={1.5} aria-hidden="true" />}
    </>
  );
  if (href) {
    return (
      <Link href={href} className={cn(base, styles[variant], className)} {...rest}>
        {content}
      </Link>
    );
  }
  return (
    <button className={cn(base, styles[variant], "disabled:cursor-not-allowed disabled:opacity-60", className)} {...rest}>
      {content}
    </button>
  );
}

export function TextLink({ href, children, className, light }) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 text-[13px] font-semibold tracking-wide underline-offset-8 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-500 rounded-sm",
        light ? "text-ivory hover:text-champagne-200" : "text-ink hover:text-champagne-600",
        className
      )}
    >
      <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-1 transition-[background-size] duration-500 ease-luxe group-hover:bg-[length:100%_1px]">{children}</span>
      <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-luxe group-hover:translate-x-1" strokeWidth={1.5} aria-hidden="true" />
    </Link>
  );
}
