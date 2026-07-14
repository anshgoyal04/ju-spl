export const SITE_URL = "https://splpiston.com";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Manufacturer",
    "@id": `${SITE_URL}/#organization`,
    name: "Jindal Udyog (SPL Piston)",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      "Jindal Udyog (SPL Piston) is a manufacturer, OEM supplier and exporter of motorcycle pistons, piston kits and engine components based in Agra, India.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "D-51, Foundry Nagar, Hathras Road",
      addressLocality: "Agra",
      addressRegion: "Uttar Pradesh",
      postalCode: "282006",
      addressCountry: "IN",
    },
    telephone: "+91-99270-88886",
    email: "jindaludyog@gmail.com",
    sameAs: [],
  };
}

export function productSchema(p: { name: string; summary: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.summary,
    url: `${SITE_URL}/products/${p.slug}`,
    brand: { "@type": "Brand", name: "SPL Piston" },
    manufacturer: { "@type": "Organization", name: "Jindal Udyog" },
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.question,
      acceptedAnswer: { "@type": "Answer", text: i.answer },
    })),
  };
}

export function blogSchema(p: { title: string; excerpt: string; date: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: p.title,
    description: p.excerpt,
    datePublished: p.date,
    url: `${SITE_URL}/blog/${p.slug}`,
    author: { "@type": "Organization", name: "Jindal Udyog" },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.url}`,
    })),
  };
}
