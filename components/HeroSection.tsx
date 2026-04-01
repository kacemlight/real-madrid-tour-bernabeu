'use client';

import Image from 'next/image';
import Link from 'next/link';
import { TourBernabeuContent } from '@/types/TourBernabeuContent';

interface HeroSectionProps {
  title: TourBernabeuContent['heroTitle'];
  subtitle: TourBernabeuContent['heroSubtitle'];
  imageUrl: TourBernabeuContent['heroImageUrl'];
  ctaLabel: TourBernabeuContent['heroCTALabel'];
  ctaUrl: TourBernabeuContent['heroCTAUrl'];
}

export default function HeroSection({
  title,
  subtitle,
  imageUrl,
  ctaLabel,
  ctaUrl,
}: HeroSectionProps) {
  return (
    <section className="relative w-full h-96 md:h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="relative z-10 text-center text-white px-6 md:px-0 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
          {title}
        </h1>
        <p className="text-lg md:text-2xl mb-8 drop-shadow-md">
          {subtitle}
        </p>
        <Link
          href={ctaUrl}
          className="inline-block px-8 py-3 text-white font-semibold rounded transition-colors hover:opacity-90"
          style={{ backgroundColor: '#00529F' }}
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}