import React, { useState } from 'react';
import Image from 'next/image';

interface GalleryItem {
  id: string;
  title: string;
  imageUrl: string;
  alt: string;
}

interface TourGalleryProps {
  gallery: GalleryItem[];
}

export default function TourGallery({ gallery }: TourGalleryProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedItem = gallery.find((item) => item.id === selectedId);

  return (
    <section className="py-16 sm:py-24 bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Tour Gallery
          </h2>
          <p className="text-xl text-gray-300">
            Explore stunning visuals from our stadium
          </p>
        </div>

        {/* Lightbox Modal */}
        {selectedItem && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setSelectedId(null)}
          >
            <div className="relative w-full max-w-4xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
              <button
                className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 transition-colors z-10"
                onClick={() => setSelectedId(null)}
                aria-label="Close gallery"
              >
                ×
              </button>
              <div className="relative h-96 sm:h-[60vh]">
                <Image
                  src={selectedItem.imageUrl}
                  alt={selectedItem.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-white text-center mt-4">{selectedItem.title}</p>
            </div>
          </div>
        )}

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className="relative group h-64 overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Image
                src={item.imageUrl}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  🔍
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-white font-semibold">{item.title}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
