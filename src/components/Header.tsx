import React, { useEffect, useState } from 'react';
import { MdEmail, MdCall, MdLanguage } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu on navigation and with the Escape key.
  useEffect(() => setIsMenuOpen(false), [location.pathname]);
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isMenuOpen]);

  const navItems = [
    { label: t('nav.home'), link: '/' },
    { label: 'About', link: '/about' },
    { label: t('nav.services'), link: '/services' },
    { label: 'Industries', link: '/industries' },
    { label: t('nav.products'), link: '/projects' },
    { label: t('nav.clients'), link: '/clients' },
    { label: 'Blog', link: '/blog' },
    { label: t('nav.team'), link: '/team' },
    { label: t('nav.careers'), link: '/careers' },
    { label: t('nav.contact'), link: '/contact' },
  ];

  const languageSelect = (id: string) => (
    <label className="hdr-lang" htmlFor={id}>
      <MdLanguage aria-hidden="true" />
      <span className="sr-only">{t('contactInfo.languageLabel') || 'Language'}</span>
      <select id={id} value={i18n.resolvedLanguage} onChange={e => i18n.changeLanguage(e.target.value)}>
        <option value="en">EN</option>
        <option value="es">ES</option>
        <option value="fr">FR</option>
        <option value="ur">اردو</option>
        <option value="ar">العربية</option>
      </select>
    </label>
  );

  return (
    <header className={`hdr${isScrolled ? ' hdr--scrolled' : ''}`}>
      <div className="hdr-top">
        <div className="aa-container hdr-top__inner">
          <span className="hdr-top__note">Virtual assistant agency · St. Petersburg · Dubai · Islamabad</span>
          <div className="hdr-top__links">
            <a href={`mailto:${t('contactInfo.email')}`}><MdEmail aria-hidden="true" /> {t('contactInfo.email')}</a>
            <a href="tel:+14245427170"><MdCall aria-hidden="true" /> {t('contactInfo.phone')}</a>
            {languageSelect('lang-desktop')}
          </div>
        </div>
      </div>

      <div className="aa-container hdr-main">
        <Link to="/" aria-label="Alpha Ahead LLC home" className="hdr-logo">
          <img src="/alphawebsitemainlogo.png" alt="Alpha Ahead LLC logo" width={130} height={48} />
        </Link>

        <nav className="hdr-nav" aria-label="Main">
          {navItems.map(({ label, link }) => (
            <NavLink key={link} to={link} end={link === '/'} className={({ isActive }) => `hdr-nav__link${isActive ? ' is-active' : ''}`}>
              {label}
            </NavLink>
          ))}
        </nav>

        <Link to="/contact" className="aa-btn aa-btn--primary hdr-cta">Free Consultation</Link>

        <button
          type="button"
          className="hdr-burger"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen(o => !o)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div id="mobile-menu" className={`hdr-mobile${isMenuOpen ? ' is-open' : ''}`} hidden={!isMenuOpen}>
        <nav aria-label="Mobile">
          {navItems.map(({ label, link }) => (
            <NavLink key={link} to={link} end={link === '/'} className={({ isActive }) => `hdr-mobile__link${isActive ? ' is-active' : ''}`}>
              {label}
            </NavLink>
          ))}
        </nav>
        <Link to="/contact" className="aa-btn aa-btn--primary" style={{ width: '100%', marginTop: '1rem' }}>Get a Free Consultation</Link>
        <div className="hdr-mobile__contact">
          <a href={`mailto:${t('contactInfo.email')}`}><MdEmail aria-hidden="true" /> {t('contactInfo.email')}</a>
          <a href="tel:+14245427170"><MdCall aria-hidden="true" /> {t('contactInfo.phone')}</a>
          {languageSelect('lang-mobile')}
        </div>
      </div>
    </header>
  );
};

export default Header;
