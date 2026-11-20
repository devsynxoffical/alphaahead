// Every service page, used for internal linking (footer, home, related services) and schema.org.

export interface ServiceLink {
  path: string;
  name: string;
  short: string;
  category: 'staffing' | 'real-estate' | 'digital';
}

export const SERVICES: ServiceLink[] = [
  { path: '/virtual-assistant', name: 'Virtual Assistant Services', short: 'Dedicated remote assistants for admin, CRM, inbox and calendar work.', category: 'staffing' },
  { path: '/cold-calling', name: 'B2B Cold Calling Services', short: 'Trained callers who prospect, qualify and book meetings for your sales team.', category: 'staffing' },
  { path: '/personal-assistant', name: 'Personal Virtual Assistant', short: 'Remote personal assistants for busy founders and executives.', category: 'staffing' },
  { path: '/business-assistant', name: 'Executive Virtual Assistant', short: 'Executive, back-office and operations assistants for leaders.', category: 'staffing' },
  { path: '/lead-generation', name: 'Lead Generation Services', short: 'B2B lead lists, outreach and qualification for your sales team.', category: 'staffing' },
  { path: '/property-management', name: 'Property Management VA', short: 'Remote assistants for tenant communication, leasing and maintenance.', category: 'real-estate' },
  { path: '/seo', name: 'SEO Services', short: 'Technical SEO, content and local SEO that grows organic traffic.', category: 'digital' },
  { path: '/web-development', name: 'Web Development', short: 'Fast, SEO-ready websites and web apps built to convert.', category: 'digital' },
  { path: '/digital-marketing', name: 'Digital Marketing', short: 'Paid ads, social media and content marketing campaigns.', category: 'digital' },
  { path: '/graphic-design', name: 'Graphic Design', short: 'Brand identity, social creatives and marketing collateral.', category: 'digital' },
  { path: '/video-editing', name: 'Video Editing', short: 'Short-form, ads, YouTube and real estate video editing.', category: 'digital' },
  { path: '/it-support', name: 'IT Support', short: 'Remote helpdesk, cloud and infrastructure support.', category: 'digital' },
];

export const serviceByPath = (path: string) => SERVICES.find(s => s.path === path);
