import { GalleryProps } from '@/lib/types';

export function Gallery({ galleryImages }: GalleryProps) {
  return (
    <section
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white"
      aria-label="Gallery Section"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
          Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('${image}')`
                }}
                role="img"
                aria-label={`Gallery image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
