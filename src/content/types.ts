export interface Faq {
  q: string;
  a: string;
}

export interface ContentSection {
  heading: string;
  /** Paragraphs support inline links written as [text](/path) */
  paragraphs?: string[];
  bullets?: string[];
}

export type ArticleKind = 'blog' | 'case-study' | 'location' | 'landing';

export interface Article {
  slug: string;
  kind: ArticleKind;
  /** Visible H1 */
  title: string;
  /** <title> tag, max ~60 chars */
  metaTitle: string;
  /** meta description, max ~155 chars */
  metaDescription: string;
  /** Short summary for cards / listings */
  excerpt: string;
  primaryKeyword: string;
  datePublished: string; // YYYY-MM-DD
  dateModified?: string;
  image: string; // path under /public
  imageAlt: string;
  readMinutes?: number;
  intro: string[];
  sections: ContentSection[];
  faqs?: Faq[];
  /** Internal paths of related service pages */
  relatedServices: string[];
  /** Case studies only */
  client?: string;
  industry?: string;
  website?: string;
  /** Landing pages: optional comparison table */
  table?: { caption: string; columns: string[]; rows: string[][] };
  /** Location pages only */
  officeId?: 'us' | 'uae' | 'pk';
  areaServed?: string;
}

export const articlePath = (a: Pick<Article, 'kind' | 'slug'>) =>
  a.kind === 'blog' ? `/blog/${a.slug}` : a.kind === 'case-study' ? `/case-studies/${a.slug}` : `/${a.slug}`; // location + landing live at the root
