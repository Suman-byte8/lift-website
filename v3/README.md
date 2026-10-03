# AUREL — Home Lifts

A premium, responsive multi-page residential lift website concept built with Next.js App Router, React, JavaScript, Tailwind CSS v4, Framer Motion and Lucide React.

## Run locally

```bash
npm install
npm run dev
```

Production verification/build:

```bash
npm run build
npm start
```

The project intentionally uses the Webpack CLI flag for predictable builds in constrained environments. Styling is utility-first Tailwind; `app/globals.css` only loads Tailwind and the local Tailwind config. There are no TypeScript files or custom CSS/SCSS stylesheets.

## Routes

- `/` — content-rich home page
- `/home-lifts` — residential lift overview
- `/models` — filterable model collection
- `/models/[slug]` — static-generated model details (`aura-glass`, `nova-compact`, `lumina-panoramic`, `elite-villa`)
- `/technology` — engineering and user experience
- `/safety` — safety information and planning questions
- `/about` — brand story and philosophy
- `/projects` — filterable project inspiration gallery
- `/projects/[slug]` — static-generated project studies
- `/contact` — inquiry form and contact details
- `/faq` — accessible accordion and FAQ structured data
- `/brochure` — brochure request form and PDF download
- `/privacy`, `/terms` — draft legal pages requiring review

## Content and launch notes

- Reusable content lives in `data/`; replace product specifications, model availability, contact details, project locations and testimonials with verified information before launch.
- The projects and testimonials are clearly marked illustrative placeholders. Image assets are local: the hero/product lift visuals were generated for this concept; architectural interiors are local image references.
- `public/aurel-home-lifts-brochure.pdf` is a four-page introductory concept brochure. It intentionally makes no unverified performance or safety claims.
- The contact form validates input and demonstrates a success state through `/api/contact`. The route currently logs only request type and timestamp; it does not persist or forward submitted details. Connect it to a CRM/email provider, add abuse prevention, configure consent/retention, and update the privacy notice before accepting live enquiries.
- The canonical origin, email, phone and office details are centralized in `data/site.js`; they are demo values. Verify/replace them (and the social destinations) before publication.
- Add approved safety and compliance copy for the jurisdictions served. The current content repeatedly flags that system functions and final specifications are project-specific.

## Structure

```text
app/             App Router pages, metadata, sitemap, robots, API route
components/       Shared navigation, motion, forms, gallery, cards and tables
data/             Centralized model, project, FAQ and content data
public/images/    Optimized local WebP photography
app/fonts/        Local optimized Cormorant Garamond and DM Sans WOFF2 font files
```
