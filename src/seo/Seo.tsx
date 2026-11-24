import React from 'react';
import { useLocation } from 'react-router-dom';
import { resolveMeta, ResolvedMeta } from './registry';
import { absUrl, DEFAULT_IMAGE, EMAIL, LOGO_URL, OFFICES, PHONE_US, SITE_NAME, SITE_URL, SOCIAL_PROFILES } from './site';
import { SERVICES } from './services';
import { articlePath } from '../content/types';

const ORG_ID = `${SITE_URL}/#organization`;

const postalAddress = (o: (typeof OFFICES)[number]) => ({
  '@type': 'PostalAddress',
  streetAddress: o.street,
  addressLocality: o.city,
  ...(o.region ? { addressRegion: o.region } : {}),
  ...(o.postalCode ? { postalCode: o.postalCode } : {}),
  addressCountry: o.country,
});

const organization = () => ({
  '@type': 'ProfessionalService',
  '@id': ORG_ID,
  name: SITE_NAME,
  alternateName: 'Alpha Ahead',
  url: `${SITE_URL}/`,
  logo: LOGO_URL,
  image: LOGO_URL,
  email: EMAIL,
  telephone: PHONE_US,
  description:
    'US-registered outsourcing and digital agency providing virtual assistants, appointment setting, cold calling, bookkeeping assistants, lead generation, SEO, web development and digital marketing for US and UAE businesses.',
  address: postalAddress(OFFICES[0]),
  areaServed: ['United States', 'United Arab Emirates', 'Canada', 'United Kingdom'],
  sameAs: SOCIAL_PROFILES,
  founder: { '@type': 'Person', name: 'Shehreyar Khan', jobTitle: 'Director and Founder' },
  employee: [
    { '@type': 'Person', name: 'Shehreyar Khan', jobTitle: 'Director and Founder' },
    { '@type': 'Person', name: 'Ehtisham Shoukat', jobTitle: 'Enterprise Portfolio Manager / Co-Founder' },
    { '@type': 'Person', name: 'Nimra Said Khan', jobTitle: 'Operations Manager' },
  ],
  contactPoint: [
    { '@type': 'ContactPoint', contactType: 'sales', telephone: PHONE_US, email: EMAIL, areaServed: ['US', 'CA'], availableLanguage: ['English'] },
    { '@type': 'ContactPoint', contactType: 'sales', telephone: OFFICES[1].phone, email: EMAIL, areaServed: 'AE', availableLanguage: ['English', 'Urdu'] },
  ],
  knowsAbout: [
    'Virtual assistant services', 'Appointment setting', 'Cold calling', 'Bookkeeping virtual assistants', 'Executive virtual assistants',
    'Lead generation', 'CRM management', 'Virtual property management', 'Search engine optimization', 'Web development', 'Digital marketing',
  ],
  department: OFFICES.map(o => ({
    '@type': 'ProfessionalService',
    name: o.name,
    telephone: o.phone,
    address: postalAddress(o),
  })),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Outsourcing & Digital Services',
    itemListElement: SERVICES.map(s => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.name, url: absUrl(s.path) },
    })),
  },
});

const website = () => ({
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: SITE_NAME,
  publisher: { '@id': ORG_ID },
  inLanguage: 'en',
});

const breadcrumb = (meta: ResolvedMeta) => {
  const items: { name: string; path: string }[] = [{ name: 'Home', path: '/' }];
  const a = meta.article;
  if (a) {
    if (a.kind === 'blog') items.push({ name: 'Blog', path: '/blog' });
    if (a.kind === 'case-study') items.push({ name: 'Case Studies', path: '/case-studies' });
  } else if (meta.parent) {
    items.push(meta.parent);
  } else if (meta.type === 'service') {
    items.push({ name: 'Services', path: '/services' });
  }
  items.push({ name: meta.breadcrumb || meta.title, path: meta.path });
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: absUrl(it.path),
    })),
  };
};

