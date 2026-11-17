export type PageType = 'home' | 'page' | 'service' | 'article' | 'location' | 'listing' | 'contact' | 'notfound';

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
    title: 'Alpha Ahead | Virtual Assistants & Outsourcing Agency',
    description:
      'Alpha Ahead LLC provides virtual assistants, cold callers, transaction coordinators, lead generation and digital marketing for US & UAE businesses.',
    type: 'home',
  },
  '/services': {
    title: 'Outsourcing & Digital Services | Alpha Ahead LLC',
    description:
      'Explore 13 outsourced services: virtual assistants, cold calling, real estate transaction coordination, lead generation, SEO, web development and more.',
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
      'Meet the Alpha Ahead team of virtual assistants, callers, transaction coordinators, marketers and developers serving clients worldwide.',
    type: 'page',
    breadcrumb: 'Our Team',
  },
  '/careers': {
    title: 'Careers – Remote & Office Jobs | Alpha Ahead LLC',
    description:
      'Join Alpha Ahead: open roles for virtual assistants, cold callers, transaction coordinators, marketers and developers in Islamabad and remote.',
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
    title: 'Blog – Outsourcing, Real Estate & Marketing Guides',
    description:
      'Practical guides on hiring virtual assistants, real estate transaction coordination, cold calling, lead generation and SEO from the Alpha Ahead team.',
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
      'Hire a dedicated, managed virtual assistant who works your US or UAE hours. Admin, inbox, calendar, CRM and real estate support from Alpha Ahead.',
    type: 'service',
    breadcrumb: 'Virtual Assistant Services',
    serviceName: 'Virtual Assistant Services',
    serviceType: 'Virtual assistant',
  },
  '/cold-calling': {
    title: 'Real Estate Cold Calling Services for Agents & Investors',
    description:
      'Trained cold callers for realtors, wholesalers and investors. Prospecting, lead qualification, appointment setting and CRM updates. Get a free quote.',
    type: 'service',
    breadcrumb: 'Cold Calling Services',
    serviceName: 'Cold Calling Services',
    serviceType: 'Telemarketing and appointment setting',
  },
  '/personal-assistant': {
    title: 'Remote Personal Assistant Services for Busy Executives',
    description:
      'A remote personal assistant to handle your calendar, travel, inbox, research and follow-ups, so you get hours back every week. Vetted, managed assistants.',
    type: 'service',
    breadcrumb: 'Personal Assistant Services',
    serviceName: 'Personal Assistant Services',
    serviceType: 'Personal assistant',
  },
  '/business-assistant': {
    title: 'Virtual Business Assistant for Small Businesses',
    description:
      'Outsource admin, bookkeeping support, data entry, reporting and customer emails to a trained virtual business assistant. Part-time or full-time plans.',
    type: 'service',
    breadcrumb: 'Virtual Business Assistant',
    serviceName: 'Virtual Business Assistant Services',
    serviceType: 'Back-office support',
  },
  '/property-management': {
    title: 'Virtual Property Management Assistant Services',
    description:
      'Remote assistants for property managers: tenant communication, rent reminders, maintenance coordination, lease renewals, listings and reporting.',
    type: 'service',
    breadcrumb: 'Virtual Property Management',
    serviceName: 'Virtual Property Management Services',
    serviceType: 'Property management support',
  },
  '/lead-generation': {
    title: 'Outsourced Real Estate & B2B Lead Generation Services',
    description:
      'Motivated seller, buyer and B2B leads from targeted list building, cold calling and follow-up, qualified and delivered straight to your CRM.',
    type: 'service',
    breadcrumb: 'Lead Generation Services',
    serviceName: 'Lead Generation Services',
    serviceType: 'Lead generation',
  },
  '/transaction-coordinator': {
    title: 'Remote Transaction Coordinator for Realtors',
    description:
      'Contract to close managed by a remote transaction coordinator: deadlines, disclosures, documents, compliance and client updates. Close more deals.',
    type: 'service',
    breadcrumb: 'Real Estate Transaction Coordinator',
    serviceName: 'Real Estate Transaction Coordination',
    serviceType: 'Real estate transaction coordination',
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
