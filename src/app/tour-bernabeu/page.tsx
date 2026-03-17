'use client';

import { useEffect, useState } from 'react';
import SEOHead from '@/components/SEOHead';
import HeroSection from '@/components/HeroSection';
import TourHighlights from '@/components/TourHighlights';
import TourGallery from '@/components/TourGallery';
import PricingSection from '@/components/PricingSection';
import InfoSection from '@/components/InfoSection';
import mockData from '@/data/mock-tour-bernabeu.json';

interface TourData {
  tourData: {
    title: string;
    description: string;
    heroImage: { url: string; alt: string };
    heroSubtitle: string;
    highlights: Array<{ title: string; description: string; icon: string }>;
    galleryImages: Array<{ url: string; alt: string; caption: string }>;
    pricing: Array<{ type: string; price: number; duration: string; includes: string }>;
    infoSections: Array<{ heading: string; content: string }>;
    seoTitle: string;
    seoDescription: string;
    seoKeywords: string;
  };
}

export default function TourBernabeuPage() {
  const [data, setData] = useState<TourData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Placeholder for AEM GraphQL/REST API call
        // When Alex provides the AEM endpoint, replace with:
        // const response = await fetch(process.env.NEXT_PUBLIC_AEM_ENDPOINT, {...});
        // const result = await response.json();
        // setData(result);
        
        // For now, use mock data
        setData(mockData as TourData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching tour data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen text-xl">Loading...</div>;
  }

  if (!data) {
    return <div className="flex justify-center items-center h-screen text-xl">Error loading tour data</div>;
  }

  const tour = data.tourData;

  return (
    <>
      <SEOHead
        title={tour.seoTitle}
        description={tour.seoDescription}
        keywords={tour.seoKeywords}
      />
      <main>
        <HeroSection
          title={tour.title}
          subtitle={tour.heroSubtitle}
          heroImage={tour.heroImage}
        />
        <TourHighlights highlights={tour.highlights} />
        <TourGallery images={tour.galleryImages} />
        <PricingSection pricing={tour.pricing} />
        <InfoSection sections={tour.infoSections} />
        <footer className="bg-rm-black text-rm-white text-center py-8">
          <p>&copy; 2026 Real Madrid CF. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}