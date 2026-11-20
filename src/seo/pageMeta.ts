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
}

export const PAGE_META: Record<string, PageMeta> = {
  '/': {
    title: 'Alpha Ahead | Virtual Assistant Agency & Outsourcing Company',
    description:
      'Virtual assistant agency for US & UAE businesses: dedicated virtual assistants, appointment setters, cold callers, bookkeeping VAs and lead generation.',
    type: 'home',
  },
  '/about': {
    title: 'About Alpha Ahead LLC | Founders, Offices & Approach',
    description:
      'Alpha Ahead LLC is a US-registered outsourcing and digital agency founded by Shehreyar Khan, with offices in St. Petersburg FL, Dubai and Islamabad.',
    type: 'about',
    breadcrumb: 'About Us',
  },
  '/services': {
    title: 'Outsourcing & Digital Services | Alpha Ahead LLC',
    description:
      'Outsourced services for US & UAE businesses: virtual assistants, appointment setting, cold calling, bookkeeping VAs, lead generation, SEO and web development.',
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
    title: 'B2B Cold Calling Services | Outsourced Callers',
    description:
      'Outsourced cold calling services for B2B and service businesses: trained callers who prospect, qualify leads, book meetings and log every call in your CRM.',
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
  '/business-assistant': {
    title: 'Executive Virtual Assistant & Business Assistant Services',
    description:
      'Executive virtual assistants for founders and leaders: inbox, calendar, meeting prep, reporting and back-office support, part-time or full-time plans.',
    type: 'service',
    breadcrumb: 'Executive Virtual Assistant',
    serviceName: 'Executive Virtual Assistant Services',
    serviceType: 'Back-office support',
  },
  '/property-management': {
    title: 'Property Management Virtual Assistant Services',
    description:
      'Virtual property management support: a property management virtual assistant for tenant calls, rent reminders, maintenance, renewals and listings.',
    type: 'service',
    breadcrumb: 'Property Management Virtual Assistant',
    serviceName: 'Property Management Virtual Assistant Services',
    serviceType: 'Property management support',
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
  '/seo': {
    title: 'SEO Services for Real Estate & Local Businesses',
    description:
      'Local SEO, Google Business Profile, technical SEO, content and link building for realtors, property managers and small businesses. Monthly reporting.',
    type: 'service',
    breadcrumb: 'SEO Services',
    serviceName: 'SEO Services',
    serviceType: 'Search engine optimization',
  },
  '/web-development': {
    title: 'Real Estate & Business Website Development',
    description:
      'Fast, mobile-first, SEO-ready websites for realtors, brokerages and small businesses, with property listings, lead forms and custom web apps.',
    type: 'service',
    breadcrumb: 'Web Development',
    serviceName: 'Web Development Services',
    serviceType: 'Web development',
  },
  '/digital-marketing': {
    title: 'Digital Marketing for Real Estate & Small Business',
    description:
      'Social media, Facebook and Google ads, email nurture and content that turn attention into leads, for realtors and small businesses in the US and UAE.',
    type: 'service',
    breadcrumb: 'Digital Marketing',
    serviceName: 'Digital Marketing Services',
    serviceType: 'Digital marketing',
  },
  '/graphic-design': {
    title: 'Real Estate Graphic Design: Flyers, Posts & Branding',
    description:
      'Just-listed flyers, social media posts, brochures, logos and brand identity for agents, brokerages and small businesses. Fast turnaround.',
    type: 'service',
    breadcrumb: 'Graphic Design',
    serviceName: 'Graphic Design Services',
    serviceType: 'Graphic design',
  },
  '/video-editing': {
    title: 'Real Estate Video Editing Services | Reels & YouTube',
    description:
      'Listing videos, Reels, YouTube and ad edits with branded intros, music and captions. Dedicated video editors with fast turnaround for agents and brands.',
    type: 'service',
    breadcrumb: 'Video Editing',
    serviceName: 'Video Editing Services',
    serviceType: 'Video editing',
  },
  '/it-support': {
    title: 'Remote IT Support & Help Desk for Small Businesses',
    description:
      'Remote help desk, Microsoft 365 and Google Workspace admin, device setup, cloud and security support for small offices in the US and UAE.',
    type: 'service',
    breadcrumb: 'IT Support',
    serviceName: 'IT Support Services',
    serviceType: 'IT support',
  },
};
