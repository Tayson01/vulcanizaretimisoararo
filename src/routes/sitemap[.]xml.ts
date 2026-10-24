import { createFileRoute } from "@tanstack/react-router";
import { getRouterInstance } from "@tanstack/react-start";
import { services, zones } from "@/lib/site-data";
import { posts } from "@/lib/blog-data";
import { isSitemapRouteIncluded, sitemapPathForLocation, sitemapStaticPaths, sitemapXML, type SitemapEntry } from "@/lib/sitemap";

const BASE_URL = "https://vulcanizaretimisoara.ro";

export const Route = createFileRoute("/sitemap.xml")({
  staticData: { sitemap: false },
  server: {
    handlers: {
      GET: async () => {
        if (!BASE_URL) {
          return new Response("Sitemap domain not configured", {
            status: 503,
            headers: { "Cache-Control": "no-store" },
          });
        }
        const router = await getRouterInstance();
        const entries: SitemapEntry[] = sitemapStaticPaths(router).map((path) => ({ path }));
        for (const [routeId, to, list] of [["/servicii/$slug", "/servicii/$slug", services], ["/zone/$slug", "/zone/$slug", zones], ["/blog/$slug", "/blog/$slug", posts], ["/blog/zona/$slug", "/blog/zona/$slug", zones]] as const) {
          if (!isSitemapRouteIncluded(router.routesById[routeId])) continue;
          for (const item of list) {
            const location = router.buildLocation({ to, params: { slug: item.slug }, search: () => ({}), hash: "" } as never);
            const path = sitemapPathForLocation(router, location, routeId);
            if (path) entries.push({ path, ...("date" in item ? { lastmod: item.date } : {}) });
          }
        }
        if (entries.length === 0) {
          return new Response(
            'No pages are included in this sitemap. Check route decisions and ancestor exclusions. Setting "exclude-subtree" on the root excludes the entire site.',
            { status: 404, headers: { "Cache-Control": "no-store" } },
          );
        }
        return new Response(sitemapXML(BASE_URL, entries), {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
