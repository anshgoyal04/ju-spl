# SPL Piston — Jindal Udyog website redesign

A premium, international B2B manufacturing website for Jindal Udyog (SPL Piston), built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4 and Framer Motion.

## What's included

- **All approved pages**, built and statically generated:
  - Home
  - About + 5 sub-pages (Company Profile, Our Journey, Infrastructure, Manufacturing Facility, Certifications)
  - Products listing + 8 individual product detail pages (spec table, applications, compatible brands, related products, inquiry form)
  - Manufacturing overview + 5 individual process-step pages (Casting, Machining, Heat Treatment, Quality Inspection, Packaging)
  - Quality (kept as its own top-level page, per your decision) with 4 anchor sections
  - OEM Solutions
  - Export
  - Dealer Network (with tiered application form: Dealer / Distributor / Export Partner)
  - Blog listing + 4 sample posts
  - Contact (keeps your existing form fields + WhatsApp + map)
- Sticky header with desktop mega-menu and animated mobile slide-menu
- Scroll-reveal, hover-lift and animated counter effects (Framer Motion)
- SEO: per-page metadata, canonical tags, Organization/Product/Blog/Breadcrumb JSON-LD schema, sitemap.xml, robots.txt
- Fully responsive (mobile / tablet / laptop / desktop)
- Placeholder imagery throughout — styled so you can drop in real photos later without breaking layout

## Running it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Important note on fonts

This project uses next/font/google for Poppins, Inter and Manrope, which fetches font files from Google Fonts at build time. This requires outbound internet access in whatever environment you build/deploy from (this is normal for Vercel, most CI, and any machine with internet access — it will NOT work in fully offline/sandboxed build environments). If you ever hit a font-fetch error during npm run build, either:
- build from an environment with internet access (recommended), or
- swap to self-hosted font files using next/font/local in app/layout.tsx.

## Where to plug in real content

- **Images**: every image slot uses components/ui/PlaceholderImage.tsx. Swap these for next/image components once you have real photography — the sizing/layout is already set up to receive them.
- **Products**: edit data/products.ts — add/edit products, specs, applications and compatible brands.
- **Manufacturing steps**: data/manufacturing.ts
- **Blog posts**: data/blog.ts
- **Navigation**: data/nav.ts — this drives both desktop mega-menu and mobile menu
- **Contact form / Dealer form**: currently client-side only (components/ui/InquiryForm.tsx, components/ui/DealerForm.tsx) and show a success state on submit without sending data anywhere yet. Wire these to your email service, CRM, or an API route (app/api/...) before going live.
- **Site URL**: update SITE_URL in lib/schema.ts to your real production domain before deploying (used for canonical URLs, sitemap and JSON-LD).

## Deploying

Any Next.js host works (Vercel is the simplest). Run npm run build && npm run start, or connect the repo to your hosting provider of choice.
