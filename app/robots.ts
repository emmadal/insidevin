import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/login", "/reports", "/reports/[id]"],
    },
    sitemap: "https://insidevin.com/sitemap.xml",
  };
}
