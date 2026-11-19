import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPhoneAlt, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';
import './MobileCtaBar.css';

/** Sticky bottom bar on phones: one tap to call, WhatsApp or request a quote. */
const MobileCtaBar: React.FC = () => {
  const { pathname } = useLocation();
  if (pathname === '/contact') return null;
  return (
    <nav className="mcta" aria-label="Quick contact">
      <a href="tel:+14245427170" className="mcta__btn"><FaPhoneAlt aria-hidden="true" /> Call</a>
      <a href="https://wa.me/971505606877" target="_blank" rel="noopener noreferrer" className="mcta__btn"><FaWhatsapp aria-hidden="true" /> WhatsApp</a>
      <Link to="/contact" className="mcta__btn mcta__btn--primary"><FaPaperPlane aria-hidden="true" /> Free quote</Link>
    </nav>
  );
};

export default MobileCtaBar;
