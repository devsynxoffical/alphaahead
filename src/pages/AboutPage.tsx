import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhoneAlt, FaCheckCircle } from 'react-icons/fa';
import { OFFICES } from '../seo/site';
import { BRAND_LOGOS } from '../content/logos';
import CtaBanner from '../components/seo/CtaBanner';
import FaqSection from '../components/seo/FaqSection';
import { SERVICE_FAQS } from '../seo/faqs';
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

const CORE_SERVICES: [string, string][] = [
  ['Executive virtual assistant', '/business-assistant'],
  ['Virtual assistant for small business', '/virtual-assistant'],
  ['Personal virtual assistant', '/personal-assistant'],
  ['Bookkeeping virtual assistant', '/bookkeeping-virtual-assistant'],
  ['Data entry virtual assistant', '/data-entry-virtual-assistant'],
  ['Appointment setting', '/appointment-setting'],
  ['B2B cold calling', '/cold-calling'],
  ['Lead generation', '/lead-generation'],
  ['Offshore VA from Pakistan', '/hire-virtual-assistant-pakistan'],
];

const FACTS: [string, string][] = [
  ['Legal name', 'Alpha Ahead LLC'],
  ['Registered in', 'United States (St. Petersburg, Florida)'],
  ['Offices', 'St. Petersburg FL · Dubai UAE · Islamabad Pakistan'],
  ['Founder', 'Shehreyar Khan, Director'],
  ['Working hours', 'US (EST/PST) and UAE business hours'],
  ['What we do', 'Managed virtual assistants, bookkeeping and data entry, appointment setting and B2B cold calling'],
  ['Industries', 'Insurance, startups, coaching, legal and accounting'],
  ['Sister brands', 'Zingo Assist (US real estate) · Alpha Medi Assist (medical)'],
  ['Contact', 'info@alphaaheadllc.com · +1 424-542-7170'],
];

const AboutPage: React.FC = () => {
  return (
    <>
      <section className="about-hero">
        <div className="aa-container about-hero__inner">
          <p className="aa-eyebrow" style={{ color: '#ffb48c' }}>About Alpha Ahead LLC</p>
          <h1>A US-Registered Virtual Assistant Agency With Offices in Florida, Dubai and Islamabad</h1>
          <p className="about-hero__lead">
            Alpha Ahead LLC is registered in St. Petersburg, Florida, has an office in Dubai and runs its assistant team from
            Islamabad, Pakistan. Clients contract with a US company and get a dedicated assistant who works their US or UAE hours.
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
              Our work centres on the people who run small companies: founders and executives who need an{' '}
              <Link to="/business-assistant">executive virtual assistant</Link>, teams that need{' '}
              <Link to="/bookkeeping-virtual-assistant">bookkeeping</Link> or <Link to="/data-entry-virtual-assistant">data entry</Link>{' '}
              support, and sales teams that need <Link to="/appointment-setting">appointment setters</Link> or{' '}
              <Link to="/cold-calling">B2B cold callers</Link>. Specialist markets have their own brands:{' '}
              <a href="https://zingoassist.us/">Zingo Assist</a> for US real estate and{' '}
              <a href="https://alphamediassist.com/">Alpha Medi Assist</a> for medical practices. How we built them is in our{' '}
              <Link to="/case-studies">case studies</Link>.
            </p>
            <h3 className="about-h3">How we work</h3>
            <ul className="about-list">
              <li><FaCheckCircle aria-hidden="true" /> <span><strong>Dedicated people, not a ticket queue.</strong> Each client works with named team members who learn their tools and processes.</span></li>
              <li><FaCheckCircle aria-hidden="true" /> <span><strong>Your hours.</strong> Teams are scheduled on US (EST/PST) or UAE business hours.</span></li>
              <li><FaCheckCircle aria-hidden="true" /> <span><strong>Documented processes.</strong> Onboarding starts with SOPs and a defined task list that grows over time.</span></li>
              <li><FaCheckCircle aria-hidden="true" /> <span><strong>Secure access.</strong> Assistants use their own logins with only the permissions each task needs, so you stay in control.</span></li>
              <li><FaCheckCircle aria-hidden="true" /> <span><strong>A US contract.</strong> You sign with Alpha Ahead LLC and are invoiced by us, not by an individual overseas.</span></li>
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
            {CORE_SERVICES.map(([name, path]) => <Link key={path} to={path}>{name}</Link>)}
          </div>
        </div>
      </section>

      {SERVICE_FAQS['/about'] && <FaqSection faqs={SERVICE_FAQS['/about']} title="About Alpha Ahead: Quick Answers" />}
      <CtaBanner />
    </>
  );
};

export default AboutPage;
