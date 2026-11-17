import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { findArticle } from '../seo/registry';
import { OFFICES } from '../seo/site';
import RichText from '../components/seo/RichText';
import FaqSection from '../components/seo/FaqSection';
import RelatedServices from '../components/seo/RelatedServices';
import CtaBanner from '../components/seo/CtaBanner';
import NotFound from './NotFound';

const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

/** Template for blog posts, case studies and location landing pages. */
const ArticlePage: React.FC = () => {
  const { pathname } = useLocation();
  const article = findArticle(pathname.replace(/\/+$/, ''));
  if (!article) return <NotFound />;

  const crumbs =
    article.kind === 'blog'
      ? [{ to: '/blog', label: 'Blog' }]
      : article.kind === 'case-study'
      ? [{ to: '/case-studies', label: 'Case Studies' }]
      : [];
  const office = article.officeId ? OFFICES.find(o => o.id === article.officeId) : undefined;
  const label = article.kind === 'blog' ? 'Blog' : article.kind === 'case-study' ? 'Case Study' : 'Location';

  return (
    <article>
      <header style={{ background: 'linear-gradient(120deg, #0f1f3a, #18305a)', color: '#fff', padding: 'clamp(3rem, 6vw, 4.5rem) 1.25rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: '0.9rem', marginBottom: '1rem', opacity: 0.95 }}>
            <Link to="/" style={{ color: '#fff' }}>Home</Link>
            {crumbs.map(c => (
              <span key={c.to}>
                {' / '}
                <Link to={c.to} style={{ color: '#fff' }}>{c.label}</Link>
              </span>
            ))}
          </nav>
          <p style={{ textTransform: 'uppercase', letterSpacing: 1.5, fontWeight: 800, fontSize: '0.8rem', margin: '0 0 0.5rem', color: '#ffb48c' }}>{label}</p>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', lineHeight: 1.2, margin: '0 0 1rem' }}>{article.title}</h1>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.6, opacity: 0.95, margin: 0 }}>{article.excerpt}</p>
          {article.kind !== 'location' && (
            <p style={{ fontSize: '0.9rem', opacity: 0.9, marginTop: '1rem' }}>
              By Alpha Ahead Team · <time dateTime={article.dateModified || article.datePublished}>{formatDate(article.dateModified || article.datePublished)}</time>
              {article.readMinutes ? ` · ${article.readMinutes} min read` : ''}
            </p>
          )}
        </div>
      </header>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '2.5rem 1.25rem', color: '#333', fontSize: '1.08rem', lineHeight: 1.8 }}>
        <img
          src={article.image}
          alt={article.imageAlt}
          width={900}
          height={420}
          loading="eager"
          style={{ width: '100%', height: 'auto', maxHeight: 420, objectFit: 'cover', borderRadius: 14, marginBottom: '2rem' }}
        />

        {article.kind === 'case-study' && (article.client || article.industry) && (
          <dl style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', background: '#fdf1ea', borderRadius: 12, padding: '1rem 1.25rem', margin: '0 0 2rem' }}>
            {article.client && (<div><dt style={{ fontWeight: 700 }}>Client</dt><dd style={{ margin: 0 }}>{article.client}</dd></div>)}
            {article.industry && (<div><dt style={{ fontWeight: 700 }}>Industry</dt><dd style={{ margin: 0 }}>{article.industry}</dd></div>)}
            {article.website && (
              <div><dt style={{ fontWeight: 700 }}>Website</dt><dd style={{ margin: 0 }}>
                <a href={article.website} target="_blank" rel="noopener noreferrer" style={{ color: '#DC520E' }}>{article.website.replace(/^https?:\/\//, '').replace(/\/$/, '')}</a>
              </dd></div>
            )}
          </dl>
        )}

        {article.intro.map((p, i) => (
          <p key={i} style={{ margin: '0 0 1.25rem' }}><RichText text={p} /></p>
        ))}

        {article.sections.map((s, i) => (
          <section key={i}>
            <h2 style={{ fontSize: 'clamp(1.35rem, 2.5vw, 1.75rem)', color: '#222', margin: '2.25rem 0 1rem', lineHeight: 1.3 }}>{s.heading}</h2>
            {s.paragraphs?.map((p, j) => (
              <p key={j} style={{ margin: '0 0 1.1rem' }}><RichText text={p} /></p>
            ))}
            {s.bullets && (
              <ul style={{ paddingLeft: '1.4rem', margin: '0 0 1.25rem' }}>
                {s.bullets.map((b, j) => (
                  <li key={j} style={{ marginBottom: '0.5rem' }}><RichText text={b} /></li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {office && (
          <aside style={{ marginTop: '2.5rem', background: '#f9f9f9', borderLeft: '4px solid #DC520E', borderRadius: 8, padding: '1.25rem 1.5rem' }}>
            <h2 style={{ fontSize: '1.3rem', margin: '0 0 0.5rem' }}>Visit or call our {office.city} office</h2>
            <address style={{ fontStyle: 'normal', lineHeight: 1.7 }}>
              {office.name}<br />
              {office.street}, {office.city}{office.region ? `, ${office.region}` : ''} {office.postalCode || ''}<br />
              {office.countryName}<br />
              Phone: <a href={`tel:${office.phone.replace(/[^+\d]/g, '')}`} style={{ color: '#DC520E' }}>{office.phone}</a> · Email:{' '}
              <a href="mailto:info@alphaaheadllc.com" style={{ color: '#DC520E' }}>info@alphaaheadllc.com</a><br />
              <a href={office.mapUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#DC520E' }}>Get directions on Google Maps</a>
            </address>
          </aside>
        )}
      </div>

      {article.faqs && article.faqs.length > 0 && <FaqSection faqs={article.faqs} />}
      <RelatedServices paths={article.relatedServices} title="Services Mentioned in This Article" />
      <CtaBanner />
    </article>
  );
};

export default ArticlePage;
