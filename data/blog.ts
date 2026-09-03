export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  gallery?: string[];
  content: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "jindal-udyog-at-auto-expo-2026-delhi",
    title: "Jindal Udyog at Auto Expo 2026, Delhi",
    category: "Events & Exhibitions",
    excerpt: "A look back at our stall in Delhi, our product showcase, and the conversations that shaped what's coming next.",
    date: "2026-06-18",
    readTime: "4 min read",
    image: "/images/blog/auto-expo-2026-delhi-cover.jpeg",
    gallery: [
      "/images/blog/auto-expo-2026-delhi-1.jpeg",
      "/images/blog/auto-expo-2026-delhi-2.jpeg",
      "/images/blog/auto-expo-2026-delhi-3.jpeg",
      "/images/blog/auto-expo-2026-delhi-4.jpeg",
      "/images/blog/auto-expo-2026-delhi-5.jpeg",
      "/images/blog/auto-expo-2026-delhi-6.jpeg",
    ],
    content: [
      "Our stall at this year's Delhi expo brought together dealers, distributors and OEM buyers from across the country, and a few first-time visitors from overseas as well.",
      "We used the platform to walk visitors through our full piston kit range in person — something that's harder to convey through a catalog alone.",
      "A recurring conversation at the stall was around lead time and consistency across bulk orders, which is exactly what our in-house, 20-step manufacturing process is built to solve.",
      "Thank you to everyone who stopped by our Delhi stall — more event photos in the gallery below.",
    ],
  },
  {
    slug: "jindal-udyog-at-bangalore-exhibition-2026",
    title: "Jindal Udyog at the Bangalore Exhibition",
    category: "Events & Exhibitions",
    excerpt: "Our stall in Bangalore, the buyers we met, and a look at what we showcased on the floor.",
    date: "2026-07-10",
    readTime: "3 min read",
    image: "/images/blog/bangalore-exhibition-2026-cover.jpeg",
    gallery: [
      "/images/blog/bangalore-exhibition-2026-1.jpeg",
      "/images/blog/bangalore-exhibition-2026-2.jpeg",
      "/images/blog/bangalore-exhibition-2026-3.jpeg",
      "/images/blog/bangalore-exhibition-2026-4.jpeg",
    ],
    content: [
      "This exhibition in Bangalore gave us a chance to meet dealers and distributors from South India, many of whom we'd only spoken to over phone and WhatsApp until now.",
      "The response to our piston kit range was strong, with several conversations turning into serious distributor inquiries by the end of the show.",
      "It was also a good opportunity to hear directly what buyers in this region look for — lead time and consistent sizing came up again and again.",
      "Photos from our stall are in the gallery below.",
    ],
  },
  {
    slug: "choosing-the-right-piston-kit-for-bs6-engines",
    title: "Choosing the Right Piston Kit for BS-6 Engines",
    category: "Buying Guides",
    excerpt: "A practical guide for dealers and workshops on matching piston kits to BS-6 emission-compliant engines.",
    date: "2026-05-12",
    readTime: "6 min read",
    image: "/images/blog/bs6-cover.jpeg",
    gallery: [
      "/images/blog/bs6-1.jpg",
      "/images/blog/bs6-2.jpg",
      "/images/blog/bs6-3.jpg",
      "/images/blog/bs6-4.jpg",
      "/images/blog/bs6-5.jpg",
    ],
    content: [
      "BS-6 engines run tighter tolerances and higher combustion temperatures than their BS-4 predecessors, which changes what dealers should look for in a replacement piston kit.",
      "Start with bore tolerance. A kit machined to ±0.005 mm keeps compression consistent and avoids premature ring wear, especially in high-mileage commuter engines.",
      "Coating matters as much as alloy. Graphite and hard-anodized skirts reduce friction during break-in and extend the interval before the next rebuild.",
      "Finally, always cross-check compatible ring-gap specifications against the cylinder bore you're pairing the kit with, not just the vehicle model.",
    ],
  },
  {
    slug: "our-first-export-shipment-nepal",
    title: "Our First Export Shipment: Nepal",
    category: "Export & Logistics",
    excerpt: "A milestone for us — our first international shipment, packed and dispatched to a partner in Nepal.",
    date: "2026-04-09",
    readTime: "3 min read",
    image: "/images/blog/export-nepal.jpeg",
    content: [
      "Every export journey starts with a first shipment, and ours went out to a partner in Nepal — our first country outside India.",
      "It pushed us to formalize our export-grade packaging and documentation process from day one, rather than figuring it out under pressure on a larger order later.",
      "It's a small milestone on paper, but an important one for us as we build out a proper export operation over the coming years.",
      "More export updates to come as we take on new countries and partners.",
    ],
  },
  {
    slug: "our-quality-standards-explained",
    title: "Our Quality Standards, Explained",
    category: "Quality",
    excerpt: "A closer look at what 'quality' actually means in our process — from raw material checks to final inspection.",
    date: "2026-04-28",
    readTime: "5 min read",
    image: "/images/blog/quality-standards-cover.jpeg",
    content: [
      "\"Quality\" gets used loosely in this industry, so we wanted to be specific about what it actually means inside our factory.",
      "It starts before casting even begins — every batch of raw alloy is verified for composition before it's cleared for production.",
      "Through machining, dimensions are checked continuously, not just at the end of the line, so drift gets caught early rather than after a full batch is complete.",
      "Every finished batch is documented — hardness, dimension and material results logged against a batch ID, which is how we back an ISO 9001:2015 certified process with actual records, not just a certificate on the wall.",
    ],
  },
  {
    slug: "expanding-our-product-range-cylinder-block-kits-valve-sets",
    title: "Expanding Our Product Range: Cylinder Block Kits & Valve Sets",
    category: "Product Updates",
    excerpt: "Over the last six months, we've added cylinder block kits and valve sets to our product range — here's why, and what it means for dealers.",
    date: "2026-03-22",
    readTime: "4 min read",
    image: "/images/blog/cylinder-block-kits-cover.jpeg",
    content: [
      "For the last six months, we've been manufacturing and supplying two new lines alongside our core piston range — cylinder block kits and valve sets — a natural extension of what we already do in-house.",
      "The same casting, machining and inspection process behind our pistons now applies to both these lines: block kits arrive honed and matched to piston specification, and valve sets are finished with induction-hardened seat faces for reliable sealing.",
      "For dealers, this means fewer suppliers to coordinate with when fulfilling a full-engine rebuild order — pistons, blocks and valves from one place.",
      "We're continuing to add model coverage across both ranges and will keep this post updated as it grows.",
    ],
  },
];

export function getPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export const BLOG_CATEGORIES = ["All Posts", ...Array.from(new Set(BLOG_POSTS.map((p) => p.category)))];