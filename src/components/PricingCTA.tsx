import { TourBernabeuContent } from '@/types/tour';

interface PricingCTAProps {
  data: Pick<TourBernabeuContent, 'ticketPriceAdult' | 'ticketPriceChild' | 'ticketCtaLabel' | 'ticketCtaUrl'>;
}

export default function PricingCTA({ data }: PricingCTAProps) {
  return (
    <section className="py-16 px-6 bg-gray-900 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Tour Pricing</h2>
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <p className="text-sm text-gray-300 mb-2">Adult</p>
            <p className="text-4xl font-bold">${data.ticketPriceAdult.toFixed(2)}</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <p className="text-sm text-gray-300 mb-2">Child</p>
            <p className="text-4xl font-bold">${data.ticketPriceChild.toFixed(2)}</p>
          </div>
        </div>
        <a
          href={data.ticketCtaUrl}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition"
        >
          {data.ticketCtaLabel}
        </a>
      </div>
    </section>
  );
}
