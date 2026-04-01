import React from 'react';
import { TourBernabeuContent } from '@/lib/types';

interface ScheduleSectionProps {
  content: TourBernabeuContent;
}

const ScheduleSection: React.FC<ScheduleSectionProps> = ({ content }) => {
  return (
    <section className="schedule-section" style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '30px', textAlign: 'center' }}>Opening Hours</h2>
      <div
        style={{
          backgroundColor: '#f0f0f0',
          padding: '30px',
          borderRadius: '8px',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '1.2rem', color: '#333', whiteSpace: 'pre-line' }}>
          {content.openingHours}
        </p>
      </div>
    </section>
  );
};

export default ScheduleSection;
