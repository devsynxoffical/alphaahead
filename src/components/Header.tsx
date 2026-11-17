import React, { useEffect, useState } from 'react';
import { MdEmail, MdCall, MdLanguage } from 'react-icons/md';
import { FaBars } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isHome = location.pathname === '/' || location.pathname === '/home';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isTransparent = isHome && !isScrolled;
  const baseTextColor = isTransparent ? '#ffffff' : '#333333';
  const borderColor = isTransparent ? 'rgba(255,255,255,0.25)' : '#dddddd';
  const navHoverBg = isTransparent ? 'rgba(255,255,255,0.10)' : '#f8f8f8';

  const navItems = [
    { label: t('nav.home'), link: '/' },
    { label: t('nav.services'), link: '/services' },
    { label: t('nav.products'), link: '/projects' },
    { label: t('nav.clients'), link: '/clients' },
    { label: t('nav.team'), link: '/team' },
    { label: t('nav.careers'), link: '/careers' },
    { label: t('nav.contact'), link: '/contact' }
  ];

  return (
    <header
      style={{
        position: isHome ? 'fixed' : 'sticky',
        top: 0,
        width: '100%',
        zIndex: 1000,
        background: isTransparent ? 'transparent' : '#ffffff',
        borderBottom: `1px solid ${borderColor}`,
        transition: 'background 250ms ease, border-color 250ms ease'
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '1rem 2rem', position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <Link to="/" aria-label="Alpha Ahead LLC home" style={{ display: 'inline-flex' }}>
            <img
              src="/alphawebsitemainlogo.png"
              alt="Alpha Ahead LLC logo"
              width={122}
              height={45}
              style={{ height: 45, width: 'auto' }}
            />
          </Link>

          <div className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <MdEmail color="#DC520E" size={24} />
              <div>
                <div style={{ fontWeight: 700, color: '#DC520E', fontSize: '1rem' }}>
                  {t('contactInfo.emailLabel')}
                </div>
                <div style={{ fontSize: '0.9rem', color: baseTextColor }}>{t('contactInfo.email')}</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <MdCall color="#DC520E" size={24} />
              <div>
                <div style={{ fontWeight: 700, color: '#DC520E', fontSize: '1rem' }}>
                  {t('contactInfo.phoneLabel')}
                </div>
                <div style={{ fontSize: '0.9rem', color: baseTextColor }}>{t('contactInfo.phone')}</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <MdLanguage color="#DC520E" size={24} />
              <select
                value={i18n.resolvedLanguage}
                onChange={e => i18n.changeLanguage(e.target.value)}
                style={{ 
                  border: `1px solid ${borderColor}`, 
                  color: '#000', 
                  background: '#fff', 
                  borderRadius: 4, 
                  fontSize: '0.9rem', 
                  padding: '2px 6px',
                  cursor: 'pointer'
                }}
              >
                <option value="en">EN</option>
                <option value="es">ES</option>
                <option value="fr">FR</option>
                <option value="ur">اردو</option>
                <option value="ar">العربية</option>
              </select>
            </div>
          </div>

          <FaBars
            className="mobile-only"
            size={26}
            color={isTransparent ? '#ffffff' : '#DC520E'}
            style={{ cursor: 'pointer', display: 'none' }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>

        <nav
          className="desktop-only"
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            padding: '1rem 0', 
            borderTop: `1px solid ${isTransparent ? 'rgba(255,255,255,0.25)' : '#333'}`, 
            gap: '2rem',
            flexWrap: 'wrap',
            maxWidth: '100%'
          }}
        >
          {navItems.map(({ label, link }) => (
            <Link 
              key={link} 
              to={link} 
              style={{ 
                padding: '0.75rem 1.25rem', 
                color: baseTextColor, 
                textDecoration: 'none', 
                fontSize: '1rem', 
                fontWeight: 500,
                transition: 'all 0.2s ease',
                borderRadius: '6px',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = navHoverBg;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {isMenuOpen && (
          <div
            className="mobile-only"
            style={{
              position: 'absolute',
              right: 16,
              top: 64,
              background: '#fff',
              boxShadow: '0 2px 6px rgba(0,0,0,.1)',
              borderRadius: 8,
              padding: '1rem',
              zIndex: 2000,
              minWidth: '180px'
            }}
          >
            {navItems.map(({ label, link }) => (
              <Link
                key={link}
                to={link}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  color: '#333',
                  textDecoration: 'none',
                  display: 'block',
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  padding: '.75rem 0',
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: '500',
                  transition: 'all 0.3s ease',
                  borderRadius: '4px',
                  paddingLeft: '0.5rem'
                }}
              >
                {label}
              </Link>
            ))}

            <div style={{ marginTop: '1rem', borderTop: '1px solid #ddd', paddingTop: '0.5rem' }}>
              <label style={{ fontSize: '1rem', fontWeight: 500, color: '#333' }}>
                🌐 {t('contactInfo.languageLabel') || 'Language'}
              </label>
              <select
                value={i18n.resolvedLanguage}
                onChange={(e) => i18n.changeLanguage(e.target.value)}
                style={{
                  width: '100%',
                  border: '1px solid #ccc',
                  borderRadius: 4,
                  padding: '4px 8px',
                  fontSize: '1rem',
                  marginTop: '.3rem',
                  background: '#fff',
                  color: '#000',
                  cursor: 'pointer'
                }}
              >
                <option value="en">EN</option>
                <option value="es">ES</option>
                <option value="fr">FR</option>
                <option value="ur">اردو</option>
                <option value="ar">العربية</option>
              </select>
            </div>
          </div>
        )}
      </div>

      <style>{`
        /* small devices */
        @media (max-width: 767px) {
          .desktop-only { display: none !important; }
          .mobile-only  { display: block !important; }
        }
        /* tablets / desktop */
        @media (min-width: 768px) {
          .mobile-only  { display: none !important; }
        }
      `}</style>
    </header>
  );
};

export default Header;
