import Image from 'next/image'
interface HeroProps {
  title: string; subtitle: string; imagePath: string; ctaLabel: string; ctaUrl: string;
}
export default function HeroSection({ title, subtitle, imagePath, ctaLabel, ctaUrl }: HeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="absolute inset-0">
        <Image src={imagePath} alt={title} fill className="object-cover" priority unoptimized />
      </div>
      <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">{title}</h1>
        <p className="text-xl md:text-2xl mb-10 text-gray-200">{subtitle}</p>
        <a href={ctaUrl} className="inline-block bg-yellow-400 text-black font-bold py-4 px-10 rounded-full text-lg hover:bg-yellow-300 transition-colors">
          {ctaLabel}
        </a>
      </div>
    </section>
  )
}