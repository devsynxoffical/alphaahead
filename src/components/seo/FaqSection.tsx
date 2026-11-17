import React from 'react';
import { Faq } from '../../content/types';
import RichText from './RichText';

/** Visible FAQ list. Uses <details> so answers are in the HTML (crawlable) but collapsible. */
const FaqSection: React.FC<{ faqs: Faq[]; title?: string }> = ({ faqs, title = 'Frequently Asked Questions' }) => {
  if (!faqs.length) return null;
  return (
    <section style={{ background: '#fff', padding: '3.5rem 1.25rem' }} aria-labelledby="faq-heading">
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <h2 id="faq-heading" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#222', marginBottom: '1.5rem', textAlign: 'center' }}>
          {title}
        </h2>
        {faqs.map((f, i) => (
          <details
            key={i}
            open={i === 0}
            style={{ border: '1px solid #eee', borderRadius: 10, padding: '1rem 1.25rem', marginBottom: '0.75rem', background: '#fafafa' }}
          >
            <summary style={{ cursor: 'pointer', fontWeight: 700, fontSize: '1.05rem', color: '#222' }}>
              <h3 style={{ display: 'inline', fontSize: 'inherit', margin: 0 }}>{f.q}</h3>
            </summary>
            <p style={{ marginTop: '0.75rem', lineHeight: 1.7, color: '#555' }}>
              <RichText text={f.a} />
            </p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
