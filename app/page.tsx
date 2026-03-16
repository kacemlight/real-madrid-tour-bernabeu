import { getTourBernabeuContent } from '../lib/aem';
import HeroBanner from '../components/HeroBanner';
import TourIntro from '../components/TourIntro';
import Highlights from '../components/Highlights';
import TicketCategories from '../components/TicketCategories';
import Gallery from '../components/Gallery';
import PracticalInfo from '../components/PracticalInfo';
import FAQ from '../components/FAQ';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

export const revalidate = 3600;

export async function generateMetadata() {
  const data = await getTourBernabeuContent();
  return {
    title: data.pageTitle,
    description: data.metaDescription,
    openGraph: {
      images: data.ogImage?._path ? [data.ogImage._path] : [],
    },
  };
}

export default async function TourBernabeuPage() {
  const data = await getTourBernabeuContent();

  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <HeroBanner banner={data.heroBanner} />
        <TourIntro intro={data.tourIntro} />
        <Highlights highlights={data.highlights} />
        <TicketCategories tickets={data.ticketCategories} />
        <Gallery images={data.galleryImages} />
        <PracticalInfo info={data.practicalInfo} />
        <FAQ items={data.faqItems} />
      </main>
      <SiteFooter />
    </>
  );
}