function buildGraph(meta: ResolvedMeta): object[] {
  const url = absUrl(meta.path);
  const graph: object[] = [];

  if (meta.type === 'home') {
    graph.push(organization(), website());
  }
  if (meta.type === 'about') {
    graph.push(organization());
    graph.push({ '@type': 'AboutPage', '@id': `${url}#webpage`, url, name: meta.title, about: { '@id': ORG_ID }, mainEntity: { '@id': ORG_ID } });
  }
  if (meta.type === 'contact') {
    graph.push(organization());
    graph.push({ '@type': 'ContactPage', '@id': `${url}#webpage`, url, name: meta.title, about: { '@id': ORG_ID } });
  }
  if (meta.type === 'service') {
    graph.push({
      '@type': 'Service',
      '@id': `${url}#service`,
      name: meta.serviceName,
      serviceType: meta.serviceType,
      description: meta.description,
      url,
      provider: { '@type': 'ProfessionalService', '@id': ORG_ID, name: SITE_NAME, url: `${SITE_URL}/` },
      areaServed: ['United States', 'United Arab Emirates'],
    });
  }
  const a = meta.article;
  if (a && (a.kind === 'blog' || a.kind === 'case-study')) {
    graph.push({
      '@type': a.kind === 'blog' ? 'BlogPosting' : 'Article',
      '@id': `${url}#article`,
      headline: a.title,
      description: a.metaDescription,
      image: absUrl(encodeURI(a.image)),
      datePublished: a.datePublished,
      dateModified: a.dateModified || a.datePublished,
      author: { '@type': 'Organization', '@id': ORG_ID, name: SITE_NAME, url: `${SITE_URL}/about` },
      publisher: { '@type': 'Organization', name: SITE_NAME, logo: { '@type': 'ImageObject', url: LOGO_URL } },
      mainEntityOfPage: url,
      keywords: a.primaryKeyword,
    });
  }
  if (a && a.kind === 'location') {
    const office = OFFICES.find(o => o.id === a.officeId);
    graph.push({
      '@type': 'ProfessionalService',
      '@id': `${url}#localbusiness`,
      name: office ? office.name : SITE_NAME,
      url,
      image: LOGO_URL,
      email: EMAIL,
      telephone: office ? office.phone : PHONE_US,
      ...(office ? { address: postalAddress(office) } : {}),
      areaServed: a.areaServed,
      parentOrganization: { '@id': ORG_ID, name: SITE_NAME },
      description: a.metaDescription,
    });
  }
  if (meta.faqs && meta.faqs.length) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: meta.faqs.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1') },
      })),
    });
  }
  if (meta.type !== 'home' && meta.type !== 'notfound') graph.push(breadcrumb(meta));
  return graph;
}

/**
 * Renders per-route <title>, meta, canonical, Open Graph and JSON-LD.
 * React 19 hoists <title>/<meta>/<link> into <head>. Tags carry data-seo so the
 * prerendered copies can be removed before the client renders (see index.tsx).
 */
const Seo: React.FC = () => {
  const { pathname } = useLocation();
  const meta = resolveMeta(pathname);
  const url = absUrl(meta.path);
  const image = meta.image ? absUrl(encodeURI(meta.image)) : DEFAULT_IMAGE;
  const graph = buildGraph(meta);
  const ogType = meta.article && (meta.article.kind === 'blog' || meta.article.kind === 'case-study') ? 'article' : 'website';

  return (
    <>
      <title data-seo="">{meta.title}</title>
      <meta data-seo="" name="description" content={meta.description} />
      <meta data-seo="" name="robots" content={meta.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'} />
      {!meta.noindex && <link data-seo="" rel="canonical" href={url} />}
      <meta data-seo="" property="og:type" content={ogType} />
      <meta data-seo="" property="og:site_name" content={SITE_NAME} />
      <meta data-seo="" property="og:title" content={meta.title} />
      <meta data-seo="" property="og:description" content={meta.description} />
      <meta data-seo="" property="og:url" content={url} />
      <meta data-seo="" property="og:image" content={image} />
      {meta.article && (
        <meta data-seo="" property="article:modified_time" content={meta.article.dateModified || meta.article.datePublished} />
      )}
      <meta data-seo="" name="twitter:card" content="summary_large_image" />
      <meta data-seo="" name="twitter:title" content={meta.title} />
      <meta data-seo="" name="twitter:description" content={meta.description} />
      <meta data-seo="" name="twitter:image" content={image} />
      {graph.length > 0 && (
        <script
          type="application/ld+json"
          // JSON.stringify output is safe here; '<' is escaped to avoid closing the script tag.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c'),
          }}
        />
      )}
    </>
  );
};

export default Seo;

export const pathOfArticle = articlePath;
