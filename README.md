# weddingDj

Sample landing page for a wedding DJ service.

## About

A single-page website that introduces a wedding DJ, shows what they offer, and
lets couples get in touch to check availability for their date.

## Planned sections

- **Hero** – name, tagline and a "Check your date" call to action
- **About** – short introduction to the DJ and their style
- **Services** – ceremony music, cocktail hour, reception / dance floor, MC, lighting
- **Packages** – what each package includes
- **Gallery** – photos and short video clips from past events
- **Testimonials** – quotes from couples
- **FAQ** – booking, deposits, song requests, "do-not-play" lists, equipment
- **Contact** – enquiry form (names, wedding date, venue, guest count, message)

## Tech

[Astro](https://astro.build) static site. Requires Node.js 22.12 or newer.

## Getting started

```bash
git clone <repo-url>
cd weddingDj
npm install
npm run dev
```

Then open http://localhost:4321.

| Command           | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Start the local dev server with live reload   |
| `npm run build`   | Build the static site into `dist/`            |
| `npm run preview` | Serve the built site from `dist/` locally     |

## Project structure

```
weddingDj/
  src/
    pages/index.astro     the page – puts the sections together
    layouts/Layout.astro  <head>, fonts, global styles, scroll animations
    components/           one component per section (Header, Hero, About, …)
    data/site.ts          all content: services, packages, gallery, reviews, FAQ
    styles/global.css     styles
  public/                 static files copied as-is (images, favicon)
  astro.config.mjs
  package.json
```

To change text, prices, reviews or FAQs, edit `src/data/site.ts`. The markup
updates automatically.

## Status

Sample site with all sections in place. Still to do:

- Replace the gradient placeholders in the gallery and About section with real
  photos and video clips (Astro's `<Image />` component can optimise them)
- Connect the enquiry form to a backend or form service (it currently only
  validates and shows a confirmation message)
- Swap the sample name, prices and contact details for real ones
