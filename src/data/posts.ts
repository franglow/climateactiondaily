// src/data/posts.ts
//
// Blog metadata. The section is called "Groundwork" but lives at /blog/ so the
// URL stays conventional for search and for people typing it by hand.

export interface Post {
  /** URL segment under /blog/ */
  slug: string;
  title: string;
  subtitle: string;
  /** <meta name="description"> — kept under ~155 characters */
  description: string;
  /** Shown on the listing card */
  excerpt: string;
  /** ISO 8601, used for datetime attributes and structured data */
  date: string;
  /** Human label, used in visible text */
  dateLabel: string;
  readingMinutes: number;
  tags: string[];
  /** Present when the piece was written in another language first */
  originalLanguage?: string;
}

export const blog = {
  name: 'Groundwork',
  tagline: 'Essays on what actually moves',
  description:
    'Essays on climate action, behaviour and the gap between what we demand and how we live — from the author of Climate Change: A Guide to Everyday Action.',
};

export const posts: Post[] = [
  {
    slug: 'fifteen-thousand-people-five-hours',
    title: 'Fifteen Thousand People, Five Hours',
    subtitle: "On protest, example, and a conclusion I don't entirely like",
    description:
      'Is it better to march for five hours or to live differently for years? The evidence answers — and then complicates the question.',
    excerpt:
      'Seventy-five thousand hours of human life in a square on a Saturday afternoon. What if those same people spent that energy living differently instead? The research answers the question, then dismantles it — and what survives is a more uncomfortable accusation than hypocrisy.',
    date: '2026-08-12',
    dateLabel: '12 August 2026',
    readingMinutes: 13,
    tags: ['Climate action', 'Behaviour', 'Activism'],
    originalLanguage: 'Spanish',
  },
];

/** Newest first. */
export const postsByDate = [...posts].sort((a, b) => b.date.localeCompare(a.date));
