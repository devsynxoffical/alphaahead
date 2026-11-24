import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { RICH_LANDINGS } from '../content/richLandings';
import CtaBanner from '../components/seo/CtaBanner';
import './AboutPage.css';

/** Hub for industry pages (structure plan 24 Nov 2026). */
const IndustriesPage: React.FC = () => {
  const industries = RICH_LANDINGS.filter(r => r.industry);
  return (
    <>
      <section className="about-hero">
        <div className="aa-container about-hero__inner">
          <p className="aa-eyebrow" style={{ color: '#ffb48c' }}>Industries</p>
          <h1>Virtual Assistants by Industry</h1>
          <p className="about-hero__lead">
            Every industry has its own tools, rules and busy seasons. These pages explain what a virtual assistant does in each one,
            what stays with your licensed or senior team, and how we set the role up.
          </p>
        </div>
      </section>
      <section className="aa-section">
        <div className="aa-container aa-grid">
          {industries.map((r, i) => (
            <Link key={r.slug} to={`/${r.slug}`} className={`aa-card reveal reveal-d${i % 4}`}>
              <img src={r.hero.image} alt={r.hero.imageAlt} width={400} height={220} loading="lazy" style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 12, marginBottom: '1rem' }} />
              <h2 className="aa-card__title">{r.serviceName}</h2>
              <p className="aa-card__text">{r.metaDescription}</p>
              <span className="aa-card__link">Learn more <FaArrowRight aria-hidden="true" /></span>
            </Link>
          ))}
        </div>
      </section>
      <section className="aa-section aa-section--soft">
        <div className="aa-container">
          <div className="aa-head aa-center">
            <h2 className="aa-h2">Real estate and medical practices</h2>
            <p className="aa-lead">
              Our sister brands specialize in these industries: real estate teams are served by{' '}
              <a className="about-link" href="https://zingoassist.us/">Zingo Assist</a>, and medical practices by{' '}
              <a className="about-link" href="https://alphamediassist.com/">Alpha Medi Assist</a>. For other businesses, see our{' '}
              <Link className="about-link" to="/virtual-assistant">virtual assistant services</Link>.
            </p>
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
};

export default IndustriesPage;
