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
    <section style={{ background: '#DC520E', color: '#fff', padding: '4rem 1.25rem', textAlign: 'center' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', margin: '0 0 1rem' }}>{title}</h1>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, opacity: 0.95, margin: 0 }}>{intro}</p>
      </div>
    </section>
    <section style={{ background: '#f9f9f9', padding: '3.5rem 1.25rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {articles.map(a => (
          <Link
            key={a.slug}
            to={articlePath(a)}
            style={{ background: '#fff', borderRadius: 14, overflow: 'hidden', textDecoration: 'none', color: '#333', boxShadow: '0 6px 20px rgba(0,0,0,0.07)', display: 'flex', flexDirection: 'column' }}
          >
            <img src={a.image} alt={a.imageAlt} width={400} height={200} loading="lazy" style={{ width: '100%', height: 200, objectFit: 'cover' }} />
            <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <h2 style={{ fontSize: '1.2rem', lineHeight: 1.35, color: '#222', margin: '0 0 0.6rem' }}>{a.title}</h2>
              <p style={{ color: '#666', lineHeight: 1.6, margin: '0 0 1rem', flex: 1 }}>{a.excerpt}</p>
              <span style={{ color: '#DC520E', fontWeight: 700 }}>Read more →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
    <CtaBanner />
  </>
);

export default ArticleListing;
