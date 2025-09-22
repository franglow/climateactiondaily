# 🌍 ClimateActionDaily

A clean, accessible, and fast Astro landing page for the book  
**“Climate Change: A Guide to Everyday Action”**

This project delivers a fully responsive, SEO-optimized, and accessibility-friendly static site built with Astro and Tailwind CSS. It’s designed to communicate practical climate solutions in a calm, inviting tone — aligned with the values of mindfulness, sustainability, and clear design.

---

## ✨ Features

- ⚡️ **Astro 5** – Static site generation with island architecture
- 🎨 **Tailwind CSS** – Utility-first CSS with a custom design system
- 📱 **Responsive** – Mobile-first design with optimized images
- 🌱 **Accessible** – Contrast-aware text, semantic HTML, skip links
- 🧠 **SEO-Ready** – Meta tags, Open Graph, Twitter cards, structured data
- 📚 **Modular Components** – Reusable sections like CTA panels, book cover card, and teachings list
- 🧹 **Prettier + Plugin Astro** – Consistent formatting across `.astro`, `.js`, etc.
- 📦 **Production-optimized** – PurgeCSS included via Tailwind’s `content` config
- 🔍 **Plausible Analytics** – Lightweight and privacy-friendly stats

---

## 🗂 Folder Structure

```
climateactiondaily/
├── public/               # Static assets (favicons, images, manifest, etc.)
│   └── images/           # Responsive .webp and .png images
├── src/
│   ├── components/       # Astro components (e.g., CoverCard, CtaPanel, TenTeachings)
│   ├── layouts/          # Base HTML layout (`BaseLayout.astro`)
│   ├── pages/            # Page routes (`index.astro`)
│   ├── styles/           # Tailwind config (`tailwind.css`)
│   ├── data/             # Book metadata, JSON-LD schema, etc.
├── .vscode/              # Editor settings (optional but useful)
├── .prettierrc           # Prettier config with plugin-astro
├── astro.config.mjs      # Astro project config
├── tailwind.config.cjs   # Tailwind theme extensions and safelist
├── postcss.config.cjs    # Tailwind + autoprefixer
├── package.json          # Project dependencies and scripts
├── site.webmanifest      # Web app manifest
└── robots.txt            # SEO crawl rules
```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open `http://localhost:4321` in your browser to view the site.

### 3. Build for production

```bash
npm run build
```

---

## 🧹 Formatting & Prettier

This project uses Prettier with `prettier-plugin-astro` for consistent formatting.

To format all files manually:

```bash
npx prettier --write .
```

Format runs automatically on save in VS Code if you have:

- Prettier extension installed
- `editor.formatOnSave` enabled
- `.vscode/settings.json` included

---

## 🌐 SEO and Structured Data

- Includes Open Graph and Twitter meta tags
- Uses dynamic JSON-LD for `Book` and `ItemList`
- Structured data is deferred for performance (via `SmartJsonLd.astro`)

---

## ♿ Accessibility

- Accessible color contrast with `prefers-contrast` media queries
- Semantic HTML with skip link
- Fully keyboard navigable
- Responsive typography with good vertical rhythm

---

## 🖼 Image Optimization

- Responsive `.webp` images for performance
- Fallback `.png` for compatibility
- `<Image>` from `astro:assets` used for auto-optimized delivery

---

## 📊 Analytics

This site uses [Plausible](https://plausible.io/) for lightweight, cookie-free analytics.

---

## 📘 About the Book

> “Climate Change: A Guide to Everyday Action” is a practical and spiritual call to reconnect with the Earth through daily choices.  
>  
> This site is a calm, intentional space designed to support that message.

---

## 📄 License

This project is © 2025 Fran Cortez. All rights reserved.  
Open to reuse with permission or under custom agreement.

---