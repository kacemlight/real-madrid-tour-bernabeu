import React from 'react';
import Image from 'next/image';

interface Highlight {
  id: string;
  title: string;
  description: string;
  icon: string;
  imageUrl: string;
}

interface TourHighlightsProps {
  highlights: Highlight[];
}

export default function TourHighlights({ highlights }: TourHighlightsProps) {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            What You'll Experience
          </h2>
          <p className="text-xl text-gray-600">
            Discover the highlights of our exclusive stadium tours
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((highlight) => (
            <div
              key={highlight.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-64 bg-gray-200">
                <Image
                  src={highlight.imageUrl}
                  alt={highlight.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="text-4xl mb-4">{highlight.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
