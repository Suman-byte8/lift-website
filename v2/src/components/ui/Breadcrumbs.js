import Link from "next/link";
import { ChevronRight } from "lucide-react";
import JsonLd from "./JsonLd";
import { breadcrumbLd } from "@/lib/seo";

/** items: [{label, href}] — last item is the current page. Emits BreadcrumbList JSON-LD. */
export default function Breadcrumbs({ items, light }) {
  const all = [{ label: "Home", href: "/" }, ...items];
  return (
    <nav aria-label="Breadcrumb">
      <JsonLd data={breadcrumbLd(all)} />
      <ol className={`flex flex-wrap items-center gap-1.5 text-[12px] tracking-wide ${light ? "text-ivory/70" : "text-ink-500"}`}>
        {all.map((it, i) => {
          const last = i === all.length - 1;
          return (
            <li key={it.href} className="flex items-center gap-1.5">
              {last ? (
                <span aria-current="page" className={light ? "text-ivory" : "text-ink"}>{it.label}</span>
              ) : (
                <Link href={it.href} className="rounded-sm transition-colors hover:text-champagne-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-500">
                  {it.label}
                </Link>
              )}
              {!last && <ChevronRight className="h-3 w-3 opacity-60" aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
