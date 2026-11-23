import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhoneAlt, FaCheckCircle } from 'react-icons/fa';
import { OFFICES } from '../seo/site';
import { SERVICES } from '../seo/services';
import { BRAND_LOGOS } from '../content/logos';
import CtaBanner from '../components/seo/CtaBanner';
import './AboutPage.css';

const LEADERSHIP = [
  { name: 'Shehreyar Khan', role: 'Director and Founder' },
  { name: 'Ehtisham Shoukat', role: 'Enterprise Portfolio Manager / Co-Founder' },
  { name: 'Nimra Said Khan', role: 'Operations Manager' },
  { name: 'Dr. Sanna Urooj', role: 'Information Officer' },
  { name: 'David Bowman', role: 'Sales Manager' },
  { name: 'Joshua Walton', role: 'Client Relationship Manager' },
  { name: 'Habib Faqeri', role: 'Growth / Client Acquisition Manager' },
];

const FACTS: [string, string][] = [
  ['Legal name', 'Alpha Ahead LLC'],
  ['Registered in', 'United States (St. Petersburg, Florida)'],
  ['Offices', 'St. Petersburg FL · Dubai UAE · Islamabad Pakistan'],
  ['Founder', 'Shehreyar Khan, Director'],
  ['Working hours', 'US (EST/PST) and UAE business hours'],
  ['Services', '14 outsourcing & digital services'],
  ['Contact', 'info@alphaaheadllc.com · +1 424-542-7170'],
];

const AboutPage: React.FC = () => {
  return (
    <>
      <section className="about-hero">
        <div className="aa-container about-hero__inner">
          <p className="aa-eyebrow" style={{ color: '#ffb48c' }}>About Alpha Ahead LLC</p>
          <h1>A US-registered outsourcing &amp; digital agency for growing US and UAE businesses</h1>
          <p className="about-hero__lead">
            Alpha Ahead LLC provides dedicated remote teams (virtual assistants, appointment setters, cold callers, bookkeeping
            assistants and lead generation specialists) plus SEO, web development and digital marketing. The company is registered in St. Petersburg,
            Florida, has an office in Dubai, and runs its delivery team from Islamabad, Pakistan.
          </p>
        </div>
      </section>

      <section className="aa-section">
        <div className="aa-container about-grid">
          <div className="reveal">
            <h2 className="aa-h2">Who we are</h2>
            <p className="aa-lead">
              Alpha Ahead LLC was founded by Shehreyar Khan as a US-registered company in St. Petersburg, Florida, with a second
              office in Dubai and its delivery team in Islamabad, Pakistan. That setup lets us give US and UAE businesses
              dedicated remote staff who work their business hours, managed by a company they can contract with locally.
            </p>
            <p className="aa-lead" style={{ marginTop: '1rem' }}>
              We staff businesses in any industry with <Link to="/virtual-assistant">virtual assistants</Link>,{' '}
              <Link to="/appointment-setting">appointment setters</Link>, <Link to="/cold-calling">cold callers</Link>,{' '}
              <Link to="/bookkeeping-virtual-assistant">bookkeeping assistants</Link> and{' '}
              <Link to="/lead-generation">lead generation</Link> teams. Alongside staffing, we run SEO, web development and digital
              marketing. Our real estate division, <a href="https://zingoassist.us/">Zingo Assist</a>, serves US agents and
              investors; it is documented with Alpha Medi Assist and Learn with Alpha in our <Link to="/case-studies">case studies</Link>.
            </p>
            <h3 className="about-h3">How we work</h3>
            <ul className="about-list">
              <li><FaCheckCircle aria-hidden="true" /> <span><strong>Dedicated people, not a ticket queue.</strong> Each client works with named team members who learn their tools and processes.</span></li>
              <li><FaCheckCircle aria-hidden="true" /> <span><strong>Your hours.</strong> Teams are scheduled on US (EST/PST) or UAE business hours.</span></li>
              <li><FaCheckCircle aria-hidden="true" /> <span><strong>Documented processes.</strong> Onboarding starts with SOPs and a defined task list that grows over time.</span></li>
              <li><FaCheckCircle aria-hidden="true" /> <span><strong>One partner for operations and growth.</strong> Staffing and <Link to="/other-services#digital-marketing">marketing</Link>, <Link to="/other-services#seo">SEO</Link> and <Link to="/other-services#web-development">web</Link> under one roof.</span></li>
            </ul>
          </div>
          <aside className="about-facts reveal reveal-d1" aria-label="Company facts">
            <h2>Company facts</h2>
            <dl>
              {FACTS.map(([k, v]) => (
                <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <section className="aa-section aa-section--soft">
        <div className="aa-container">
          <div className="aa-head aa-center reveal">
            <p className="aa-eyebrow">Leadership</p>
            <h2 className="aa-h2">The people behind Alpha Ahead</h2>
            <p className="aa-lead">Meet the full team, with photos, on our <Link to="/team" className="about-link">team page</Link>.</p>
          </div>
          <div className="aa-grid about-people">
            {LEADERSHIP.map((p, i) => (
              <div key={p.name} className={`aa-card reveal reveal-d${i % 4}`}>
                <span className="about-avatar" aria-hidden="true">{p.name.replace('Dr. ', '').split(' ').map(n => n[0]).slice(0, 2).join('')}</span>
                <span className="aa-card__title">{p.name}</span>
                <span className="aa-card__text" style={{ marginBottom: 0 }}>{p.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="aa-section">
        <div className="aa-container">
          <div className="aa-head aa-center reveal">
            <p className="aa-eyebrow">Offices</p>
            <h2 className="aa-h2">Where we work</h2>
          </div>
          <div className="aa-grid">
            {OFFICES.map((o, i) => (
              <address key={o.id} className={`aa-card reveal reveal-d${i}`} style={{ fontStyle: 'normal' }}>
                <span className="aa-icon" aria-hidden="true"><FaMapMarkerAlt /></span>
                <span className="aa-card__title">{o.city}, {o.countryName}</span>
                <span className="aa-card__text">{o.street}, {o.city}{o.region ? `, ${o.region}` : ''} {o.postalCode || ''}</span>
                <a className="aa-card__link" href={`tel:${o.phone.replace(/[^+\d]/g, '')}`}><FaPhoneAlt aria-hidden="true" /> {o.phone}</a>
              </address>
            ))}
          </div>
        </div>
      </section>

      <section className="aa-section aa-section--soft">
        <div className="aa-container">
          <div className="aa-head aa-center reveal">
            <p className="aa-eyebrow">Brands &amp; clients</p>
            <h2 className="aa-h2">Brands we have built and supported</h2>
            <p className="aa-lead">
              Including our own ventures, documented in our <Link to="/case-studies" className="about-link">case studies</Link>.
            </p>
          </div>
          <div className="about-logos">
            {BRAND_LOGOS.map(l => (
              <img key={l.src} src={l.src} alt={`${l.name} logo`} loading="lazy" width={150} height={64} className="aa-logo" />
            ))}
          </div>
        </div>
      </section>

      <section className="aa-section">
        <div className="aa-container">
          <div className="aa-head aa-center reveal">
            <p className="aa-eyebrow">What we do</p>
            <h2 className="aa-h2">Our services</h2>
          </div>
          <div className="about-services">
            {SERVICES.map(s => <Link key={s.path} to={s.path}>{s.name}</Link>)}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
};

export default AboutPage;
