import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://maxezaki.com",
      lastModified: new Date(),
    },
    {
      url: "https://maxezaki.com/interview",
      lastModified: new Date(),
    },
  ];
}
