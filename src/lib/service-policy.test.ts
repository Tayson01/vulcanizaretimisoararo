import { describe, expect, test } from "vitest";
import { services, faqs, zones } from "./site-data";
import { posts } from "./blog-data";

describe("business service restrictions across all published data", () => {
  test("towing is absent from services, FAQs, zones and every article", () => {
    const publishedData = JSON.stringify({ services, faqs, zones, posts });
    expect(publishedData).not.toMatch(/\btract(?:are|ări|ari|ăm|am|ați|ati)\b|\bremorcare\b|\btowing\b/iu);
  });

  test("transport to a workshop is absent from content and linked services", () => {
    const publishedData = JSON.stringify({ services, faqs, zones, posts });
    expect(publishedData).not.toMatch(/transport-auto|transport.{0,80}(?:service|atelier)|(?:ducem|transportăm|transportam|preluăm|preluam).{0,80}(?:mașina|masina|vehicul)/iu);
    const offeredSlugs = new Set(services.map((service) => service.slug));
    for (const zone of zones) {
      for (const slug of zone.serviceSlugs) expect(offeredSlugs.has(slug)).toBe(true);
    }
    for (const post of posts) {
      for (const link of post.links.filter((item) => item.to.startsWith("/servicii/"))) {
        expect(offeredSlugs.has(link.to.slice("/servicii/".length))).toBe(true);
      }
    }
  });
});