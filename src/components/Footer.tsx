import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const linkStyle: React.CSSProperties = {
    color: '#dbe7f5',
    textDecoration: 'none',
    fontSize: '0.95rem',
    lineHeight: 1.8,
    display: 'inline-block'
  };

  return (
    <footer style={{ background: '#DC520E', color: '#ffffff' }}>
      <section style={{ padding: '3rem 2rem 1.5rem' }}>
        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          justifyContent: 'center',
          padding: '0 1rem'
        }}>
          <div style={{ flex: '1 1 280px', minWidth: 240 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', background: '#ffffff', borderRadius: 8, padding: '6px 8px', marginBottom: '1rem' }}>
              <img
                src="/alphawebsitemainlogo.png"
                alt="Alpha Ahead"
                style={{ height: 40, display: 'block' }}
              />
            </div>
            <p style={{ color: '#ffffff', maxWidth: 420, lineHeight: 1.7 }}>
              {t('footer.bottom')}
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
              <a href="https://www.facebook.com/alphaahead" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ color: '#ffffff' }}>
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://www.instagram.com/alpha_ahead_official/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: '#ffffff' }}>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.linkedin.com/company/105228080/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: '#ffffff' }}>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>

          <div style={{ flex: '1 1 160px', minWidth: 160 }}>
            <h4 style={{ color: '#ffffff', marginBottom: '0.75rem' }}>{t('footer.company')}</h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <Link to="/" style={linkStyle}>{t('nav.home')}</Link>
              <Link to="/services" style={linkStyle}>{t('nav.services')}</Link>
              <Link to="/projects" style={linkStyle}>{t('nav.products')}</Link>
              <Link to="/contact" style={linkStyle}>{t('nav.contact')}</Link>
            </nav>
          </div>

          <div style={{ flex: '1 1 200px', minWidth: 180 }}>
            <h4 style={{ color: '#ffffff', marginBottom: '0.75rem' }}>{t('footer.solutions')}</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <Link to="/services" style={linkStyle}>{t('footer.webDevelopment')}</Link>
              <Link to="/services" style={linkStyle}>{t('footer.digitalMarketing')}</Link>
              <Link to="/services" style={linkStyle}>{t('footer.leadGeneration')}</Link>
            </div>
          </div>

          <div style={{ flex: '1 1 240px', minWidth: 220 }}>
            <h4 style={{ color: '#ffffff', marginBottom: '0.75rem' }}>{t('footer.contact')}</h4>
            <p style={{ margin: 0, color: '#dbe7f5' }}>
              {t('contactInfo.emailLabel')}: <a href={`mailto:${t('contactInfo.email')}`} style={{ color: '#ffffff', textDecoration: 'none' }}>{t('contactInfo.email')}</a>
            </p>
            <p style={{ margin: 0, color: '#dbe7f5', marginTop: '.25rem' }}>
              {t('contactInfo.phoneLabel')}: <a href={`tel:${t('contactInfo.phone')}`} style={{ color: '#ffffff', textDecoration: 'none' }}>{t('contactInfo.phone')}</a>
            </p>
            <div style={{ marginTop: '0.75rem' }}>
              <Link
                to="/contact"
                style={{
                  background: '#ffffff',
                  color: '#DC520E',
                  padding: '0.75rem 1.75rem',
                  borderRadius: 8,
                  textDecoration: 'none',
                  display: 'inline-block',
                  fontWeight: 700,
                  fontSize: '1rem',
                  border: '2px solid #ffffff',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.color = '#DC520E';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
                }}
              >
                {t('footer.button')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '1rem 2rem', borderTop: '1px solid rgba(255,255,255,.3)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0 1rem' }}>
          <p style={{ margin: 0, color: '#dbe7f5', fontSize: '.9rem', textAlign: 'center' }}>
            {t('footer.copyright')}
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
