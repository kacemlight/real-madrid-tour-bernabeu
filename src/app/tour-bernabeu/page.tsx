import { Metadata } from 'next'
import mockData from '@/data/mock-tour-bernabeu.json'
import { TourBernabeuData } from '@/types/tour'
import HeroSection from '@/components/HeroSection'
import TourHighlights from '@/components/TourHighlights'
import TourGallery from '@/components/TourGallery'
import PricingSection from '@/components/PricingSection'
import InfoSection from '@/components/InfoSection'

// TODO: Replace with live AEM CF fetch when Alex publishes endpoint
// import { fetchTourData } from '@/lib/aem-client'
async function getTourData(): Promise<TourBernabeuData> {
  // When AEM CF is live, replace this with:
  // return fetchTourData(process.env.NEXT_PUBLIC_AEM_ENDPOINT!)
  return mockData as TourBernabeuData
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getTourData()
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    openGraph: { title: data.metaTitle, description: data.metaDescription, images: [data.metaOgImage] }
  }
}

export default async function TourBernabeuPage() {
  const data = await getTourData()
  return (
    <main>
      <HeroSection title={data.pageTitle} subtitle={data.pageSubtitle} imagePath={data.heroImagePath} ctaLabel={data.heroCtaLabel} ctaUrl={data.heroCtaUrl} />
      <TourHighlights highlights={data.tourHighlights} />
      <TourGallery images={data.galleryImages} />
      <PricingSection tickets={data.ticketTypes} />
      <InfoSection openingHours={data.openingHours} locationAddress={data.locationAddress} locationMapUrl={data.locationMapUrl} practicalInfo={data.practicalInfo} />
      <footer className="bg-gray-900 text-white text-center py-8">
        <p className="text-gray-400">© 2024 Real Madrid CF. All rights reserved.</p>
      </footer>
    </main>
  )
}