import React from 'react';
import { Link } from 'react-router-dom';
import { Article, articlePath } from '../content/types';
import CtaBanner from '../components/seo/CtaBanner';

interface Props {
  title: string;
  intro: string;
  articles: Article[];
}

/** Listing page for /blog and /case-studies. */
const ArticleListing: React.FC<Props> = ({ title, intro, articles }) => (
  <>
    <section className="aa-section--navy" style={{ padding: 'clamp(3.5rem, 7vw, 5rem) 0', background: 'linear-gradient(120deg, #0f1f3a, #18305a)' }}>
      <div className="aa-container aa-center" style={{ maxWidth: 860 }}>
        <p className="aa-eyebrow">Alpha Ahead Insights</p>
        <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', margin: '0 0 1rem', color: '#fff', lineHeight: 1.15 }}>{title}</h1>
        <p className="aa-lead">{intro}</p>
      </div>
    </section>
    <section className="aa-section aa-section--soft">
      <div className="aa-container">
        <div className="aa-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
          {articles.map((a, i) => (
            <Link key={a.slug} to={articlePath(a)} className={`aa-card reveal reveal-d${i % 3}`} style={{ padding: 0, overflow: 'hidden' }}>
              <div className="aa-zoom" style={{ height: 200 }}>
                <img src={a.image} alt={a.imageAlt} width={400} height={200} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '1.3rem 1.4rem 1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <span className="aa-eyebrow" style={{ fontSize: '.72rem', marginBottom: '.4rem' }}>
                  {a.kind === 'blog' ? `Guide${a.readMinutes ? ` · ${a.readMinutes} min read` : ''}` : a.industry || 'Case study'}
                </span>
                <h2 className="aa-card__title" style={{ fontSize: '1.2rem', lineHeight: 1.35 }}>{a.title}</h2>
                <p className="aa-card__text">{a.excerpt}</p>
                <span className="aa-card__link">Read more <span className="aa-arrow" aria-hidden="true">→</span></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
    <CtaBanner />
  </>
);

export default ArticleListing;
