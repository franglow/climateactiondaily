---
layout: ../layouts/BaseLayout.astro
setup: |
  import BuyButtons from "../components/BuyButtons.astro";
  const BOOK_TITLE = 'Book Title Placeholder';
  const BOOK_SUBTITLE = 'Subtitle Placeholder';
  const SHORT_DESC = 'Short description placeholder (2–3 sentences) about the book and its value.';
  const LONG_DESC = `Long description placeholder. Use this area as back-cover text. You can write several paragraphs in Markdown, add **bold** highlights, lists, and links.`;
  const COVER_URL = 'http://localhost:4321/images/cover.png';
  const RETAILERS = [
    { name: 'Amazon', url: '#' },
    { name: 'Bookshop', url: '#' }
  ];
  const PRESS_EMAIL = 'press@example.com';
  Astro.props.title = `${BOOK_TITLE} — ${BOOK_SUBTITLE}`;
  Astro.props.description = SHORT_DESC;
  Astro.props.ogImage = '/og-default.jpg';
---

<section class="py-12 grid md:grid-cols-2 gap-10 items-start">

## {BOOK_TITLE}

**{BOOK_SUBTITLE}**

{SHORT_DESC}

<BuyButtons retailers={RETAILERS} />

<div class="mt-10">
<div class="flex gap-6 border-b border-stone-300">
  <span class="-mb-px border-b-2 border-stone-900 pb-3">Description</span>
  <span class="text-stone-600 pb-3">Praise</span>
</div>

<div class="prose prose-stone max-w-none mt-6">
{LONG_DESC}
</div>

</div>

</section>

<section>
<figure class="w-full max-w-sm mx-auto overflow-hidden rounded-2xl shadow-xl ring-1 ring-stone-300">
  <img src={COVER_URL} alt="Portada del libro" class="custom-image w-full h-auto" loading="eager" width="768" height="1024" />
</figure>

<div class="mt-6 flex justify-center">
  <a href="#" class="px-5 py-3 rounded-xl bg-stone-900 text-white hover:opacity-90">Comprar</a>
</div>
</section>
