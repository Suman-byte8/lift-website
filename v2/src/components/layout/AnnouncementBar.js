import { Phone, Mail } from "lucide-react";
import { site } from "@/data/site";

export default function AnnouncementBar() {
  return (
    <div className="relative z-50 hidden border-b border-champagne-300/40 bg-gradient-to-r from-champagne-100 via-ivory to-sage-50 md:block">
      <div className="mx-auto flex h-9 max-w-[1320px] items-center justify-between px-8 text-[11.5px] tracking-wide text-ink-500 lg:px-12">
        <p className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-champagne-500" aria-hidden="true" />
          {site.announcement}
        </p>
        <div className="flex items-center gap-6">
          <a href={site.contact.phoneHref} className="flex items-center gap-1.5 transition-colors hover:text-ink">
            <Phone className="h-3.5 w-3.5" strokeWidth={1.4} aria-hidden="true" /> {site.contact.phone}
          </a>
          <a href={`mailto:${site.contact.email}`} className="flex items-center gap-1.5 transition-colors hover:text-ink">
            <Mail className="h-3.5 w-3.5" strokeWidth={1.4} aria-hidden="true" /> {site.contact.email}
          </a>
        </div>
      </div>
    </div>
  );
}
