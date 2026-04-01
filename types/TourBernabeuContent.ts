export interface Highlight {
  icon: string;
  title: string;
  description: string;
}

export interface TourBernabeuContent {
  heroTitle: string;
  heroSubtitle: string;
  heroImageUrl: string;
  heroCTALabel: string;
  heroCTAUrl: string;
  sectionTitle: string;
  descriptionBody: string;
  descriptionImageUrl: string;
  highlights: Highlight[];
  openingHours: string;
  ticketPriceAdult: string;
  ticketPriceChild: string;
  address: string;
  mapEmbedUrl: string;
  metaTitle: string;
  metaDescription: string;
}