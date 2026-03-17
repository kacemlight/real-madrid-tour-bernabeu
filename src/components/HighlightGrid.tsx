/**
 * HighlightGrid Component
 * Grid of highlight cards showcasing key features
 */

import Image from 'next/image';
import { HighlightCard } from '@/types';

interface HighlightGridProps {
  cards: HighlightCard[];
}

export default function HighlightGrid({ cards }: HighlightGridProps) {
  return (
    <section className="py-16 md:py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Card Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={card.cardImage.url}
                  alt={card.cardImage.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-3">
                  {card.cardTitle}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {card.cardDescription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
