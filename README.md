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

Plain HTML, CSS and JavaScript – no build step required.

## Getting started

```bash
git clone <repo-url>
cd weddingDj
```

Then open `index.html` in a browser (or use a local server such as the
VS Code *Live Server* extension).

## Project structure

```
weddingDj/
  index.html      page markup
  css/style.css   styles
  js/main.js      interactions (nav, gallery lightbox, form validation)
  assets/         images and media (planned)
  README.md
```

## Status

Sample site with all sections in place. Still to do:

- Replace the gradient placeholders in the gallery and About section with real
  photos and video clips in `assets/`
- Connect the enquiry form to a backend or form service (it currently only
  validates and shows a confirmation message)
- Swap the sample name, prices and contact details for real ones
