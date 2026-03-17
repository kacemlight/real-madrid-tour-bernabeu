interface SEOHeadProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function SEOHead({ title, description, imageUrl }: SEOHeadProps) {
  return (
    <head>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </head>
  );
}
