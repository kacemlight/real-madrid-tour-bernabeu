// Mock data exactly matching CF schema
import { TourPageData } from './types';

export const mockTourData: TourPageData = {
  meta: {
    metaTitle: 'Tour Bernabéu - Real Madrid',
    metaDescription: 'Discover the iconic Santiago Bernabéu stadium with our guided tour experience. Explore the history, facilities, and magical moments of Real Madrid.'
  },
  hero: {
    heroImageRef: 'https://images.unsplash.com/photo-1577223557236-0a8be4b7c9f7?w=1200&h=600&fit=crop',
    heroImageAlt: 'Santiago Bernabéu Stadium',
    pageTitle: 'Santiago Bernabéu Tour',
    pageSubtitle: 'Experience the heart of Real Madrid',
    ctaLabel: 'Book Your Tour',
    ctaUrl: '/booking'
  },
  intro: {
    introductionText: 'Welcome to the Santiago Bernabéu, one of the most iconic football stadiums in the world. With a capacity of over 81,000, the stadium has been home to Real Madrid since 1947. Join us for an unforgettable journey through decades of glory, legendary matches, and world-class football.',
    tourHighlights: [
      'Visit the players\' tunnel and experience the emotion of walking onto the pitch',
      'Explore the VIP boxes and premium seating areas',
      'Discover the trophy room showcasing 14 European Cups',
      'See the museum exhibits featuring legendary players',
      'Enjoy views from the upper stands over Madrid'
    ]
  },
  ticketsSection: {
    ticketSectionTitle: 'Choose Your Tour Experience',
    tickets: [
      {
        ticketName: 'Standard Tour',
        ticketPrice: '€25',
        ticketDescription: 'A comprehensive guided tour of the stadium, including the museum, pitch, and fan zones. Duration: 90 minutes.',
        ticketImageRef: 'https://images.unsplash.com/photo-1577223557236-0a8be4b7c9f7?w=400&h=300&fit=crop'
      },
      {
        ticketName: 'Premium Experience',
        ticketPrice: '€45',
        ticketDescription: 'VIP access with exclusive areas, premium seating preview, and a souvenir. Duration: 120 minutes.',
        ticketImageRef: 'https://images.unsplash.com/photo-1577223557236-0a8be4b7c9f7?w=400&h=300&fit=crop'
      },
      {
        ticketName: 'Family Package',
        ticketPrice: '€80',
        ticketDescription: 'Perfect for families (2 adults + 2 children). Includes interactive museum activities and family photo session.',
        ticketImageRef: 'https://images.unsplash.com/photo-1577223557236-0a8be4b7c9f7?w=400&h=300&fit=crop'
      }
    ]
  },
  visitInfo: {
    visitInfoTitle: 'Plan Your Visit',
    openingHours: 'Monday - Sunday: 10:00 AM - 7:00 PM. Stadium hours may vary on match days.',
    address: 'Avenida Concha Espina, 1, 28036 Madrid, Spain',
    accessibilityInfo: 'The stadium is fully accessible. We provide wheelchairs, accessible restrooms, and elevator access to all levels. Service animals welcome.'
  },
  gallery: {
    galleryImages: [
      'https://images.unsplash.com/photo-1577223557236-0a8be4b7c9f7?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop'
    ]
  }
};
