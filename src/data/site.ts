export const book = {
  title: "Climate Change: A Guide to Everyday Action",
  subtitle: "Practical Steps for Sustainable Living",
  description:
    "A practical guide to sustainable living and personal growth.",
  coverUrl: "/images/climate-change.png",
  ogImage: "/og.jpg",
  longDesc: [
    "What if your personal well-being and the planet's health were intertwined?",
    "This guide invites us to see ourselves not as visitors, but as parts of the Earth itself. When we shift our perspective to one of interconnection, even the smallest actions take on profound meaning.",
    "By blending practical steps with mindful awareness, this guide weaves environmental care with personal growth and offers a clear and achievable path toward habits rooted in gratitude, clarity, and purpose.",
    "Change begins with acknowledging who we are.",
    "We are Earth.",
  ],
};

// Responsive cover art. Shared by CoverCard and by the LCP preload in
// BaseLayout — they must stay identical or the preload is a wasted download.
export const coverSizes = "(min-width: 768px) 340px, 80vw";

export const coverWebpSrcset = [
  "/images/climate-change-320.webp 320w",
  "/images/climate-change-420.webp 420w",
  "/images/climate-change-768.webp 768w",
  "/images/climate-change-1024.webp 1024w",
].join(", ");

export const retailers = [
  { name: "Amazon", url: "https://a.co/d/01kqegHR" },
];

export const contact = {
  author: "Fran C. Wood",
  email: "info@climateactiondaily.com",
};

export const heroHeadline =
  "Climate Change: A Guide to Everyday Action. Practical Steps for Sustainable Living";

export const heroSub =
  "This transformative guide helps you take meaningful climate action in your daily life — through conscious habits, emotional clarity, spiritual alignment, and sustainable routines designed to reconnect you with the Earth.";