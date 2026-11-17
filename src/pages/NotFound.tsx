import React from 'react';
import { Link } from 'react-router-dom';
import RelatedServices from '../components/seo/RelatedServices';

const NotFound: React.FC = () => (
  <>
    <section style={{ padding: '5rem 1.25rem 3rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#222', marginBottom: '1rem' }}>Page not found</h1>
      <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '2rem' }}>
        The page you are looking for doesn&apos;t exist or has moved.
      </p>
      <Link to="/" style={{ background: '#DC520E', color: '#fff', padding: '0.9rem 2rem', borderRadius: 8, textDecoration: 'none', fontWeight: 700 }}>
        Back to homepage
      </Link>
    </section>
    <RelatedServices title="Popular Services" />
  </>
);

export default NotFound;
