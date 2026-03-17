# Tour Bernabéu — Real Madrid CF (NextJS + AEM Content Fragments)

A production-ready NextJS 14 page replicating the Real Madrid Tour Bernabéu experience, powered by Adobe AEM Content Fragments.

**Target Page:** https://www.realmadrid.com/sites/en/tour-bernabeu

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Content:** Adobe AEM Content Fragments (GraphQL)

## Local Setup

1. Clone the repository
```bash
git clone https://github.com/kacemlight/real-madrid-tour-bernabeu.git
cd real-madrid-tour-bernabeu
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables
```bash
cp .env.example .env.local
```
Edit `.env.local` with your AEM endpoint and credentials.

4. Run development server
```bash
npm run dev
```
Open http://localhost:3000/tour-bernabeu

5. Production build
```bash
npm run build && npm run start
```

## AEM Content Fragment Integration

The page fetches data from AEM CF via GraphQL. Set these variables in `.env.local`:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_AEM_ENDPOINT` | AEM GraphQL endpoint URL |
| `AEM_AUTH_TOKEN` | Bearer token for authenticated requests |
| `NEXT_PUBLIC_AEM_CF_PATH` | Path to the Content Fragment in AEM DAM |

When running without AEM (local dev), the page uses mock data from `src/data/mock-tour-bernabeu.json`.

To swap to live AEM data, update `src/app/tour-bernabeu/page.tsx` — replace `getTourData()` with the AEM fetch call as documented in the TODO comment.

## CF Model Schema

See `src/data/mock-tour-bernabeu.json` for the full field reference. Key fields:
- `pageTitle`, `pageSubtitle` — Hero text
- `tourHighlights[]` — Feature cards
- `galleryImages[]` — Photo gallery
- `ticketTypes[]` — Pricing section
- `openingHours`, `locationAddress` — Info section
- `metaTitle`, `metaDescription`, `metaOgImage` — SEO

## Project Structure
```
src/
├── app/ (Next.js App Router)
│   ├── layout.tsx
│   ├── globals.css
│   └── tour-bernabeu/page.tsx
├── components/
│   ├── HeroSection.tsx
│   ├── TourHighlights.tsx
│   ├── TourGallery.tsx
│   ├── PricingSection.tsx
│   ├── InfoSection.tsx
│   └── SEOHead.tsx
├── data/
│   └── mock-tour-bernabeu.json
└── types/
    └── tour.ts
```

## Deployment

The project is optimized for Vercel deployment:

```bash
npm run build
```

Set environment variables in your deployment platform (Vercel, etc.) before deploying.

## License

© 2024 Real Madrid CF. All rights reserved.