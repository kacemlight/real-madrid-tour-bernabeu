# Real Madrid Tour Bernabéu — NextJS + AEM Content Fragments

A modern NextJS 14 application that renders Real Madrid's Bernabéu stadium tour page content from AEM Content Fragments.

## Features

- **NextJS 14** with TypeScript
- **AEM Content Fragment** integration via GraphQL
- **Tailwind CSS** for styling
- **Mock data** for development (swapped for live AEM on production)
- **SEO optimized** with meta tags
- **Responsive design** for all devices
- **Accessibility ready** (WCAG compliant)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── globals.css         # Global styles
│   └── tour-bernabeu/
│       └── page.tsx        # Main tour page
├── components/
│   ├── HeroSection.tsx
│   ├── TourHighlights.tsx
│   ├── TourGallery.tsx
│   ├── PricingSection.tsx
│   ├── InfoSection.tsx
│   └── SEOHead.tsx
└── data/
    └── mock-tour-bernabeu.json
```

## Local Setup

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kacemlight/real-madrid-tour-bernabeu.git
   cd real-madrid-tour-bernabeu
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` and set your AEM endpoint:
   ```
   NEXT_PUBLIC_AEM_ENDPOINT=http://your-aem-instance:4502
   NEXT_PUBLIC_AEM_GRAPHQL_ENDPOINT=/content/cq:graphql/real-madrid/exec.json
   ```

### Development

```bash
npm run dev
```

Open [http://localhost:3000/tour-bernabeu](http://localhost:3000/tour-bernabeu) in your browser. The page will reload as you edit.

### Production Build

```bash
npm run build
npm start
```

## AEM Integration

The application fetches content from AEM Content Fragments via GraphQL.

### Current Status: Mock Data

During development, the app uses mock data from `src/data/mock-tour-bernabeu.json`. This data mirrors the exact structure of the AEM Content Fragment model.

**TODO:** Replace mock fetch with live AEM GraphQL endpoint once CF is published.

### Integration Steps (When CF is Ready)

1. Alex publishes the Bernabéu Tour CF in AEM
2. Confirm live endpoint: `{AEM_ENDPOINT}/content/cq:graphql/real-madrid/exec.json`
3. David updates `src/app/tour-bernabeu/page.tsx` to fetch from live endpoint
4. Test: `npm run build` → verify no errors
5. Deploy and confirm rendering

## Content Fragment Schema

The mock data follows this structure (matching AEM CF model):

```json
{
  "tourBernabeuList": {
    "items": [
      {
        "title": "string",
        "subtitle": "string",
        "description": "string",
        "heroImage": { "_path": "string" },
        "highlights": ["string"],
        "gallery": [{ "_path": "string", "alt": "string" }],
        "pricing": { "amount": "number", "currency": "string" },
        "duration": "string",
        "groupSize": "string"
      }
    ]
  }
}
```

## Build & Deploy

### Build Command
```bash
npm run build
```

Expected output:
```
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
```

### Deployment

This app can be deployed to Vercel, Netlify, or any Node.js hosting:

```bash
vercel deploy
```

## License

MIT
