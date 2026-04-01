import React, { useEffect, useState } from 'react';
import { TourBernabeuContent, ApiResponse } from '@/lib/types';
import { aemClient } from '@/lib/aem';
import SEOHead from '@/components/SEOHead';
import HeroSection from '@/components/HeroSection';
import IntroSection from '@/components/IntroSection';
import HighlightsSection from '@/components/HighlightsSection';
import ScheduleSection from '@/components/ScheduleSection';
import PricingCTA from '@/components/PricingCTA';
import GallerySection from '@/components/GallerySection';

interface HomeProps {
  content: TourBernabeuContent | null;
  error?: string;
}

const Home: React.FC<HomeProps> = ({ content, error }) => {
  if (error || !content) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h1>Error Loading Content</h1>
        <p>{error || 'Content not available'}</p>
      </div>
    );
  }

  return (
    <>
      <SEOHead content={content} />
      <main>
        <HeroSection content={content} />
        <IntroSection content={content} />
        <HighlightsSection content={content} />
        <ScheduleSection content={content} />
        <PricingCTA content={content} />
        <GallerySection content={content} />
      </main>
    </>
  );
};

export async function getStaticProps() {
  // Fetch content at build time
  const result = await aemClient.fetchTourContent();

  if (!result.success) {
    // Return mock data as fallback during development
    const mockData: TourBernabeuContent = {
      pageTitle: 'Tour Bernabéu Stadium',
      heroSubtitle: 'Explore the Home of Real Madrid',
      heroImageUrl: 'https://via.placeholder.com/1200x600',
      introductionText: 'Experience the magic of the Bernabéu Stadium on a guided tour of Real Madrid\'s iconic home.',
      tourHighlights: 'State-of-the-art facilities\nHistoric trophy room\nInteractive museum\nStadium seating views',
      openingHours: 'Monday - Friday: 10:00 AM - 7:00 PM\nWeekend: 9:00 AM - 8:00 PM\nClosed on match days',
      ticketPriceAdult: 25,
      ticketPriceChild: 15,
      ticketCtaLabel: 'Book Your Tour',
      ticketCtaUrl: 'https://www.realmadrid.com/en-US/tickets',
      galleryImages: [
        'https://via.placeholder.com/400x300',
        'https://via.placeholder.com/400x300',
        'https://via.placeholder.com/400x300',
        'https://via.placeholder.com/400x300',
      ],
      metaDescription: 'Book your Bernabéu Stadium tour with Real Madrid. Explore the history and magic of Europe\'s most iconic football venue.',
      metaTitle: 'Real Madrid Bernabéu Stadium Tours | Official Website',
    };

    return {
      props: {
        content: mockData,
        error: 'Using mock data - AEM endpoint not configured',
      },
      revalidate: 60,
    };
  }

  return {
    props: {
      content: result.data,
    },
    revalidate: 3600, // Revalidate every hour
  };
}

export default Home;
