import { TourBernabeuContent } from '@/types/tour';

const MOCK_DATA: TourBernabeuContent = {
  pageTitle: 'Tour Bernabéu',
  heroSubtitle: 'Discover the Home of Real Madrid',
  heroImageUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&h=600&fit=crop',
  introductionText: '<p>Welcome to Bernabéu Stadium, home to Real Madrid CF since 1947. Experience the passion, history, and glory of one of football\'s most prestigious clubs.</p>',
  tourHighlights: '<ul><li>Visit the legendary dressing rooms</li><li>Walk the famous pitch</li><li>Explore the Trophy Hall</li><li>VIP lounge access</li></ul>',
  openingHours: 'Monday - Sunday: 10:00 AM - 6:00 PM',
  ticketPriceAdult: 25.00,
  ticketPriceChild: 15.00,
  ticketCtaLabel: 'Book Your Tour',
  ticketCtaUrl: 'https://www.realmadrid.com/tickets',
  galleryImages: [
    'https://images.unsplash.com/photo-1517958808700-9cd0cdd5c47f?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1440262277866-e0347b4d4e32?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1516301775550-ecb78ad800f0?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1489944908e7e8462d842c6b347d1a52f5399cefc?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=300&fit=crop'
  ],
  metaDescription: 'Tour Bernabéu Stadium, home of Real Madrid CF. Book your guided tour and explore the iconic venue.',
  metaTitle: 'Tour Bernabéu - Real Madrid CF'
};

export async function getTourData(): Promise<TourBernabeuContent> {
  const aemEndpoint = process.env.NEXT_PUBLIC_AEM_ENDPOINT;
  const aemToken = process.env.AEM_AUTH_TOKEN;

  if (aemEndpoint && aemToken) {
    try {
      const response = await fetch(aemEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${aemToken}`
        },
        body: JSON.stringify({
          query: `{
            tourBernabeuFragment {
              _path
              pageTitle
              heroSubtitle
              heroImageUrl
              introductionText
              tourHighlights
              openingHours
              ticketPriceAdult
              ticketPriceChild
              ticketCtaLabel
              ticketCtaUrl
              galleryImages
              metaDescription
              metaTitle
            }
          }`
        })
      });

      if (response.ok) {
        const json = await response.json();
        return json.data.tourBernabeuFragment;
      }
    } catch (error) {
      console.error('Error fetching from AEM:', error);
    }
  }

  return MOCK_DATA;
}
