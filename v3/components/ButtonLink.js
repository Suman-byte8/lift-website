import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const variants = {
  dark: 'border border-ink bg-ink text-ivory hover:bg-[#454741] hover:border-[#454741]',
  light: 'border border-ivory/70 bg-ivory text-ink hover:bg-white hover:border-white',
  outline: 'border border-[#c9c4b8] bg-transparent text-ink hover:border-ink hover:bg-white/50',
  ghost: 'border border-transparent bg-transparent text-ink hover:bg-white/50'
};

export default function ButtonLink({ href, children, variant = 'dark', className = '', icon = true, ...props }) {
  return (
    <Link
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 py-3 text-[11px] font-medium uppercase tracking-[0.14em] transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne ${variants[variant] || variants.dark} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {icon && <ArrowRight aria-hidden="true" size={15} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />}
    </Link>
  );
}
