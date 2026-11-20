import React from 'react';
import { Link } from 'react-router-dom';
import { FaDatabase, FaBroom, FaProjectDiagram, FaChartBar } from 'react-icons/fa';

/** CRM management services (keyword map P2: "crm management services") shown on /virtual-assistant. */
const ITEMS = [
  { icon: <FaDatabase />, title: 'Data entry and updates', text: 'New leads, contacts, deals and notes entered the same day, with the fields your team relies on filled in.' },
  { icon: <FaBroom />, title: 'Cleanup and deduplication', text: 'Duplicate contacts merged, dead leads archived, missing emails and phone numbers researched and fixed.' },
  { icon: <FaProjectDiagram />, title: 'Pipeline hygiene', text: 'Deal stages, owners and next steps kept current so forecasts and follow-ups are based on real data.' },
  { icon: <FaChartBar />, title: 'Reports and dashboards', text: 'Weekly pipeline and activity reports prepared from your CRM for your review.' },
];

const linkStyle: React.CSSProperties = { color: 'var(--aa-orange)', fontWeight: 700 };

const CrmSection: React.FC = () => (
  <section className="aa-section aa-section--soft" id="crm-management">
    <div className="aa-container">
      <div className="aa-head aa-center reveal">
        <p className="aa-eyebrow">CRM management services</p>
        <h2 className="aa-h2">A virtual assistant who keeps your CRM clean</h2>
        <p className="aa-lead">
          Your CRM is only useful if the data is right. A virtual assistant can own CRM management in tools such as HubSpot,
          Salesforce, Zoho or GoHighLevel, working inside your account with their own login. Pair it with{' '}
          <Link to="/appointment-setting" style={linkStyle}>appointment setting</Link> or <Link to="/lead-generation" style={linkStyle}>lead generation</Link> so new
          leads are entered and followed up from day one.
        </p>
      </div>
      <div className="aa-grid">
        {ITEMS.map((it, i) => (
          <div key={it.title} className={`aa-card reveal reveal-d${i % 4}`}>
            <span className="aa-icon" aria-hidden="true">{it.icon}</span>
            <h3 className="aa-card__title">{it.title}</h3>
            <p className="aa-card__text">{it.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CrmSection;
