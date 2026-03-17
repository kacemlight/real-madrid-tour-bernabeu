import Image from 'next/image';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  heroImage: {
    url: string;
    alt: string;
  };
}

export default function HeroSection({ title, subtitle, heroImage }: HeroSectionProps) {
  return (
    <section className="relative w-full h-96 md:h-screen">
      <Image
        src={heroImage.url}
        alt={heroImage.alt}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center">
        <h1 className="text-5xl md:text-6xl font-bold text-rm-white text-center mb-6">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-rm-gold text-center max-w-2xl">
          {subtitle}
        </p>
      </div>
    </section>
  );
}