import Image from 'next/image';

interface GalleryImage {
  url: string;
  alt: string;
  caption: string;
}

interface TourGalleryProps {
  images: GalleryImage[];
}

export default function TourGallery({ images }: TourGalleryProps) {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-rm-black mb-12 text-center">
          Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((img, idx) => (
            <div key={idx} className="relative h-64 overflow-hidden rounded-lg shadow-lg">
              <Image
                src={img.url}
                alt={img.alt}
                fill
                className="object-cover hover:scale-110 transition duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <p className="text-rm-white text-sm font-semibold">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}