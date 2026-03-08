# Tru End of Lease Cleaning Sydney

## Current State
- 5 pages: Home, Services, About, Contact, FAQ
- 10 branded images already generated
- React + TanStack Router with hash routing
- SEO meta tags via `useMetaTags` hook
- Google site verification in index.html
- WhatsApp floating button
- Contact form (mailto to humptydumptybondcleaning@gmail.com)

## Requested Changes (Diff)

### Add
- **12 individual Sydney suburb pages**, each with:
  - Unique URL: `/suburbs/sydney-cbd`, `/suburbs/parramatta`, `/suburbs/bondi`, `/suburbs/newtown`, `/suburbs/chatswood`, `/suburbs/liverpool`, `/suburbs/penrith`, `/suburbs/manly`, `/suburbs/hurstville`, `/suburbs/blacktown`, `/suburbs/cronulla`, `/suburbs/strathfield`
  - Unique `<title>` and `<meta name="description">` per suburb
  - OG/Twitter meta tags per suburb
  - Local geo meta tags (suburb-level)
  - Branded suburb hero image (already generated for 10 suburbs; use existing service images for strathfield/auburn)
  - ~600 words of suburb-specific SEO content per page: what end of lease cleaning in that suburb involves, local property types, why choose us, pricing context, how to book
  - Checklist of services included
  - Contact form CTA + WhatsApp button
  - Internal links back to home and services
- **Suburbs landing index page** at `/suburbs` listing all 12 suburbs as clickable cards with suburb image, suburb name, short description, and link to suburb page
- **Home page suburb section**: new section after testimonials listing all 12 suburbs as a grid of linked cards — "We Serve All Sydney Suburbs" — each card links to the suburb's dedicated page for SEO
- **Additional images on existing pages**:
  - FAQ page: add a branded FAQ hero image (reuse about-team or contact-us image with new alt text)
  - About page: already has image, add sydney-suburbs-coverage image in service area section
  - Services page: already has images per service, ensure all have proper alt text
  - Home page: add sydney-suburbs-coverage image in a new "areas we serve" strip

### Modify
- **App.tsx**: Register 12 suburb routes + `/suburbs` index route
- **Home page**: Add "Sydney Suburbs We Serve" section with grid linking to all suburb pages; add suburbs coverage image
- **About page**: Add `sydney-suburbs-coverage.dim_800x400.jpg` image in the service area section with proper branded alt text
- **FAQ page**: Add a branded hero image at the top of the page
- **All existing page meta tags**: Ensure every page has `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`, `geo.region`, `geo.placename`
- **useMetaTags hook**: Extend to support og:url, og:type, twitter:card, canonical link tag

### Remove
- Nothing removed

## Implementation Plan

1. **Extend `useMetaTags` hook** to also inject: `og:url`, `og:type=website`, `twitter:card=summary_large_image`, `twitter:title`, `twitter:description`, `twitter:image`, `geo.region=AU-NSW`, `geo.placename`, and a `<link rel="canonical">` tag.

2. **Update all 5 existing pages** with the extended meta tags, correct og:image URLs, geo.placename set to "Sydney NSW Australia", and any missing tags.

3. **Create `SuburbPage.tsx`** — a reusable component that accepts suburb data (name, slug, image, alt, description paragraphs, meta title, meta description) and renders a full suburb page with: hero image section, intro content, services checklist, pricing blurb, local area context, contact form CTA.

4. **Create `suburbsData.ts`** — data file defining all 12 suburbs with their slug, name, image path, alt text, meta title, meta description, and 3-4 paragraphs of SEO content.

   Suburbs:
   - Sydney CBD → /assets/generated/suburb-sydney-cbd.dim_800x500.jpg
   - Parramatta → /assets/generated/suburb-parramatta.dim_800x500.jpg
   - Bondi → /assets/generated/suburb-bondi.dim_800x500.jpg
   - Newtown → /assets/generated/suburb-newtown.dim_800x500.jpg
   - Chatswood → /assets/generated/suburb-chatswood.dim_800x500.jpg
   - Liverpool → /assets/generated/suburb-liverpool.dim_800x500.jpg
   - Penrith → /assets/generated/suburb-penrith.dim_800x500.jpg
   - Manly → /assets/generated/suburb-manly.dim_800x500.jpg
   - Hurstville → /assets/generated/suburb-hurstville.dim_800x500.jpg
   - Blacktown → /assets/generated/suburb-blacktown.dim_800x500.jpg
   - Cronulla → /assets/generated/suburb-cronulla.dim_800x500.jpg
   - Strathfield → reuse hero-banner image

5. **Create `SuburbsIndexPage.tsx`** — `/suburbs` page listing all 12 suburbs as a grid of image cards with suburb name, short description, and link to each suburb page.

6. **Update `App.tsx`** to add routes for `/suburbs`, `/suburbs/sydney-cbd`, `/suburbs/parramatta`, `/suburbs/bondi`, `/suburbs/newtown`, `/suburbs/chatswood`, `/suburbs/liverpool`, `/suburbs/penrith`, `/suburbs/manly`, `/suburbs/hurstville`, `/suburbs/blacktown`, `/suburbs/cronulla`, `/suburbs/strathfield`.

7. **Update `HomePage.tsx`** to include:
   - A "Sydney Suburbs We Serve" section (grid of 12 suburb cards with links) — placed between testimonials and FAQ sections
   - Each card has suburb image, name, short tagline, and a Link to `/suburbs/[slug]`
   - Add `sydney-suburbs-coverage.dim_800x400.jpg` with alt text in this section

8. **Update `AboutPage.tsx`** service area section to include `sydney-suburbs-coverage.dim_800x400.jpg` with branded alt text.

9. **Update `FAQPage.tsx`** to add a hero header section with image.

10. **Update `Layout.tsx`** navigation to include a "Suburbs" link pointing to `/suburbs`.
