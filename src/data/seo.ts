import { book } from "./site";
import { teachings_en } from "./teachings";

const siteUrl = "https://climateactiondaily.com";

export const jsonLd = {
  itemList: {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "10 Things This Book Will Teach You",
    itemListOrder: "http://schema.org/ItemListOrderAscending",
    numberOfItems: teachings_en.length,
    itemListElement: teachings_en.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.title,
    })),
  },
  book: {
    "@context": "https://schema.org",
    "@type": "Book",
    name: book.title,
    alternateName: book.subtitle,
    description: book.longDesc.join(" "),
    image: [`${siteUrl}${book.coverUrl}`, `${siteUrl}${book.ogImage}`],
    author: { "@type": "Person", name: "Fran C. Wood" },
    publisher: { "@type": "Organization", name: "Climate Action Daily" },
    url: siteUrl,
  },
};