export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "choosing-the-right-piston-kit-for-bs6-engines",
    title: "Choosing the Right Piston Kit for BS-6 Engines",
    category: "Buying Guides",
    excerpt: "A practical guide for dealers and workshops on matching piston kits to BS-6 emission-compliant engines.",
    date: "2026-05-12",
    readTime: "6 min read",
    content: [
      "BS-6 engines run tighter tolerances and higher combustion temperatures than their BS-4 predecessors, which changes what dealers should look for in a replacement piston kit.",
      "Start with bore tolerance. A kit machined to ±0.005 mm keeps compression consistent and avoids premature ring wear, especially in high-mileage commuter engines.",
      "Coating matters as much as alloy. Graphite and hard-anodized skirts reduce friction during break-in and extend the interval before the next rebuild.",
      "Finally, always cross-check compatible ring-gap specifications against the cylinder bore you're pairing the kit with, not just the vehicle model.",
    ],
  },
  {
    slug: "how-oem-buyers-evaluate-piston-manufacturers",
    title: "How OEM Buyers Evaluate Piston Manufacturers",
    category: "OEM Insights",
    excerpt: "What sourcing teams actually check before qualifying a new piston supplier for bulk production runs.",
    date: "2026-04-28",
    readTime: "5 min read",
    content: [
      "OEM sourcing teams look well beyond unit price when qualifying a piston supplier — consistency across batches is usually the deciding factor.",
      "Expect requests for capability documentation: CNC line specifications, inspection protocols, and historical batch-rejection rates.",
      "Traceability is non-negotiable. Every batch should be tagged back to raw material lot, casting run and inspection record.",
      "Finally, capacity headroom matters — buyers want confidence a supplier can scale a pilot order into a recurring bulk contract without a quality dip.",
    ],
  },
  {
    slug: "export-packaging-standards-for-automotive-components",
    title: "Export Packaging Standards for Automotive Components",
    category: "Export & Logistics",
    excerpt: "Why packaging is a quality issue, not just a logistics one, when shipping precision engine parts overseas.",
    date: "2026-04-09",
    readTime: "4 min read",
    content: [
      "A precision-machined piston can fail before it's even installed if it's packed poorly for a multi-week sea freight journey.",
      "Moisture-proof barrier packaging prevents surface oxidation during transit through humid ports and long container dwell times.",
      "Cartons sized to the exact component footprint reduce in-transit movement, which is the leading cause of coating damage on export shipments.",
      "Full documentation — packing list, certificate of origin, and inspection report — should travel with every export container, not just the invoice.",
    ],
  },
  {
    slug: "cylinder-liner-wear-what-dealers-should-look-for",
    title: "Cylinder Liner Wear: What Dealers Should Look For",
    category: "Technical",
    excerpt: "A field guide to diagnosing liner wear before it turns into a warranty claim.",
    date: "2026-03-22",
    readTime: "5 min read",
    content: [
      "Cylinder liner wear is often misdiagnosed as a piston-ring issue, leading to unnecessary part replacement without solving the underlying problem.",
      "Bore glazing, visible as a mirror-smooth surface, reduces oil retention and is a strong indicator the liner needs replacement, not just the rings.",
      "Ovality beyond OEM tolerance — checked at three points along the bore — is the clearest sign a liner has reached end of service life.",
      "Replacing a worn liner alongside a fresh piston kit protects the new components from repeating the same wear pattern.",
    ],
  },
];

export function getPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
