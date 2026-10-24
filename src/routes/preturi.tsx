import { createFileRoute } from "@tanstack/react-router";
import { PriceList } from "@/components/site/PriceList";

export const Route = createFileRoute("/preturi")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Listă de prețuri 2026 — Vulcanizare Non Stop Timișoara" },
      {
        name: "description",
        content:
          "Toate prețurile vulcanizării: montaj + echilibrare, schimb anvelope, reparații petec, ciupercă și șnur, valve și servicii suplimentare. Prețuri cu TVA inclus, facturi pentru persoane fizice și juridice.",
      },
      { property: "og:title", content: "Listă de prețuri 2026 — Vulcanizare Non Stop Timișoara" },
      {
        property: "og:description",
        content:
          "Toate prețurile vulcanizării: montaj, schimb anvelope, reparații și servicii suplimentare. TVA inclus, facturi pentru persoane fizice și juridice.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://vulcanizaretimisoara.ro/preturi" }],
  }),
  component: PreturiPage,
});

function PreturiPage() {
  return (
    <main>
      <PriceList />
    </main>
  );
}
