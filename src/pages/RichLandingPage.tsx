import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaPhoneAlt, FaHeadset, FaCalendarCheck, FaChartLine, FaShieldAlt, FaClock, FaUsers, FaListUl, FaBullseye,
  FaHome, FaDollarSign, FaCheckCircle, FaGlobeAmericas, FaComments, FaFileAlt, FaSearch, FaStar, FaRocket,
  FaTimesCircle, FaArrowRight,
} from 'react-icons/fa';
import { RICH_LANDINGS } from '../content/richLandings';
import { IconKey } from '../content/richLandingTypes';
import { BRAND_LOGOS } from '../content/logos';
import LeadForm from '../components/lead/LeadForm';
import LeadSection from '../components/lead/LeadSection';
import FaqSection from '../components/seo/FaqSection';
import RichText from '../components/seo/RichText';
import NotFound from './NotFound';
import './RichLandingPage.css';

const ICONS: Record<IconKey, React.ReactNode> = {
  phone: <FaPhoneAlt />, headset: <FaHeadset />, calendar: <FaCalendarCheck />, chart: <FaChartLine />, shield: <FaShieldAlt />,
  clock: <FaClock />, users: <FaUsers />, list: <FaListUl />, target: <FaBullseye />, home: <FaHome />, dollar: <FaDollarSign />,
  check: <FaCheckCircle />, globe: <FaGlobeAmericas />, chat: <FaComments />, file: <FaFileAlt />, search: <FaSearch />,
  star: <FaStar />, rocket: <FaRocket />,
};

