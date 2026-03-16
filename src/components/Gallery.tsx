'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/Gallery.module.css';

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface GalleryProps {
  galleryImages: GalleryImage[];
}

export default function Gallery({ galleryImages }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className={`${styles.gallery} section-padding container`}>
      <h2 className={styles.galleryTitle}>Galeria del Bernabéu</h2>
      <div className={styles.galleryGrid}>
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className={styles.galleryItem}
            onClick={() => setSelectedImage(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setSelectedImage(index);
              }
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className={styles.galleryImage}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {image.caption && <p className={styles.caption}>{image.caption}</p>}
          </div>
        ))}
      </div>

      {selectedImage !== null && (
        <div className={styles.lightbox} onClick={() => setSelectedImage(null)}>
          <div className={styles.lightboxContent}>
            <button
              className={styles.closeButton}
              onClick={() => setSelectedImage(null)}
              aria-label="Close lightbox"
            >
              &times;
            </button>
            <Image
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              width={800}
              height={600}
              className={styles.lightboxImage}
            />
          </div>
        </div>
      )}
    </section>
  );
}
