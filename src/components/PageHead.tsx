/**
 * PageHead Component
 * Manages page metadata, title, and meta description
 */

import Head from 'next/head';

interface PageHeadProps {
  title: string;
  description: string;
}

export default function PageHead({ title, description }: PageHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
