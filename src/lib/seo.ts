// Domaine canonique du site. Le www est la version servie en 200 ;
// l'apex (joinmedicis.com) redirige vers celle-ci côté Vercel.
export const SITE_URL = "https://www.joinmedicis.com";
export const SITE_NAME = "Join Médicis";
export const SITE_DESCRIPTION =
  "La première bibliothèque IA gratuite et open-source pour les marketeurs francophones. Skills Claude, serveurs MCP, agents IA, guides et workflows.";
// JPG 1200×630 : LinkedIn (canal principal) ne supporte pas le WebP en og:image.
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const SOCIAL_LINKS = [
  "https://www.linkedin.com/in/aleksander-siebert/",
  "https://github.com/Aleksander-Siebert/join-medicis",
  "https://www.linkedin.com/newsletters/growth-with-claude%F0%9F%90%99-7443262733011189760/",
];

/** Resolve a relative path against the production origin. */
export function absoluteUrl(path = "/"): string {
  return new URL(path, SITE_URL).toString();
}

/* ------------------------------------------------------------------ */
/* Site-wide JSON-LD                                                   */
/* ------------------------------------------------------------------ */
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: SITE_NAME,
  alternateName: "JoinMédicis",
  url: SITE_URL,
  logo: OG_IMAGE,
  image: OG_IMAGE,
  description: SITE_DESCRIPTION,
  email: "aleksiebert@gmail.com",
  founder: {
    "@type": "Person",
    name: "Aleksander Siebert",
    url: "https://www.linkedin.com/in/aleksander-siebert/",
  },
  sameAs: SOCIAL_LINKS,
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  inLanguage: "fr-FR",
  publisher: { "@id": ORGANIZATION_ID },
};

/** Build a BreadcrumbList schema from { name, path } pairs. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
