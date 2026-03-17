'use client';

import { useState } from 'react';

interface GalleryImage {
  _path: string;
  alt: string;
}

interface TourGalleryProps {
  images: GalleryImage[];
}

export default function TourGallery({ images }: TourGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative h-64 bg-gray-200 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setSelectedImage(index)}
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${image._path}')` }}
              />
            </div>
          ))}
        </div>

        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-96">
              <button
                className="absolute top-4 right-4 text-white text-2xl z-10"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
              <div
                className="w-full h-96 bg-cover bg-center"
                style={{ backgroundImage: `url('${images[selectedImage]._path}')` }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
