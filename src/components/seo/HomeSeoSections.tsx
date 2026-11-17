import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICE_FAQS } from '../../seo/faqs';
import { BLOG_POSTS } from '../../content/blog';
import { CASE_STUDIES } from '../../content/caseStudies';
import { LOCATION_PAGES } from '../../content/locations';
import { articlePath } from '../../content/types';
import RelatedServices from './RelatedServices';
import FaqSection from './FaqSection';

/** Crawlable, keyword-relevant homepage sections: service hub, who we serve, latest content, FAQ. */
const HomeSeoSections: React.FC = () => {
  const latest = [...CASE_STUDIES.slice(0, 1), ...BLOG_POSTS.slice(0, 2)];
  return (
    <>
      <section style={{ background: '#fff', padding: '4rem 1.25rem 1rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)', color: '#222', marginBottom: '1rem' }}>
            Virtual Assistants, Cold Callers &amp; Digital Teams That Work Your Hours
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.75, color: '#555', margin: 0 }}>
            Alpha Ahead LLC is a US-based outsourcing agency with offices in St. Petersburg, Florida, Dubai and Islamabad. We give
            real estate teams, property managers and growing businesses dedicated remote staff &mdash; from{' '}
            <Link to="/virtual-assistant" style={{ color: '#DC520E', fontWeight: 600 }}>virtual assistants</Link> and{' '}
            <Link to="/cold-calling" style={{ color: '#DC520E', fontWeight: 600 }}>real estate cold callers</Link> to{' '}
            <Link to="/transaction-coordinator" style={{ color: '#DC520E', fontWeight: 600 }}>transaction coordinators</Link> and{' '}
            <Link to="/digital-marketing" style={{ color: '#DC520E', fontWeight: 600 }}>digital marketers</Link> &mdash; trained, managed and
            working on US or UAE business hours.
          </p>
        </div>
      </section>

      <RelatedServices title="Outsourcing & Digital Services We Provide" />

      {latest.length > 0 && (
        <section style={{ background: '#fff', padding: '3.5rem 1.25rem' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#222', marginBottom: '1.5rem', textAlign: 'center' }}>
              Guides &amp; Case Studies
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
              {latest.map(a => (
                <Link
                  key={a.slug}
                  to={articlePath(a)}
                  style={{ display: 'block', background: '#fdf1ea', borderRadius: 12, padding: '1.25rem', textDecoration: 'none', color: '#333' }}
                >
                  <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#DC520E', textTransform: 'uppercase', marginBottom: 6 }}>
                    {a.kind === 'blog' ? 'Guide' : 'Case Study'}
                  </span>
                  <span style={{ display: 'block', fontWeight: 700, lineHeight: 1.4 }}>{a.title}</span>
                </Link>
              ))}
            </div>
            <p style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <Link to="/blog" style={{ color: '#DC520E', fontWeight: 700, marginRight: '1.5rem' }}>All guides →</Link>
              <Link to="/case-studies" style={{ color: '#DC520E', fontWeight: 700 }}>All case studies →</Link>
            </p>
            {LOCATION_PAGES.length > 0 && (
              <p style={{ textAlign: 'center', color: '#555', marginTop: '1rem', lineHeight: 1.8 }}>
                Local teams:{' '}
                {LOCATION_PAGES.map((l, i) => (
                  <span key={l.slug}>
                    {i > 0 && ' · '}
                    <Link to={articlePath(l)} style={{ color: '#DC520E', fontWeight: 600 }}>{l.title.split(':')[0]}</Link>
                  </span>
                ))}
              </p>
            )}
          </div>
        </section>
      )}

      {SERVICE_FAQS['/'] && <FaqSection faqs={SERVICE_FAQS['/']} title="Questions About Alpha Ahead" />}
    </>
  );
};

export default HomeSeoSections;
