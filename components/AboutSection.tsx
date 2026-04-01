'use client';

import Image from 'next/image';
import { TourBernabeuContent } from '@/types/TourBernabeuContent';

interface AboutSectionProps {
  title: TourBernabeuContent['sectionTitle'];
  description: TourBernabeuContent['descriptionBody'];
  imageUrl: TourBernabeuContent['descriptionImageUrl'];
}

export default function AboutSection({
  title,
  description,
  imageUrl,
}: AboutSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative h-96 md:h-full rounded-lg overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#00529F' }}>
            {title}
          </h2>
          <div
            className="text-gray-700 text-lg leading-relaxed prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>
    </section>
  );
}