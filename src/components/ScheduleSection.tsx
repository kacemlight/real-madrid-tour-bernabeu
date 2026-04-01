import { TourBernabeuContent } from '@/types/tour';

interface ScheduleSectionProps {
  data: Pick<TourBernabeuContent, 'openingHours'>;
}

export default function ScheduleSection({ data }: ScheduleSectionProps) {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Opening Hours</h2>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
          <p className="text-lg text-gray-800">{data.openingHours}</p>
        </div>
      </div>
    </section>
  );
}
