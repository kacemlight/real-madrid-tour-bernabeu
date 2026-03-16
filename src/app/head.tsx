import { getContentFragment } from '@/lib/aem';

export async function Head() {
  const contentData = await getContentFragment();

  return (
    <>
      <title>{contentData.metaTitle}</title>
      <meta name="description" content={contentData.metaDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="og:title" content={contentData.metaTitle} />
      <meta name="og:description" content={contentData.metaDescription} />
      <meta name="og:type" content="website" />
    </>
  );
}
