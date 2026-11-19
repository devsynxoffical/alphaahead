import { Faq } from './types';

/** Icon keys available to rich landing pages (mapped to react-icons in RichLandingPage). */
export type IconKey =
  | 'phone' | 'headset' | 'calendar' | 'chart' | 'shield' | 'clock' | 'users' | 'list' | 'target'
  | 'home' | 'dollar' | 'check' | 'globe' | 'chat' | 'file' | 'search' | 'star' | 'rocket';

export interface RichLanding {
  slug: string; // URL is "/" + slug
  /** Service path this page sells (pre-selects the lead form, Service schema, related links) */
  servicePath: string;
  serviceName: string;
  primaryKeyword: string;
  metaTitle: string; // <= 60 chars
  metaDescription: string; // 140-155 chars
  datePublished: string;

  hero: {
    eyebrow: string;
    title: string; // H1
    subtitle: string; // 1-2 sentences, answer-first
    bullets: string[]; // 3-4 short proof/benefit bullets (facts only)
    image: string;
    imageAlt: string;
  };
  /** Problem → solution section */
  problem: { title: string; points: string[] };
  solution: { title: string; paragraphs: string[]; image: string; imageAlt: string };
  /** 6 feature cards */
  features: { icon: IconKey; title: string; text: string }[];
  /** Interactive tabs: e.g. tasks by role/stage/list type */
  tabs: { title: string; intro?: string; items: { label: string; heading: string; points: string[] }[] };
  /** 4 process steps */
  steps: { title: string; text: string }[];
  /** Comparison table */
  comparison: { title: string; columns: string[]; rows: string[][] };
  /** Who it's for: 3 image cards */
  audiences: { title: string; text: string; image: string; imageAlt: string }[];
  faqs: Faq[];
  /** Internal links to related pages: [label, path] */
  related: [string, string][];
}
