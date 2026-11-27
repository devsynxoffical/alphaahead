import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaCheckCircle, FaPhoneAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import RelatedServices from '../components/seo/RelatedServices';
import FaqSection from '../components/seo/FaqSection';
import CtaBanner from '../components/seo/CtaBanner';
import CountUp from '../components/home/CountUp';
import { SERVICE_FAQS } from '../seo/faqs';
import { RESULTS } from '../content/results';
import { BRAND_LOGOS } from '../content/logos';
import { BLOG_POSTS } from '../content/blog';
import { CASE_STUDIES } from '../content/caseStudies';
import { LOCATION_PAGES } from '../content/locations';
import { articlePath } from '../content/types';
import './HomePage.css';

interface WorkItem { name: string; category: string; image: string }
interface Industry { title: string; desc: string; image: string }

const STEPS = [
  { title: 'Free discovery call', text: 'Tell us about your tasks, tools, hours and goals. We map out the role and the outcomes you expect.' },
  { title: 'Matched to your role', text: 'We select team members whose skills fit the work, from admin and calling to marketing and development.' },
  { title: 'Onboarding & SOPs', text: 'We set up access, document your processes and start with a clear, defined task list.' },
  { title: 'Scale with confidence', text: 'Your team works your US or UAE hours, and you can add people or services as you grow.' },
];

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const work = t('seeOurWork.clients', { returnObjects: true }) as WorkItem[];
  const industries = t('industries.list', { returnObjects: true }) as Industry[];
  const headline = String(t('hero.headline')).replace(/<br\s*\/?>/g, ' ');
  const latest = [...CASE_STUDIES.slice(0, 1), ...BLOG_POSTS.slice(0, 2)];

  return (
    <>
      {/* Hero image is the LCP element: preload it (React 19 hoists this into <head>) */}
      <link rel="preload" as="image" href="/homebackground.jpeg" fetchPriority="high" />

      {/* HERO */}
      <section
        className="home-hero"
        style={{
          backgroundImage:
            "linear-gradient(100deg, rgba(15,31,58,.96) 0%, rgba(15,31,58,.88) 45%, rgba(15,31,58,.55) 100%), url('/homebackground.jpeg')",
        }}
      >
        <div className="aa-container home-hero__inner">
          <div className="home-hero__copy">
            <p className="home-hero__badge">{t('hero.tagline')}</p>
            <h1 className="home-hero__title">{headline}</h1>
            <p className="home-hero__sub">
              Dedicated virtual assistants, appointment setters, cold callers, bookkeeping assistants and digital teams, trained, managed and
              working your US or UAE business hours.
            </p>
            <div className="home-hero__ctas">
              <Link to="/contact" className="aa-btn aa-btn--primary">
                Get a Free Consultation <span className="aa-arrow" aria-hidden="true">→</span>
              </Link>
              <Link to="/services" className="aa-btn aa-btn--ghost">Explore Services</Link>
            </div>
            <ul className="home-hero__trust">
              <li><FaMapMarkerAlt aria-hidden="true" /> St. Petersburg · Dubai · Islamabad</li>
              <li><FaClock aria-hidden="true" /> US &amp; UAE business hours</li>
              <li><FaPhoneAlt aria-hidden="true" /> <a href="tel:+14245427170">+1 424-542-7170</a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="home-results">
        <div className="aa-container">
          <div className="aa-stats">
            {RESULTS.map((r, i) => (
              <div key={r.label} className={`aa-stat reveal reveal-d${i}`}>
                <div className="aa-stat__num">
                  <CountUp to={r.value} />
                  {r.suffix && <span>{r.suffix}</span>}
                </div>
                <div className="aa-stat__label">{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOGOS */}
      <section className="home-logos" aria-labelledby="logos-title">
        <div className="aa-container">
          <p id="logos-title" className="home-logos__title">Brands we have built, launched and supported</p>
          <div className="aa-marquee">
            <div className="aa-marquee__track">
              {[...BRAND_LOGOS, ...BRAND_LOGOS].map((l, i) => (
                <img
                  key={`${l.src}-${i}`}
                  src={l.src}
                  alt={i < BRAND_LOGOS.length ? `${l.name} logo` : ''}
                  aria-hidden={i >= BRAND_LOGOS.length ? true : undefined}
                  className="aa-logo"
                  loading="lazy"
                  width={170}
                  height={72}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="aa-section">
        <div className="aa-container home-about">
          <div className="home-about__media reveal">
            <img src="/about-team.webp" alt="Alpha Ahead team planning a client project" width={560} height={373} loading="lazy" />
          </div>
          <div className="reveal reveal-d1">
            <p className="aa-eyebrow">{t('about.sectionLabel')}</p>
            <h2 className="aa-h2">Virtual Assistants, Cold Callers &amp; Digital Teams That Work Your Hours</h2>
            <p className="aa-lead">{t('about.para1')}</p>
            <ul className="home-about__list">
              <li><FaCheckCircle aria-hidden="true" /> US-registered company with offices in Florida, Dubai and Islamabad</li>
              <li><FaCheckCircle aria-hidden="true" /> Specialists for <Link to="/appointment-setting">appointment setting</Link>, <Link to="/bookkeeping-virtual-assistant">bookkeeping</Link>, <Link to="/cold-calling">B2B cold calling</Link> and growing businesses</li>
              <li><FaCheckCircle aria-hidden="true" /> Real estate agent or investor in the US? Our real estate division, <a href="https://zingoassist.us/">Zingo Assist</a>, provides real estate VAs and transaction coordinators</li>
              <li><FaCheckCircle aria-hidden="true" /> One partner for staffing <em>and</em> <Link to="/other-services#digital-marketing">digital marketing</Link>, <Link to="/other-services#seo">SEO</Link> and <Link to="/other-services#web-development">web</Link></li>
            </ul>
            <Link to="/case-studies" className="aa-btn aa-btn--outline">
              See our case studies <span className="aa-arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <RelatedServices
        eyebrow="What we do"
        title="Outsourcing & Digital Services We Provide"
        intro="Pick one role or build a full remote team. Every service is delivered by trained people working inside your tools and hours."
      />

      {/* HOW IT WORKS */}
      <section className="aa-section aa-section--navy">
        <div className="aa-container">
          <div className="aa-head aa-center reveal">
            <p className="aa-eyebrow">How it works</p>
            <h2 className="aa-h2">From first call to a working team in four steps</h2>
            <p className="aa-lead">A simple, low-risk process designed so you can start small and scale once you see the value.</p>
          </div>
          <ol className="aa-steps" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {STEPS.map((s, i) => (
              <li key={s.title} className={`aa-step reveal reveal-d${i}`}>
                <div className="aa-step__num">{i + 1}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
          <div className="aa-center" style={{ marginTop: '2.5rem' }}>
            <Link to="/contact" className="aa-btn aa-btn--primary">
              Book your free discovery call <span className="aa-arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="aa-section">
        <div className="aa-container">
          <div className="aa-head aa-center reveal">
            <p className="aa-eyebrow">{t('industries.label')}</p>
            <h2 className="aa-h2">{t('industries.headline')}</h2>
          </div>
          <div className="aa-grid">
            {industries.map((ind, i) => (
              <div key={ind.title} className={`aa-card aa-card--hover home-industry reveal reveal-d${i}`}>
                <div className="aa-zoom home-industry__img">
                  <img src={ind.image} alt={`${ind.title} industry`} loading="lazy" width={400} height={220} />
                </div>
                <h3 className="aa-card__title">{ind.title}</h3>
                <p className="aa-card__text">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section className="aa-section aa-section--soft">
        <div className="aa-container">
          <div className="aa-head aa-center reveal">
            <p className="aa-eyebrow">Portfolio</p>
            <h2 className="aa-h2">{t('seeOurWork.headline')}</h2>
            <p className="aa-lead">{t('seeOurWork.subtitle')}</p>
          </div>
          <div className="aa-grid home-work">
            {work.map((w, i) => (
              <Link key={w.name} to="/clients" className={`aa-card home-work__card reveal reveal-d${i % 3}`}>
                <div className="aa-zoom home-work__img">
                  <img src={w.image} alt={`${w.name} website built by Alpha Ahead`} loading="lazy" width={400} height={230} />
                </div>
                <span className="home-work__cat">{w.category}</span>
                <span className="aa-card__title">{w.name}</span>
                <span className="aa-card__link">
                  {t('seeOurWork.viewDetails').replace(/\s*→\s*$/, '')} <span className="aa-arrow" aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
          <div className="aa-center" style={{ marginTop: '2.5rem' }}>
            <Link to="/clients" className="aa-btn aa-btn--outline">{t('seeOurWork.viewAll')}</Link>
          </div>
        </div>
      </section>

      {/* GUIDES */}
      {latest.length > 0 && (
        <section className="aa-section">
          <div className="aa-container">
            <div className="aa-head aa-center reveal">
              <p className="aa-eyebrow">Insights</p>
              <h2 className="aa-h2">Guides &amp; Case Studies</h2>
            </div>
            <div className="aa-grid">
              {latest.map((a, i) => (
                <Link key={a.slug} to={articlePath(a)} className={`aa-card reveal reveal-d${i}`} style={{ padding: 0, overflow: 'hidden' }}>
                  <div className="aa-zoom" style={{ height: 190 }}>
                    <img src={a.image} alt={a.imageAlt} loading="lazy" width={400} height={190} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '1.25rem 1.4rem 1.4rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <span className="home-work__cat">{a.kind === 'blog' ? 'Guide' : 'Case study'}</span>
                    <span className="aa-card__title">{a.title}</span>
                    <span className="aa-card__text">{a.excerpt}</span>
                    <span className="aa-card__link">Read more <span className="aa-arrow" aria-hidden="true">→</span></span>
                  </div>
                </Link>
              ))}
            </div>
            <p className="aa-center home-links">
              <Link to="/blog">All guides →</Link>
              <Link to="/case-studies">All case studies →</Link>
            </p>
            {LOCATION_PAGES.length > 0 && (
              <p className="aa-center home-locations">
                Local teams:{' '}
                {LOCATION_PAGES.map((l, i) => (
                  <span key={l.slug}>
                    {i > 0 && ' · '}
                    <Link to={articlePath(l)}>{l.title.split(':')[0]}</Link>
                  </span>
                ))}
              </p>
            )}
          </div>
        </section>
      )}

      {SERVICE_FAQS['/'] && <FaqSection faqs={SERVICE_FAQS['/']} title="Questions About Alpha Ahead" />}
      <CtaBanner />
    </>
  );
};

export default HomePage;
