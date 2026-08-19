# Wedding Invitation — React + Vite

A React port of the wedding invitation site, built with Vite.

## Project structure

```
src/
  components/
    Hero.jsx          hero section: gradient bg, countdown, couple names
    SaveTheDate.jsx    date card + "Add to Calendar" (.ics download)
    Venue.jsx          venue details + "Get Directions"
    Enquiry.jsx        contact cards with tap-to-call
    HowToReach.jsx     By Air / Train / Bus accordion
    PhotoGallery.jsx   "coming soon" photo gallery section
    Downloads.jsx      invite card / video preview download cards
    Footer.jsx
  hooks/
    useCountdown.js    live countdown hook (updates every second)
  styles/
    index.css          all styling — gradients, layout, animations
  weddingConfig.js      <-- EDIT THIS to customize names/date/venue/contacts
  App.jsx               assembles all sections
  main.jsx               React entry point
index.html               page shell + fonts + social preview meta tags
```

## Customize the content

Open `src/weddingConfig.js` — everything you'd want to change (names,
date, venue, phone numbers, "how to reach" text, download links) lives
in that one file. You shouldn't need to touch any component code for
basic edits.

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build for production

```bash
npm run build
```

Outputs a static site into `dist/`.

## Deploy to Vercel

**Option A — CLI (fastest):**
```bash
npm install -g vercel
vercel
```
Follow the prompts. It'll detect Vite automatically and give you a live
`.vercel.app` link.

**Option B — GitHub:**
1. Push this folder to a GitHub repo
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo
3. Vercel auto-detects the Vite framework preset — just click Deploy

Either way you'll have a live link in about a minute. You can later add
a custom domain from the Vercel dashboard if you want something nicer
than the `.vercel.app` URL.

## Notes

- The countdown target date lives in `weddingConfig.js` as
  `eventDateTime` (ISO format) — update it and the countdown, "Add to
  Calendar" event, and displayed date/time all stay in sync.
- Call buttons use `tel:` links, so they'll trigger the phone dialer on
  mobile.
- `prefers-reduced-motion` is respected — floating petal/pulse
  animations are disabled for users who've turned on that OS setting.
