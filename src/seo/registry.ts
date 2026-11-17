import { Article, articlePath, Faq } from '../content/types';
import { BLOG_POSTS } from '../content/blog';
import { CASE_STUDIES } from '../content/caseStudies';
import { LOCATION_PAGES } from '../content/locations';
import { SERVICE_FAQS } from './faqs';
import { PAGE_META, PageMeta } from './pageMeta';

export const ALL_ARTICLES: Article[] = [...BLOG_POSTS, ...CASE_STUDIES, ...LOCATION_PAGES];

export const findArticle = (path: string) => ALL_ARTICLES.find(a => articlePath(a) === path);

export interface ResolvedMeta extends PageMeta {
  path: string;
  faqs?: Faq[];
  article?: Article;
}

export const NOT_FOUND_META: PageMeta = {
  title: 'Page Not Found | Alpha Ahead LLC',
  description: 'The page you are looking for does not exist. Browse Alpha Ahead services, case studies and blog.',
  type: 'notfound',
  noindex: true,
};

export function resolveMeta(rawPath: string): ResolvedMeta {
  const path = rawPath.length > 1 ? rawPath.replace(/\/+$/, '') : rawPath;
  const page = PAGE_META[path];
  if (page) return { ...page, path, faqs: SERVICE_FAQS[path] };

  const article = findArticle(path);
  if (article) {
    return {
      path,
      title: article.metaTitle,
      description: article.metaDescription,
      type: article.kind === 'location' ? 'location' : 'article',
      breadcrumb: article.title,
      image: article.image,
      faqs: article.faqs,
      article,
    };
  }
  return { ...NOT_FOUND_META, path };
}
