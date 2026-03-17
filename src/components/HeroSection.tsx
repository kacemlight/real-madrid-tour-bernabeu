import Image from 'next/image';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

export default function HeroSection({ title, subtitle, imageUrl }: HeroSectionProps) {
  return (
    <section className="relative w-full h-96 overflow-hidden bg-rm-black">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage: `url('${imageUrl}')`,
        }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl text-gray-200">{subtitle}</p>
      </div>
    </section>
  );
}
