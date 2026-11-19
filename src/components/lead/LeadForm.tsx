import React, { useState } from 'react';
import { FaCheckCircle, FaLock } from 'react-icons/fa';
import { SERVICES } from '../../seo/services';
import { getAttribution } from '../../utils/attribution';
import { track } from '../../utils/track';
import './LeadForm.css';

interface Props {
  /** Pre-selected service name */
  service?: string;
  title?: string;
  subtitle?: string;
  /** Where the form sits (sent with the lead and the analytics event) */
  placement: string;
  compact?: boolean;
  dark?: boolean;
}

/** Short lead form used on service, landing and article pages. Posts to /api/lead.php. */
const LeadForm: React.FC<Props> = ({
  service = '',
  title = 'Get a free consultation',
  subtitle = 'Tell us what you need. We reply within one business day.',
  placement,
  compact = false,
  dark = false,
}) => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');
  const [error, setError] = useState('');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'sending') return;
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    const attribution = getAttribution();
    setStatus('sending');
    setError('');
    try {
      const res = await fetch('/api/lead.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'contact',
          ...data,
          inquiryType: `Website form (${placement})`,
          subject: data.service ? `Quote request: ${data.service}` : 'Quote request',
          page: window.location.pathname,
          ...attribution,
        }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok || !body.ok) throw new Error(body.error || '');
      track('generate_lead', { form: placement, service: data.service || '', landing_page: attribution.landing });
      form.reset();
      setStatus('done');
    } catch (err) {
      setError(
        (err instanceof Error && err.message) ||
          'Sorry, that did not go through. Please email info@alphaaheadllc.com or call +1 424-542-7170.'
      );
      setStatus('error');
      track('lead_error', { form: placement });
    }
  };

  if (status === 'done') {
    return (
      <div className={`lf lf--done${dark ? ' lf--dark' : ''}`} role="status">
        <FaCheckCircle aria-hidden="true" className="lf__done-icon" />
        <p className="lf__title">Thank you, we got your request.</p>
        <p className="lf__sub">Our team will contact you within one business day. Need us sooner? Call <a href="tel:+14245427170">+1 424-542-7170</a>.</p>
      </div>
    );
  }

  return (
    <form className={`lf${compact ? ' lf--compact' : ''}${dark ? ' lf--dark' : ''}`} onSubmit={onSubmit} aria-label={title}>
      <p className="lf__title">{title}</p>
      {subtitle && <p className="lf__sub">{subtitle}</p>}
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="lf__hp" />
      <div className="lf__grid">
        <label className="lf__field">
          <span>Name *</span>
          <input name="name" type="text" required autoComplete="name" placeholder="Your name" />
        </label>
        <label className="lf__field">
          <span>Email *</span>
          <input name="email" type="email" required autoComplete="email" placeholder="you@company.com" />
        </label>
        <label className="lf__field">
          <span>Phone</span>
          <input name="phone" type="tel" autoComplete="tel" placeholder="+1 555 000 0000" />
        </label>
        <label className="lf__field">
          <span>Service</span>
          <select name="service" defaultValue={service}>
            <option value="">Not sure yet</option>
            {SERVICES.map(s => <option key={s.path} value={s.name}>{s.name}</option>)}
            {service && !SERVICES.some(s => s.name === service) && <option value={service}>{service}</option>}
          </select>
        </label>
      </div>
      {!compact && (
        <label className="lf__field">
          <span>What do you need help with? *</span>
          <textarea name="message" required rows={3} placeholder="E.g. a cold caller for 20 hours/week on US Eastern time" />
        </label>
      )}
      {compact && <input type="hidden" name="message" value="Requested a free consultation (short form)." />}
      {error && <p className="lf__error" role="alert">{error}</p>}
      <button type="submit" className="aa-btn aa-btn--primary lf__submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Get my free consultation'} <span className="aa-arrow" aria-hidden="true">→</span>
      </button>
      <p className="lf__privacy"><FaLock aria-hidden="true" /> No spam. We only use your details to reply to this request.</p>
    </form>
  );
};

export default LeadForm;
