import Image from 'next/image'
import { GalleryImage } from '@/types/tour'
interface Props { images: GalleryImage[] }
export default function TourGallery({ images }: Props) {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div key={i} className="relative h-72 rounded-xl overflow-hidden">
              <Image src={img.path} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-300" unoptimized />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}