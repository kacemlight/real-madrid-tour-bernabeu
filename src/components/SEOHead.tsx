import Head from 'next/head';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords: string;
  image?: string;
  url?: string;
}

export default function SEOHead({
  title,
  description,
  keywords,
  image = 'https://images.unsplash.com/photo-1577223557118-2dc2f88cf0ce?w=1200',
  url = 'https://realmadrid-tour-bernabeu.vercel.app',
}: SEOHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
}