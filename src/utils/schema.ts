// src/utils/schema.ts

const SITE_URL = 'https://climateactiondaily.com';
const SITE_NAME = 'Climate Action Daily';

export function getPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#author`,
    name: 'Fran C. Wood',
    url: SITE_URL,
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
