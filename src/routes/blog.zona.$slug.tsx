import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";

import { Btn, SectionLabel } from "@/components/site/ui";
import { posts, postCategory } from "@/lib/blog-data";
import { zones } from "@/lib/zones-data";
import { PHONE, TEL } from "@/lib/site-data";

const SITE = "https://vulcanizaretimisoara.ro";
const fmt = (d: string) => new Date(d).toLocaleDateString("ro-RO", { day: "numeric", month: "long", year: "numeric" });

const postsFor = (slug: string) =>
  posts.filter((p) => p.area === slug || p.links.some((l) => l.to.endsWith(`/zone/${slug}`)));

export const Route = createFileRoute("/blog/zona/$slug")({
  staticData: { sitemap: true },
  loader: ({ params }) => {
    const zone = zones.find((z) => z.slug === params.slug);
    if (!zone) throw notFound();
    return { zone };
  },
  head: ({ loaderData }) => {
    const z = loaderData?.zone;
    if (!z) return { meta: [{ title: "Zonă negăsită — Blog vulcanizare" }, { name: "robots", content: "noindex" }] };
    const url = `${SITE}/blog/zona/${z.slug}`;
    const title = `Vulcanizare ${z.short}: ghiduri pentru pene și anvelope | Blog`;
    const desc = `Articole pentru șoferii din ${z.short} (${z.localities.slice(0, 4).join(", ")}): pene pe ${z.roads.slice(0, 2).join(" și ")}, reparații pe loc și vulcanizare mobilă non-stop.`;
    const list = postsFor(z.slug);
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
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
                "@type": "CollectionPage",
                "@id": url,
                name: title,
                description: desc,
                inLanguage: "ro-RO",
                about: { "@type": "Place", name: `${z.short}, județul Timiș, România`, geo: { "@type": "GeoCoordinates", latitude: z.coords[0], longitude: z.coords[1] } },
                mainEntity: { "@type": "ItemList", itemListElement: list.map((p, i) => ({ "@type": "ListItem", position: i + 1, url: `${SITE}/blog/${p.slug}`, name: p.title })) },
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Acasă", item: `${SITE}/` },
                  { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
                  { "@type": "ListItem", position: 3, name: z.short, item: url },
                ],
              },
            ],
          }),
        },
      ],
    };
  },
  component: ZoneBlog,
});

function ZoneBlog() {
  const { zone: z } = Route.useLoaderData();
  const list = postsFor(z.slug);
  const general = posts.filter((p) => !p.area && !list.includes(p)).slice(0, 3);
  const near = zones.filter((o) => o.slug !== z.slug).sort((a, b) => Math.abs(a.km - z.km) - Math.abs(b.km - z.km)).slice(0, 6);

  return (
    <main className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
      <nav aria-label="Navigare" className="text-xs text-muted-foreground">
        <Link to="/" className="hover:text-foreground">Acasă</Link> / <Link to="/blog" className="hover:text-foreground">Blog</Link> / <span className="text-foreground">{z.short}</span>
      </nav>

      <header className="mt-6 max-w-3xl">
        <SectionLabel>Blog local · {z.short}</SectionLabel>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Vulcanizare {z.short}: ghiduri pentru pene și anvelope</h1>
        <p className="mt-4 text-muted-foreground">{z.intro}</p>
        <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-muted-foreground">
          <span className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1.5"><MapPin className="size-3.5 text-brand" />{z.km ? `~${z.km} km de atelier` : "Atelier în oraș"}</span>
          <span className="rounded-full border border-border px-3 py-1.5">Sosire {z.etaMinutes}</span>
          <span className="rounded-full border border-border px-3 py-1.5">{list.length} {list.length === 1 ? "articol" : "articole"}</span>
        </div>
      </header>

      <section className="mt-10">
        <h2 className="text-xl font-extrabold">Articole pentru {z.short}</h2>
        {list.length === 0 ? (
          <p className="mt-4 text-sm text-muted-foreground">Încă nu avem un articol dedicat. Vezi pagina zonei sau sună-ne.</p>
        ) : (
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => (
              <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group flex flex-col rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-brand/30 hover:shadow-card">
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand">{postCategory(p)}</span>
                <h3 className="mt-3 font-bold leading-snug">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.desc}</p>
                <time dateTime={p.date} className="mt-4 text-xs text-muted-foreground">{fmt(p.date)}</time>
              </Link>
            ))}
          </div>
        )}
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-border bg-card p-6">
          <h2 className="font-extrabold">Drumuri unde intervenim des</h2>
          <ul className="mt-3 flex flex-wrap gap-2 text-sm">{z.roads.map((r) => <li key={r} className="rounded-full border border-border px-3 py-1">{r}</li>)}</ul>
          <h2 className="mt-6 font-extrabold">Localități acoperite</h2>
          <ul className="mt-3 flex flex-wrap gap-2 text-sm">{z.localities.map((l) => <li key={l} className="rounded-full border border-border px-3 py-1">{l}</li>)}</ul>
          <Link to="/zone/$slug" params={{ slug: z.slug }} className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-brand">Pagina Vulcanizare {z.short} <ArrowUpRight className="size-4" /></Link>
        </div>
        <div className="rounded-3xl border border-border bg-card p-6">
          <h2 className="font-extrabold">Întrebări frecvente în {z.short}</h2>
          <dl className="mt-3 space-y-4 text-sm">
            {z.faqs.slice(0, 3).map((f) => (
              <div key={f.q}><dt className="font-bold">{f.q}</dt><dd className="mt-1 text-muted-foreground">{f.a}</dd></div>
            ))}
          </dl>
        </div>
      </section>

      {general.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-extrabold">Sfaturi utile oriunde în Timiș</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-3">
            {general.map((p) => <li key={p.slug}><Link to="/blog/$slug" params={{ slug: p.slug }} className="block rounded-2xl border border-border bg-card px-4 py-3 text-sm font-semibold hover:border-brand/40">{p.title}</Link></li>)}
          </ul>
        </section>
      )}

      <section className="mt-12">
        <h2 className="text-xl font-extrabold">Ghiduri din zonele vecine</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {near.map((o) => (
            <Link key={o.slug} to="/blog/zona/$slug" params={{ slug: o.slug }} className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-bold text-muted-foreground hover:text-foreground"><MapPin className="size-3" />{o.short}</Link>
          ))}
        </div>
      </section>

      <div className="mt-14 flex flex-col items-start justify-between gap-4 rounded-3xl border border-border bg-card p-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-bold">Ai pană acum în {z.short}?</p>
          <p className="text-sm text-muted-foreground">Venim non-stop, cu prețul spus la telefon.</p>
        </div>
        <Btn href={`tel:${TEL}`}><Phone className="size-4" /> <span className="tabular-nums">{PHONE}</span></Btn>
      </div>
    </main>
  );
}
