import { TourBernabeuContent } from '@/types/tour';

interface IntroSectionProps {
  data: Pick<TourBernabeuContent, 'introductionText'>;
}

export default function IntroSection({ data }: IntroSectionProps) {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div
          className="prose prose-lg"
          dangerouslySetInnerHTML={{ __html: data.introductionText }}
        />
      </div>
    </section>
  );
}
