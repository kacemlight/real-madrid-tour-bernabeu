interface GalleryImage {
  _path: string;
  description: string;
}

interface GalleryProps {
  images: GalleryImage[];
}

export default function Gallery({ images }: GalleryProps) {
  if (!images?.length) return null;

  return (
    <section id="gallery" className="bg-gray-50 py-16" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="gallery-heading" className="text-3xl font-bold text-gray-900 text-center mb-12">Galerie</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <div key={idx} className="rounded-xl overflow-hidden aspect-square">
              <img
                src={img._path}
                alt={img.description || `Galerie image ${idx + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
