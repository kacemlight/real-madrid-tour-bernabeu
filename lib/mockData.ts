/**
 * Mock data for Real Madrid Tour Bernabéu page
 * This data mirrors the AEM Content Fragment schema
 * Once Alex provides the live CF API endpoint, replace this with real API calls
 */

export const tourPageData = {
  title: "Tour Bernabéu Stadium",
  description: "Experience the iconic home of Real Madrid with our exclusive guided tours",
  seoTitle: "Tour Bernabéu Stadium - Real Madrid Official Experience",
  seoDescription: "Explore the legendary Bernabéu Stadium with official Real Madrid tours. Book your visit today and experience football history.",
  seoKeywords: "Bernabéu, Real Madrid, stadium tour, Santiago Bernabéu",
  
  hero: {
    title: "Tour Bernabéu Stadium",
    subtitle: "Experience the home of Real Madrid",
    backgroundImageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&h=600&fit=crop",
    ctaButtonText: "Book Your Tour",
    ctaButtonUrl: "#booking",
  },
  
  highlights: [
    {
      id: "1",
      title: "Historic Stadium",
      description: "Visit the iconic home of Real Madrid, one of the world's most prestigious football clubs since 1947.",
      icon: "⚽",
      imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&h=300&fit=crop",
    },
    {
      id: "2",
      title: "Museum & Trophies",
      description: "Explore our world-class museum featuring championship trophies, memorabilia, and interactive exhibits.",
      icon: "🏆",
      imageUrl: "https://images.unsplash.com/photo-1579546929662-711aa33e0d7d?w=500&h=300&fit=crop",
    },
    {
      id: "3",
      title: "Dressing Room Tour",
      description: "Walk in the footsteps of legends through the players' dressing rooms and tunnel to the pitch.",
      icon: "👟",
      imageUrl: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&h=300&fit=crop",
    },
    {
      id: "4",
      title: "VIP Suite Access",
      description: "Experience premium hospitality in our exclusive VIP suites with panoramic stadium views.",
      icon: "👑",
      imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=300&fit=crop",
    },
  ],
  
  gallery: [
    {
      id: "1",
      title: "Main Pitch",
      imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop",
      alt: "View of the main pitch at Bernabéu Stadium",
    },
    {
      id: "2",
      title: "Museum Exhibition",
      imageUrl: "https://images.unsplash.com/photo-1595092900481-e02b92ce5b6f?w=600&h=400&fit=crop",
      alt: "Museum exhibits and trophies",
    },
    {
      id: "3",
      title: "Players' Tunnel",
      imageUrl: "https://images.unsplash.com/photo-1596429676179-a27caf0f3c90?w=600&h=400&fit=crop",
      alt: "The historic players' tunnel",
    },
    {
      id: "4",
      title: "VIP Lounge",
      imageUrl: "https://images.unsplash.com/photo-1595092900481-e02b92ce5b6f?w=600&h=400&fit=crop",
      alt: "Premium VIP hospitality area",
    },
    {
      id: "5",
      title: "Stadium Exterior",
      imageUrl: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&h=400&fit=crop",
      alt: "Exterior view of Santiago Bernabéu",
    },
    {
      id: "6",
      title: "Seating Area",
      imageUrl: "https://images.unsplash.com/photo-1556821840-6a63f69b10d9?w=600&h=400&fit=crop",
      alt: "Modern stadium seating",
    },
  ],
  
  pricing: [
    {
      id: "1",
      name: "Basic Tour",
      price: "€25",
      description: "Standard stadium tour with museum access",
      features: [
        "Stadium tour (1.5 hours)",
        "Museum access",
        "Guided walkthrough",
        "Photo opportunities",
      ],
      buttonText: "Book Now",
      buttonUrl: "#booking",
    },
    {
      id: "2",
      name: "Premium Tour",
      price: "€50",
      description: "Enhanced experience with exclusive areas",
      features: [
        "Extended stadium tour (2.5 hours)",
        "Museum access",
        "VIP suite visit",
        "Dressing room access",
        "Souvenir item",
        "Professional guide",
      ],
      buttonText: "Book Now",
      buttonUrl: "#booking",
      featured: true,
    },
    {
      id: "3",
      name: "Luxury VIP",
      price: "€150",
      description: "Ultimate exclusive experience",
      features: [
        "Premium private tour (3 hours)",
        "VIP hospitality suite",
        "Champagne reception",
        "Private guide",
        "Museum curator access",
        "Premium souvenir package",
        "Photo session",
      ],
      buttonText: "Contact Us",
      buttonUrl: "#booking",
    },
  ],
  
  info: {
    title: "Plan Your Visit",
    content: "The Bernabéu Stadium is located in the heart of Madrid and is easily accessible by public transport. Tours run daily with multiple departure times to accommodate your schedule.",
    sections: [
      {
        id: "1",
        heading: "Opening Hours",
        content: "Monday - Sunday: 10:00 AM - 6:00 PM\\nTour durations vary by package (1.5 - 3 hours)",
      },
      {
        id: "2",
        heading: "Getting Here",
        content: "Metro: Line 9 - Concha Espina\\nBus: Lines 3, 27, 40\\nParking: Available on-site (€5 per hour)",
      },
      {
        id: "3",
        heading: "What to Expect",
        content: "Comfortable walking shoes recommended. Stadium can be cool, especially lower levels. Tours are offered in English and Spanish.",
      },
    ],
    contactEmail: "tours@realmadrid.com",
    contactPhone: "+34 91 398 43 70",
  },
};
