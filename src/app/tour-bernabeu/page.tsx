'use client';

import { useEffect, useState } from 'react';
import HeroSection from '@/components/HeroSection';
import TourHighlights from '@/components/TourHighlights';
import TourGallery from '@/components/TourGallery';
import PricingSection from '@/components/PricingSection';
import InfoSection from '@/components/InfoSection';
import SEOHead from '@/components/SEOHead';
import mockData from '@/data/mock-tour-bernabeu.json';

interface TourContent {
  title: string;
  subtitle: string;
  description: string;
  heroImage: { _path: string };
  highlights: string[];
  gallery: Array<{ _path: string; alt: string }>;
  pricing: { amount: number; currency: string };
  duration: string;
  groupSize: string;
}

export default function TourBernabeuPage() {
  const [content, setContent] = useState<TourContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        // TODO: Replace with live AEM GraphQL endpoint when CF is published
        // const aemEndpoint = process.env.NEXT_PUBLIC_AEM_ENDPOINT;
        // const graphqlEndpoint = `${aemEndpoint}${process.env.NEXT_PUBLIC_AEM_GRAPHQL_ENDPOINT}`;
        // const response = await fetch(graphqlEndpoint, {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({
        //     query: `{
        //       tourBernabeuList(first: 1) {
        //         items {
        //           title
        //           subtitle
        //           description
        //           heroImage { _path }
        //           highlights
        //           gallery { _path alt }
        //           pricing { amount currency }
        //           duration
        //           groupSize
        //         }
        //       }
        //     }`
        //   })
        // });
        // const data = await response.json();
        // setContent(data.data.tourBernabeuList.items[0]);

        // Currently using mock data
        setContent(mockData.tourBernabeuList.items[0]);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch content');
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-gray-600">Loading tour information...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-red-600">Error: {error}</p>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-gray-600">No content available</p>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={content.title}
        description={content.description}
        imageUrl={content.heroImage._path}
      />
      <main>
        <HeroSection
          title={content.title}
          subtitle={content.subtitle}
          imageUrl={content.heroImage._path}
        />
        <TourHighlights highlights={content.highlights} />
        <TourGallery images={content.gallery} />
        <PricingSection
          amount={content.pricing.amount}
          currency={content.pricing.currency}
        />
        <InfoSection
          duration={content.duration}
          groupSize={content.groupSize}
          description={content.description}
        />
      </main>
    </>
  );
}
