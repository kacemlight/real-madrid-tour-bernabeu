/**
 * HeroBanner Component
 * Full-width hero section with background image, headline, subheadline, and CTA
 */

import Image from 'next/image';
import { Image as ImageType } from '@/types';

interface HeroBannerProps {
  headline: string;
  subheadline: string;
  ctaLabel: string;
  ctaUrl: string;
  image: ImageType;
}

export default function HeroBanner({
  headline,
  subheadline,
  ctaLabel,
  ctaUrl,
  image,
}: HeroBannerProps) {
  return (
    <section className="relative w-full h-screen md:h-[600px] overflow-hidden">
      {/* Background Image */}
      <Image
        src={image.url}
        alt={image.alt}
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 max-w-4xl">
          {headline}
        </h1>
        <p className="text-lg md:text-2xl text-gray-100 mb-8 max-w-2xl">
          {subheadline}
        </p>
        <a
          href={ctaUrl}
          className="px-8 py-4 bg-rm-gold hover:bg-yellow-500 text-black font-bold rounded-lg transition-colors duration-200"
        >
          {ctaLabel}
        </a>
      </div>
    </section>
  );
}
