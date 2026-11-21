import React from 'react';
import './PreferredSourceButton.css';

/** Link to Google's "Preferred sources" page for this site (Top Stories personalization). */
export const PREFERRED_SOURCE_URL = 'https://www.google.com/preferences/source?q=alphaaheadllc.com';

const PreferredSourceButton: React.FC<{ label?: string; className?: string }> = ({
  label = 'Make Alpha Ahead a preferred source on Google',
  className = '',
}) => (
  <a
    href={PREFERRED_SOURCE_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`gps-btn ${className}`.trim()}
    aria-label={`${label} (opens Google in a new tab)`}
  >
    <span className="gps-btn__g" aria-hidden="true">G</span>
    <span>{label}</span>
  </a>
);

export default PreferredSourceButton;
