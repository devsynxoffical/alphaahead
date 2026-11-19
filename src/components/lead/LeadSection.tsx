import React from 'react';
import { FaCheckCircle, FaPhoneAlt, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import LeadForm from './LeadForm';

interface Props {
  service?: string;
  placement: string;
  heading?: string;
  points?: string[];
}

/** Two-column conversion section: reasons + direct contact on the left, short lead form on the right. */
const LeadSection: React.FC<Props> = ({
  service,
  placement,
  heading = 'Talk to us about your team',
  points = [
    'Free consultation, no obligation',
    'Dedicated people who work your US or UAE hours',
    'Start with a small scope and scale when it works',
    'US-registered company with offices in Florida, Dubai and Islamabad',
  ],
}) => (
  <section className="aa-section aa-section--navy" id="get-started" aria-labelledby={`lead-${placement}`}>
    <div className="aa-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(2rem, 5vw, 3.5rem)', alignItems: 'center' }}>
      <div className="reveal">
        <p className="aa-eyebrow">Get started</p>
        <h2 id={`lead-${placement}`} className="aa-h2">{heading}</h2>
        <ul style={{ listStyle: 'none', padding: 0, margin: '1.25rem 0 1.75rem', display: 'grid', gap: '.8rem' }}>
          {points.map(p => (
            <li key={p} style={{ display: 'flex', gap: '.65rem', alignItems: 'flex-start', color: 'rgba(255,255,255,.88)', lineHeight: 1.6 }}>
              <FaCheckCircle aria-hidden="true" style={{ color: '#4ade80', marginTop: '.3rem', flexShrink: 0 }} /> {p}
            </li>
          ))}
        </ul>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.75rem' }}>
          <a href="tel:+14245427170" className="aa-btn aa-btn--ghost"><FaPhoneAlt aria-hidden="true" /> +1 424-542-7170</a>
          <a href="https://wa.me/971505606877" target="_blank" rel="noopener noreferrer" className="aa-btn aa-btn--ghost"><FaWhatsapp aria-hidden="true" /> WhatsApp</a>
          <a href="mailto:info@alphaaheadllc.com" className="aa-btn aa-btn--ghost"><FaEnvelope aria-hidden="true" /> Email</a>
        </div>
      </div>
      <div className="reveal reveal-d1">
        <LeadForm service={service} placement={placement} />
      </div>
    </div>
  </section>
);

export default LeadSection;
