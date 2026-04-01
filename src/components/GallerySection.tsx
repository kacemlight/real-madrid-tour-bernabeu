import { TourBernabeuContent } from '@/types/tour';

interface GallerySectionProps {
  data: Pick<TourBernabeuContent, 'galleryImages'>;
}

export default function GallerySection({ data }: GallerySectionProps) {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.galleryImages.map((image, idx) => (
            <img
              key={idx}
              src={image}
              alt={`Gallery image ${idx + 1}`}
              className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-lg transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
