import Head from 'next/head';
import { TourBernabeuContent } from '@/types/tour';

interface SEOHeadProps {
  data: Pick<TourBernabeuContent, 'metaTitle' | 'metaDescription'>;
}

export default function SEOHead({ data }: SEOHeadProps) {
  return (
    <Head>
      <title>{data.metaTitle}</title>
      <meta name="description" content={data.metaDescription} />
      <meta property="og:title" content={data.metaTitle} />
      <meta property="og:description" content={data.metaDescription} />
      <meta name="twitter:title" content={data.metaTitle} />
      <meta name="twitter:description" content={data.metaDescription} />
    </Head>
  );
}
