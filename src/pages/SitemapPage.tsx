import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../seo/services';
import { PAGE_META } from '../seo/pageMeta';
import { RICH_LANDINGS } from '../content/richLandings';
import { BLOG_POSTS } from '../content/blog';
import { CASE_STUDIES } from '../content/caseStudies';
import { LOCATION_PAGES } from '../content/locations';
import { articlePath } from '../content/types';
import './AboutPage.css';

const indexable = (path: string) => !PAGE_META[path]?.noindex;

const COMPANY: [string, string][] = [
  ['Home', '/'], ['About Us', '/about'], ['Services', '/services'], ['Case Studies', '/case-studies'], ['Blog', '/blog'],
  ['Clients', '/clients'], ['Projects', '/projects'], ['Our Team', '/team'], ['Careers', '/careers'], ['Contact Us', '/contact'],
];

/** Human-readable (HTML) sitemap: every indexable page, grouped. */
const SitemapPage: React.FC = () => {
  const groups: { title: string; links: [string, string][] }[] = [
    { title: 'Company', links: COMPANY },
    {
      title: 'Services',
      links: [
        ...SERVICES.filter(s => indexable(s.path)).map(s => [s.name, s.path] as [string, string]),
        ...RICH_LANDINGS.filter(r => !r.industry).map(r => [r.serviceName, `/${r.slug}`] as [string, string]),
      ],
    },
    { title: 'Industries', links: [['All industries', '/industries'] as [string, string], ...RICH_LANDINGS.filter(r => r.industry).map(r => [r.serviceName, `/${r.slug}`] as [string, string])] },
    { title: 'Locations', links: LOCATION_PAGES.map(l => [l.title.split(':')[0], articlePath(l)] as [string, string]) },
    { title: 'Guides', links: BLOG_POSTS.map(b => [b.title, articlePath(b)] as [string, string]) },
    { title: 'Case Studies', links: CASE_STUDIES.map(c => [c.title.split(':')[0], articlePath(c)] as [string, string]) },
  ];
  return (
    <>
      <section className="about-hero">
        <div className="aa-container about-hero__inner">
          <p className="aa-eyebrow" style={{ color: '#ffb48c' }}>Sitemap</p>
          <h1>Alpha Ahead Sitemap</h1>
          <p className="about-hero__lead">Every page on alphaaheadllc.com, grouped by topic.</p>
        </div>
      </section>
      <section className="aa-section">
        <div className="aa-container aa-grid">
          {groups.map(g => (
            <nav key={g.title} className="aa-card" aria-label={g.title}>
              <h2 className="aa-card__title">{g.title}</h2>
              <ul className="about-list" style={{ gap: '.5rem' }}>
                {g.links.map(([label, to]) => <li key={to}><Link to={to} className="about-link">{label}</Link></li>)}
              </ul>
            </nav>
          ))}
          <nav className="aa-card" aria-label="Sister brands">
            <h2 className="aa-card__title">Sister brands</h2>
            <ul className="about-list" style={{ gap: '.5rem' }}>
              <li><a className="about-link" href="https://zingoassist.us/">Zingo Assist (real estate)</a></li>
              <li><a className="about-link" href="https://alphamediassist.com/">Alpha Medi Assist (medical practices)</a></li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
};

export default SitemapPage;
