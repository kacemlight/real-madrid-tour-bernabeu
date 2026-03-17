import React from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImageUrl: string;
  ctaButtonText: string;
  ctaButtonUrl: string;
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImageUrl,
  ctaButtonText,
  ctaButtonUrl,
}: HeroSectionProps) {
  return (
    <section className="relative w-full h-screen min-h-96 bg-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImageUrl}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white text-center mb-4 drop-shadow-lg">
          {title}
        </h1>
        <p className="text-xl sm:text-2xl text-gray-200 text-center mb-8 drop-shadow-md max-w-2xl">
          {subtitle}
        </p>
        <a
          href={ctaButtonUrl}
          className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300"
        >
          {ctaButtonText}
        </a>
      </div>
    </section>
  );
}
