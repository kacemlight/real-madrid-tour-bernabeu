import { GetStaticProps } from 'next';
import SEOHead from '@/components/SEOHead';
import HeroSection from '@/components/HeroSection';
import IntroSection from '@/components/IntroSection';
import HighlightsSection from '@/components/HighlightsSection';
import ScheduleSection from '@/components/ScheduleSection';
import PricingCTA from '@/components/PricingCTA';
import GallerySection from '@/components/GallerySection';
import { getTourData } from '@/lib/aem';
import { TourBernabeuContent } from '@/types/tour';

interface HomeProps {
  tourData: TourBernabeuContent;
}

export default function Home({ tourData }: HomeProps) {
  return (
    <>
      <SEOHead data={tourData} />
      <main>
        <HeroSection data={tourData} />
        <IntroSection data={tourData} />
        <HighlightsSection data={tourData} />
        <ScheduleSection data={tourData} />
        <PricingCTA data={tourData} />
        <GallerySection data={tourData} />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const tourData = await getTourData();

  return {
    props: {
      tourData
    },
    revalidate: 60
  };
};
