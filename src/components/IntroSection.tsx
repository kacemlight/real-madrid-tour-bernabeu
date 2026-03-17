/**
 * IntroSection Component
 * Introduction section with title, body text, and accompanying image
 */

import Image from 'next/image';
import { Image as ImageType } from '@/types';

interface IntroSectionProps {
  title: string;
  body: string;
  image: ImageType;
}

export default function IntroSection({ title, body, image }: IntroSectionProps) {
  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              {title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
              {body}
            </p>
          </div>

          {/* Image */}
          <div className="relative h-96 md:h-96 rounded-lg overflow-hidden">
            <Image
              src={image.url}
              alt={image.alt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
