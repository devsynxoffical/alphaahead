import { Article } from './types';
import { BLOG_PART_1 } from './blogPart1';
import { BLOG_PART_2 } from './blogPart2';

export const BLOG_POSTS: Article[] = [...BLOG_PART_1, ...BLOG_PART_2].sort((a, b) =>
  b.datePublished.localeCompare(a.datePublished)
);
