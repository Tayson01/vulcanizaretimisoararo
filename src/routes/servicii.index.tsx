import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Phone } from "lucide-react";

import { Btn, BtnLink, SectionLabel } from "@/components/site/ui";
import { ServiceIcon } from "@/components/site/ServiceIcon";
import { PHONE, TEL, WA, services } from "@/lib/site-data";

export const Route = createFileRoute("/servicii/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Servicii — Vulcanizare Non Stop Timișoara — listă completă" },
      {
        name: "description",
        content:
          "Toate serviciile Vulcanizare Non Stop Timișoara, deschisă 24/24 și cu intervenții mobile pe teren: asistență rutieră 24/24, reparație pană pe loc, montaj la domiciliu, echilibrare roți și vulcanizare camioane.",
      },
      { property: "og:title", content: "Servicii — Vulcanizare Non Stop Timișoara" },
      {
        property: "og:description",
        content: "Asistență rutieră, reparații pe loc, montaj la domiciliu, echilibrare roți și camioane.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://vulcanizaretimisoara.ro/servicii" }],
  }),
  component: ServiciiPage,
});

function ServiciiPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-14">
      <SectionLabel>Servicii</SectionLabel>
      <h1 className="mt-3 max-w-2xl text-3xl font-extrabold sm:text-4xl tracking-tight">
        Tot ce ai nevoie, într-un singur loc.
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        De la pene neașteptate pe drum până la întreținere programată — echipa noastră din Timișoara se
        ocupă de tot, 24/24.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.slug}
            className="group flex flex-col rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-card"
          >
            <span className="flex size-11 items-center justify-center rounded-2xl bg-brand-soft text-brand">
              <ServiceIcon name={s.icon} />
            </span>
            <h2 className="mt-5 text-lg font-bold">{s.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            <p className="mt-3 text-lg font-black tabular-nums text-brand">{s.price}</p>
            {s.priceNote ? <p className="text-xs text-muted-foreground">{s.priceNote}</p> : null}

            <BtnLink
              to="/servicii/$slug"
              params={{ slug: s.slug }}
              variant="ghost"
              className="mt-4 self-start px-4 py-2"
            >
              Află mai mult →
            </BtnLink>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Btn href={`tel:${TEL}`} className="vm-callfx vm-callcta">
          <Phone className="size-4" /> <span className="tabular-nums">{PHONE}</span>
        </Btn>
        <Btn href={WA} variant="ghost">
          <MessageCircle className="size-4" /> WhatsApp
        </Btn>
      </div>
    </main>
  );
}
