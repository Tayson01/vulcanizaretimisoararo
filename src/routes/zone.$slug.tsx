import { Link, createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { Clock, MapPin, Phone, Route as RouteIcon } from "lucide-react";

import { Btn, BtnLink, SectionLabel } from "@/components/site/ui";
import { ContactForm } from "@/components/site/ContactForm";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { ADDRESS, PHONE, TEL, WA, services, zones, zoneRedirects } from "@/lib/site-data";
import { posts } from "@/lib/blog-data";

const SITE = "https://vulcanizaretimisoara.ro";

export const Route = createFileRoute("/zone/$slug")({
  staticData: { sitemap: true },
  loader: ({ params }) => {
    const moved = zoneRedirects[params.slug];
    if (moved) throw redirect({ href: moved, statusCode: 301 });
    const zone = zones.find((z) => z.slug === params.slug);
    if (!zone) throw notFound();
    return { zone };
  },
  head: ({ loaderData }) => {
    const z = loaderData?.zone;
    if (!z) {
      return { meta: [{ title: "Zonă negăsită — Vulcanizare Non Stop Timișoara" }, { name: "robots", content: "noindex" }] };
    }
    const url = `${SITE}/zone/${z.slug}`;
    return {
      meta: [
        { title: z.metaTitle },
        { name: "description", content: z.metaDesc },
        { property: "og:title", content: z.metaTitle },
        { property: "og:description", content: z.metaDesc },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                name: z.h1,
                serviceType: "Vulcanizare mobilă",
                url,
                areaServed: [{ "@type": "Place", name: `${z.short}, județul Timiș`, geo: { "@type": "GeoCircle", geoMidpoint: { "@type": "GeoCoordinates", latitude: z.coords[0], longitude: z.coords[1] }, geoRadius: 5000 } }, ...z.localities.map((l) => ({ "@type": "Place", name: `${l}, județul Timiș` }))],
                availableChannel: { "@type": "ServiceChannel", servicePhone: { "@type": "ContactPoint", telephone: TEL, contactType: "urgențe 24/24" } },
                provider: {
                  "@type": "AutoRepair",
                  name: "Vulcanizare Non Stop Timișoara",
                  telephone: TEL,
                  url: `${SITE}/`,
                  address: { "@type": "PostalAddress", streetAddress: ADDRESS, addressLocality: "Timișoara", addressRegion: "Timiș", addressCountry: "RO" },
                },
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Acasă", item: `${SITE}/` },
                  { "@type": "ListItem", position: 2, name: "Zone acoperite", item: `${SITE}/zone` },
                  { "@type": "ListItem", position: 3, name: z.name, item: url },
                ],
              },
            ],
          }),
        },
      ],
    };
  },
  component: ZonePage,
});

function ZonePage() {
  const { zone } = Route.useLoaderData();
  const zoneServices = services.filter((s) => zone.serviceSlugs.includes(s.slug));
  const related = posts.filter((p) => zone.blogSlugs.includes(p.slug) || p.area === zone.slug);

  return (
    <main className="mx-auto max-w-5xl px-5 py-14">
      <nav aria-label="Navigare" className="text-xs text-muted-foreground">
        <Link to="/" className="hover:text-foreground">Acasă</Link> /{" "}
        <Link to="/zone" className="hover:text-foreground">Zone acoperite</Link> / <span className="text-foreground">{zone.name}</span>
      </nav>
      <div className="mt-6"><SectionLabel>Zonă deservită · {zone.km === 0 ? "sediul nostru" : `~${zone.km} km de atelier`}</SectionLabel></div>
      <h1 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">{zone.h1}</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">{zone.intro}</p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Btn href={`tel:${TEL}`} className="vm-callfx vm-callcta">
          <Phone className="size-4 shrink-0" /> <span className="tabular-nums">{PHONE}</span>
        </Btn>
        <Btn href={WA} variant="ghost" target="_blank" rel="noreferrer">
          <WhatsAppIcon className="size-4 shrink-0" /> WhatsApp
        </Btn>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-border bg-card p-5">
          <p className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground">
            <Clock className="size-4 text-brand" /> Sosire estimată
          </p>
          <p className="mt-1 text-lg font-bold">{zone.etaMinutes}</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-5">
          <p className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground">
            <MapPin className="size-4 text-brand" /> Program
          </p>
          <p className="mt-1 text-lg font-bold">Non-stop, 24/24</p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-5">
          <p className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground">
            <RouteIcon className="size-4 text-brand" /> Drumuri
          </p>
          <p className="mt-1 text-sm font-bold">{zone.roads.join(" · ")}</p>
        </div>
      </div>

      <article className="mt-12 max-w-3xl space-y-10">
        {zone.sections.map((s) => (
          <section key={s.h2}>
            <h2 className="text-xl font-bold sm:text-2xl">{s.h2}</h2>
            {s.p.map((t, i) => (
              <p key={i} className="mt-3 leading-relaxed text-muted-foreground">{t}</p>
            ))}
          </section>
        ))}
      </article>

      <section className="mt-12">
        <h2 className="text-xl font-bold">Localități din apropiere</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {zone.localities.map((l) => (
            <li key={l} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-muted-foreground">
              <MapPin className="size-3 shrink-0 text-brand" /> {l}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold">Servicii disponibile în {zone.name}</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {zoneServices.map((s) => (
            <Link key={s.slug} to="/servicii/$slug" params={{ slug: s.slug }} className="rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-card">
              <p className="font-bold">{s.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12 max-w-3xl">
        <h2 className="text-xl font-bold">Întrebări frecvente din {zone.name}</h2>
        <div className="mt-4 divide-y divide-border rounded-2xl border border-border bg-card">
          {zone.faqs.map((f) => (
            <details key={f.q} className="group p-5">
              <summary className="cursor-pointer list-none font-semibold">{f.q}</summary>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-bold">Sfaturi utile</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">
            {related.map((p) => (
              <li key={p.slug}>
                <Link to="/blog/$slug" params={{ slug: p.slug }} className="block h-full rounded-2xl border border-border bg-card p-4 text-sm font-semibold transition-colors hover:border-brand/30">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-bold">Cere intervenție în {zone.name}</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Sună sau trimite-ne locația pe WhatsApp. Prețul îl afli înainte să plecăm spre tine.
          </p>
        </div>
        <ContactForm defaultZone={zone.name} />
      </div>

      <h2 className="mt-14 text-xl font-bold">Alte zone acoperite</h2>
      <div className="mt-5 flex flex-wrap gap-2">
        {zones
          .filter((z) => z.slug !== zone.slug)
          .map((z) => (
            <BtnLink key={z.slug} to="/zone/$slug" params={{ slug: z.slug }} variant="ghost" className="px-4 py-2">
              Vulcanizare mobilă {z.name}
            </BtnLink>
          ))}
      </div>
    </main>
  );
}
