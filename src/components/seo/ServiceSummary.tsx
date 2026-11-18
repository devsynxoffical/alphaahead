import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaCheckCircle, FaClock, FaRocket } from 'react-icons/fa';
import { SERVICE_SUMMARIES } from '../../content/serviceSummaries';
import { serviceByPath } from '../../seo/services';
import './ServiceSummary.css';

const QUESTIONS: Record<string, string> = {
  '/virtual-assistant': 'What are virtual assistant services?',
  '/cold-calling': 'What are real estate cold calling services?',
  '/personal-assistant': 'What does a remote personal assistant do?',
  '/business-assistant': 'What is a virtual business assistant?',
  '/property-management': 'What is a virtual property management assistant?',
  '/lead-generation': 'What is outsourced lead generation?',
  '/transaction-coordinator': 'What is a remote transaction coordinator?',
  '/seo': 'What do SEO services include?',
  '/web-development': 'What do web development services include?',
  '/digital-marketing': 'What does a digital marketing agency do?',
  '/graphic-design': 'What do graphic design services include?',
  '/video-editing': 'What are video editing services?',
  '/it-support': 'What is remote IT support?',
};

/** Answer-first "at a glance" box shown right after a service page hero (AEO). */
const ServiceSummary: React.FC = () => {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/+$/, '');
  const summary = SERVICE_SUMMARIES[path];
  const service = serviceByPath(path);
  if (!summary || !service) return null;
  return (
    <section className="svc-sum" aria-labelledby="svc-sum-title">
      <div className="aa-container">
        <div className="svc-sum__card">
          <div className="svc-sum__lead">
            <p className="aa-eyebrow">At a glance</p>
            <h2 id="svc-sum-title" className="svc-sum__title">{QUESTIONS[path] || service.name}</h2>
            <p className="svc-sum__def">{summary.definition}</p>
            <div className="svc-sum__meta">
              <p><FaClock aria-hidden="true" /> {summary.hours}</p>
              <p><FaRocket aria-hidden="true" /> {summary.howToStart}</p>
            </div>
            <Link to="/contact" className="aa-btn aa-btn--primary">Get a free consultation <span className="aa-arrow" aria-hidden="true">→</span></Link>
          </div>
          <div className="svc-sum__cols">
            <div>
              <h3>Best for</h3>
              <ul>{summary.bestFor.map(b => <li key={b}><FaCheckCircle aria-hidden="true" /> {b}</li>)}</ul>
            </div>
            <div>
              <h3>Typical tasks</h3>
              <ul>{summary.tasks.map(t => <li key={t}><FaCheckCircle aria-hidden="true" /> {t}</li>)}</ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSummary;
