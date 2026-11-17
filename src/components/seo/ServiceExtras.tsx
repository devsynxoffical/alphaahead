import React from 'react';
import { useLocation } from 'react-router-dom';
import { SERVICE_FAQS } from '../../seo/faqs';
import { serviceByPath, SERVICES } from '../../seo/services';
import FaqSection from './FaqSection';
import RelatedServices from './RelatedServices';

/** Appended to every service page: visible FAQs (with FAQPage schema via <Seo>) + related service links. */
const ServiceExtras: React.FC = () => {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/+$/, '');
  const service = serviceByPath(path);
  const faqs = SERVICE_FAQS[path] || [];
  const related = service ? SERVICES.filter(s => s.category === service.category && s.path !== path).map(s => s.path) : undefined;
  return (
    <>
      {faqs.length > 0 && <FaqSection faqs={faqs} title={service ? `${service.name}: FAQs` : undefined} />}
      <RelatedServices paths={related} exclude={path} />
    </>
  );
};

export default ServiceExtras;
