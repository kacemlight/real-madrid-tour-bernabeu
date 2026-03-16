'use client';

import { HeroSection } from '@/components/HeroSection';
import { IntroSection } from '@/components/IntroSection';
import { TicketsSection } from '@/components/TicketsSection';
import { VisitInfo } from '@/components/VisitInfo';
import { Gallery } from '@/components/Gallery';
import { mockTourData } from '@/lib/mockData';
import Head from 'next/head';

export default function Home() {
  const { meta, hero, intro, ticketsSection, visitInfo, gallery } = mockTourData;

  return (
    <>
      <Head>
        <title>{meta.metaTitle}</title>
        <meta name="description" content={meta.metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={meta.metaTitle} />
        <meta property="og:description" content={meta.metaDescription} />
        <meta property="og:type" content="website" />
      </Head>

      <main>
        <HeroSection {...hero} />
        <IntroSection {...intro} />
        <TicketsSection {...ticketsSection} />
        <VisitInfo {...visitInfo} />
        <Gallery {...gallery} />
      </main>
    </>
  );
}
