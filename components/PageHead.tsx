import Head from 'next/head';
import { PageMeta } from '@/lib/types';

interface PageHeadProps extends PageMeta {}

export function PageHead({ metaTitle, metaDescription }: PageHeadProps) {
  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
    </Head>
  );
}
