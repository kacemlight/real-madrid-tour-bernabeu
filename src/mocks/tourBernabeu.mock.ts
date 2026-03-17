/**
 * Mock data for Tour Bernabéu page
 * Mirrors the exact schema of the AEM Content Fragment
 * Used for development until Alex's CF is published
 */

import { TourBernabeuContent } from '@/types';

export const tourBernabeuMock: TourBernabeuContent = {
  pageTitle: 'Tour Bernabéu | Real Madrid',
  pageMetaDescription:
    'Experience the magic of the Bernabéu Stadium. Take a guided tour through Real Madrid\'s legendary home.',
  
  heroHeadline: 'Experience the Magic of Bernabéu',
  heroSubheadline: 'Discover the heart and soul of Real Madrid at the iconic Bernabéu Stadium',
  heroCtaLabel: 'Book Your Tour Now',
  heroCtaUrl: 'https://www.realmadrid.com/tours',
  heroImage: {
    url: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&h=600&fit=crop',
    alt: 'Bernabéu Stadium exterior view',
  },

  introTitle: 'Welcome to the Bernabéu',
  introBody:
    'The Bernabéu Stadium is more than just a football pitch—it\'s the soul of Real Madrid. Since 1947, this iconic venue has hosted countless legendary matches, unforgettable moments, and the greatest players in football history. Our guided tours take you behind the scenes to experience the passion, history, and glory that define Real Madrid. Walk through the same corridors as champions, visit the trophy room, and feel the electricity of the stadium that has seen 14 UEFA Champions League titles won.',
  introImage: {
    url: 'https://images.unsplash.com/photo-1517319690881-3db3b2fec4e8?w=800&h=500&fit=crop',
    alt: 'Bernabéu Stadium interior',
  },

  highlightCards: [
    {
      cardTitle: 'Trophy Room',
      cardDescription:
        'Explore the magnificent collection of trophies and achievements spanning over seven decades of excellence.',
      cardImage: {
        url: 'https://images.unsplash.com/photo-1579952363873-27f3bade9e55?w=600&h=400&fit=crop',
        alt: 'Real Madrid trophy display',
      },
    },
    {
      cardTitle: 'VIP Suites',
      cardDescription:
        'Discover the luxury hospitality areas where corporate guests and VIPs experience the matches in style.',
      cardImage: {
        url: 'https://images.unsplash.com/photo-1519167758993-ddc4265ae142?w=600&h=400&fit=crop',
        alt: 'VIP suite at Bernabéu',
      },
    },
    {
      cardTitle: 'Player Facilities',
      cardDescription:
        'Visit the state-of-the-art training facilities, dressing rooms, and the sacred pitch of Bernabéu.',
      cardImage: {
        url: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=600&h=400&fit=crop',
        alt: 'Players training at Bernabéu',
      },
    },
    {
      cardTitle: 'Museum Exhibits',
      cardDescription:
        'Journey through decades of Real Madrid history with interactive exhibits showcasing legendary moments.',
      cardImage: {
        url: 'https://images.unsplash.com/photo-1578301978162-7aae4d755744?w=600&h=400&fit=crop',
        alt: 'Real Madrid museum exhibits',
      },
    },
  ],

  ticketSectionTitle: 'Choose Your Tour Experience',
  ticketOptions: [
    {
      ticketName: 'Standard Tour',
      ticketPrice: '€25',
      ticketDescription:
        'A comprehensive 90-minute guided tour of the stadium, trophy room, and museum. Perfect for fans of all ages.',
      ticketCtaLabel: 'Book Standard',
      ticketCtaUrl: 'https://www.realmadrid.com/tours/standard',
    },
    {
      ticketName: 'Premium Tour',
      ticketPrice: '€45',
      ticketDescription:
        'Exclusive 2-hour tour including VIP areas, exclusive merchandise, and lunch at the stadium restaurant.',
      ticketCtaLabel: 'Book Premium',
      ticketCtaUrl: 'https://www.realmadrid.com/tours/premium',
    },
    {
      ticketName: 'Legend Experience',
      ticketPrice: '€99',
      ticketDescription:
        'An unforgettable 3-hour experience with exclusive access, meet & greet opportunities, and special memorabilia.',
      ticketCtaLabel: 'Book Legend',
      ticketCtaUrl: 'https://www.realmadrid.com/tours/legend',
    },
  ],

  openingHoursTitle: 'Opening Hours & Visitor Information',
  openingHoursBody:
    'Monday to Sunday: 10:00 AM - 8:00 PM\nTours depart every 30 minutes\nLast entry: 6:00 PM\nClosed on match days (group tours only)\nChildren under 5 years old: Free entry with adult',

  locationAddress:
    'Bernabéu Stadium, Avenida de Concha Espina, 1, 28036 Madrid, Spain\nMetro: Santiago Bernabéu (Line 10)',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.7525479305223!2d-3.688353!3d40.4531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422f27c0e41b15%3A0x1f3c51a5a7e8a9c0!2sStadium%20Santiago%20Bernabéu!5e0!3m2!1sen!2ses!4v1234567890123',

  galleryImages: [
    {
      url: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop',
      alt: 'Stadium exterior at night',
    },
    {
      url: 'https://images.unsplash.com/photo-1517319690881-3db3b2fec4e8?w=600&h=400&fit=crop',
      alt: 'Stadium interior seating',
    },
    {
      url: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=400&fit=crop',
      alt: 'Pitch view from stands',
    },
    {
      url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop',
      alt: 'Trophy display',
    },
    {
      url: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=600&h=400&fit=crop',
      alt: 'Stadium tunnel',
    },
    {
      url: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop',
      alt: 'Evening ambiance',
    },
  ],

  faqItems: [
    {
      question: 'How long does the standard tour take?',
      answer:
        'The standard tour typically takes 90 minutes. It covers the main museum, trophy room, stadium seating areas, and the pitch level.',
    },
    {
      question: 'Can I book a private group tour?',
      answer:
        'Yes! Group tours for 15+ people can be arranged. Please contact our group tours department at groups@realmadrid.com for custom packages and pricing.',
    },
    {
      question: 'Are there tours on match days?',
      answer:
        'Regular individual tours are closed on match days. However, exclusive group tours can be arranged before evening matches. Check the fixture calendar for details.',
    },
    {
      question: 'Is the tour accessible for people with mobility issues?',
      answer:
        'Yes, most areas of the stadium are wheelchair accessible. Please inform us in advance so we can arrange the best route for your visit.',
    },
    {
      question: 'Can children attend the tour?',
      answer:
        'Absolutely! We welcome children of all ages. Children under 5 enter free. We have shorter duration options suitable for younger visitors.',
    },
    {
      question: 'Is photography allowed during the tour?',
      answer:
        'Personal photography is allowed in designated areas. Professional photography requires special permission. Check in with your guide for specific areas.',
    },
    {
      question: 'Where can I buy tickets?',
      answer:
        'Tickets can be purchased online at realmadrid.com/tours, at the ticket office, or through authorized travel agencies.',
    },
    {
      question: 'What is the best time to visit?',
      answer:
        'Spring and fall offer pleasant weather. Summer can be busy with tourists. Winter is quieter but cooler. Avoid match days for the standard tour.',
    },
  ],
};
