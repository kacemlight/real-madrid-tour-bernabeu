import React from 'react';
import { TourBernabeuContent } from '@/lib/types';

interface PricingCTAProps {
  content: TourBernabeuContent;
}

const PricingCTA: React.FC<PricingCTAProps> = ({ content }) => {
  return (
    <section className="pricing-cta-section" style={{ padding: '60px 20px', backgroundColor: '#003399', color: '#fff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '30px' }}>Book Your Tour</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            marginBottom: '40px',
          }}
        >
          <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '20px', borderRadius: '8px' }}>
            <h3>Adult Ticket</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: '10px 0' }}>
              €{content.ticketPriceAdult.toFixed(2)}
            </p>
          </div>
          <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '20px', borderRadius: '8px' }}>
            <h3>Child Ticket</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: '10px 0' }}>
              €{content.ticketPriceChild.toFixed(2)}
            </p>
          </div>
        </div>
        <a
          href={content.ticketCtaUrl}
          style={{
            display: 'inline-block',
            padding: '15px 40px',
            backgroundColor: '#fff',
            color: '#003399',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            cursor: 'pointer',
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          {content.ticketCtaLabel}
        </a>
      </div>
    </section>
  );
};

export default PricingCTA;
