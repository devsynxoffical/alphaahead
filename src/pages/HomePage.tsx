import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  FaCheckCircle, FaPhoneAlt, FaMapMarkerAlt, FaClock, FaUserTie, FaLaptop, FaCalculator, FaCalendarCheck, FaHeadset, FaBullseye, FaShieldAlt, FaTools,
} from 'react-icons/fa';
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
interface Industry { title: string; desc: string; image: string; path?: string }

const HOME_SERVICES = [
  { path: '/business-assistant', name: 'Executive virtual assistant', text: 'Inbox, calendar, travel and meeting prep for founders and executives.', icon: <FaUserTie /> },
  { path: '/virtual-assistant', name: 'Virtual assistant for small business', text: 'Admin, customer emails, CRM updates and research for small teams.', icon: <FaLaptop /> },
  { path: '/bookkeeping-virtual-assistant', name: 'Bookkeeping virtual assistant', text: 'QuickBooks Online and Xero data entry and reconciliations, reviewed by your accountant.', icon: <FaCalculator /> },
  { path: '/appointment-setting', name: 'Appointment setting services', text: 'Leads followed up, qualified and booked as meetings on your calendar.', icon: <FaCalendarCheck /> },
  { path: '/cold-calling', name: 'B2B cold calling', text: 'Trained callers working your scripts and lists during US business hours.', icon: <FaHeadset /> },
  { path: '/lead-generation', name: 'Lead generation', text: 'Targeted list building and outreach that feeds your sales pipeline.', icon: <FaBullseye /> },
];

const STEPS = [
  { title: 'Free discovery call', text: 'We list the tasks, tools and hours you need and agree what a good week looks like.' },
  { title: 'Matched assistant', text: 'We choose an assistant whose skills fit your tools, time zone and role.' },
  { title: 'Onboarding & SOPs', text: 'Your first week is planned, processes are written down and access is set up safely.' },
  { title: 'Scale when ready', text: 'Add hours, tasks or a second assistant once you see the value.' },
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
              Dedicated, managed virtual assistants who work your US (EST/PST) or UAE hours. Hand off inbox, calendar, bookkeeping,
              appointment setting and outbound calls, and get your week back.
            </p>
            <div className="home-hero__ctas">
              <Link to="/contact" className="aa-btn aa-btn--primary">
                Book a Free Consultation <span className="aa-arrow" aria-hidden="true">→</span>
              </Link>
              <a href="#how-it-works" className="aa-btn aa-btn--ghost">See How It Works</a>
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
            <h2 className="aa-h2">A Managed Virtual Assistant Agency That Works Your Hours</h2>
            <p className="aa-lead">{t('about.para1')}</p>
            <ul className="home-about__list">
              <li><FaCheckCircle aria-hidden="true" /> US-registered company with offices in Florida, Dubai and Islamabad</li>
              <li><FaCheckCircle aria-hidden="true" /> Dedicated <Link to="/business-assistant">executive assistants</Link>, <Link to="/bookkeeping-virtual-assistant">bookkeeping assistants</Link>, <Link to="/appointment-setting">appointment setters</Link> and <Link to="/cold-calling">B2B cold callers</Link></li>
              <li><FaCheckCircle aria-hidden="true" /> Real estate team in the US? Our real estate division, <a href="https://zingoassist.us/">Zingo Assist</a>, provides real estate VAs. Medical practice? See <a href="https://alphamediassist.com/">Alpha Medi Assist</a></li>
              <li><FaCheckCircle aria-hidden="true" /> Need web, design or IT help as well? See our <Link to="/other-services">other services</Link></li>
            </ul>
            <Link to="/case-studies" className="aa-btn aa-btn--outline">
              See our case studies <span className="aa-arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="aa-section aa-section--soft">
        <div className="aa-container">
          <div className="aa-head aa-center reveal">
            <p className="aa-eyebrow">What we do</p>
            <h2 className="aa-h2">What Our Assistants Do</h2>
            <p className="aa-lead">Start with one assistant or build a small remote team. Every assistant works inside your tools and your hours.</p>
          </div>
          <div className="aa-grid">
            {HOME_SERVICES.map((s, i) => (
              <Link key={s.path} to={s.path} className={`aa-card reveal reveal-d${i % 4}`}>
                <span className="aa-icon" aria-hidden="true">{s.icon}</span>
                <span className="aa-card__title">{s.name}</span>
                <span className="aa-card__text">{s.text}</span>
                <span className="aa-card__link">
                  Learn more <span className="aa-arrow" aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
          <p className="aa-center home-links">
            <Link to="/services">All services →</Link>
            <Link to="/other-services">Web, design &amp; IT →</Link>
          </p>
        </div>
      </section>

      {/* IS A VA RIGHT FOR YOU */}
      <section className="aa-section">
        <div className="aa-container home-about">
          <div className="reveal">
            <p className="aa-eyebrow">Getting started</p>
            <h2 className="aa-h2">Is a Virtual Assistant Right for You?</h2>
            <p className="aa-lead">A virtual assistant usually pays off when three things are true:</p>
            <ul className="home-about__list">
              <li><FaCheckCircle aria-hidden="true" /> You spend 10 or more hours a week on email, scheduling, data entry or follow-ups.</li>
              <li><FaCheckCircle aria-hidden="true" /> The tasks repeat and can be written down as steps.</li>
              <li><FaCheckCircle aria-hidden="true" /> You want help in your own time zone without hiring locally.</li>
            </ul>
            <p className="home-note">
              Start with five tasks and review them daily for the first week. Our{' '}
              <Link to="/blog/onboard-virtual-assistant-7-days">7-day onboarding plan</Link> shows how, and our list of{' '}
              <Link to="/blog/executive-assistant-tasks">30 tasks to delegate to an executive assistant</Link> helps you choose what to hand off first.
            </p>
          </div>
          <div className="reveal reveal-d1">
            <h3 className="aa-card__title">Your hours, your tools</h3>
            <ul className="home-about__list">
              <li><FaClock aria-hidden="true" /> US (EST/PST) and UAE business hours, with a team in Islamabad and offices in St. Petersburg and Dubai</li>
              <li><FaTools aria-hidden="true" /> Works in Google Workspace, Microsoft 365, Slack, QuickBooks Online, Xero and common CRMs</li>
              <li><FaShieldAlt aria-hidden="true" /> Individual logins, two-factor authentication and access limited to what each task needs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="aa-section aa-section--navy">
        <div className="aa-container">
          <div className="aa-head aa-center reveal">
            <p className="aa-eyebrow">How it works</p>
            <h2 className="aa-h2">How Hiring Works: From First Call to a Working Assistant in 4 Steps</h2>
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
              <Link key={ind.title} to={ind.path || '/industries'} className={`aa-card aa-card--hover home-industry reveal reveal-d${i % 4}`}>
                <div className="aa-zoom home-industry__img">
                  <img src={ind.image} alt={`Virtual assistant for ${ind.title.toLowerCase()}`} loading="lazy" width={400} height={220} />
                </div>
                <h3 className="aa-card__title">{ind.title}</h3>
                <p className="aa-card__text">{ind.desc}</p>
              </Link>
            ))}
          </div>
          <p className="aa-center home-links">
            <Link to="/industries">All industries →</Link>
          </p>
          <p className="aa-center home-note">
            Real estate teams: see our real estate division <a href="https://zingoassist.us/">Zingo Assist</a>. Medical practices:{' '}
            <a href="https://alphamediassist.com/">Alpha Medi Assist</a>.
          </p>
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
