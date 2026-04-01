import React from 'react';
import { TourBernabeuContent } from '@/lib/types';

interface HighlightsSectionProps {
  content: TourBernabeuContent;
}

const HighlightsSection: React.FC<HighlightsSectionProps> = ({ content }) => {
  const highlights = content.tourHighlights?.split('\n').filter(Boolean) || [];

  return (
    <section className="highlights-section" style={{ padding: '60px 20px', backgroundColor: '#f5f5f5' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '30px', textAlign: 'center' }}>Tour Highlights</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {highlights.map((highlight, index) => (
            <li
              key={index}
              style={{
                padding: '15px',
                marginBottom: '10px',
                backgroundColor: '#fff',
                borderLeft: '5px solid #003399',
                fontSize: '1.1rem',
              }}
            >
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HighlightsSection;
