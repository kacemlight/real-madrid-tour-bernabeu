// Tour Bernabéu Content Schema
export interface TourBernabeuContent {
  pageTitle: string;
  heroSubtitle: string;
  heroImageUrl: string;
  introductionText: string;
  tourHighlights: string;
  openingHours: string;
  ticketPriceAdult: number;
  ticketPriceChild: number;
  ticketCtaLabel: string;
  ticketCtaUrl: string;
  galleryImages: string[];
  metaDescription: string;
  metaTitle: string;
}

// AEM Content Fragment Response Structure
export interface AEMContentFragmentResponse {
  data: {
    contentFragmentByPath: TourBernabeuContent;
  };
}

// API Response Wrapper
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