const RichLandingPage: React.FC = () => {
  const { pathname } = useLocation();
  const page = RICH_LANDINGS.find(p => `/${p.slug}` === pathname.replace(/\/+$/, ''));
  const [tab, setTab] = useState(0);
  if (!page) return <NotFound />;
  const { hero } = page;
  const activeTab = page.tabs.items[Math.min(tab, page.tabs.items.length - 1)];

  return (
    <>
      {/* HERO with lead form above the fold */}
      <section className="rl-hero">
        <div className="aa-container rl-hero__inner">
          <div className="rl-hero__copy">
            <nav aria-label="Breadcrumb" className="rl-crumbs">
              <Link to="/">Home</Link> <span aria-hidden="true">/</span>{' '}
              {page.industry ? <Link to="/industries">Industries</Link> : <Link to="/services">Services</Link>} <span aria-hidden="true">/</span>{' '}
              <span aria-current="page">{page.serviceName}</span>
            </nav>
            <p className="rl-badge">{hero.eyebrow}</p>
            <h1 className="rl-title">{hero.title}</h1>
            <p className="rl-sub">{hero.subtitle}</p>
            <ul className="rl-bullets">
              {hero.bullets.map(b => <li key={b}><FaCheckCircle aria-hidden="true" /> {b}</li>)}
            </ul>
            <div className="rl-hero__ctas">
              <a href="#get-started" className="aa-btn aa-btn--primary">Get a free consultation <span className="aa-arrow" aria-hidden="true">→</span></a>
              <a href="tel:+14245427170" className="aa-btn aa-btn--ghost"><FaPhoneAlt aria-hidden="true" /> +1 424-542-7170</a>
            </div>
          </div>
          <div className="rl-hero__form">
            <LeadForm service={page.serviceName} placement={`${page.slug}-hero`} compact title="Get a free quote" subtitle="Reply within one business day." />
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="rl-trust" aria-label="Brands we have built and supported">
        <div className="aa-container">
          <p className="rl-trust__label">Brands we have built, launched and supported</p>
          <div className="aa-marquee">
            <div className="aa-marquee__track">
              {[...BRAND_LOGOS, ...BRAND_LOGOS].map((l, i) => (
                <img key={`${l.src}-${i}`} src={l.src} alt={i < BRAND_LOGOS.length ? `${l.name} logo` : ''} aria-hidden={i >= BRAND_LOGOS.length ? true : undefined} className="aa-logo" loading="lazy" width={150} height={60} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM → SOLUTION */}
      <section className="aa-section">
        <div className="aa-container rl-split">
          <div className="reveal">
            <p className="aa-eyebrow">The problem</p>
            <h2 className="aa-h2">{page.problem.title}</h2>
            <ul className="rl-problems">
              {page.problem.points.map(p => <li key={p}><FaTimesCircle aria-hidden="true" /> {p}</li>)}
            </ul>
            <p className="aa-eyebrow" style={{ marginTop: '2rem' }}>The fix</p>
            <h3 className="rl-h3">{page.solution.title}</h3>
            {page.solution.paragraphs.map((p, i) => <p key={i} className="rl-p"><RichText text={p} /></p>)}
          </div>
          <figure className="rl-figure reveal reveal-d1">
            <img src={page.solution.image} alt={page.solution.imageAlt} width={560} height={420} loading="lazy" />
          </figure>
        </div>
      </section>

      {/* FEATURES */}
      <section className="aa-section aa-section--soft">
        <div className="aa-container">
          <div className="aa-head aa-center reveal">
            <p className="aa-eyebrow">What you get</p>
            <h2 className="aa-h2">{page.serviceName}: what is included</h2>
          </div>
          <div className="aa-grid">
            {page.features.map((f, i) => (
              <div key={f.title} className={`aa-card aa-card--hover reveal reveal-d${i % 3}`}>
                <span className="aa-icon" aria-hidden="true">{ICONS[f.icon] || <FaCheckCircle />}</span>
                <h3 className="aa-card__title">{f.title}</h3>
                <p className="aa-card__text" style={{ marginBottom: 0 }}>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE TABS */}
      <section className="aa-section">
        <div className="aa-container">
          <div className="aa-head aa-center reveal">
            <p className="aa-eyebrow">In detail</p>
            <h2 className="aa-h2">{page.tabs.title}</h2>
            {page.tabs.intro && <p className="aa-lead">{page.tabs.intro}</p>}
          </div>
          <div className="rl-tabs">
            <div className="rl-tabs__list" role="tablist" aria-label={page.tabs.title}>
              {page.tabs.items.map((t, i) => (
                <button
                  key={t.label}
                  type="button"
                  role="tab"
                  id={`tab-${i}`}
                  aria-selected={tab === i}
                  aria-controls={`panel-${i}`}
                  className={`rl-tabs__tab${tab === i ? ' is-active' : ''}`}
                  onClick={() => setTab(i)}
                >
                  {t.label}
                </button>
              ))}
            </div>
            {/* All panels are in the HTML (crawlable); only the active one is shown */}
            {page.tabs.items.map((t, i) => (
              <div key={t.label} role="tabpanel" id={`panel-${i}`} aria-labelledby={`tab-${i}`} hidden={activeTab !== t} className="rl-tabs__panel">
                <h3 className="rl-h3">{t.heading}</h3>
                <ul className="rl-checks">
                  {t.points.map(p => <li key={p}><FaCheckCircle aria-hidden="true" /> {p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="aa-section aa-section--navy">
        <div className="aa-container">
          <div className="aa-head aa-center reveal">
            <p className="aa-eyebrow">How it works</p>
            <h2 className="aa-h2">From first call to a working team</h2>
          </div>
          <ol className="aa-steps" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {page.steps.map((s, i) => (
              <li key={s.title} className={`aa-step reveal reveal-d${i}`}>
                <div className="aa-step__num">{i + 1}</div>
                <h3>{s.title}</h3>
                <p><RichText text={s.text} /></p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="aa-section">
        <div className="aa-container">
          <div className="aa-head aa-center reveal">
            <p className="aa-eyebrow">Compare your options</p>
            <h2 className="aa-h2">{page.comparison.title}</h2>
          </div>
          <div className="rl-table reveal" role="region" aria-label={page.comparison.title} tabIndex={0}>
            <table>
              <thead>
                <tr>{page.comparison.columns.map((c, i) => <th key={c} scope="col" className={i === page.comparison.columns.length - 1 ? 'is-us' : ''}>{c}</th>)}</tr>
              </thead>
              <tbody>
                {page.comparison.rows.map((r, ri) => (
                  <tr key={ri}>
                    {r.map((c, ci) => ci === 0
                      ? <th key={ci} scope="row">{c}</th>
                      : <td key={ci} className={ci === r.length - 1 ? 'is-us' : ''}>{c}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* AUDIENCES */}
      <section className="aa-section aa-section--soft">
        <div className="aa-container">
          <div className="aa-head aa-center reveal">
            <p className="aa-eyebrow">Who it is for</p>
            <h2 className="aa-h2">Built for teams like yours</h2>
          </div>
          <div className="aa-grid">
            {page.audiences.map((a, i) => (
              <div key={a.title} className={`aa-card aa-card--hover rl-aud reveal reveal-d${i}`}>
                <div className="aa-zoom rl-aud__img"><img src={a.image} alt={a.imageAlt} loading="lazy" width={400} height={220} /></div>
                <h3 className="aa-card__title">{a.title}</h3>
                <p className="aa-card__text">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={page.faqs} title={`${page.serviceName}: FAQs`} />

      {/* RELATED */}
      <section className="aa-section" style={{ paddingTop: 0 }}>
        <div className="aa-container">
          <div className="aa-head aa-center"><h2 className="aa-h2" style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)' }}>Related services &amp; guides</h2></div>
          <div className="rl-related">
            {page.related.map(([label, path]) => (
              <Link key={path} to={path}>{label} <FaArrowRight aria-hidden="true" /></Link>
            ))}
          </div>
        </div>
      </section>

      <LeadSection service={page.serviceName} placement={`${page.slug}-footer`} heading={`Ready to start with ${page.serviceName.toLowerCase()}?`} />
    </>
  );
};

export default RichLandingPage;
