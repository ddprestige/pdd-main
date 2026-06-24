import type { MetadataRoute } from "next";
import { allAreaSlugs } from "./lib/areaData";

const BASE_URL = "https://www.prestigedreamdecor.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString();

  // ── Static pages ────────────────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/custom-sofas`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/l-shape-sofas`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/sofa-cum-beds`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/3-seater-sofas`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/dining-tables`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/recliners`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/beds`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/sofa-offer`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  // ── Dynamic area pages ───────────────────────────────────────────────────
  const areaPages: MetadataRoute.Sitemap = allAreaSlugs.map((slug) => ({
    url: `${BASE_URL}/custom-sofa/${slug}`,
    lastModified: today,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticPages, ...areaPages];
}