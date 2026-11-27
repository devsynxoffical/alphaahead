// Results shown on the homepage. ONLY real, verifiable figures belong here.
// To add your own numbers (clients served, team size, appointments booked...),
// add an entry: { value: 120, suffix: '+', label: 'Clients served' }
export interface ResultStat {
  value: number;
  suffix?: string;
  label: string;
}

export const RESULTS: ResultStat[] = [
  { value: 11, suffix: '+', label: 'Brands & clients built and supported' },
  { value: 5, label: 'Industry specialisms: insurance, startups, coaches, legal & accounting' },
  { value: 3, label: 'Offices: St. Petersburg, Dubai & Islamabad' },
  { value: 2, label: 'Regions covered in business hours: US & UAE' },
];
