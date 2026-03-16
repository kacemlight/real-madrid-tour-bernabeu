import { HeroSectionProps } from '@/lib/types';

export function HeroSection({
  heroImageRef,
  heroImageAlt,
  pageTitle,
  pageSubtitle,
  ctaLabel,
  ctaUrl
}: HeroSectionProps) {
  return (
    <section
      className="relative h-96 md:h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero Section"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${heroImageRef}')`
        }}
        role="img"
        aria-label={heroImageAlt}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          {pageTitle}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200">
          {pageSubtitle}
        </p>
        <a
          href={ctaUrl}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200"
          aria-label={ctaLabel}
        >
          {ctaLabel}
        </a>
      </div>
    </section>
  );
}
