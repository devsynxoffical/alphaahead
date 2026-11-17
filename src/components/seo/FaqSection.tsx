import React from 'react';
import { Faq } from '../../content/types';
import RichText from './RichText';

/** Visible FAQ accordion. Uses <details> so answers are in the HTML (crawlable) but collapsible. */
const FaqSection: React.FC<{ faqs: Faq[]; title?: string }> = ({ faqs, title = 'Frequently Asked Questions' }) => {
  if (!faqs.length) return null;
  return (
    <section className="aa-section" aria-labelledby="faq-heading">
      <div className="aa-container" style={{ maxWidth: 900 }}>
        <div className="aa-head aa-center reveal">
          <p className="aa-eyebrow">FAQ</p>
          <h2 id="faq-heading" className="aa-h2">{title}</h2>
        </div>
        <div className="aa-faq">
          {faqs.map((f, i) => (
            <details key={i} open={i === 0} className="aa-faq__item reveal">
              <summary>
                <h3>{f.q}</h3>
                <span className="aa-faq__icon" aria-hidden="true" />
              </summary>
              <p>
                <RichText text={f.a} />
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
