import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaClock, FaCalendarAlt, FaUserTie, FaPhoneAlt, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import { ALL_ARTICLES, findArticle } from '../seo/registry';
import { OFFICES } from '../seo/site';
import { SERVICES } from '../seo/services';
import { Article, articlePath } from '../content/types';
import RichText from '../components/seo/RichText';
import FaqSection from '../components/seo/FaqSection';
import RelatedServices from '../components/seo/RelatedServices';
import CtaBanner from '../components/seo/CtaBanner';
import NotFound from './NotFound';
import LeadSection from '../components/lead/LeadSection';
import './ArticlePage.css';

const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

export const slugify = (s: string) =>
  s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60);

const KIND_LABEL: Record<Article['kind'], string> = {
  blog: 'Guide',
  'case-study': 'Case Study',
  location: 'Local Services',
  landing: 'Industry Guide',
};

/** Articles that share the most related services with this one (internal linking). */
function relatedArticles(a: Article, limit = 3): Article[] {
  return ALL_ARTICLES.filter(o => o.slug !== a.slug && o.kind !== 'location')
    .map(o => ({ o, score: o.relatedServices.filter(s => a.relatedServices.includes(s)).length + (o.kind === a.kind ? 0.5 : 0) }))
    .filter(x => x.score > 0)
    .sort((x, y) => y.score - x.score)
    .slice(0, limit)
    .map(x => x.o);
}

