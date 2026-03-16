interface HeroBannerProps {
  banner: {
    title: string;
    subtitle: string;
    backgroundImage?: { _path: string };
    ctaText: string;
    ctaUrl: string;
  };
}

export default function HeroBanner({ banner }: HeroBannerProps) {
  const bgStyle = banner.backgroundImage?._path
    ? { backgroundImage: `url(${banner.backgroundImage._path})` }
    : {};

  return (
    <section
      id="hero"
      className="relative min-h-[600px] flex items-center justify-center bg-gray-900 bg-cover bg-center"
      style={bgStyle}
      aria-label={banner.title}
    >
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-lg">
          {banner.title}
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-200">{banner.subtitle}</p>
        <a
          href={banner.ctaUrl}
          className="mt-8 inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 px-8 rounded-full transition-colors focus:outline-none focus:ring-4 focus:ring-yellow-300"
        >
          {banner.ctaText}
        </a>
      </div>
    </section>
  );
}
