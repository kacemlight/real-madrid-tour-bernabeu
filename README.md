# Real Madrid Tour Bernabéu

A production-ready NextJS 14 web application for the Real Madrid Tour Bernabéu, powered by Adobe AEM Content Fragments.

## Overview

This project delivers a dynamic, content-driven webpage for booking and exploring the iconic Bernabéu Stadium tour. All content is managed via AEM Content Fragments and rendered in real-time via a GraphQL API or REST endpoint.

## Architecture

### Tech Stack
- **Frontend:** NextJS 14+ with React 18
- **Styling:** Tailwind CSS 3.4 + PostCSS
- **Language:** TypeScript 5
- **CMS:** Adobe AEM Cloud (Content Fragments)
- **API:** AEM GraphQL (configurable to REST)
- **Linting:** ESLint with next/core-web-vitals

### Components
- **HeroSection:** Full-width hero with image and call-to-action
- **TourHighlights:** Feature cards displaying key tour benefits
- **TourGallery:** Image gallery with captions
- **PricingSection:** Ticket pricing options with booking CTA
- **InfoSection:** Text-based informational content blocks
- **SEOHead:** Dynamic meta tags for SEO optimization

## Local Setup

### Prerequisites
- Node.js 18+ (with npm or yarn)
- AEM Content Fragment endpoint (provided by Alex)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/kacemlight/real-madrid-tour-bernabeu.git
   cd real-madrid-tour-bernabeu
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` with your AEM endpoint details:
   ```
   NEXT_PUBLIC_AEM_ENDPOINT=https://publish-xxxx.adobeaemcloud.com/graphql/execute.json
   AEM_AUTH_TOKEN=your_aem_auth_token_here
   NEXT_PUBLIC_AEM_CF_PATH=/content/dam/real-madrid/tour-bernabeu
   ```

### Running Locally

**Development mode:**
```bash
npm run dev
```
Open [http://localhost:3000/tour-bernabeu](http://localhost:3000/tour-bernabeu) in your browser.

**Production build:**
```bash
npm run build
npm start
```

**Linting:**
```bash
npm run lint
```

## Content Fragment Schema

All content is fetched from AEM Content Fragments with the following structure:

```json
{
  "title": "string",
  "description": "string",
  "heroImage": { "url": "string", "alt": "string" },
  "heroSubtitle": "string",
  "highlights": [
    { "title": "string", "description": "string", "icon": "string" }
  ],
  "galleryImages": [
    { "url": "string", "alt": "string", "caption": "string" }
  ],
  "pricing": [
    { "type": "string", "price": "number", "duration": "string", "includes": "string" }
  ],
  "infoSections": [
    { "heading": "string", "content": "string" }
  ],
  "seoTitle": "string",
  "seoDescription": "string",
  "seoKeywords": "string"
}
```

## AEM Integration

### Mock Data (Development)

The project includes mock data at `src/data/mock-tour-bernabeu.json` that mirrors the exact AEM Content Fragment schema. During development, this mock data is used to render the page.

### Live AEM Content (Production)

When Alex publishes the Content Fragment to AEM, replace the mock data fetch in `src/app/tour-bernabeu/page.tsx` with a real API call:

```typescript
const response = await fetch(process.env.NEXT_PUBLIC_AEM_ENDPOINT, {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${process.env.AEM_AUTH_TOKEN}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query: `query { tourBernabeuFragment { title description ... } }`
  })
});
const result = await response.json();
setData(result.data);
```

## File Structure

```
.
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── globals.css         # Global styles
│   │   └── tour-bernabeu/
│   │       └── page.tsx        # Main tour page
│   ├── components/
│   │   ├── HeroSection.tsx
│   │   ├── TourHighlights.tsx
│   │   ├── TourGallery.tsx
│   │   ├── PricingSection.tsx
│   │   ├── InfoSection.tsx
│   │   └── SEOHead.tsx
│   └── data/
│       └── mock-tour-bernabeu.json
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── next.config.js
├── .eslintrc.json
├── .env.example
├── .gitignore
└── README.md
```

## Build & Deployment

### Local Build
```bash
npm run build
```
The build process verifies:
- TypeScript compilation
- ESLint checks
- NextJS static generation
- All dependencies are correctly resolved

**Expected output:** `npm run build` should complete without errors and generate a `.next/` directory.

### Deployment

Recommended platforms:
- **Vercel** (recommended for NextJS): Automatic deployments on git push
- **Netlify**: Static/hybrid rendering
- **AWS Amplify**: Full-stack deployment

**Environment variables** must be configured on the deployment platform before going live.

## Handoff Checklist

- [x] NextJS 14 project scaffolded with TypeScript
- [x] Tailwind CSS + PostCSS configured
- [x] 6 modular components created
- [x] Mock data schema matching AEM Content Fragment
- [x] Tour page route implemented at `/tour-bernabeu`
- [x] Environment variable handling configured
- [x] ESLint configured and lint-clean
- [x] `npm run build` passes without errors
- [ ] AEM Content Fragment published (awaiting Alex)
- [ ] Live AEM endpoint integrated
- [ ] Deployment URL live

## Next Steps

1. **Alex** publishes the Content Fragment to AEM and provides the GraphQL endpoint
2. **David** replaces mock data with live AEM API calls in `src/app/tour-bernabeu/page.tsx`
3. **David** verifies the page renders correctly with live content
4. **Patrick** reviews the deployed page against original requirements
5. **Deployment** to production environment

## Contact

- **David (Developer):** NextJS integration & deployment
- **Alex (Content Author):** AEM Content Fragments & publishing
- **Patrick (PM):** Project oversight & approval

---

**Repository:** https://github.com/kacemlight/real-madrid-tour-bernabeu
**Status:** Development (awaiting AEM Content Fragment)
