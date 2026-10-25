import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, Clock, Phone, Receipt, Tag } from "lucide-react";


import { Btn, BtnLink, SectionLabel } from "@/components/site/ui";
import { ServiceIcon } from "@/components/site/ServiceIcon";
import { PHONE, TEL, WA, services, zones } from "@/lib/site-data";
import dubaInterventie from "@/assets/duba-interventie.jpg";

/** Poze reale afișate pe pagina serviciului care descrie locația fixă. */
const serviceImages: Record<string, { src: string; alt: string; caption: string }> = {
  "vulcanizare-atelier-non-stop": {
    src: dubaInterventie,
    alt: "Duba de intervenție Vulcanizare Auto Non Stop parcată în fața atelierului de pe Str. Cloșca 33",
    caption: "Atelierul și duba de intervenție — Str. Cloșca 33, Timișoara",
  },
};


export const Route = createFileRoute("/servicii/$slug")({
  staticData: { sitemap: true },
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    const title = s ? `${s.title} în Timișoara — Vulcanizare Non Stop Timișoara` : "Serviciu — Vulcanizare Non Stop Timișoara";
    const description = s
      ? `${s.desc} ${s.price}, durată ${s.duration}. Sună la ${PHONE}.`
      : "Vulcanizare non-stop în Timișoara și intervenții mobile tot județul Timiș și pe A1 (Nădlac – Margina).";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `https://vulcanizaretimisoara.ro/servicii/${s?.slug ?? ""}` }],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const serviceImage = serviceImages[service.slug];


  return (
    <main className="mx-auto max-w-5xl px-5 py-14">
      <SectionLabel>Serviciu</SectionLabel>
      <div className="mt-4 flex items-start gap-4">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-brand-soft text-brand">
          <ServiceIcon name={service.icon} className="size-6" />
        </span>
        <div>
          <h1 className="text-3xl font-extrabold sm:text-4xl tracking-tight">{service.title}</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">{service.intro}</p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-5">
          <p className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground">
            <Tag className="size-4 text-brand" /> Tarif
          </p>
          <p className="mt-1 text-2xl font-black tabular-nums text-brand">{service.price}</p>
          {service.priceNote ? <p className="mt-1 text-xs text-muted-foreground">{service.priceNote}</p> : null}

        </div>
        <div className="rounded-2xl border border-border bg-card p-5">
          <p className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground">
            <Clock className="size-4 text-brand" /> Durată intervenție
          </p>
          <p className="mt-1 text-lg font-bold">{service.duration}</p>
        </div>
      </div>

      {service.pricing ? (
        <div className="mt-4 rounded-2xl border border-border bg-card p-5">
          <p className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground">
            <Receipt className="size-4 text-brand" /> Ce plătești
          </p>
          <ul className="mt-3 divide-y divide-border">
            {service.pricing.map((p) => (
              <li key={p.label} className="flex items-center justify-between gap-4 py-2.5 text-sm">
                <span className="font-semibold text-foreground">
                  {p.label}
                  {p.note ? <span className="ml-1 text-xs font-normal text-muted-foreground">· {p.note}</span> : null}
                </span>
                <span className="whitespace-nowrap font-black tabular-nums text-brand">{p.value}</span>
              </li>
            ))}
          </ul>
          <Link
            to="/preturi"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand hover:underline"
          >
            Vezi lista completă de prețuri <ArrowRight className="size-4" />
          </Link>
        </div>
      ) : null}


      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-bold">Ce include</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {service.bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <Check className="mt-0.5 size-4 shrink-0 text-brand" /> {b}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold">Cum funcționează</h2>
          <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
            {service.steps.map((s, i) => (
              <li key={s} className="flex gap-3">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-soft text-xs font-bold text-brand">
                  {i + 1}
                </span>
                {s}
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-brand p-7 text-brand-foreground">
        <div>
          <p className="text-lg font-bold">Ai nevoie acum de {service.title.toLowerCase()}?</p>
          <p className="text-sm opacity-90">Suntem deschiși 24/24 în Timișoara și venim la tine tot județul Timiș și pe A1 (Nădlac – Margina).</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={`tel:${TEL}`}
            className="vm-callfx vm-callcta inline-flex items-center gap-2 whitespace-nowrap rounded-xl bg-card px-5 py-3 text-sm font-bold text-foreground"
          >
            <Phone className="size-4 shrink-0" /> <span className="tabular-nums">{PHONE}</span>
          </a>
          <Btn href={WA} variant="ghost">
            WhatsApp
          </Btn>
        </div>
      </div>

      <h2 className="mt-14 text-xl font-bold">Alte servicii</h2>
      <div className="mt-5 grid gap-5 sm:grid-cols-3">
        {others.map((s) => (
          <div key={s.slug} className="rounded-3xl border border-border bg-card p-5">
            <p className="font-bold">{s.title}</p>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            <BtnLink
              to="/servicii/$slug"
              params={{ slug: s.slug }}
              variant="ghost"
              className="mt-4 px-4 py-2"
            >
              Află mai mult →
            </BtnLink>
          </div>
        ))}
      </div>

      <h2 className="mt-14 text-xl font-bold">Zone în care intervenim</h2>
      <div className="mt-5 flex flex-wrap gap-2">
        {zones.map((z) => (
          <BtnLink
            key={z.slug}
            to="/zone/$slug"
            params={{ slug: z.slug }}
            variant="ghost"
            className="px-4 py-2"
          >
            {z.name}
          </BtnLink>
        ))}
      </div>
    </main>
  );
}
