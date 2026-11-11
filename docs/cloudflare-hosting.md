# Hosting the demo on Cloudflare (public link)

Goal: show the wedding DJ template to a customer with a simple link they can
open right away. The link is public (anyone who has it can open it), but the
site is hidden from search engines.

Cost: **€0**. Static hosting on Cloudflare is free, and so is the
`*.workers.dev` / `*.pages.dev` address. A custom domain is optional
(roughly €10–15/year).

---

## Step 1 – Repo changes

1. **Hide from search engines.** Add a `noindex` tag to every page
   (`<meta name="robots" content="noindex, nofollow">` in `Layout.astro`) and
   the same rule as a server header in `public/_headers`:

   ```
   /*
     X-Robots-Tag: noindex, nofollow
   ```

2. **Cloudflare config.** Add `wrangler.jsonc` in the repo root so Cloudflare
   serves the built `dist` folder as a static site:

   ```jsonc
   {
     "name": "weddingdj",
     "compatibility_date": "2026-10-01",
     "assets": { "directory": "./dist" }
   }
   ```

3. **Node version.** Add a `.node-version` file (e.g. `24`). Astro 7 needs
   Node 22.12 or newer; without this file Cloudflare may build with an older
   Node and fail.

4. *(Optional)* Fix the HU / EN alignment in the menu (about 2px too high on
   desktop, uneven spacing around "/" on mobile).

## Step 2 – Get everything into `main`

- Merge pull request #4 (`hun_text`) on GitHub so `main` has the
  Hungarian/English version.
- Commit and push the Step 1 changes and merge them into `main` too.
  Cloudflare publishes whatever is on `main`.

## Step 3 – Connect Cloudflare (about 10 minutes, in the dashboard)

1. Create a free account at <https://dash.cloudflare.com>.
2. **Workers & Pages → Create → Import a repository** and connect GitHub
   (you can give Cloudflare access to the `weddingDj` repo only).
3. Pick `paaron89/weddingDj`, production branch **`main`**.
4. Build settings:
   - Build command: `npm run build`
   - Deploy command: `npx wrangler deploy` (often filled in automatically)
5. Click **Deploy**. The first build takes 1–2 minutes. You get an address
   like `https://weddingdj.<your-name>.workers.dev`.

If the dashboard offers **Pages** instead, that works too: framework preset
**Astro**, build command `npm run build`, output folder `dist`. The address
will be `weddingdj.pages.dev`.

## Step 4 – Check before sending

- Open `/` (Hungarian) and `/en/` (English); switch with HU / EN.
- Check on a phone too: menu, gallery, form messages, hero animation.

## Step 5 – Send it to the customer

Example message:

> Szia! Itt megnézheted az esküvői DJ oldal sablonját:
> https://weddingdj.…workers.dev – jobb felül HU/EN-nel válthatsz nyelvet.
> A tartalom (név, árak, fotók) csak minta, ezeket a saját anyagaidra
> cseréljük.

## Afterwards

- **Updates:** every push to `main` updates the live link automatically
  within a couple of minutes.
- **Previews:** other branches get their own preview address, so you can show
  a variant without touching the main link.
- **Taking it down:** delete the project in Cloudflare (or turn off its
  `workers.dev` address) and the link stops working.

## Notes

- **The code is public.** The GitHub repo is public, so anyone can see the
  template's code. To keep it private, make the repo private
  (*Settings → Danger zone → Change visibility*); Cloudflare works with
  private repos at no cost.
- **Need a truly private link later?** Put Cloudflare Access (Zero Trust) in
  front of the site: the customer enters their email and gets a 6-digit code.
  Free for up to 50 people, then about $7 per person per month. Remember to
  protect the preview addresses too.
- Pricing figures come mostly from third-party guides (as of Nov 2026);
  double-check them in the Cloudflare dashboard.
