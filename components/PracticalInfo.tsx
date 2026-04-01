'use client';

import Link from 'next/link';
import { TourBernabeuContent } from '@/types/TourBernabeuContent';

interface PracticalInfoProps {
  openingHours: TourBernabeuContent['openingHours'];
  ticketPriceAdult: TourBernabeuContent['ticketPriceAdult'];
  ticketPriceChild: TourBernabeuContent['ticketPriceChild'];
  address: TourBernabeuContent['address'];
  mapEmbedUrl: TourBernabeuContent['mapEmbedUrl'];
  bookUrl: string;
}

export default function PracticalInfo({
  openingHours,
  ticketPriceAdult,
  ticketPriceChild,
  address,
  mapEmbedUrl,
  bookUrl,
}: PracticalInfoProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: '#00529F' }}>
          Practical Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="border-l-4 pl-6" style={{ borderColor: '#FFD700' }}>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#00529F' }}>
                Opening Hours
              </h3>
              <p className="text-gray-700 text-lg">{openingHours}</p>
            </div>
            <div className="border-l-4 pl-6" style={{ borderColor: '#FFD700' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#00529F' }}>
                Ticket Prices
              </h3>
              <div className="space-y-2">
                <p className="text-gray-700 text-lg">
                  <strong>Adult:</strong> {ticketPriceAdult}
                </p>
                <p className="text-gray-700 text-lg">
                  <strong>Child:</strong> {ticketPriceChild}
                </p>
              </div>
            </div>
            <div className="border-l-4 pl-6" style={{ borderColor: '#FFD700' }}>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#00529F' }}>
                Address
              </h3>
              <p className="text-gray-700 text-lg">{address}</p>
            </div>
            <Link
              href={bookUrl}
              className="inline-block px-8 py-3 mt-4 font-semibold rounded text-white transition-colors hover:opacity-90"
              style={{ backgroundColor: '#00529F' }}
            >
              Book Your Tour
            </Link>
          </div>
          <div className="rounded-lg overflow-hidden h-96 md:h-full">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Stadium Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}