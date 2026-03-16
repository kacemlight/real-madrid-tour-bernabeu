import HeroSection from '@/components/HeroSection';
import IntroSection from '@/components/IntroSection';
import TicketsSection from '@/components/TicketsSection';
import Gallery from '@/components/Gallery';
import VisitInfo from '@/components/VisitInfo';
import { getContentFragment } from '@/lib/aem';

export default async function Home() {
  // TODO: Replace with live AEM CF call after Alex provides endpoint
  const contentData = await getContentFragment();

  return (
    <>
      <HeroSection
        heroImageRef={contentData.heroImageRef}
        heroImageAlt={contentData.heroImageAlt}
        pageTitle={contentData.pageTitle}
        pageSubtitle={contentData.pageSubtitle}
        ctaLabel={contentData.ctaLabel}
        ctaUrl={contentData.ctaUrl}
      />
      <IntroSection
        introductionText={contentData.introductionText}
        tourHighlights={contentData.tourHighlights}
      />
      <TicketsSection
        ticketSectionTitle={contentData.ticketSectionTitle}
        tickets={contentData.tickets}
      />
      <Gallery galleryImages={contentData.galleryImages} />
      <VisitInfo
        visitInfoTitle={contentData.visitInfoTitle}
        openingHours={contentData.openingHours}
        address={contentData.address}
        accessibilityInfo={contentData.accessibilityInfo}
      />
    </>
  );
}
