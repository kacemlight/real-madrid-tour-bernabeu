import { TourBernabeuContent } from '@/types/tour';

interface HighlightsSectionProps {
  data: Pick<TourBernabeuContent, 'tourHighlights'>;
}

export default function HighlightsSection({ data }: HighlightsSectionProps) {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Tour Highlights</h2>
        <div
          className="prose prose-lg"
          dangerouslySetInnerHTML={{ __html: data.tourHighlights }}
        />
      </div>
    </section>
  );
}
