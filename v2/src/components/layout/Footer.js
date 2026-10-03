import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { footerNav, site } from "@/data/site";
import Logo from "./Logo";
import Button from "@/components/ui/Button";
import SocialIcon from "@/components/ui/SocialIcon";

export default function Footer() {
  const { contact } = site;
  return (
    <footer className="relative overflow-hidden border-t border-champagne-300/40 bg-[linear-gradient(180deg,#F5F1EA_0%,#EEF1ED_100%)]">
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-champagne-200/50 blur-3xl" />
      <div className="relative mx-auto max-w-[1320px] px-5 pt-20 sm:px-8 lg:px-12">
        <div className="grid gap-12 border-b border-ink/10 pb-14 lg:grid-cols-[1.25fr_2fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-sm text-[14px] leading-relaxed text-ink-500">{site.description}</p>
            <div className="mt-8 rounded-[22px] border border-white/70 bg-white/50 p-6 shadow-soft backdrop-blur">
              <p className="font-serif text-2xl text-ink">Plan your home lift</p>
              <p className="mt-2 text-[13px] leading-relaxed text-ink-500">Speak with a specialist about space, budget and design — no obligation.</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button href="/contact" className="px-5 py-3">Book a Consultation</Button>
                <Button href="/brochure" variant="outline" arrow={false} className="px-5 py-3">Brochure</Button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-[1fr_1fr_1fr_1.5fr]">
            {footerNav.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h2 className="text-[11px] font-semibold uppercase tracking-eyebrow text-champagne-600">{col.title}</h2>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="rounded-sm text-[14px] text-ink-700 transition-colors hover:text-champagne-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-500">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
            <div className="col-span-2 sm:col-span-1">
              <h2 className="text-[11px] font-semibold uppercase tracking-eyebrow text-champagne-600">Contact</h2>
              <address className="mt-5 space-y-3 text-[14px] not-italic text-ink-700">
                <a href={contact.phoneHref} className="flex items-start gap-2 hover:text-champagne-600"><Phone className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.3} aria-hidden="true" />{contact.phone}</a>
                <a href={`mailto:${contact.email}`} className="flex items-start gap-2 [overflow-wrap:anywhere] hover:text-champagne-600"><Mail className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.3} aria-hidden="true" />{contact.email}</a>
                <p className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.3} aria-hidden="true" />{contact.address.line1}, {contact.address.city}</p>
              </address>
              <ul className="mt-6 flex gap-2" aria-label="Social media">
                {site.social.map((s) => (
                  <li key={s.name}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`${site.shortName} on ${s.name}`} className="grid h-9 w-9 place-items-center rounded-full border border-ink/10 bg-white/60 text-ink-500 transition-all duration-500 hover:-translate-y-0.5 hover:border-champagne-500 hover:text-champagne-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-500">
                      <SocialIcon name={s.name} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <p aria-hidden="true" className="select-none py-8 text-center font-serif text-[18vw] leading-[0.8] tracking-[-0.03em] text-transparent [-webkit-text-stroke:1px_rgba(184,155,106,0.35)] lg:text-[13rem]">
          Velora
        </p>
        <div className="flex flex-col gap-4 border-t border-ink/10 py-7 text-[12px] text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <ul className="flex gap-6">
            <li><Link href="/privacy" className="hover:text-ink">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-ink">Terms of Use</Link></li>
            <li><Link href="/sitemap.xml" className="hover:text-ink">Sitemap</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
