/**
 * TypeScript type definitions for Real Madrid Tour Bernabéu Content Fragment
 * These types map directly to the AEM CF model schema
 */

export interface TourImage {
  alt: string;
  src: string;
  width?: number;
  height?: number;
}

export interface TourHighlight {
  title: string;
  description: string;
  icon?: string; // URL or icon identifier
  image?: TourImage;
}

export interface GalleryImage extends TourImage {
  caption?: string;
}

export interface TicketType {
  name: string;
  description: string;
  price: number;
  currency: string; // EUR, USD, etc.
  duration?: string; // "90 minutes", "2 hours", etc.
  included?: string[]; // Array of included features
}

export interface OpeningHours {
  day: string; // "Monday", "Tuesday", etc.
  open: string; // "09:00"
  close: string; // "18:00"
  closed?: boolean;
}

export interface LocationInfo {
  address: string;
  city: string;
  zipCode?: string;
  country: string;
  phone?: string;
  email?: string;
  website?: string;
  latitude?: number;
  longitude?: number;
}

export interface SEOMeta {
  title: string;
  description: string;
  ogImage?: string;
  ogImageAlt?: string;
  canonical?: string;
  robots?: string;
}

/**
 * Main Tour Bernabéu Content Fragment type
 * Fetched from AEM CF GraphQL API
 */
export interface TourBernabeuCF {
  // Hero Section
  pageTitle: string;
  pageSubtitle?: string;
  heroImage?: TourImage;
  heroCtaText?: string;
  heroCtaUrl?: string;

  // Tour Highlights Section
  highlightsTitle?: string;
  highlightsDescription?: string;
  tourHighlights: TourHighlight[];

  // Gallery Section
  galleryTitle?: string;
  galleryImages: GalleryImage[];

  // Pricing Section
  pricingTitle?: string;
  pricingDescription?: string;
  ticketTypes: TicketType[];

  // Info Section
  openingHours: OpeningHours[];
  locationInfo: LocationInfo;
  additionalInfo?: string;

  // SEO Metadata
  seo?: SEOMeta;

  // Timestamps (from AEM)
  createdDate?: string;
  lastModifiedDate?: string;
  publishedDate?: string;
}

/**
 * API response wrapper for GraphQL queries
 */
export interface AEMGraphQLResponse {
  data: {
    tourBernabeuByPath: TourBernabeuCF;
  };
  errors?: Array<{
    message: string;
  }>;
}

/**
 * Component props types
 */
export interface HeroSectionProps {
  title: string;
  subtitle?: string;
  image?: TourImage;
  ctaText?: string;
  ctaUrl?: string;
}

export interface TourHighlightsProps {
  title?: string;
  description?: string;
  highlights: TourHighlight[];
}

export interface TourGalleryProps {
  title?: string;
  images: GalleryImage[];
}

export interface PricingSectionProps {
  title?: string;
  description?: string;
  ticketTypes: TicketType[];
}

export interface InfoSectionProps {
  openingHours: OpeningHours[];
  location: LocationInfo;
  additionalInfo?: string;
}

export interface SEOHeadProps {
  meta: SEOMeta;
}

/**
 * Loading and error states
 */
export interface DataState<T> {
  loading: boolean;
  data?: T;
  error?: string;
}

export type PageDataState = DataState<TourBernabeuCF>;
