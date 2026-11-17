import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../../seo/services';

/** Crawlable grid of links to service pages (internal linking hub). */
const RelatedServices: React.FC<{ paths?: string[]; exclude?: string; title?: string }> = ({
  paths,
  exclude,
  title = 'Explore Related Services',
}) => {
  const list = (paths ? SERVICES.filter(s => paths.includes(s.path)) : SERVICES).filter(s => s.path !== exclude);
  if (!list.length) return null;
  return (
    <section style={{ background: '#f9f9f9', padding: '3.5rem 1.25rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#222', marginBottom: '1.5rem', textAlign: 'center' }}>{title}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
          {list.map(s => (
            <Link
              key={s.path}
              to={s.path}
              style={{
                display: 'block',
                background: '#fff',
                borderRadius: 12,
                padding: '1.25rem',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
                borderTop: '3px solid #DC520E',
              }}
            >
              <span style={{ display: 'block', fontWeight: 700, color: '#222', marginBottom: 6 }}>{s.name}</span>
              <span style={{ display: 'block', color: '#666', fontSize: '0.95rem', lineHeight: 1.5 }}>{s.short}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
