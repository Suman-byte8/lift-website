# Velora Home Lifts — Next.js website

Premium multi-page home-lift website. Next.js 15 (App Router) · React 19 · Tailwind CSS 3 · Framer Motion · lucide-react. JavaScript only — no TypeScript, no hand-written CSS (`src/app/globals.css` holds only the three Tailwind directives).

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

Environment variables (optional, `.env.local`):

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Production URL used for canonical links, sitemap, Open Graph and JSON-LD |
| `ENQUIRY_WEBHOOK_URL` | Where `/api/enquiry` forwards consultation and brochure requests (CRM, Zapier, Make, Google Apps Script…) |
| `NEXT_PUBLIC_UNOPTIMIZED_IMAGES=true` | Serve images directly on hosts without the Next.js image optimizer (e.g. static/shared hosting) |

## Routes

`/` · `/home-lifts` · `/models` · `/models/[slug]` (aura, nova, lumina, elite) · `/technology` · `/safety` · `/about` · `/projects` · `/projects/[slug]` · `/contact` · `/faq` · `/brochure` · `/privacy` · `/terms` · `/robots.txt` · `/sitemap.xml` · `POST /api/enquiry`

## Where to edit content

Everything repeated across pages lives in `src/data/`:

| File | Contents |
| --- | --- |
| `site.js` | Brand name, contact details, hours, social links, navigation, homepage stats |
| `images.js` | **Every photograph** — swap Unsplash placeholders for real installation photos here |
| `products.js` | Models, specifications, features, galleries |
| `features.js` | Benefits, tech callouts, safety features, customization, applications, process, comparison table |
| `testimonials.js` · `faqs.js` · `projects.js` | Reviews, FAQs, case studies |

### Placeholders to replace before launch

- **Specifications** in `products.js` and the comparison table in `features.js` are realistic *placeholders*, flagged on-page. Replace with certified figures.
- **Testimonials, projects and stats** are placeholders (labelled on-page). Remove the small notices once real data is in.
- **Photography** is generic interior/architecture imagery — it does not show the product. The lift visuals in the hero, technology and safety sections are drawn in code (`components/lift/LiftIllustration.js`), so they always render.
- Contact details, address and the Google Maps embed query (`app/contact/page.js`).
- Privacy and Terms text are templates.

## Structure

```
src/
  app/                 routes, metadata, robots, sitemap, api/enquiry
  components/
    layout/            Navbar, MobileMenu, Footer, AnnouncementBar, ScrollProgress, Logo
    sections/          HeroSection, StatsBand, ProductGrid/ProductCard, BenefitsSection, TechnologySection,
                       TechnicalCallout, SafetySection, CustomizationSection, Gallery, Lightbox,
                       ProcessTimeline, ComparisonSection, ApplicationsSection, TestimonialCarousel,
                       FAQAccordion, FAQSection, CTASection, PageHero, SpecificationTable,
                       ModelsExplorer, ProjectsExplorer
    forms/             ContactForm, Field, validate (shared with the API route)
    ui/                SectionHeading, Button/TextLink, Reveal/Stagger, ImageReveal, SmartImage,
                       Breadcrumbs, JsonLd, Icon, SocialIcon, Eyebrow
    lift/              LiftIllustration (code-drawn glass lift)
  data/                content (see above)
  lib/                 seo.js (metadata + JSON-LD builders), motion.js (shared variants), cn.js
```

## Notes

- Fonts (Cormorant Garamond + Manrope) are self-hosted from `src/app/fonts` via `next/font/local` — no Google Fonts request at runtime.
- Animations honour `prefers-reduced-motion` via `MotionConfig reducedMotion="user"`.
- `SmartImage` falls back to a soft gradient if a remote image fails, so a broken URL never shows a broken-image icon.
- Structured data: Organization (site-wide), BreadcrumbList (inner pages), Product (model pages), FAQPage (FAQ sections).
