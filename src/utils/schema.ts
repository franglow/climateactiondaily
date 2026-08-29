// src/utils/schema.ts

import { contact } from '../data/site';

const SITE_URL = 'https://climateactiondaily.com';
const SITE_NAME = 'Climate Action Daily';

export function getPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#author`,
    name: 'Fran C. Wood',
    url: SITE_URL,
    email: `mailto:${contact.email}`,
    jobTitle: 'Author',
    knowsAbout: ['Climate Change', 'Sustainable Living', 'Personal Growth'],
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: { '@id': `${SITE_URL}/#author` },
    inLanguage: 'en',
  };
}

export function getBookSchema(params: {
  title: string;
  subtitle: string;
  description: string;
  coverUrl: string;
  ogImage: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Book',
    '@id': `${SITE_URL}/#book`,
    name: params.title,
    alternateName: params.subtitle,
    description: params.description,
    image: [`${SITE_URL}${params.coverUrl}`, `${SITE_URL}${params.ogImage}`],
    author: { '@id': `${SITE_URL}/#author` },
    publisher: { '@type': 'Organization', name: SITE_NAME },
    url: SITE_URL,
  };
}

export function getBlogSchema(params: { name: string; description: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${SITE_URL}/blog/#blog`,
    name: params.name,
    description: params.description,
    url: `${SITE_URL}/blog/`,
    inLanguage: 'en',
    author: { '@id': `${SITE_URL}/#author` },
    publisher: { '@id': `${SITE_URL}/#author` },
    isPartOf: { '@id': `${SITE_URL}/#website` },
  };
}

export function getBlogPostingSchema(params: {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  ogImage: string;
  wordCount?: number;
  keywords?: string[];
}) {
  const url = `${SITE_URL}/blog/${params.slug}/`;
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: params.title,
    description: params.description,
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    datePublished: params.datePublished,
    dateModified: params.dateModified ?? params.datePublished,
    image: [`${SITE_URL}${params.ogImage}`],
    author: { '@id': `${SITE_URL}/#author` },
    publisher: { '@id': `${SITE_URL}/#author` },
    isPartOf: { '@id': `${SITE_URL}/blog/#blog` },
    inLanguage: 'en',
    ...(params.wordCount ? { wordCount: params.wordCount } : {}),
    ...(params.keywords?.length ? { keywords: params.keywords.join(', ') } : {}),
  };
}

export function getBreadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path}`,
    })),
  };
}

export function getItemListSchema(listName: string, items: { title: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: listName,
    itemListOrder: 'http://schema.org/ItemListOrderAscending',
    numberOfItems: items.length,
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.title,
    })),
  };
}
