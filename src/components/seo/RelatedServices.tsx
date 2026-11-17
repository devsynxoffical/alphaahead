import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../../seo/services';
import { SERVICE_ICONS } from './serviceIcons';

interface Props {
  paths?: string[];
  exclude?: string;
  title?: string;
  eyebrow?: string;
  intro?: string;
  soft?: boolean;
}

/** Crawlable grid of links to service pages (internal linking hub). */
const RelatedServices: React.FC<Props> = ({
  paths,
  exclude,
  title = 'Explore Related Services',
  eyebrow,
  intro,
  soft = true,
}) => {
  const list = (paths ? SERVICES.filter(s => paths.includes(s.path)) : SERVICES).filter(s => s.path !== exclude);
  if (!list.length) return null;
  return (
    <section className={`aa-section${soft ? ' aa-section--soft' : ''}`}>
      <div className="aa-container">
        <div className="aa-head aa-center reveal">
          {eyebrow && <p className="aa-eyebrow">{eyebrow}</p>}
          <h2 className="aa-h2">{title}</h2>
          {intro && <p className="aa-lead">{intro}</p>}
        </div>
        <div className="aa-grid">
          {list.map((s, i) => (
            <Link key={s.path} to={s.path} className={`aa-card reveal reveal-d${i % 4}`}>
              <span className="aa-icon" aria-hidden="true">{SERVICE_ICONS[s.path]}</span>
              <span className="aa-card__title">{s.name}</span>
              <span className="aa-card__text">{s.short}</span>
              <span className="aa-card__link">
                Learn more <span className="aa-arrow" aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
