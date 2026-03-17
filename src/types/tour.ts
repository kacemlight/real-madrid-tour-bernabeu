export interface TourHighlight { icon: string; label: string; description: string; }
export interface GalleryImage { path: string; alt: string; }
export interface TicketType { name: string; price: string; description: string; ctaUrl: string; }
export interface TourBernabeuData {
  pageTitle: string;
  pageSubtitle: string;
  heroImagePath: string;
  heroCtaLabel: string;
  heroCtaUrl: string;
  tourHighlights: TourHighlight[];
  galleryImages: GalleryImage[];
  ticketTypes: TicketType[];
  openingHours: string;
  locationAddress: string;
  locationMapUrl: string;
  practicalInfo: string;
  metaTitle: string;
  metaDescription: string;
  metaOgImage: string;
}