import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SERVICE_FAQS } from '../../seo/faqs';
import { serviceByPath, SERVICES } from '../../seo/services';
import { ALL_ARTICLES } from '../../seo/registry';
import { articlePath } from '../../content/types';
import FaqSection from './FaqSection';
import RelatedServices from './RelatedServices';
import LeadSection from '../lead/LeadSection';
import { RICH_LANDINGS } from '../../content/richLandings';

const KIND_LABEL = { blog: 'Guide', 'case-study': 'Case study', landing: 'Industry guide', location: 'Local' } as const;

/** Appended to every service page: FAQs (with FAQPage schema via <Seo>), supporting guides, related service links. */
const ServiceExtras: React.FC = () => {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/+$/, '');
  const service = serviceByPath(path);
  const faqs = SERVICE_FAQS[path] || [];
  const related = service ? SERVICES.filter(s => s.category === service.category && s.path !== path).map(s => s.path) : undefined;
  const specialists = RICH_LANDINGS.filter(r => r.servicePath === path || (path === '/virtual-assistant' && r.slug === 'hire-virtual-assistant-pakistan'));
  const guides = ALL_ARTICLES.filter(a => a.kind !== 'location' && a.relatedServices.includes(path))
    .sort((a, b) => (a.kind === 'landing' ? -1 : 0) - (b.kind === 'landing' ? -1 : 0))
    .slice(0, 4);

  return (
    <>
      <LeadSection service={service?.name} placement={`service${path.replace(/\//g, '-')}`} heading={service ? `Get a quote for ${service.name.toLowerCase()}` : undefined} />

      {specialists.length > 0 && (
        <section className="aa-section aa-section--soft">
          <div className="aa-container">
            <div className="aa-head aa-center reveal">
              <p className="aa-eyebrow">Specialist services</p>
              <h2 className="aa-h2">Looking for something more specific?</h2>
            </div>
            <div className="aa-grid">
              {specialists.map((r, i) => (
                <Link key={r.slug} to={`/${r.slug}`} className={`aa-card reveal reveal-d${i}`} style={{ padding: 0, overflow: 'hidden' }}>
                  <div className="aa-zoom" style={{ height: 170 }}>
                    <img src={r.hero.image} alt={r.hero.imageAlt} loading="lazy" width={400} height={170} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '1.2rem 1.35rem 1.4rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <span className="aa-card__title">{r.serviceName}</span>
                    <span className="aa-card__text">{r.hero.subtitle}</span>
                    <span className="aa-card__link">See the service <span className="aa-arrow" aria-hidden="true">→</span></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {faqs.length > 0 && <FaqSection faqs={faqs} title={service ? `${service.name}: FAQs` : undefined} />}

      {guides.length > 0 && (
        <section className="aa-section" style={{ paddingTop: 0 }}>
          <div className="aa-container">
            <div className="aa-head aa-center reveal">
              <p className="aa-eyebrow">Learn more</p>
              <h2 className="aa-h2">Guides &amp; case studies{service ? ` on ${service.name.replace(/ Services$/, '').toLowerCase()}` : ''}</h2>
            </div>
            <div className="aa-grid">
              {guides.map((g, i) => (
                <Link key={g.slug} to={articlePath(g)} className={`aa-card reveal reveal-d${i}`}>
                  <span className="aa-eyebrow" style={{ fontSize: '.72rem', marginBottom: '.5rem' }}>{KIND_LABEL[g.kind]}</span>
                  <span className="aa-card__title">{g.title}</span>
                  <span className="aa-card__text">{g.excerpt}</span>
                  <span className="aa-card__link">Read more <span className="aa-arrow" aria-hidden="true">→</span></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <RelatedServices paths={related} exclude={path} />
    </>
  );
};

export default ServiceExtras;
