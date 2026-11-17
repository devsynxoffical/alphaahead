import React from 'react';
import { Link } from 'react-router-dom';

const CtaBanner: React.FC<{ heading?: string; text?: string }> = ({
  heading = 'Ready to get more done with a dedicated remote team?',
  text = 'Tell us what you need and get a free consultation and quote. Teams available on US and UAE business hours.',
}) => (
  <section className="aa-section" style={{ paddingTop: 0 }}>
    <div className="aa-container">
      <div className="aa-cta reveal">
        <div>
          <h2 className="aa-cta__title">{heading}</h2>
          <p className="aa-cta__text">{text}</p>
        </div>
        <div className="aa-cta__actions">
          <Link to="/contact" className="aa-btn aa-btn--white">
            Get a Free Consultation <span className="aa-arrow" aria-hidden="true">→</span>
          </Link>
          <a href="tel:+14245427170" className="aa-btn aa-btn--ghost">Call +1 424-542-7170</a>
        </div>
      </div>
    </div>
  </section>
);

export default CtaBanner;
