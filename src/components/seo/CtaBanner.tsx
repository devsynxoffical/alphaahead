import React from 'react';
import { Link } from 'react-router-dom';

const CtaBanner: React.FC<{ heading?: string; text?: string }> = ({
  heading = 'Ready to get more done with a dedicated remote team?',
  text = 'Tell us what you need and get a free consultation and quote. Teams available on US and UAE business hours.',
}) => (
  <section style={{ background: '#DC520E', color: '#fff', padding: '3.5rem 1.25rem', textAlign: 'center' }}>
    <div style={{ maxWidth: 800, margin: '0 auto' }}>
      <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.1rem)', marginBottom: '0.75rem' }}>{heading}</h2>
      <p style={{ fontSize: '1.1rem', lineHeight: 1.6, opacity: 0.95, marginBottom: '1.5rem' }}>{text}</p>
      <Link
        to="/contact"
        style={{ display: 'inline-block', background: '#fff', color: '#DC520E', padding: '0.9rem 2rem', borderRadius: 8, fontWeight: 700, textDecoration: 'none' }}
      >
        Get a Free Consultation
      </Link>
    </div>
  </section>
);

export default CtaBanner;
