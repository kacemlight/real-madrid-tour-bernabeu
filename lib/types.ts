// Types matching AEM Content Fragment schema

export interface PageMeta {
  metaTitle: string;
  metaDescription: string;
}

export interface HeroSectionProps {
  heroImageRef: string;
  heroImageAlt: string;
  pageTitle: string;
  pageSubtitle: string;
  ctaLabel: string;
  ctaUrl: string;
}

export interface IntroSectionProps {
  introductionText: string;
  tourHighlights: string[];
}

export interface TicketCardProps {
  ticketName: string;
  ticketPrice: string;
  ticketDescription: string;
  ticketImageRef: string;
}

export interface TicketsSectionProps {
  ticketSectionTitle: string;
  tickets: TicketCardProps[];
}

export interface VisitInfoProps {
  visitInfoTitle: string;
  openingHours: string;
  address: string;
  accessibilityInfo: string;
}

export interface GalleryProps {
  galleryImages: string[];
}

export interface TourPageData {
  meta: PageMeta;
  hero: HeroSectionProps;
  intro: IntroSectionProps;
  ticketsSection: TicketsSectionProps;
  visitInfo: VisitInfoProps;
  gallery: GalleryProps;
}
