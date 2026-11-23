import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import { OTHER_SERVICES } from '../seo/services';
import { SERVICE_SUMMARIES } from '../content/serviceSummaries';
import { SERVICE_FAQS } from '../seo/faqs';
import { SERVICE_ICONS } from '../components/seo/serviceIcons';
import FaqSection from '../components/seo/FaqSection';
import LeadSection from '../components/lead/LeadSection';
import './AboutPage.css';
import './OtherServicesPage.css';

/** One page for the digital and IT services that sit outside the core virtual assistant offer. */
const OtherServicesPage: React.FC = () => (
  <>
    <section className="about-hero">
      <div className="aa-container about-hero__inner">
        <p className="aa-eyebrow" style={{ color: '#ffb48c' }}>Other services</p>
        <h1>Digital, Design and IT Support Services</h1>
        <p className="about-hero__lead">
          Alongside our <Link to="/virtual-assistant" style={{ color: '#ffb48c' }}>virtual assistant</Link> teams, Alpha Ahead runs SEO, web
          development, digital marketing, graphic design, video editing and remote IT support for existing and new clients. Each service
          is delivered by our own team in Islamabad and managed from our US and Dubai offices.
        </p>
        <nav className="os-jump" aria-label="Services on this page">
          {OTHER_SERVICES.map(s => <a key={s.id} href={`#${s.id}`}>{s.name}</a>)}
        </nav>
      </div>
    </section>

    {OTHER_SERVICES.map((s, i) => {
      const sum = SERVICE_SUMMARIES[s.legacyPath];
      return (
        <section key={s.id} id={s.id} className={`aa-section os-svc${i % 2 ? ' aa-section--soft' : ''}`}>
          <div className="aa-container os-svc__grid">
            <div>
              <span className="aa-icon" aria-hidden="true">{SERVICE_ICONS[s.legacyPath]}</span>
              <h2 className="aa-h2">{s.name}</h2>
              <p className="aa-lead">{sum.definition}</p>
              <p className="os-svc__best"><strong>Best for:</strong> {sum.bestFor.join(', ')}.</p>
            </div>
            <div className="aa-card os-svc__card">
              <h3 className="aa-card__title">What is included</h3>
              <ul className="about-list">
                {sum.tasks.map(t => <li key={t}><FaCheckCircle aria-hidden="true" /> <span>{t}</span></li>)}
              </ul>
              <a className="aa-btn aa-btn--primary os-svc__cta" href="#quote">Get a quote</a>
            </div>
          </div>
        </section>
      );
    })}

    <FaqSection faqs={SERVICE_FAQS['/other-services']} title="Other services: FAQs" />
    <div id="quote">
      <LeadSection service="Other services" placement="other-services" heading="Tell us what you need" />
    </div>
  </>
);

export default OtherServicesPage;
