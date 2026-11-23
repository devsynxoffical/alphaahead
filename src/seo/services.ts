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
  { path: '/other-services', name: 'Other Services', short: 'SEO, web development, digital marketing, design, video editing and IT support.', category: 'digital' },
];

/** Digital and IT services, merged into one page (/other-services) on 23 Nov 2026. */
export const OTHER_SERVICES = [
  { id: 'seo', legacyPath: '/seo', name: 'SEO Services' },
  { id: 'web-development', legacyPath: '/web-development', name: 'Web Development' },
  { id: 'digital-marketing', legacyPath: '/digital-marketing', name: 'Digital Marketing' },
  { id: 'graphic-design', legacyPath: '/graphic-design', name: 'Graphic Design' },
  { id: 'video-editing', legacyPath: '/video-editing', name: 'Video Editing' },
  { id: 'it-support', legacyPath: '/it-support', name: 'IT Support' },
];

export const serviceByPath = (path: string) => SERVICES.find(s => s.path === path);
