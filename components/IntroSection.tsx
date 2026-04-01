import React from 'react';
import { TourBernabeuContent } from '@/lib/types';

interface IntroSectionProps {
  content: TourBernabeuContent;
}

const IntroSection: React.FC<IntroSectionProps> = ({ content }) => {
  return (
    <section className="intro-section" style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '30px', textAlign: 'center' }}>About the Tour</h2>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333' }}>
        {content.introductionText}
      </p>
    </section>
  );
};

export default IntroSection;
