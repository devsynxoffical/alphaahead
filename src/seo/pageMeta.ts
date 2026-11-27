export type PageType = 'home' | 'about' | 'page' | 'service' | 'article' | 'location' | 'listing' | 'contact' | 'notfound';

export interface PageMeta {
  title: string; // <title>, keep <= 60 chars
  description: string; // meta description, keep <= 155 chars
  type: PageType;
  breadcrumb?: string;
  /** schema.org Service name for service pages */
  serviceName?: string;
  serviceType?: string;
  image?: string;
  noindex?: boolean;
  /** Breadcrumb parent (defaults to Services for service pages) */
  parent?: { name: string; path: string };
}

export const PAGE_META: Record<string, PageMeta> = {
  '/': {
    title: 'Alpha Ahead | Virtual Assistant Agency for US & UAE',
    description:
      'Virtual assistant agency for founders, executives and small teams: executive VAs, bookkeeping, appointment setting and B2B cold calling on US or UAE hours.',
    type: 'home',
  },
  '/other-services': {
    title: 'Digital, Design & IT Support Services | Alpha Ahead',
    description:
      'SEO, web development, digital marketing, graphic design, video editing and remote IT support from the Alpha Ahead team, on US or UAE business hours.',
    type: 'listing',
    breadcrumb: 'Other Services',
    noindex: true,
  },
  '/industries': {
    title: 'Virtual Assistants by Industry | Alpha Ahead',
    description: 'Virtual assistants for insurance agents, startups, coaches, lawyers and accountants, plus sister brands for real estate and medical practices.',
    type: 'listing',
    breadcrumb: 'Industries',
  },
  '/sitemap': {
    title: 'Sitemap | Alpha Ahead LLC',
    description: 'All pages on the Alpha Ahead website: virtual assistant and cold calling services, Dubai pages, guides, case studies and company pages.',
    type: 'page',
    breadcrumb: 'Sitemap',
  },
  '/about': {
    title: 'About Alpha Ahead LLC | Founders, Offices & Approach',
    description:
      'Alpha Ahead LLC is a US-registered virtual assistant agency founded by Shehreyar Khan, with offices in St. Petersburg FL, Dubai and Islamabad.',
    type: 'about',
    breadcrumb: 'About Us',
  },
  '/services': {
    title: 'Outsourcing & Digital Services | Alpha Ahead LLC',
    description:
      'Outsourced services for US & UAE businesses: virtual assistants, appointment setting, cold calling, bookkeeping VAs, lead generation and more.',
    type: 'listing',
    breadcrumb: 'Services',
  },
  '/projects': {
    title: 'Our Projects & Brands | Alpha Ahead LLC',
    description:
      'Zingo Assist, Alpha Medi Assist, Learn with Alpha and Alpha Ahead Real Estate: the ventures built and run by Alpha Ahead LLC.',
    type: 'page',
    breadcrumb: 'Projects',
  },
  '/clients': {
    title: 'Clients & Portfolio | Alpha Ahead LLC',
    description:
      'See the businesses Alpha Ahead supports across real estate, healthcare, education, logistics and financial services in the US and UAE.',
    type: 'page',
    breadcrumb: 'Clients',
  },
  '/team': {
    title: 'Meet Our Team | Alpha Ahead LLC',
    description:
      'Meet the Alpha Ahead team of virtual assistants, appointment setters, callers, marketers and developers serving clients in the US and UAE.',
    type: 'page',
    breadcrumb: 'Our Team',
  },
  '/careers': {
    title: 'Careers – Remote & Office Jobs | Alpha Ahead LLC',
    description:
      'Join Alpha Ahead: open roles for virtual assistants, cold callers, appointment setters, marketers and developers in Islamabad and remote.',
    type: 'page',
    breadcrumb: 'Careers',
  },
  '/contact': {
    title: 'Contact Alpha Ahead | US, Dubai & Islamabad Offices',
    description:
      'Contact Alpha Ahead LLC in St. Petersburg FL, Dubai UAE or Islamabad. Call +1 424-542-7170 or email info@alphaaheadllc.com for a free consultation.',
    type: 'contact',
    breadcrumb: 'Contact Us',
  },
  '/staff': {
    title: 'External Staff | Alpha Ahead LLC',
    description: 'Alpha Ahead external staff directory.',
    type: 'page',
    breadcrumb: 'Staff',
    noindex: true,
  },
  '/blog': {
    title: 'Blog – Outsourcing, Virtual Assistant & Growth Guides',
    description:
      'Practical guides on hiring and onboarding virtual assistants, appointment setters, cold callers and offshore teams, from the Alpha Ahead team.',
    type: 'listing',
    breadcrumb: 'Blog',
  },
  '/case-studies': {
    title: 'Case Studies | Alpha Ahead LLC',
    description:
      'How Alpha Ahead built and scaled Zingo Assist, Alpha Medi Assist and Learn with Alpha: the strategy, services and results behind each project.',
    type: 'listing',
    breadcrumb: 'Case Studies',
  },

  // Service pages
  '/virtual-assistant': {
    title: 'Dedicated Virtual Assistant Services | US & UAE Hours',
    description:
      'Virtual assistant services from a managed agency: a dedicated assistant for admin, inbox, calendar and CRM management, working your US or UAE hours.',
    type: 'service',
    breadcrumb: 'Virtual Assistant Services',
    serviceName: 'Virtual Assistant Services',
    serviceType: 'Virtual assistant',
  },
  '/cold-calling': {
    title: 'B2B Cold Calling Services With Trained US-Hours Callers',
    description:
      'B2B cold calling services for SaaS, agencies, insurance, solar and home services: trained callers on US hours who qualify leads and book meetings.',
    type: 'service',
    breadcrumb: 'Cold Calling Services',
    serviceName: 'Cold Calling Services',
    serviceType: 'Telemarketing and appointment setting',
  },
  '/personal-assistant': {
    title: 'Personal Virtual Assistant Services | Alpha Ahead',
    description:
      'A personal virtual assistant for your calendar, travel, inbox, research and life admin, so you get hours back every week. Vetted, managed and confidential.',
    type: 'service',
    breadcrumb: 'Personal Assistant Services',
    serviceName: 'Personal Assistant Services',
    serviceType: 'Personal assistant',
  },
  '/lead-generation': {
    title: 'Lead Generation Services | B2B Outsourced Lead Gen',
    description:
      'B2B lead generation services: targeted list building, cold calling, email outreach and follow-up, with qualified leads delivered straight to your CRM.',
    type: 'service',
    breadcrumb: 'Lead Generation Services',
    serviceName: 'Lead Generation Services',
    serviceType: 'Lead generation',
  },
};
