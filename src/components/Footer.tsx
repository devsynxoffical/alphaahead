import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { MdEmail, MdCall } from 'react-icons/md';
import { SERVICES } from '../seo/services';
import { OFFICES } from '../seo/site';
import { LOCATION_PAGES } from '../content/locations';
import { articlePath } from '../content/types';
import './Footer.css';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const year = String(new Date().getFullYear());

  return (
    <footer className="ftr">
      <div className="aa-container ftr-grid">
        <div className="ftr-brand">
          <Link to="/" className="ftr-logo" aria-label="Alpha Ahead LLC home">
            <img src="/alphawebsitemainlogo.png" alt="Alpha Ahead LLC logo" width={130} height={48} loading="lazy" />
          </Link>
          <p className="ftr-about">{t('footer.bottom')}</p>
          <div className="ftr-contact">
            <a href={`mailto:${t('contactInfo.email')}`}><MdEmail aria-hidden="true" /> {t('contactInfo.email')}</a>
            <a href="tel:+14245427170"><MdCall aria-hidden="true" /> +1 {t('contactInfo.phone')}</a>
          </div>
          <div className="ftr-social">
            <a href="https://www.facebook.com/alphaahead" target="_blank" rel="noopener noreferrer" aria-label="Alpha Ahead on Facebook"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://www.instagram.com/alpha_ahead_official/" target="_blank" rel="noopener noreferrer" aria-label="Alpha Ahead on Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.linkedin.com/company/105228080/" target="_blank" rel="noopener noreferrer" aria-label="Alpha Ahead on LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
          <Link to="/contact" className="aa-btn aa-btn--primary ftr-cta">{t('footer.button')} <span className="aa-arrow" aria-hidden="true">→</span></Link>
        </div>

        <nav aria-label="Company" className="ftr-col">
          <h2 className="ftr-title">{t('footer.company')}</h2>
          <Link to="/">{t('nav.home')}</Link>
          <Link to="/services">{t('nav.services')}</Link>
          <Link to="/projects">{t('nav.products')}</Link>
          <Link to="/case-studies">Case Studies</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/clients">{t('nav.clients')}</Link>
          <Link to="/team">{t('nav.team')}</Link>
          <Link to="/careers">{t('nav.careers')}</Link>
          <Link to="/contact">{t('nav.contact')}</Link>
        </nav>

        <nav aria-label="Services" className="ftr-col">
          <h2 className="ftr-title">{t('footer.solutions')}</h2>
          {SERVICES.map(s => (
            <Link key={s.path} to={s.path}>{s.name}</Link>
          ))}
        </nav>

        <div className="ftr-col">
          <h2 className="ftr-title">Locations</h2>
          {LOCATION_PAGES.map(l => (
            <Link key={l.slug} to={articlePath(l)}>{l.title.split(':')[0]}</Link>
          ))}
          <address className="ftr-offices">
            {OFFICES.map(o => (
              <span key={o.id}>
                <strong>{o.city}</strong>
                {o.street}, {o.city}{o.region ? `, ${o.region}` : ''} {o.postalCode || ''}, {o.countryName}
              </span>
            ))}
          </address>
        </div>
      </div>

      <div className="ftr-bottom">
        <div className="aa-container">
          <p>{t('footer.copyright').replace(/20\d\d/, year)}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