/** Template for blog posts, case studies, location and landing pages. */
const ArticlePage: React.FC = () => {
  const { pathname } = useLocation();
  const article = findArticle(pathname.replace(/\/+$/, ''));
  if (!article) return <NotFound />;

  const isEditorial = article.kind === 'blog' || article.kind === 'case-study';
  const crumbs =
    article.kind === 'blog'
      ? [{ to: '/blog', label: 'Blog' }]
      : article.kind === 'case-study'
      ? [{ to: '/case-studies', label: 'Case Studies' }]
      : article.kind === 'landing'
      ? [{ to: '/services', label: 'Services' }]
      : [];
  const office = article.officeId ? OFFICES.find(o => o.id === article.officeId) : undefined;
  const toc = article.sections.map(s => ({ id: slugify(s.heading), heading: s.heading }));
  const midCta = Math.max(1, Math.floor(article.sections.length / 2));
  const related = relatedArticles(article);
  // Keep the article's own order: the first related service is its main topic.
  const services = article.relatedServices.map(p => SERVICES.find(s => s.path === p)).filter((s): s is (typeof SERVICES)[number] => !!s);
  const updated = article.dateModified || article.datePublished;

  return (
    <article className="art">
      <header className="art-hero">
        <div className="aa-container art-hero__inner">
          <nav aria-label="Breadcrumb" className="art-crumbs">
            <Link to="/">Home</Link>
            {crumbs.map(c => (
              <span key={c.to}>
                <span aria-hidden="true"> / </span>
                <Link to={c.to}>{c.label}</Link>
              </span>
            ))}
            <span aria-hidden="true"> / </span>
            <span aria-current="page" className="art-crumbs__current">{article.title.split(':')[0]}</span>
          </nav>
          <p className="art-kicker">{KIND_LABEL[article.kind]}{article.industry ? ` · ${article.industry}` : ''}</p>
          <h1 className="art-title">{article.title}</h1>
          <p className="art-excerpt">{article.excerpt}</p>
          <div className="art-meta">
            {isEditorial && (
              <>
                <span><FaUserTie aria-hidden="true" /> By <Link to="/about">Alpha Ahead Team</Link></span>
                <span><FaCalendarAlt aria-hidden="true" /> <time dateTime={updated}>{formatDate(updated)}</time></span>
                {article.readMinutes ? <span><FaClock aria-hidden="true" /> {article.readMinutes} min read</span> : null}
              </>
            )}
            {office && (
              <span><FaMapMarkerAlt aria-hidden="true" /> {office.city}, {office.countryName}</span>
            )}
            {!isEditorial && (
              <Link to="/contact" className="aa-btn aa-btn--primary art-hero__cta">Get a Free Consultation <span className="aa-arrow" aria-hidden="true">→</span></Link>
            )}
          </div>
        </div>
      </header>

      <div className="aa-container art-layout">
        <div className="art-main">
          <figure className="art-figure">
            <img src={article.image} alt={article.imageAlt} width={900} height={440} loading="eager" />
          </figure>

          {toc.length > 2 && (
            <details className="art-toc art-toc--mobile">
              <summary>On this page</summary>
              <ol>{toc.map(t => <li key={t.id}><a href={`#${t.id}`}>{t.heading}</a></li>)}</ol>
            </details>
          )}

          {article.kind === 'case-study' && (article.client || article.industry) && (
            <dl className="art-facts">
              {article.client && <div><dt>Client</dt><dd>{article.client}</dd></div>}
              {article.industry && <div><dt>Industry</dt><dd>{article.industry}</dd></div>}
              {article.website && (
                <div><dt>Website</dt><dd>
                  <a href={article.website} target="_blank" rel="noopener noreferrer">{article.website.replace(/^https?:\/\//, '').replace(/\/$/, '')}</a>
                </dd></div>
              )}
              {services.length > 0 && <div><dt>Services</dt><dd>{services.map(s => s.name).join(', ')}</dd></div>}
            </dl>
          )}

          <div className="art-body">
            <div className="art-lede">
              {article.intro.map((p, i) => <p key={i}><RichText text={p} /></p>)}
            </div>

            {article.sections.map((s, i) => (
              <React.Fragment key={i}>
                <section aria-labelledby={toc[i].id}>
                  <h2 id={toc[i].id}>{s.heading}</h2>
                  {s.paragraphs?.map((p, j) => <p key={j}><RichText text={p} /></p>)}
                  {s.bullets && (
                    <ul>{s.bullets.map((b, j) => <li key={j}><RichText text={b} /></li>)}</ul>
                  )}
                </section>

                {article.table && i === 1 && (
                  <div className="art-table" role="region" aria-label={article.table.caption} tabIndex={0}>
                    <table>
                      <caption>{article.table.caption}</caption>
                      <thead><tr>{article.table.columns.map(c => <th key={c} scope="col">{c}</th>)}</tr></thead>
                      <tbody>
                        {article.table.rows.map((r, ri) => (
                          <tr key={ri}>{r.map((c, ci) => (ci === 0 ? <th key={ci} scope="row">{c}</th> : <td key={ci}>{c}</td>))}</tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {i === midCta - 1 && (
                  <aside className="art-inline-cta">
                    <div>
                      <p className="art-inline-cta__title">Want this handled for you?</p>
                      <p className="art-inline-cta__text">
                        Talk to our team about {services[0] ? services[0].name.toLowerCase() : 'a dedicated remote team'}: free consultation, no obligation.
                      </p>
                    </div>
                    <Link to="/contact" className="aa-btn aa-btn--primary">Book a free call</Link>
                  </aside>
                )}
              </React.Fragment>
            ))}
          </div>

          {office && (
            <aside className="art-office">
              <h2>Visit or call our {office.city} office</h2>
              <address>
                <strong>{office.name}</strong><br />
                {office.street}, {office.city}{office.region ? `, ${office.region}` : ''} {office.postalCode || ''}<br />
                {office.countryName}<br />
                <FaPhoneAlt aria-hidden="true" /> <a href={`tel:${office.phone.replace(/[^+\d]/g, '')}`}>{office.phone}</a> ·{' '}
                <a href="mailto:info@alphaaheadllc.com">info@alphaaheadllc.com</a><br />
                <a href={office.mapUrl} target="_blank" rel="noopener noreferrer">Get directions on Google Maps</a>
              </address>
            </aside>
          )}

          <aside className="art-author" aria-label="About the author">
            <img src="/alphawebsitemainlogo.png" alt="" width={90} height={34} loading="lazy" />
            <div>
              <p className="art-author__name">Written by the Alpha Ahead Team</p>
              <p className="art-author__bio">
                Alpha Ahead LLC is a US-registered outsourcing and digital agency (St. Petersburg, FL · Dubai · Islamabad) that
                runs virtual assistant, transaction coordination, cold calling and marketing teams for real estate and service businesses.
                Our guides are written from the work our team does every day. <Link to="/about">About us</Link> · <Link to="/team">Meet the team</Link>
              </p>
            </div>
          </aside>
        </div>

        <aside className="art-side" aria-label="Page navigation and related services">
          <div className="art-side__sticky">
            {toc.length > 2 && (
              <nav className="art-toc" aria-label="On this page">
                <p className="art-side__title">On this page</p>
                <ol>{toc.map(t => <li key={t.id}><a href={`#${t.id}`}>{t.heading}</a></li>)}</ol>
              </nav>
            )}
            <div className="art-side__card">
              <p className="art-side__card-title">Need a remote team?</p>
              <p>Dedicated, trained staff working your US or UAE business hours.</p>
              <Link to="/contact" className="aa-btn aa-btn--primary" style={{ width: '100%' }}>Free consultation</Link>
              <a href="tel:+14245427170" className="art-side__phone"><FaPhoneAlt aria-hidden="true" /> +1 424-542-7170</a>
            </div>
            {services.length > 0 && (
              <nav className="art-side__links" aria-label="Related services">
                <p className="art-side__title">Related services</p>
                {services.map(s => (
                  <Link key={s.path} to={s.path}>{s.name} <FaArrowRight aria-hidden="true" /></Link>
                ))}
              </nav>
            )}
          </div>
        </aside>
      </div>

      <LeadSection service={services[0]?.name} placement={`${article.kind}-${article.slug}`} heading={article.kind === 'blog' ? 'Want a team to handle this for you?' : 'Talk to us about your project'} />

      {article.faqs && article.faqs.length > 0 && <FaqSection faqs={article.faqs} />}

      {related.length > 0 && (
        <section className="aa-section aa-section--soft">
          <div className="aa-container">
            <div className="aa-head aa-center reveal">
              <p className="aa-eyebrow">Keep reading</p>
              <h2 className="aa-h2">Related guides &amp; case studies</h2>
            </div>
            <div className="aa-grid">
              {related.map((r, i) => (
                <Link key={r.slug} to={articlePath(r)} className={`aa-card reveal reveal-d${i}`} style={{ padding: 0, overflow: 'hidden' }}>
                  <div className="aa-zoom" style={{ height: 180 }}>
                    <img src={r.image} alt={r.imageAlt} loading="lazy" width={400} height={180} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '1.2rem 1.35rem 1.4rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <span className="aa-eyebrow" style={{ fontSize: '.72rem', marginBottom: '.4rem' }}>{KIND_LABEL[r.kind]}</span>
                    <span className="aa-card__title">{r.title}</span>
                    <span className="aa-card__link">Read more <span className="aa-arrow" aria-hidden="true">→</span></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <RelatedServices paths={article.relatedServices} title={isEditorial ? 'Services mentioned in this article' : 'Services that work together'} soft={related.length === 0} />
      <CtaBanner />
    </article>
  );
};

export default ArticlePage;
