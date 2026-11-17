// Single source of truth for business facts used in meta tags and schema.org markup.

export const SITE_URL = 'https://alphaaheadllc.com';
export const SITE_NAME = 'Alpha Ahead LLC';
export const LOGO_URL = `${SITE_URL}/alphawebsitemainlogo.png`;
export const DEFAULT_IMAGE = `${SITE_URL}/homebackground.jpeg`;
export const EMAIL = 'info@alphaaheadllc.com';
export const PHONE_US = '+1-424-542-7170';

export const SOCIAL_PROFILES = [
  'https://www.facebook.com/alphaahead',
  'https://www.instagram.com/alpha_ahead_official/',
  'https://www.linkedin.com/company/105228080/',
];

export interface Office {
  id: string;
  name: string;
  street: string;
  city: string;
  region?: string;
  postalCode?: string;
  country: string; // ISO 3166-1 alpha-2
  countryName: string;
  phone: string;
  mapUrl: string;
}

export const OFFICES: Office[] = [
  {
    id: 'us',
    name: 'Alpha Ahead LLC – United States',
    street: '7901 4th St N, Ste 23684',
    city: 'St. Petersburg',
    region: 'FL',
    postalCode: '33702',
    country: 'US',
    countryName: 'United States',
    phone: '+1-424-542-7170',
    mapUrl: 'https://maps.google.com/?q=7901+4th+ST+N+Ste+23684,+ST.+Petersburg,+Florida+33702',
  },
  {
    id: 'uae',
    name: 'Alpha Ahead – Dubai, UAE',
    street: 'Office 59, 2nd Floor, First Gulf Business Center, Madina Mall, Muhaisnah',
    city: 'Dubai',
    country: 'AE',
    countryName: 'United Arab Emirates',
    phone: '+971-4-432-3080',
    mapUrl: 'https://maps.google.com/?q=Office+59,+2nd+floor,+first+gulf+business+center,+madina+mall+Muhaisnah,+Dubai',
  },
  {
    id: 'pk',
    name: 'Alpha Ahead – Islamabad, Pakistan',
    street: '206 Service Road East, Sector I-10/3',
    city: 'Islamabad',
    country: 'PK',
    countryName: 'Pakistan',
    phone: '+92-345-0195401',
    mapUrl: 'https://maps.google.com/?q=206,+Service+Road+East,+Sector+I-10/3,+Islamabad',
  },
];

export const absUrl = (path: string) => (path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`);
