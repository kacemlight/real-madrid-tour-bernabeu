# Real Madrid Tour Bernabéu — NextJS Web Application

A production-ready NextJS application for the Real Madrid Tour Bernabéu page, integrated with Adobe AEM Content Fragments.

## Project Overview

This application renders the Real Madrid Tour Bernabéu page (https://www.realmadrid.com/sites/fr/tour-bernabeu) as a modern, accessible NextJS web app consuming content from AEM Content Fragments.

## Features

- **8 Modular Components**: HeroBanner, TourIntro, HighlightsGrid, TicketsSection, PracticalInfo, ImageGallery, FaqAccordion, SeoHead
- **AEM Integration**: Fetches live content via GraphQL or REST API with fallback to mock data
- **Responsive Design**: Tailwind CSS for mobile-first layout
- **Accessibility**: Semantic HTML, ARIA attributes, alt text on all images
- **Performance**: Optimized images, server-side rendering, static generation where applicable

## Local Setup

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/kacemlight/real-madrid-tour-bernabeu.git
cd real-madrid-tour-bernabeu

# Install dependencies
npm install

# Copy environment template
cp .env.local.example .env.local
```

### Configuration

Edit `.env.local` with your AEM settings:

```env
NEXT_PUBLIC_AEM_BASE_URL=https://your-aem-instance.com
AEM_CF_ENDPOINT=/content/dam/real-madrid/tour-bernabeu
AEM_API_KEY=your-api-key-here
AEM_SERVICE_TOKEN=your-service-token-here
```

### Development

```bash
npm run dev
```

Visit `http://localhost:3000` to view the page with hot reload.

### Production Build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

All checks must pass before committing.

## Project Structure

```
real-madrid-tour-bernabeu/
├── app/
│   ├── layout.jsx       # Root layout
│   ├── page.jsx         # Tour Bernabéu main page
│   └── globals.css      # Global styles
├── components/
│   ├── HeroBanner.jsx
│   ├── TourIntro.jsx
│   ├── HighlightsGrid.jsx
│   ├── TicketsSection.jsx
│   ├── PracticalInfo.jsx
│   ├── ImageGallery.jsx
│   ├── FaqAccordion.jsx
│   └── SeoHead.jsx
├── lib/
│   ├── aem.js           # AEM API integration
│   └── mock-data.js     # Mock data for development
└── public/              # Static assets
```

## AEM Integration

The app fetches content via `getTourBernabeuContent()` in `/lib/aem.js`:

```javascript
import { getTourBernabeuContent } from '@/lib/aem';

export default async function Page() {
  const content = await getTourBernabeuContent();
  return <TourBernabeuPage data={content} />;
}
```

If the AEM endpoint is unreachable, the app gracefully falls back to mock data.

## Content Fragment Schema

The AEM Content Fragment must include:

- **pageTitle** (string)
- **metaDescription** (string)
- **ogImage** (asset reference)
- **heroBanner** (object): title, subtitle, backgroundImage, ctaText, ctaUrl
- **tourIntro** (object): heading, body, featuredImage
- **highlights** (array): title, description, icon
- **ticketCategories** (array): name, price, currency, description
- **practicalInfo** (object): hours, address, transport
- **galleryImages** (array): url, alt
- **faqItems** (array): question, answer

## Quality Gates

✅ `npm run lint` — Zero errors  
✅ `npm run build` — Zero errors  
✅ Semantic HTML on all components  
✅ Alt attributes on all images  
✅ WCAG accessibility compliance  
✅ Page load time < 3 seconds  

## Deployment

This app is ready for deployment to Vercel, Netlify, or any Node.js hosting platform.

**Vercel:**
```bash
npm install -g vercel
vercel
```

## GitHub Repository

https://github.com/kacemlight/real-madrid-tour-bernabeu

## Support

For issues or questions, open a GitHub issue or contact the development team.
