/**
 * Tour Bernabéu Content Fragment Schema
 * Maps directly to AEM Content Fragment fields
 */

export interface Image {
  url: string;
  alt: string;
}

export interface HighlightCard {
  cardTitle: string;
  cardDescription: string;
  cardImage: Image;
}

export interface TicketOption {
  ticketName: string;
  ticketPrice: string;
  ticketDescription: string;
  ticketCtaLabel: string;
  ticketCtaUrl: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TourBernabeuContent {
  pageTitle: string;
  pageMetaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroCtaLabel: string;
  heroCtaUrl: string;
  heroImage: Image;
  introTitle: string;
  introBody: string;
  introImage: Image;
  highlightCards: HighlightCard[];
  ticketSectionTitle: string;
  ticketOptions: TicketOption[];
  openingHoursTitle: string;
  openingHoursBody: string;
  locationAddress: string;
  mapEmbedUrl: string;
  galleryImages: Image[];
  faqItems: FaqItem[];
}
