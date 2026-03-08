import { useEffect } from "react";

interface MetaTagsOptions {
  title: string;
  description: string;
  ogImage?: string;
  ogType?: string;
}

export function useMetaTags({
  title,
  description,
  ogImage = "/assets/generated/hero-banner.dim_1200x600.jpg",
  ogType = "website",
}: MetaTagsOptions) {
  useEffect(() => {
    // Title
    document.title = title;

    const setMeta = (name: string, content: string, prop = false) => {
      const attr = prop ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);

    // OG tags
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:image", ogImage, true);
    setMeta("og:type", ogType, true);
    setMeta("og:site_name", "Tru End of Lease Cleaning Sydney", true);
    setMeta("og:locale", "en_AU", true);

    // Twitter
    setMeta("twitter:card", ogImage ? "summary_large_image" : "summary");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    if (ogImage) setMeta("twitter:image", ogImage);

    // Geo tags for local SEO
    setMeta("geo.region", "AU-NSW");
    setMeta("geo.placename", "Sydney");
    setMeta("geo.position", "-33.8688;151.2093");
    setMeta("ICBM", "-33.8688, 151.2093");
  }, [title, description, ogImage, ogType]);
}
