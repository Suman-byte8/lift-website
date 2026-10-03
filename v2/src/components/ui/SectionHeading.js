import { cn } from "@/lib/cn";
import Eyebrow from "./Eyebrow";
import { Reveal } from "./Reveal";

/** Eyebrow + serif headline + optional intro. `as` controls heading level for SEO. */
export default function SectionHeading({ eyebrow, title, intro, align = "left", as: H = "h2", id, className, light, children }) {
  const centered = align === "center";
  return (
    <Reveal className={cn("max-w-3xl", centered && "mx-auto text-center", className)}>
      {eyebrow && <Eyebrow light={light} className={cn("mb-5", centered && "justify-center")}>{eyebrow}</Eyebrow>}
      <H id={id} className={cn("font-serif text-[2.4rem] font-medium leading-[1.05] tracking-[-0.01em] sm:text-5xl lg:text-[3.6rem]", light ? "text-ivory" : "text-ink")}>
        {title}
      </H>
      {intro && <p className={cn("mt-6 max-w-2xl text-[15px] leading-relaxed sm:text-base", centered && "mx-auto", light ? "text-ivory/80" : "text-ink-500")}>{intro}</p>}
      {children}
    </Reveal>
  );
}
