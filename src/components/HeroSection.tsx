import { TourBernabeuContent } from '@/types/tour';

interface HeroSectionProps {
  data: Pick<TourBernabeuContent, 'pageTitle' | 'heroSubtitle' | 'heroImageUrl'>;
}

export default function HeroSection({ data }: HeroSectionProps) {
  return (
    <div className="relative w-full h-96 bg-gray-900 overflow-hidden">
      <img
        src={data.heroImageUrl}
        alt={data.pageTitle}
        className="w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-40">
        <h1 className="text-5xl font-bold text-white mb-4">{data.pageTitle}</h1>
        <p className="text-xl text-gray-100">{data.heroSubtitle}</p>
      </div>
    </div>
  );
}
