import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaCheckCircle, FaClock, FaRocket } from 'react-icons/fa';
import { SERVICE_SUMMARIES } from '../../content/serviceSummaries';
import { serviceByPath } from '../../seo/services';
import './ServiceSummary.css';

const QUESTIONS: Record<string, string> = {
  '/virtual-assistant': 'What are virtual assistant services?',
  '/cold-calling': 'What are B2B cold calling services?',
  '/personal-assistant': 'What does a personal virtual assistant do?',
  '/business-assistant': 'What is an executive virtual assistant?',
  '/property-management': 'What is a property management virtual assistant?',
  '/lead-generation': 'What is outsourced lead generation?',
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
