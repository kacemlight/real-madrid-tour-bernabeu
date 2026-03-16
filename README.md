# Real Madrid Tour Bernabéu - NextJS Web Application

A production-ready NextJS application that delivers the Real Madrid Tour Bernabéu webpage with content sourced dynamically from Adobe AEM Content Fragments.

## Overview

This application integrates with Adobe Experience Manager (AEM) to fetch content via GraphQL API and renders a fully responsive, accessible web experience showcasing the iconic Bernabéu Stadium.

**Live Site:** [https://www.realmadrid.com/sites/fr/tour-bernabeu](https://www.realmadrid.com/sites/fr/tour-bernabeau)

## Tech Stack

- **Framework:** NextJS 14+ with TypeScript
- **App Router:** Modern NextJS App Router architecture
- **Styling:** CSS Modules for component-scoped styling
- **Content Management:** Adobe AEM Content Fragments (GraphQL API)
- **Image Handling:** NextJS `Image` component for optimization
- **Build Tools:** SWC (TypeScript/JavaScript compiler)

## Project Structure

```
real-madrid-tour-bernabeu/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout with metadata
│   │   ├── page.tsx             # Home page (SSG/ISR)
│   │   ├── head.tsx             # Dynamic head metadata
│   │   └── globals.css          # Global styles
│   ├── components/
│   │   ├── HeroSection.tsx      # Hero banner with CTA
│   │   ├── IntroSection.tsx     # Introduction and highlights
│   │   ├── TicketCard.tsx       # Individual ticket component
│   │   ├── TicketsSection.tsx   # Tickets grid
│   │   ├── Gallery.tsx          # Image gallery with lightbox
│   │   └── VisitInfo.tsx        # Visit information section
│   ├── styles/
│   │   ├── HeroSection.module.css
│   │   ├── IntroSection.module.css
│   │   ├── TicketCard.module.css
│   │   ├── TicketsSection.module.css
│   │   ├── Gallery.module.css
│   │   └── VisitInfo.module.css
│   └── lib/
│       └── aem.ts              # AEM GraphQL integration
├── public/
├── .env.example                # Environment variables template
├── next.config.js              # NextJS configuration
├── tsconfig.json               # TypeScript configuration
├── .eslintrc.json              # ESLint rules
└── .prettierrc                 # Code formatting rules
```

## Content Fragment Schema

The application expects the following Content Fragment structure from AEM:

### TourBernabeuFragment

```
- heroImage (Reference to DAM asset)
- title (Text)
- subtitle (Text)
- introText (Rich text)
- highlights (Array of objects)
  - title (Text)
  - description (Text)
- tickets (Array of objects)
  - name (Text)
  - price (Decimal)
  - description (Text)
  - image (Reference to DAM asset)
- gallery (Array of objects)
  - image (Reference to DAM asset)
  - caption (Text, optional)
- visitInfo (Object)
  - openingHours (Text)
  - address (Text)
  - accessibility (Text)
- metaTitle (Text)
- metaDescription (Text)
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn package manager
- AEM instance with Content Fragments published (for production)

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

3. **Set up environment variables:**

   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` and configure:

   ```env
   # AEM Content Fragment GraphQL Endpoint
   AEM_ENDPOINT_URL=https://your-aem-instance.com/api/graphql
   
   # AEM Authentication Token (Bearer token)
   AEM_AUTH_TOKEN=your_bearer_token_here
   
   # Optional: Debug mode
   NEXT_PUBLIC_DEBUG_MODE=false
   ```

### Local Development

**Run the development server:**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page will automatically reload when you make changes.

**Features:**
- Hot Module Replacement (HMR) for instant feedback
- Mock data used when AEM endpoint is not configured
- TypeScript type checking enabled

### Building for Production

**Generate an optimized build:**

```bash
npm run build
```

This command:
- Compiles TypeScript to JavaScript
- Optimizes images and bundles
- Generates static and dynamic routes
- Performs full ESLint checking

**Output:**
```
✓ Successfully compiled application
✓ Linting and type checking passed
✓ Static and dynamic routes generated
```

**Start the production server:**

```bash
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Code Quality

**Run linting:**

```bash
npm run lint
```

**Format code:**

```bash
npm run format
```

This uses Prettier to enforce consistent code style across the project.

## AEM Integration

### API Endpoint Configuration

The application communicates with AEM via GraphQL API. The endpoint and authentication token must be configured as environment variables.

**Supported Scenarios:**
1. **Development (Mock Data):** If `AEM_ENDPOINT_URL` is not set, the application uses embedded mock data matching the CF schema.
2. **Staging/Preview:** Uses AEM preview tier for content author review.
3. **Production:** Uses AEM publish tier for live content delivery.

### Fetching Content

The `getContentFragment()` function in `src/lib/aem.ts` handles all AEM communication:

```typescript
import { getContentFragment } from '@/lib/aem';

const contentData = await getContentFragment();
// Returns: ContentFragment interface with all required fields
```

### GraphQL Query Example

```graphql
query {
  tourBernabeuFragment {
    _path
    title
    subtitle
    heroImage {
      _path
    }
    introText
    highlights {
      title
      description
    }
    tickets {
      name
      price
      description
      image {
        _path
      }
    }
    gallery {
      image {
        _path
      }
      caption
    }
    visitInfo {
      openingHours
      address
      accessibility
    }
    metaTitle
    metaDescription
  }
}
```

### Static Generation and Revalidation (ISR)

The page is generated as Static Site Generation (SSG) with Incremental Static Regeneration (ISR):

- **Initial Build:** Page is pre-rendered at build time with content from AEM
- **Revalidation:** Content is automatically refreshed every 1 hour (3600 seconds)
- **On-Demand:** Can be manually revalidated via webhook trigger

This approach ensures:
- **Performance:** Instant page loads from cached static content
- **Freshness:** Content updates automatically within 1 hour
- **Reliability:** Fallback to previous version if revalidation fails

## Component Documentation

### HeroSection
Full-width hero banner with background image, title, subtitle, and CTA button.

**Props:**
```typescript
{
  heroImageRef: string;      // URL to hero image
  heroImageAlt: string;      // Alt text for accessibility
  pageTitle: string;         // Main heading
  pageSubtitle: string;      // Subheading
  ctaLabel: string;          // Button text
  ctaUrl: string;            // Button link
}
```

### IntroSection
Introduction text followed by a grid of highlight cards.

**Props:**
```typescript
{
  introductionText: string;
  tourHighlights: Array<{
    title: string;
    description: string;
  }>;
}
```

### TicketsSection & TicketCard
Grid of ticket options with pricing and descriptions.

**TicketsSection Props:**
```typescript
{
  ticketSectionTitle: string;
  tickets: Array<{
    ticketName: string;
    ticketPrice: string;      // e.g., "€25"
    ticketDescription: string;
    ticketImageRef: string;   // URL to ticket image
  }>;
}
```

### Gallery
Responsive image grid with lightbox modal.

**Props:**
```typescript
{
  galleryImages: Array<{
    src: string;              // Image URL
    alt: string;              // Alt text
    caption?: string;         // Optional caption
  }>;
}
```

### VisitInfo
Three-column grid with opening hours, address, and accessibility information.

**Props:**
```typescript
{
  visitInfoTitle: string;
  openingHours: string;      // Can include newlines for multiple lines
  address: string;
  accessibilityInfo: string;
}
```

## Accessibility

The application follows WCAG 2.1 AA standards:

- **Semantic HTML:** Proper use of heading levels, landmarks
- **Image Alt Text:** All images have descriptive alt attributes
- **Keyboard Navigation:** Gallery lightbox supports keyboard controls (Enter, Space, Esc)
- **Color Contrast:** Text meets WCAG contrast requirements
- **Responsive Design:** Mobile-friendly at all breakpoints
- **Focus Management:** Proper focus indicators and tab order

## Performance

**Target Metrics:**
- Core Web Vitals: All green (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- First Contentful Paint (FCP): < 1.5s
- Time to Interactive (TTI): < 3.5s
- Lighthouse Score: > 90

**Optimization Techniques:**
- NextJS Image component (automatic WebP, lazy loading, responsive sizes)
- CSS Modules (zero-runtime styling, smaller bundle)
- Static generation (ISR) for instant page loads
- Font optimization (system fonts by default)
- Code splitting via App Router

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 12+, Android Chrome)

## Troubleshooting

### AEM Connection Issues

**Problem:** `Error fetching content fragment`

**Solution:**
1. Verify `AEM_ENDPOINT_URL` is correct and accessible
2. Confirm `AEM_AUTH_TOKEN` is a valid Bearer token
3. Check network connectivity to AEM instance
4. Review AEM logs for API errors
5. Ensure Content Fragment is published to target tier

### Image Loading Issues

**Problem:** Images not displaying

**Solution:**
1. Confirm image URLs are externally accessible
2. Check image format support (JPEG, PNG, WebP, etc.)
3. Verify no CORS restrictions on image CDN
4. Test URL directly in browser

### Build Failures

**Problem:** `npm run build` fails

**Solution:**
1. Run `npm install` to ensure dependencies are installed
2. Check for TypeScript errors: `tsc --noEmit`
3. Run ESLint: `npm run lint`
4. Clear `.next` directory: `rm -rf .next` then rebuild
5. Verify Node.js version: `node --version` (need 18+)

## Deployment

### Vercel (Recommended)

The application is optimized for Vercel deployment:

```bash
vercel deploy
```

### Docker

**Build:**
```bash
docker build -t real-madrid-bernabeu .
```

**Run:**
```bash
docker run -p 3000:3000 \
  -e AEM_ENDPOINT_URL=... \
  -e AEM_AUTH_TOKEN=... \
  real-madrid-bernabeu
```

### Static Export

For completely static hosting (no server required):

1. Update `next.config.js`:
   ```javascript
   const nextConfig = {
     output: 'export',
     // ... other config
   };
   ```

2. Build: `npm run build`
3. Deploy `out/` directory to any static host

**Note:** ISR revalidation will not work with static export.

## Contributing

This project follows a structured workflow:

1. **Content Schema First:** Agree on CF model structure before coding
2. **Component Isolation:** Each component maps 1:1 to CF schema fields
3. **No Hardcoded Content:** All copy flows from AEM via `getContentFragment()`
4. **Type Safety:** Full TypeScript coverage, no `any` types

### Code Standards

- Prettier formatting enforced via pre-commit hooks
- ESLint rules checked in CI/CD pipeline
- TypeScript strict mode enabled
- Components use CSS Modules (no global styles in components)

## License

Copyright © 2024 Real Madrid Club de Fútbol. All rights reserved.

## Support

For issues or questions:
1. Check this README and troubleshooting section
2. Review GitHub Issues for similar problems
3. Contact the development team

## Changelog

### v0.1.0 (Initial Release)
- NextJS 14 scaffolding with TypeScript
- Component library: Hero, Intro, Tickets, Gallery, VisitInfo
- AEM GraphQL integration layer
- Mock data for development
- CSS Modules styling
- WCAG 2.1 AA accessibility compliance
- Performance optimizations (ISR, Image, CSS)
- Comprehensive documentation
