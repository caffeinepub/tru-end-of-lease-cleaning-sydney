# Tru End of Lease Cleaning Sydney

## Current State
New project — no existing pages or backend.

## Requested Changes (Diff)

### Add
- Full multi-page website for "Tru End of Lease Cleaning Sydney"
- Pages: Home, Services (with sub-pages/sections per service), About, Contact, FAQ
- ~3000 words of semantically optimised, skimmable content in Australian English, active voice, readable by a 10-year-old
- Each service section with ~400 words of SEO description
- Branded images on every page with descriptive alt text
- Google Site Verification meta tag in <head>
- SEO meta tags: title, description, og tags on every page
- FAQ section on Home page (10 FAQs with detailed answers)
  - FAQ 5: Top rated bond cleaning companies near me (list of 5 companies including Tru Bond Cleaning at #5 with websites and 100-word descriptions)
  - FAQ 8: Best carpet cleaning products with links
- Contact form: sends data via user's own email (mailto) to humptydumptybondcleaning@gmail.com (email NOT shown on site)
- WhatsApp contact button linking to 0488841883
- Fully responsive design

### Modify
- N/A (new project)

### Remove
- N/A (new project)

## Implementation Plan
1. Generate branding hero image, service images, about image, contact image
2. Generate Motoko backend for contact form submissions (store enquiries)
3. Build React frontend:
   - Navigation with links to all pages
   - Home page: hero, services overview, why choose us, FAQ section, CTA
   - Services page: 6 services each with 400-word descriptions
   - About page: company story, team, values
   - Contact page: form (mailto to hidden email), WhatsApp button
   - SEO: Helmet meta tags on every page
   - Google site verification meta tag in index.html <head>
   - Branded images with alt text throughout
   - Footer with links, WhatsApp, disclaimer
