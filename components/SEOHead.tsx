import React from 'react';
import Head from 'next/head';
import { TourBernabeuContent } from '@/lib/types';

interface SEOHeadProps {
  content: TourBernabeuContent;
}

const SEOHead: React.FC<SEOHeadProps> = ({ content }) => {
  return (
    <Head>
      <title>{content.metaTitle}</title>
      <meta name="description" content={content.metaDescription} />
      <meta property="og:title" content={content.metaTitle} />
      <meta property="og:description" content={content.metaDescription} />
      <meta property="og:image" content={content.heroImageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={content.metaTitle} />
      <meta name="twitter:description" content={content.metaDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href="https://www.realmadrid.com/sites/en/tour-bernabeu" />
    </Head>
  );
};

export default SEOHead;
