'use client';

import { TourBernabeuContent } from '@/types/TourBernabeuContent';

interface HighlightsGridProps {
  highlights: TourBernabeuContent['highlights'];
}

const iconMap: { [key: string]: string } = {
  trophy: '🏆',
  pitch: '⚽',
  '360': '🔄',
};

export default function HighlightsGrid({ highlights }: HighlightsGridProps) {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#00529F' }}>
          Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <div className="text-5xl mb-4">
                {iconMap[highlight.icon] || '✨'}
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: '#00529F' }}>
                {highlight.title}
              </h3>
              <p className="text-gray-700">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}