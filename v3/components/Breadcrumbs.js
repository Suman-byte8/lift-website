import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function Breadcrumbs({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.15em] text-muted">
        <li><Link className="transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne" href="/">Home</Link></li>
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            <ChevronRight size={12} strokeWidth={1.3} aria-hidden="true" />
            {item.href ? <Link href={item.href} className="transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne">{item.label}</Link> : <span aria-current="page" className="text-ink">{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
