import React from 'react';
import { TourBernabeuContent } from '@/lib/types';

interface HeroSectionProps {
  content: TourBernabeuContent;
}

const HeroSection: React.FC<HeroSectionProps> = ({ content }) => {
  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url('${content.heroImageUrl}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        textAlign: 'center',
      }}
    >
      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '40px' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>{content.pageTitle}</h1>
        <p style={{ fontSize: '1.5rem' }}>{content.heroSubtitle}</p>
      </div>
    </section>
  );
};

export default HeroSection;
