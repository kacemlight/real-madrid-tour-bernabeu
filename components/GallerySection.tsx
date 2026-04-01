import React from 'react';
import { TourBernabeuContent } from '@/lib/types';

interface GallerySectionProps {
  content: TourBernabeuContent;
}

const GallerySection: React.FC<GallerySectionProps> = ({ content }) => {
  return (
    <section className="gallery-section" style={{ padding: '60px 20px', backgroundColor: '#f5f5f5' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '30px', textAlign: 'center' }}>Photo Gallery</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
          }}
        >
          {content.galleryImages.map((imageUrl, index) => (
            <div key={index} style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
              <img
                src={imageUrl}
                alt={`Gallery image ${index + 1}`}
                style={{ width: '100%', height: '300px', objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
